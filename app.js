/* ============================================================
   ALCPT Premium Review — App Logic
   يعتمد على المتغيّر CONVERSATIONS المُعرَّف في data.js
   ============================================================ */

(function () {
  'use strict';

  // ----- الحالة العامة -----
  const defaultSettings = { voiceURI: '', rate: 0.95 };
  const savedSettings = JSON.parse(localStorage.getItem('alcpt_settings') || 'null') || {};

  const state = {
    conversations: Array.isArray(window.CONVERSATIONS) ? window.CONVERSATIONS : [],
    completed: new Set(JSON.parse(localStorage.getItem('alcpt_completed') || '[]')),
    currentConv: null,
    currentLineIndex: 0,
    isPlaying: false,
    isPaused: false,
    autoPlay: true,
    settings: Object.assign({}, defaultSettings, savedSettings),
    mode: 'normal', // normal | blind | dictation
    voices: [],
  };

  // ----- عناصر الصفحة -----
  const listView = document.getElementById('listView');
  const dialogueView = document.getElementById('dialogueView');
  const searchBox = document.getElementById('searchBox');
  const progressText = document.getElementById('progressText');
  const progressFill = document.getElementById('progressFill');
  const backBtn = document.getElementById('backBtn');
  const dialogueTitle = document.getElementById('dialogueTitle');
  const dialogueSubtitle = document.getElementById('dialogueSubtitle');
  const dialogueContent = document.getElementById('dialogueContent');
  const controlBar = document.getElementById('controlBar');
  const statusText = document.getElementById('statusText');
  const playBtn = document.getElementById('playBtn');
  const stopBtn = document.getElementById('stopBtn');
  const nextBtn = document.getElementById('nextBtn');
  const repeatBtn = document.getElementById('repeatBtn');
  const autoPlayToggle = document.getElementById('autoPlayToggle');
  const modeChips = document.querySelectorAll('.mode-chip');

  const questionsSection = document.getElementById('questionsSection');
  const questionsList = document.getElementById('questionsList');
  const vocabSection = document.getElementById('vocabSection');
  const vocabList = document.getElementById('vocabList');
  const grammarSection = document.getElementById('grammarSection');
  const grammarContent = document.getElementById('grammarContent');
  const clozeToggleBtn = document.getElementById('clozeToggleBtn');
  const clozeContainer = document.getElementById('clozeContainer');

  const settingsBtn = document.getElementById('settingsBtn');
  const settingsModal = document.getElementById('settingsModal');
  const closeSettingsBtn = document.getElementById('closeSettingsBtn');
  const voiceSelect = document.getElementById('voiceSelect');
  const rateSlider = document.getElementById('rateSlider');
  const rateValue = document.getElementById('rateValue');
  const testVoiceBtn = document.getElementById('testVoiceBtn');

  // ----- تخزين التقدّم -----
  function saveProgress() {
    localStorage.setItem('alcpt_completed', JSON.stringify([...state.completed]));
  }

  function saveSettings() {
    localStorage.setItem('alcpt_settings', JSON.stringify(state.settings));
  }

  function updateProgressBar() {
    const total = state.conversations.length || 1;
    const done = state.completed.size;
    progressText.textContent = `${done} / ${total}`;
    progressFill.style.width = `${(done / total) * 100}%`;
  }

  // ----- عرض قائمة المحادثات -----
  function renderList(filter = '') {
    const term = filter.trim().toLowerCase();
    const items = state.conversations.filter((c) => {
      if (!term) return true;
      const inTitle = c.title.toLowerCase().includes(term);
      const inDialogue = c.dialogue.some(
        (d) =>
          d.text.toLowerCase().includes(term) ||
          (d.translation || '').includes(term)
      );
      return inTitle || inDialogue;
    });

    if (items.length === 0) {
      listView.innerHTML = `
        <div class="empty-state">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <p>لا توجد نتائج مطابقة للبحث</p>
        </div>`;
      return;
    }

    listView.innerHTML = items
      .map((c) => {
        const preview = c.dialogue[0] ? c.dialogue[0].text : '';
        const isDone = state.completed.has(c.id);
        return `
          <div class="conv-card ${isDone ? 'completed' : ''}" data-id="${c.id}">
            <span class="conv-number">محادثة ${c.id}${isDone ? ' ✓' : ''}</span>
            <div class="conv-title">${escapeHtml(c.title)}</div>
            <div class="conv-preview">${escapeHtml(preview)}</div>
          </div>`;
      })
      .join('');

    listView.querySelectorAll('.conv-card').forEach((card) => {
      card.addEventListener('click', () => {
        const id = Number(card.dataset.id);
        openConversation(id);
      });
    });
  }

  function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str || '';
    return div.innerHTML;
  }

  // ----- تسوية النص للمقارنة (Dictation) -----
  function normalizeWords(str) {
    return (str || '')
      .toLowerCase()
      .replace(/[.,!?;:"'’“”()]/g, '')
      .trim()
      .split(/\s+/)
      .filter(Boolean);
  }

  function buildLineHTML(line, idx) {
    const speakerClass = idx % 2 === 0 ? 'speaker-a' : 'speaker-b';

    // منطقة النص حسب الوضع الحالي
    let textAreaHTML = '';
    if (state.mode === 'dictation') {
      textAreaHTML = `
        <div class="dictation-box" data-idx="${idx}">
          <input type="text" class="dictation-input" placeholder="اكتب اللي سمعته هنا..." autocomplete="off" autocapitalize="off" spellcheck="false">
          <div class="dictation-actions">
            <button class="dictation-check-btn" data-action="check-dictation" data-idx="${idx}">✓ تحقق</button>
            <button class="repeat-line-btn" data-action="repeat-this" data-idx="${idx}">🔁 اسمع تاني</button>
          </div>
          <div class="dictation-result" id="dict-result-${idx}"></div>
        </div>`;
    } else if (state.mode === 'blind') {
      textAreaHTML = `
        <div class="hideable is-hidden" data-idx="${idx}">
          <div class="hideable-content utterance-text">${escapeHtml(line.text)}</div>
          <button class="reveal-btn" data-action="reveal-text" data-idx="${idx}">👁 اظهر النص</button>
        </div>`;
    } else {
      textAreaHTML = `<div class="utterance-text">${escapeHtml(line.text)}</div>`;
    }

    const translationHTML = `
      <div class="translation-row hideable is-hidden" data-idx="${idx}">
        <button class="reveal-btn" data-action="reveal-translation" data-idx="${idx}">🌐 اظهر الترجمة</button>
        <div class="hideable-content utterance-translation">${escapeHtml(line.translation || '')}</div>
      </div>`;

    return `
      <div class="utterance" id="line-${idx}">
        <span class="speaker-label ${speakerClass}">${escapeHtml(line.speaker)}</span>
        ${textAreaHTML}
        ${translationHTML}
      </div>`;
  }

  // ----- فتح محادثة -----
  function openConversation(id) {
    const conv = state.conversations.find((c) => c.id === id);
    if (!conv) return;

    stopSpeaking();
    state.currentConv = conv;
    state.currentLineIndex = 0;

    dialogueTitle.textContent = `${conv.id}. ${conv.title}`;
    dialogueSubtitle.textContent = 'استمع وتابع النص';

    renderDialogueLines();

    // الأسئلة
    if (conv.questions && conv.questions.length) {
      questionsSection.style.display = '';
      questionsList.innerHTML = conv.questions
        .map(
          (q, qi) => `
          <div class="question-item">
            <div class="question-text">${escapeHtml(q.question)}</div>
            <div class="options">
              ${(q.options || [])
                .map(
                  (opt) =>
                    `<div class="option ${opt === q.answer ? 'correct-answer' : ''}" data-correct="${opt === q.answer}">${escapeHtml(opt)}</div>`
                )
                .join('')}
            </div>
          </div>`
        )
        .join('');
      questionsList.querySelectorAll('.option').forEach((opt) => {
        opt.addEventListener('click', () => {
          questionsList
            .querySelectorAll('.option')
            .forEach((o) => o.classList.remove('correct'));
          if (opt.dataset.correct === 'true') opt.classList.add('correct');
        });
      });
    } else {
      questionsSection.style.display = 'none';
    }

    // المفردات
    clozeContainer.style.display = 'none';
    clozeContainer.innerHTML = '';
    clozeToggleBtn.textContent = '🎯 تدرب على المفردات (املأ الفراغ)';
    if (conv.vocab && conv.vocab.length) {
      vocabSection.style.display = '';
      vocabList.innerHTML = conv.vocab
        .map(
          (v) => `
          <div class="vocab-item">
            <span class="vocab-word">${escapeHtml(v.word)}</span>
            <span class="vocab-meaning">${escapeHtml(v.meaning)}</span>
          </div>`
        )
        .join('');
      clozeToggleBtn.style.display = '';
    } else {
      vocabSection.style.display = 'none';
      clozeToggleBtn.style.display = 'none';
    }

    // القواعد
    if (conv.grammar) {
      grammarSection.style.display = '';
      grammarContent.innerHTML = `<div class="grammar-note">${escapeHtml(conv.grammar)}</div>`;
    } else {
      grammarSection.style.display = 'none';
    }

    listView.style.display = 'none';
    dialogueView.classList.add('active');
    controlBar.style.display = 'flex';
    statusText.textContent = 'جاهز للتشغيل';
    playBtn.textContent = '▶';
  }

  function renderDialogueLines() {
    if (!state.currentConv) return;
    dialogueContent.innerHTML = state.currentConv.dialogue
      .map((line, idx) => buildLineHTML(line, idx))
      .join('');
  }

  function closeConversation() {
    stopSpeaking();
    dialogueView.classList.remove('active');
    listView.style.display = 'grid';
    controlBar.style.display = 'none';
    renderList(searchBox.value);
    updateProgressBar();
  }

  // ----- التشغيل الصوتي (Text-to-Speech) -----
  const synth = window.speechSynthesis;

  function getSelectedVoice() {
    if (!state.settings.voiceURI) return null;
    return state.voices.find((v) => v.voiceURI === state.settings.voiceURI) || null;
  }

  function clearHighlights() {
    dialogueContent.querySelectorAll('.utterance').forEach((el) => {
      el.classList.remove('speaking');
    });
  }

  function markLine(idx, done) {
    const el = document.getElementById(`line-${idx}`);
    if (!el) return;
    if (done) {
      el.classList.remove('speaking');
      el.classList.add('completed');
    } else {
      clearHighlights();
      el.classList.add('speaking');
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  function speakLine(idx, onDoneOverride) {
    if (!state.currentConv || !synth) return;
    const line = state.currentConv.dialogue[idx];
    if (!line) {
      finishConversation();
      return;
    }

    markLine(idx, false);
    statusText.textContent = `${line.speaker} يتحدث...`;
    statusText.classList.add('speaking');

    synth.cancel();
    const utter = new SpeechSynthesisUtterance(line.text);
    utter.lang = 'en-US';
    utter.rate = state.settings.rate || 0.95;
    const voice = getSelectedVoice();
    if (voice) utter.voice = voice;

    utter.onend = () => {
      if (onDoneOverride) {
        onDoneOverride();
        return;
      }
      if (!state.isPlaying) return; // اتوقف يدويًا
      markLine(idx, true);
      state.currentLineIndex = idx + 1;
      if (state.autoPlay) {
        speakLine(state.currentLineIndex);
      } else {
        pausePlayback();
      }
    };

    utter.onerror = () => {
      statusText.classList.remove('speaking');
      statusText.textContent = 'حصل خطأ في التشغيل الصوتي';
    };

    synth.speak(utter);
  }

  function startPlayback() {
    if (!state.currentConv) return;
    state.isPlaying = true;
    state.isPaused = false;
    playBtn.textContent = '⏸';
    speakLine(state.currentLineIndex);
  }

  function pausePlayback() {
    state.isPlaying = false;
    state.isPaused = true;
    playBtn.textContent = '▶';
    statusText.classList.remove('speaking');
    statusText.textContent = 'متوقف مؤقتًا';
    if (synth) synth.cancel();
  }

  function stopSpeaking() {
    state.isPlaying = false;
    state.isPaused = false;
    state.currentLineIndex = 0;
    if (synth) synth.cancel();
    clearHighlights();
    if (dialogueContent) {
      dialogueContent.querySelectorAll('.utterance').forEach((el) => el.classList.remove('completed'));
    }
    statusText.classList.remove('speaking');
    statusText.textContent = 'جاهز للتشغيل';
    playBtn.textContent = '▶';
  }

  function finishConversation() {
    state.isPlaying = false;
    statusText.classList.remove('speaking');
    statusText.textContent = 'خلصت المحادثة ✓';
    playBtn.textContent = '▶';
    if (state.currentConv) {
      state.completed.add(state.currentConv.id);
      saveProgress();
      updateProgressBar();
      const card = listView.querySelector(`[data-id="${state.currentConv.id}"]`);
      if (card) card.classList.add('completed');
    }
  }

  function playNext() {
    if (!state.currentConv) return;
    if (synth) synth.cancel();
    const nextIdx = state.currentLineIndex + (state.isPlaying || state.isPaused ? 1 : 0);
    state.currentLineIndex = Math.min(nextIdx, state.currentConv.dialogue.length);
    if (state.currentLineIndex >= state.currentConv.dialogue.length) {
      finishConversation();
      return;
    }
    state.isPlaying = true;
    playBtn.textContent = '⏸';
    speakLine(state.currentLineIndex);
  }

  function repeatCurrentLine() {
    if (!state.currentConv) return;
    const idx = Math.min(state.currentLineIndex, state.currentConv.dialogue.length - 1);
    if (idx < 0) return;
    const wasPlaying = state.isPlaying;
    state.isPlaying = true;
    playBtn.textContent = '⏸';
    speakLine(idx, () => {
      // بعد التكرار، ارجع لنفس السلوك اللي كان عليه (لو مكانش شغال، وقف تاني)
      markLine(idx, true);
      if (!wasPlaying) {
        pausePlayback();
        state.currentLineIndex = idx; // خليه يكرر تاني لو حب
        markLine(idx, false);
      } else {
        state.currentLineIndex = idx + 1;
        if (state.autoPlay) {
          speakLine(state.currentLineIndex);
        } else {
          pausePlayback();
        }
      }
    });
  }

  function repeatSpecificLine(idx) {
    stopAudioOnly();
    const utter = new SpeechSynthesisUtterance(state.currentConv.dialogue[idx].text);
    utter.lang = 'en-US';
    utter.rate = state.settings.rate || 0.95;
    const voice = getSelectedVoice();
    if (voice) utter.voice = voice;
    synth.speak(utter);
  }

  function stopAudioOnly() {
    if (synth) synth.cancel();
  }

  // ----- Reveal (اظهار النص / الترجمة) -----
  function handleRevealClick(action, idx) {
    const selector = action === 'reveal-text'
      ? `.hideable[data-idx="${idx}"]:not(.translation-row)`
      : `.translation-row[data-idx="${idx}"]`;
    const el = dialogueContent.querySelector(selector);
    if (el) el.classList.remove('is-hidden');
  }

  // ----- وضع الإملاء: تحقق -----
  function checkDictation(idx) {
    const line = state.currentConv.dialogue[idx];
    const box = dialogueContent.querySelector(`.dictation-box[data-idx="${idx}"]`);
    if (!box || !line) return;
    const input = box.querySelector('.dictation-input');
    const resultEl = document.getElementById(`dict-result-${idx}`);

    const userWords = normalizeWords(input.value);
    const origWords = normalizeWords(line.text);
    const origDisplay = line.text.split(/\s+/);

    const maxLen = Math.max(userWords.length, origWords.length);
    let correctCount = 0;
    let html = '';
    for (let i = 0; i < maxLen; i++) {
      const orig = origWords[i];
      const said = userWords[i];
      const displayWord = origDisplay[i] || orig || '';
      if (orig && said === orig) {
        correctCount++;
        html += `<span class="dw-correct">${escapeHtml(displayWord)}</span> `;
      } else if (orig) {
        html += `<span class="dw-wrong">${escapeHtml(displayWord)}</span> `;
      } else {
        html += ` `;
      }
    }
    const score = origWords.length ? Math.round((correctCount / origWords.length) * 100) : 0;
    resultEl.innerHTML = `<div>${html}</div><div style="margin-top:6px; direction: rtl; color: var(--text-secondary); font-size:0.85rem;">دقتك: ${score}%</div>`;
  }

  // ----- تمرين المفردات (Cloze) -----
  function escapeRegex(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  function findClozeSentence(conv, word) {
    const re = new RegExp(`\\b${escapeRegex(word)}\\b`, 'i');
    for (const line of conv.dialogue) {
      const match = line.text.match(re);
      if (match) {
        const before = line.text.slice(0, match.index);
        const after = line.text.slice(match.index + match[0].length);
        return { before, after, answer: match[0] };
      }
    }
    return null;
  }

  function renderClozePractice() {
    const conv = state.currentConv;
    if (!conv || !conv.vocab) return;

    const items = conv.vocab
      .map((v) => {
        const sentence = findClozeSentence(conv, v.word);
        return sentence ? { word: v.word, meaning: v.meaning, sentence } : null;
      })
      .filter(Boolean);

    if (!items.length) {
      clozeContainer.innerHTML = `<p style="color:var(--text-secondary); font-size:0.9rem;">مفيش جمل مناسبة لعمل تمرين من الحوار ده.</p>`;
      return;
    }

    clozeContainer.innerHTML = items
      .map(
        (item, i) => `
        <div class="cloze-item">
          <div class="cloze-sentence">
            ${escapeHtml(item.sentence.before)}<input type="text" class="cloze-blank-input" data-idx="${i}" data-answer="${escapeHtml(item.sentence.answer)}" autocomplete="off" autocapitalize="off" spellcheck="false">${escapeHtml(item.sentence.after)}
          </div>
          <div class="cloze-meaning">💡 ${escapeHtml(item.meaning)}</div>
        </div>`
      )
      .join('') + `<button class="cloze-check-btn" id="clozeCheckBtn">✓ تحقق من الإجابات</button><div class="cloze-score" id="clozeScore"></div>`;

    document.getElementById('clozeCheckBtn').addEventListener('click', () => {
      const inputs = clozeContainer.querySelectorAll('.cloze-blank-input');
      let correct = 0;
      inputs.forEach((inp) => {
        const answer = (inp.dataset.answer || '').toLowerCase().trim();
        const val = inp.value.toLowerCase().trim();
        inp.classList.remove('correct', 'wrong');
        if (val === answer) {
          inp.classList.add('correct');
          correct++;
        } else {
          inp.classList.add('wrong');
        }
      });
      document.getElementById('clozeScore').textContent = `${correct} / ${inputs.length} إجابة صحيحة`;
    });
  }

  // ----- الإعدادات: تحميل الأصوات -----
  function populateVoices() {
    const all = synth ? synth.getVoices() : [];
    state.voices = all.filter((v) => v.lang && v.lang.toLowerCase().startsWith('en'));
    if (!state.voices.length) state.voices = all; // fallback لو مفيش أصوات إنجليزي

    voiceSelect.innerHTML = state.voices
      .map(
        (v) =>
          `<option value="${escapeHtml(v.voiceURI)}">${escapeHtml(v.name)} (${escapeHtml(v.lang)})</option>`
      )
      .join('');

    if (state.settings.voiceURI && state.voices.some((v) => v.voiceURI === state.settings.voiceURI)) {
      voiceSelect.value = state.settings.voiceURI;
    } else if (state.voices.length) {
      state.settings.voiceURI = state.voices[0].voiceURI;
      voiceSelect.value = state.settings.voiceURI;
      saveSettings();
    }
  }

  if (synth) {
    populateVoices();
    synth.onvoiceschanged = populateVoices;
  }

  // ----- ربط الأحداث -----
  searchBox.addEventListener('input', (e) => renderList(e.target.value));

  backBtn.addEventListener('click', closeConversation);

  playBtn.addEventListener('click', () => {
    if (state.isPlaying) {
      pausePlayback();
    } else {
      startPlayback();
    }
  });

  stopBtn.addEventListener('click', stopSpeaking);
  nextBtn.addEventListener('click', playNext);
  repeatBtn.addEventListener('click', repeatCurrentLine);

  autoPlayToggle.addEventListener('click', () => {
    state.autoPlay = !state.autoPlay;
    autoPlayToggle.classList.toggle('active', state.autoPlay);
  });

  // أوضاع الاستماع
  modeChips.forEach((chip) => {
    chip.addEventListener('click', () => {
      const newMode = chip.dataset.mode;
      if (newMode === state.mode) return;
      state.mode = newMode;
      modeChips.forEach((c) => c.classList.toggle('active', c === chip));
      stopSpeaking();
      renderDialogueLines();
    });
  });

  // تفويض أحداث داخل منطقة الحوار (reveal / dictation / repeat line)
  dialogueContent.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-action]');
    if (!btn) return;
    const action = btn.dataset.action;
    const idx = Number(btn.dataset.idx);

    if (action === 'reveal-text' || action === 'reveal-translation') {
      handleRevealClick(action, idx);
    } else if (action === 'check-dictation') {
      checkDictation(idx);
    } else if (action === 'repeat-this') {
      repeatSpecificLine(idx);
    }
  });

  dialogueContent.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && e.target.classList.contains('dictation-input')) {
      const box = e.target.closest('.dictation-box');
      if (box) checkDictation(Number(box.dataset.idx));
    }
  });

  // تمرين المفردات
  clozeToggleBtn.addEventListener('click', () => {
    const isOpen = clozeContainer.style.display !== 'none';
    if (isOpen) {
      clozeContainer.style.display = 'none';
      clozeToggleBtn.textContent = '🎯 تدرب على المفردات (املأ الفراغ)';
    } else {
      renderClozePractice();
      clozeContainer.style.display = 'block';
      clozeToggleBtn.textContent = '✖ إخفاء التمرين';
    }
  });

  // مودال الإعدادات
  settingsBtn.addEventListener('click', () => {
    populateVoices();
    rateSlider.value = state.settings.rate;
    rateValue.textContent = `${state.settings.rate}x`;
    settingsModal.classList.add('active');
  });

  closeSettingsBtn.addEventListener('click', () => {
    settingsModal.classList.remove('active');
  });

  settingsModal.addEventListener('click', (e) => {
    if (e.target === settingsModal) settingsModal.classList.remove('active');
  });

  voiceSelect.addEventListener('change', () => {
    state.settings.voiceURI = voiceSelect.value;
    saveSettings();
  });

  rateSlider.addEventListener('input', () => {
    state.settings.rate = Number(rateSlider.value);
    rateValue.textContent = `${state.settings.rate}x`;
    saveSettings();
  });

  testVoiceBtn.addEventListener('click', () => {
    if (!synth) return;
    synth.cancel();
    const utter = new SpeechSynthesisUtterance('Hello! This is how I sound while reading the dialogue.');
    utter.lang = 'en-US';
    utter.rate = state.settings.rate || 0.95;
    const voice = getSelectedVoice();
    if (voice) utter.voice = voice;
    synth.speak(utter);
  });

  // ----- بداية التشغيل -----
  function init() {
    if (!state.conversations.length) {
      listView.innerHTML = `
        <div class="empty-state">
          <p>⚠️ لم يتم العثور على بيانات المحادثات (data.js). تأكد من رفع الملف بجانب app.js.</p>
        </div>`;
      return;
    }
    renderList();
    updateProgressBar();
  }

  document.addEventListener('DOMContentLoaded', init);
  // fallback في حالة تحميل السكريبت بعد الـ DOM
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    init();
  }
})();
