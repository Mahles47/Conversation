/* ============================================================
   ALCPT Premium Review — App Logic
   يعتمد على المتغيّر CONVERSATIONS المُعرَّف في data.js
   ============================================================ */

(function () {
  'use strict';

  // ----- الحالة العامة -----
  const state = {
    conversations: Array.isArray(window.CONVERSATIONS) ? window.CONVERSATIONS : [],
    completed: new Set(JSON.parse(localStorage.getItem('alcpt_completed') || '[]')),
    currentConv: null,
    currentLineIndex: 0,
    isPlaying: false,
    isPaused: false,
    autoPlay: true,
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
  const autoPlayToggle = document.getElementById('autoPlayToggle');

  const questionsSection = document.getElementById('questionsSection');
  const questionsList = document.getElementById('questionsList');
  const vocabSection = document.getElementById('vocabSection');
  const vocabList = document.getElementById('vocabList');
  const grammarSection = document.getElementById('grammarSection');
  const grammarContent = document.getElementById('grammarContent');

  // ----- تخزين التقدّم -----
  function saveProgress() {
    localStorage.setItem('alcpt_completed', JSON.stringify([...state.completed]));
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

  // ----- فتح محادثة -----
  function openConversation(id) {
    const conv = state.conversations.find((c) => c.id === id);
    if (!conv) return;

    stopSpeaking();
    state.currentConv = conv;
    state.currentLineIndex = 0;

    dialogueTitle.textContent = `${conv.id}. ${conv.title}`;
    dialogueSubtitle.textContent = 'استمع وتابع النص';

    dialogueContent.innerHTML = conv.dialogue
      .map((line, idx) => {
        const speakerClass = idx % 2 === 0 ? 'speaker-a' : 'speaker-b';
        return `
          <div class="utterance" id="line-${idx}">
            <span class="speaker-label ${speakerClass}">${escapeHtml(line.speaker)}</span>
            <div class="utterance-text">${escapeHtml(line.text)}</div>
            <div class="utterance-translation">${escapeHtml(line.translation || '')}</div>
          </div>`;
      })
      .join('');

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
    } else {
      vocabSection.style.display = 'none';
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

  function speakLine(idx) {
    if (!state.currentConv || !synth) return;
    const line = state.currentConv.dialogue[idx];
    if (!line) {
      // خلصت المحادثة
      finishConversation();
      return;
    }

    markLine(idx, false);
    statusText.textContent = `${line.speaker} يتحدث...`;
    statusText.classList.add('speaking');

    const utter = new SpeechSynthesisUtterance(line.text);
    utter.lang = 'en-US';
    utter.rate = 0.95;

    utter.onend = () => {
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
    dialogueContent.querySelectorAll('.utterance').forEach((el) => el.classList.remove('completed'));
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

  autoPlayToggle.addEventListener('click', () => {
    state.autoPlay = !state.autoPlay;
    autoPlayToggle.classList.toggle('active', state.autoPlay);
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
