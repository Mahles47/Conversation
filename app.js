/**
 * ALCPT Premium Review - Main Application Logic
 * Offline-First PWA with Web Speech API
 */

// ==================== DATA ====================
const CONVERSATIONS_DATA = [
  {
    id: 1,
    title: "الكاميرا والتقاعد من البحرية",
    dialogue: [
      { speaker: "A", text: "Hey, look at this camera — it's so compact, small and easy to carry around.", translation: "بص الكاميرا دي، صغيرة وسهل جداً إنك تشيلها معاك في أي حتة." },
      { speaker: "B", text: "Nice. My uncle just retired — by next month, he will have been in the navy for 22 years.", translation: "حلو. خالي لسه اتقاعد — لغاية الشهر الجاي هيكون قضّى 22 سنة في البحرية." },
      { speaker: "A", text: "Wow, that long? He must feel real rapture just thinking about being free.", translation: "واو، مدة طويلة! لازم يكون حاسس بنشوة وفرحة (rapture) وهو بيفكر إنه هيبقى حر." },
      { speaker: "B", text: "Totally. And they say by 2015 Europe's train traffic will quadruple, so traveling's about to get way easier for him.", translation: "بالظبط. وكمان بيقولوا لغاية 2015 حركة القطارات في أوروبا هتتضاعف 4 مرات (quadruple)، فالسفر هيبقى أسهل بكتير له." },
      { speaker: "A", text: "Don't tantalize me with all these travel plans — I want to come too!", translation: "متغريش (tantalize) نفسك بالكلام ده قوي كده، أنا كمان عايز أجي معاكوا!" }
    ],
    questions: [
      { q: "He likes compact cameras.", options: ["Modern and expensive", "cheap and easy to find", "small and easy to carry", "colorful and durable"], correct: 2 },
      { q: "By next month, I _____ in the navy for 22 years.", options: ["Have been", "will be", "will have", "will have been"], correct: 3 },
      { q: "They looked at the diamond with rapture.", options: ["Anguish", "affliction", "ecstasy", "agony"], correct: 2 },
      { q: "By 2015, Europe train traffic will quadruple.", options: ["It'll become five times as great.", "It'll become four times less.", "It'll become four times as great.", "It'll become six times as great."], correct: 2 },
      { q: "Tom loved to tantalize me with ice-cream and popcorn.", options: ["Cheer up", "please", "tease", "delight"], correct: 2 }
    ],
    vocabulary: [
      { word: "compact", meaning: "صغير وسهل الحمل" },
      { word: "rapture", meaning: "نشوة وفرحة شديدة" },
      { word: "quadruple", meaning: "يتضاعف أربع مرات" },
      { word: "tantalize", meaning: "يغري / يغيظ بشيء لا يُعطى" }
    ],
    grammar: "Future Perfect: نستخدم (will have + been) لما نتكلم عن حدث هيكون خلص لحد وقت معين في المستقبل، زي By next month."
  },
  {
    id: 2,
    title: "قصة بوب والمحلفين",
    dialogue: [
      { speaker: "A", text: "Jason: Do you think the jury will believe Bob's story?", translation: "جيسون: ناخد بالك، إنت فاكر الجيوري هيصدق كلام بوب؟" },
      { speaker: "B", text: "He does — Bob has never done anything wrong, so there's no reason to doubt him.", translation: "هو واثق إن هيصدقوه — بوب معملش أي غلط قبل كده، فمفيش سبب إنهم يشكوا فيه." },
      { speaker: "A", text: "True. His latent talent for drawing was discovered lately too — turns out it was just dormant all along.", translation: "صح. كمان موهبته في الرسم اتكشفت مؤخراً، اتضح إنها كانت نايمة (latent) طول الوقت." },
      { speaker: "B", text: "We should really put our heads together and figure out how to use that talent for the case.", translation: "لازم نفكر مع بعض (put our heads together) عشان نستفيد من الموهبة دي في القضية." },
      { speaker: "A", text: "Good idea — those recent decisions definitely undermined, weakened, his reputation first though.", translation: "فكرة كويسة — بس القرارات الأخيرة ضعّفت (undermined) سمعته الأول." }
    ],
    questions: [
      { q: "Jason: Do you think the jury will believe Bob's story? Mike: He does ________", options: ["Bob is in a wheelchair.", "Bob has no defense", "Bob has never done anything wrong", "Bob is tired of standing."], correct: 2 },
      { q: "His latent talent for drawing was discovered lately.", options: ["Dormant", "patent", "separative", "dynamic"], correct: 0 },
      { q: "We need to put our heads together and come up with a conclusion.", options: ["We need to be careful about the conclusion.", "We need to come to an agreement.", "We need to work together.", "We need to stay close to each other."], correct: 2 },
      { q: "All their recent decisions undermined this financial status.", options: ["Waived", "reinforced", "weakened", "wielded"], correct: 2 },
      { q: "Several students are slouching in the campus.", options: ["Moving lazily", "playing music", "chatting", "walking fast"], correct: 0 }
    ],
    vocabulary: [
      { word: "latent", meaning: "كامن / خفي" },
      { word: "undermined", meaning: "ضعّف / قوّض" },
      { word: "slouching", meaning: "يمشي بكسل وانحناء" },
      { word: "put heads together", meaning: "يفكروا مع بعض" }
    ],
    grammar: "لا توجد قاعدة نحوية أساسية في هذه المجموعة، التركيز على المفردات والتعبيرات الاصطلاحية (idioms) والمرادفات."
  },
  {
    id: 3,
    title: "فيلم الرعب والبيت القديم",
    dialogue: [
      { speaker: "A", text: "This horror movie really makes my hair stand on end — it's scaring me so bad!", translation: "الفيلم الرعب ده فعلاً بيخليني حاسس إن شعري بيقف من الخوف!" },
      { speaker: "B", text: "Ha, speaking of scary, fatty snacks are the same — they lose their allure, their exciting appeal, once you know the calories.", translation: "هه، بصراحة الأكل الدسم زيه بالظبط — بيفقد جاذبيته (allure) لما تعرف السعرات فيه." },
      { speaker: "A", text: "True. Unlike that old house downtown though — it's part of local history and should be preserved, conserved for good.", translation: "صح. بس البيت القديم ده وسط البلد، ده جزء من التاريخ ولازم يتحافظ عليه (preserved)." },
      { speaker: "B", text: "By the way, the new student can't comprehend the Japanese lecture at all.", translation: "بالمناسبة، الطالب الجديد مش قادر يستوعب (comprehend) المحاضرة اللي باليابانية خالص." },
      { speaker: "A", text: "I haven't seen the Smiths for ages either — they must have been abroad this whole time.", translation: "أنا كمان معنديش خبر عن عيلة سميث من زمان — لازم يكونوا سافروا برّه." }
    ],
    questions: [
      { q: "She likes making my hair stand on end.", options: ["Scaring me", "encouraging me", "making fun of me", "amusing me"], correct: 0 },
      { q: "Fatty snacks will soon lose their allure over time. What will they lose?", options: ["Poor quality", "bad odor", "exciting appeal", "shape"], correct: 2 },
      { q: "The house is part of local history and should be preserved.", options: ["Leased", "conserved", "abolished", "demolished"], correct: 1 },
      { q: "The student can not _____ the Japanese lecture.", options: ["Comprehend", "interrogate", "relieve", "represent"], correct: 0 },
      { q: "I haven't seen the Smiths for a long time. They _____ abroad.", options: ["Can have been", "could have been", "should have been", "must have been"], correct: 3 }
    ],
    vocabulary: [
      { word: "hair stand on end", meaning: "الخوف الشديد" },
      { word: "allure", meaning: "جاذبية" },
      { word: "preserved", meaning: "محافظ عليه" },
      { word: "comprehend", meaning: "يفهم / يستوعب" }
    ],
    grammar: "must have been: نستخدمها للاستنتاج المؤكد عن حدث في الماضي (Modal of deduction - past)."
  },
  {
    id: 4,
    title: "المشروع والسباحة في البحيرة",
    dialogue: [
      { speaker: "A", text: "We involved ourselves in this project with unfaltering determination — no halting, no giving up.", translation: "إحنا اشتغلنا في المشروع ده بعزيمة ثابتة (unfaltering) من غير ما نوقف." },
      { speaker: "B", text: "Good, because last weekend we went swimming in the lake and totally forgot about deadlines!", translation: "كويس، لأن الويك إند اللي فات إحنا رحنا نعوم في البحيرة ونسينا الديدلاينز خالص!" },
      { speaker: "A", text: "Ha, don't worry, I don't think anyone is to blame — nobody's at fault for taking a break.", translation: "هه متقلقش، محدش غلطان (at fault) — عادي حد ياخد بريك شوية." },
      { speaker: "B", text: "True — we've known one another since we were children, we can relax together.", translation: "صح — إحنا عارفين بعض من وإحنا صغيرين، نقدر نرتاح مع بعض." },
      { speaker: "A", text: "By the way — Phil: Whose car is that? Marina: I have no idea whose car it is.", translation: "بالمناسبة — فيل: عربية مين دي؟ مارينا: معنديش فكرة عربية مين هي." }
    ],
    questions: [
      { q: "His eccentric behavior lost him his job.", options: ["straight", "peculiar", "harsh", "complacent"], correct: 1 },
      { q: "We went _____ last weekend in the lake.", options: ["Swimming", "swim", "to swimming", "swam"], correct: 0 },
      { q: "I don't think that he is to blame for breaking the computer.", options: ["At fault", "at peace", "at hand", "at risk"], correct: 0 },
      { q: "We've known _____ since we were children.", options: ["another", "other", "one after the other", "one another"], correct: 3 },
      { q: "Phil: Whose car is that? Marina: I have no idea _____", options: ["whose car is it", "whose car is that?", "whose car it is?", "whose car it is"], correct: 3 }
    ],
    vocabulary: [
      { word: "unfaltering", meaning: "ثابت / بدون تردد" },
      { word: "to blame / at fault", meaning: "مسؤول عن خطأ" },
      { word: "one another", meaning: "بعض (لأكثر من اتنين)" }
    ],
    grammar: "Indirect Question: بعد I have no idea بنحط الفاعل قبل الفعل ومن غير علامة استفهام (whose car it is)."
  },
  {
    id: 5,
    title: "السلوك الغريب وحريق المدينة",
    dialogue: [
      { speaker: "A", text: "Did you hear? His eccentric — peculiar — behavior actually cost him his job.", translation: "سمعت إن تصرفاته الغريبة (eccentric) خسرته شغله فعلاً." },
      { speaker: "B", text: "Wow. Meanwhile, the fireman had trouble extinguishing that huge fire downtown.", translation: "واو. في نفس الوقت، رجل الإطفاء واجه صعوبة في إطفاء الحريق الكبير وسط البلد." },
      { speaker: "A", text: "Yeah, and the city's new law failed too — the aims were never reached, never achieved.", translation: "أيوة، وكمان القانون الجديد فشل — الأهداف ماوصلوش ليها." },
      { speaker: "B", text: "On a lighter note, could you give me a bag of potato chips in exchange for this milk?", translation: "بس بجد، ممكن تديني كيس شيبسي مقابل (in exchange for) اللبن ده؟" },
      { speaker: "A", text: "Sure — anything's better than the living conditions at that old camp, they were truly intolerable, unbearable.", translation: "أكيد — أي حاجة أحسن من ظروف المعيشة في المعسكر القديم ده، كانت مش محتملة (intolerable) خالص." }
    ],
    questions: [
      { q: "The fireman has trouble _____ the fire.", options: ["extinguishing", "extinguish", "to extinguish", "extinguishes"], correct: 0 },
      { q: "The present law has failed to achieve its objectives. The aims were never _____", options: ["Reviewed", "increased", "reached", "defined"], correct: 2 },
      { q: "Could you give me a bag of potato chips _____ this milk.", options: ["Come along with", "chip in on", "no matter what", "in exchange for"], correct: 3 },
      { q: "Living conditions at the camp were intolerable.", options: ["Unconditional", "unattainable", "unbeatable", "unbearable"], correct: 3 },
      { q: "His eccentric behavior lost him his job.", options: ["straight", "peculiar", "harsh", "complacent"], correct: 1 }
    ],
    vocabulary: [
      { word: "eccentric", meaning: "غريب الأطوار" },
      { word: "have trouble + gerund", meaning: "يواجه صعوبة في" },
      { word: "in exchange for", meaning: "مقابل" },
      { word: "intolerable", meaning: "لا يُحتمل" }
    ],
    grammar: "have trouble + verb-ing: بعد have trouble بنستخدم الفعل بصيغة ing دايماً (extinguishing)."
  },
  {
    id: 6,
    title: "كورس الطيران وإطلاق القمر الصناعي",
    dialogue: [
      { speaker: "A", text: "The airman just completed a course in the fundamentals — the basics of flight mechanics.", translation: "الطيار لسه خلص كورس في الأساسيات (fundamentals) بتاعة الطيران." },
      { speaker: "B", text: "Cool. Speaking of launches, NASA said the satellite will be fired — launched — into orbit tomorrow.", translation: "تمام. بالمناسبة، ناسا قالوا القمر الصناعي هيتطلق (fired) بكرة." },
      { speaker: "A", text: "There must be some rational, logical explanation for why they delayed it a week though.", translation: "لازم يكون في تفسير منطقي (rational) ليه أجلوه أسبوع كده." },
      { speaker: "B", text: "Bravely as they fought to fix it, they still had no chance of launching on time.", translation: "مهما حاولوا بشجاعة يصلحوه، ماكانش قدامهم فرصة إنهم يطلقوه في الميعاد." },
      { speaker: "A", text: "Well, it's essential that Peter be on time for tomorrow's briefing, no excuses.", translation: "على العموم، ضروري إن بيتر يكون حاضر في الميعاد بكرة، من غير أعذار." }
    ],
    questions: [
      { q: "The airman just completed a course in the _____", options: ["Facilities", "dimensions", "evidence", "fundamentals"], correct: 3 },
      { q: "There must be some rational explanation for the bizarre action.", options: ["Influential", "hidden", "superficial", "logical"], correct: 3 },
      { q: "A NASA spokesman said that the satellite will be launched. _____ the rocket.", options: ["Destroyed", "manufactured", "fired", "repaired"], correct: 2 },
      { q: "_____, they had no chance of winning.", options: ["They fight as bravely.", "Bravely as fighting", "Bravely as they fought", "they bravely fought"], correct: 2 },
      { q: "It's essential that Peter _____ on time for his lectures.", options: ["Were", "be", "is", "was"], correct: 1 }
    ],
    vocabulary: [
      { word: "fundamentals", meaning: "الأساسيات" },
      { word: "rational", meaning: "منطقي" },
      { word: "launched / fired", meaning: "أطلق" }
    ],
    grammar: "Subjunctive Mood: بعد essential / important / necessary بنستخدم الفعل في صيغته الأساسية من غير تصريف (be)."
  },
  {
    id: 7,
    title: "مراجعة الشغل والتسوق",
    dialogue: [
      { speaker: "A", text: "Could you check my work over for mistakes before I hand it in?", translation: "ممكن تراجع الشغل بتاعي (check over) بحث عن أخطاء قبل ما أسلمه؟" },
      { speaker: "B", text: "Sure. By the way, we were awfully broke after our shopping trip yesterday!", translation: "أكيد. بالمناسبة، إحنا كنا مفلسين قوي (awfully broke) بعد الشوبينج بتاع إمبارح!" },
      { speaker: "A", text: "Ha, don't let that bring you down — everyone overspends sometimes.", translation: "هه متخليش الموضوع يزعلك (bring you down) — كل الناس بتصرف زيادة أحياناً." },
      { speaker: "B", text: "True. Raymond actually did me a favor and lent me some cash.", translation: "صح. ريموند فعلاً عملي معروف (did me a favor) وسلفني فلوس." },
      { speaker: "A", text: "Nice. Anyway, up to twenty users can have simultaneous access to the new system now.", translation: "حلو. على فكرة، لحد 20 يوزر دلوقتي يقدروا يدخلوا في نفس الوقت (simultaneous) على السيستم الجديد." }
    ],
    questions: [
      { q: "Could you check my work _____ for mistakes before I hand it in?", options: ["Out", "up", "in", "over"], correct: 3 },
      { q: "We were _____ broke after our shopping trip.", options: ["Quietly", "fair", "awfully", "awful"], correct: 2 },
      { q: "Someone who is always unhappy might bring you _____", options: ["Up", "down", "to", "in"], correct: 1 },
      { q: "Raymond did me a favor yesterday.", options: ["Asked me to help him", "didn't need help", "helped me", "didn't help me"], correct: 2 },
      { q: "Up to twenty users can have simultaneous access to the system.", options: ["For very short time", "at the same time", "separately", "permanently"], correct: 1 }
    ],
    vocabulary: [
      { word: "check over", meaning: "يراجع بعناية" },
      { word: "bring down", meaning: "يضايق / يحزن" },
      { word: "did me a favor", meaning: "عمل معروف" },
      { word: "simultaneous", meaning: "في نفس الوقت" }
    ],
    grammar: "Adverb after verb 'to be': awfully بتوصف الفعل (adverb) فبتستخدم مع broke: were awfully broke."
  },
  {
    id: 8,
    title: "الفرنساوي والجرامر",
    dialogue: [
      { speaker: "A", text: "Mat speaks French too rapidly for me to understand — I can't keep up at all.", translation: "مات بيتكلم فرنساوي بسرعة كبيرة (too rapidly for me to understand)، مش قادر ألحقه خالص." },
      { speaker: "B", text: "I get it, grammar can be such a hassle sometimes, so aggravating.", translation: "فاهمك، الجرامر أحياناً بتبقى مصدر إزعاج (hassle) قوي." },
      { speaker: "A", text: "True. Anyway, I need to grab meat, vegetables, dairy — just basic groceries for the week.", translation: "صح. على فكرة، لازم أجيب لحمة وخضار وألبان — يعني مشتريات البيت (groceries) للأسبوع ده." },
      { speaker: "B", text: "Good idea. Oh, and the doctor said he might prescribe something for that cough of yours.", translation: "فكرة كويسة. آه، والدكتور قال ممكن يكتب روشتة (prescribe) حاجة للكحة بتاعتك." },
      { speaker: "A", text: "I hope so — the tired soldier actually dropped off, fell asleep, during the briefing yesterday!", translation: "يارب — الجندي التعبان أصلاً غفى (dropped off) وهو في البريفنج إمبارح!" }
    ],
    questions: [
      { q: "Mat speaks French too rapidly _____", options: ["For me to understand", "to me for understanding", "for me for understanding", "to me to understand"], correct: 0 },
      { q: "It is too much of a hassle to use both toothpaste and mouthwash.", options: ["aggravating", "proper", "complete", "pleasing"], correct: 0 },
      { q: "Meat, vegetables, dairy, napkins and noodles are examples of _____", options: ["recipes", "raw material", "groceries", "dried fruit"], correct: 2 },
      { q: "The doctor may be able to _____ you something for that cough.", options: ["prevent", "preserve", "rehabilitate", "prescribe"], correct: 3 },
      { q: "The tired soldier _____ while having the briefing.", options: ["Dropped out of", "dropped by", "dropped in", "dropped off"], correct: 3 }
    ],
    vocabulary: [
      { word: "hassle", meaning: "إزعاج" },
      { word: "groceries", meaning: "مشتريات البيت" },
      { word: "prescribe", meaning: "يصف دواء" },
      { word: "drop off", meaning: "يغفو بدون قصد" }
    ],
    grammar: "too + adjective + for + object + to + verb: صيغة ثابتة تعبر عن نتيجة (too rapidly for me to understand)."
  },
  {
    id: 9,
    title: "المرهم والخلاف في التدريب",
    dialogue: [
      { speaker: "A", text: "The doctor said this ointment will inhibit — block or slow down — the spread of infection.", translation: "الدكتور قال المرهم ده هيمنع أو يبطئ (inhibit) انتشار العدوى." },
      { speaker: "B", text: "Good. Hey, did he insist on you going to the drugstore with him again?", translation: "تمام. حاجة تانية، هو أصر (insist on) إنك تروح معاه الصيدلية تاني؟" },
      { speaker: "A", text: "Yeah. Actually, a real dispute — a quarrel — arose in the training class today.", translation: "أيوة. أصلاً حصل خلاف (dispute) حقيقي في الكلاس بتاع التدريب النهاردة." },
      { speaker: "B", text: "Really? Melvin was told about the meeting yesterday, so he should've known.", translation: "جد؟ ميلفن أصلاً اتقاله (was told) عن الميتينج إمبارح، يبقى كان المفروض يعرف." },
      { speaker: "A", text: "True, but these two candidates are certainly distinct — clearly different from each other.", translation: "صح، بس المرشحين دول الاتنين مختلفين بوضوح (distinct) عن بعض." }
    ],
    questions: [
      { q: "The ointment will _____ the spread of infection.", options: ["block or slow down", "live in a certain place", "somewhat enhance", "itch or burn"], correct: 0 },
      { q: "Did he _____ you going to the drugstore with him?", options: ["Drop off", "insist on", "get through", "use up"], correct: 1 },
      { q: "Within the training class a dispute arose.", options: ["aggravation", "quarrel", "resentment", "concord"], correct: 1 },
      { q: "Melvin _____ about the meeting yesterday.", options: ["Was said", "was told", "is told", "was tell"], correct: 1 },
      { q: "These two candidates are certainly distinct. Every candidate is _____", options: ["Dishonest", "clearly different", "about the same age", "patriotic"], correct: 1 }
    ],
    vocabulary: [
      { word: "inhibit", meaning: "يمنع / يبطئ" },
      { word: "insist on", meaning: "يصر على" },
      { word: "dispute", meaning: "خلاف" },
      { word: "distinct", meaning: "مختلف بوضوح" }
    ],
    grammar: "Passive Voice (Past): was told مش was said، لأن told بتتعدى للمفعول مباشرة."
  },
  {
    id: 10,
    title: "رحلة هيوستن والبنطلون الجديد",
    dialogue: [
      { speaker: "A", text: "Martha doesn't like Chinese food, and neither do they.", translation: "مارثا مبتحبش الأكل الصيني، ولا هما كمان (neither do they)." },
      { speaker: "B", text: "Interesting. So, how was the Houston trip? Did you stay overnight?", translation: "تمام. طيب رحلة هيوستن عملتوا فيها إيه؟ قعدتوا طول الليل (overnight)؟" },
      { speaker: "A", text: "Yeah, we stayed overnight and came back this morning. Oh, and I bought a black pair of pants — trousers, I mean.", translation: "أيوة، قعدنا طول الليل ورجعنا الصبح. آه، واشتريت بنطلون أسود — trousers يعني." },
      { speaker: "B", text: "Nice! By the way, the scores on the final test were incredible, just unbelievable.", translation: "حلو! بالمناسبة، درجات الامتحان النهائي كانت مش معقولة (incredible) خالص." },
      { speaker: "A", text: "I know! We'll be notified of the manager's decision in ten days too.", translation: "عارف! وهيتم إبلاغنا (notified) بقرار المدير خلال 10 أيام كمان." }
    ],
    questions: [
      { q: "Martha doesn't like Chinese food, and _____", options: ["They do too", "neither they do", "they don't neither", "neither do they"], correct: 3 },
      { q: "They went to Houston on a tour. They stayed there _____ and came back this morning.", options: ["Check out", "final", "overnight", "rest"], correct: 2 },
      { q: "I bought a black pair of pants.", options: ["Shoes", "gloves", "trousers", "socks"], correct: 2 },
      { q: "The scores on the final test were incredible.", options: ["Predicted", "standard", "unbelievable", "ordinary"], correct: 2 },
      { q: "The people who applied for the secretary job were told that they would be _____ of the manager's decision in 10 days.", options: ["engaged", "alerted", "settled", "notified"], correct: 3 }
    ],
    vocabulary: [
      { word: "overnight", meaning: "طول الليل" },
      { word: "pants / trousers", meaning: "بنطلون" },
      { word: "incredible", meaning: "لا يصدق" },
      { word: "notified", meaning: "تم إبلاغه" }
    ],
    grammar: "Negative Agreement: neither + inversion (فعل مساعد + فاعل) بعد جملة سلبية: neither do they."
  },
  {
    id: 11,
    title: "امتحان الكتاب وهجوم الوحدة",
    dialogue: [
      { speaker: "A", text: "Because he refused to study for the Book Quiz, he got a really low score.", translation: "عشان رفض يذاكر لامتحان الكتاب، خد (got) درجة واطية قوي." },
      { speaker: "B", text: "Yeah. Meanwhile, our unit attacked the enemy with lethal — deadly — force this morning.", translation: "أيوة. في نفس الوقت، الوحدة هجمت على العدو بقوة مميتة (lethal) النهاردة الصبح." },
      { speaker: "A", text: "It's absolutely essential that Joe get 80 on his next ECL, no less.", translation: "لازم جو يحصل على (get) 80 في الـ ECL الجاي، ضروري جداً." },
      { speaker: "B", text: "My son still wanted to go to the beach in spite of the heavy rain today.", translation: "ابني لسه عايز يروح البحر رغم (in spite of) الشتا الغزير النهاردة." },
      { speaker: "A", text: "Honestly, I'd be wary — cautious — of anything he tells you about that beach trip.", translation: "بصراحة أنا هكون حذر (wary) من أي كلام هيقوله عن رحلة البحر دي." }
    ],
    questions: [
      { q: "Because he refused to study for the Book Quiz, he _____ a score.", options: ["get", "got", "getting", "was get"], correct: 1 },
      { q: "We attacked the enemy with lethal force.", options: ["negligible", "minor", "deadly", "soothing"], correct: 2 },
      { q: "It is absolutely essential that Joe _____ 80 on his next ECL.", options: ["to get", "get", "got", "gets"], correct: 1 },
      { q: "My son wanted to go to the beach _____ the heavy rain.", options: ["In despite", "despite of", "in spite of", "in spite"], correct: 2 },
      { q: "I would be wary of anything he tells you.", options: ["Gullible", "accepting", "cautious", "approving"], correct: 2 }
    ],
    vocabulary: [
      { word: "lethal", meaning: "قاتل / مميت" },
      { word: "in spite of", meaning: "رغم" },
      { word: "wary", meaning: "حذر" }
    ],
    grammar: "Subjunctive Mood: بعد essential بنستخدم الفعل المجرد (get) من غير s حتى مع الغائب."
  },
  {
    id: 12,
    title: "تمرين العرض العسكري والبيروقراطية",
    dialogue: [
      { speaker: "A", text: "All the soldiers seemed so sluggish, slow and lazy, during parade practice today.", translation: "كل الجنود كانوا كسولين وبطيئين (sluggish) في تمرين العرض العسكري النهاردة." },
      { speaker: "B", text: "Tell me about it. The company had to go through so much red tape, bureaucratic procedures, just to get the plan approved.", translation: "عارف. الشركة اضطرت تعدي روتين وبيروقراطية (red tape) كتير عشان الخطة تتوافق عليها." },
      { speaker: "A", text: "I will explain to you exactly how the M-16 works, don't worry.", translation: "هوريك بالظبط الـ M-16 بيشتغل إزاي، متقلقش." },
      { speaker: "B", text: "Thanks, I really need some assistance with this job, I can't do it alone.", translation: "شكراً، محتاج مساعدة (assistance) فعلاً في الشغلانة دي، مش قادر لوحدي." },
      { speaker: "A", text: "No problem — a good leader must have confidence in his soldiers anyway.", translation: "عادي — القائد الكويس لازم يبقى عنده ثقة في (confidence in) جنوده أصلاً." }
    ],
    questions: [
      { q: "All of the soldiers seemed sluggish during the parade practice.", options: ["Energetic", "slow and lazy", "vivacious", "vigorous"], correct: 1 },
      { q: "The company had to go through a lot of red tape to get its plans approved.", options: ["Unexpected cost increases", "quick preliminary meetings", "angry protests by workers", "bureaucratic procedures"], correct: 3 },
      { q: "I will _____ about the M-16 and how to disassemble it.", options: ["explain you", "going to explain you", "explain to you", "splain you"], correct: 2 },
      { q: "Tom needs some _____ to do this job, he can't work by himself.", options: ["confidence", "laziness", "tolerance", "assistance"], correct: 3 },
      { q: "A leader must have a lot of confidence _____ his soldiers.", options: ["Of", "at", "in", "to"], correct: 2 }
    ],
    vocabulary: [
      { word: "sluggish", meaning: "بطيء وكسول" },
      { word: "red tape", meaning: "روتين حكومي معقد" },
      { word: "assistance", meaning: "مساعدة" }
    ],
    grammar: "Fixed Preposition: confidence دايماً بتيجي معاها in (confidence in)."
  },
  {
    id: 13,
    title: "تعلم اللغة الثانية والغلاف الجوي",
    dialogue: [
      { speaker: "A", text: "According to that paragraph, second language learning demands hard work — it's not easy at all.", translation: "البراجراف بيقول تعلم لغة تانية بيحتاج مجهود كبير (hard work)، مش سهل خالص." },
      { speaker: "B", text: "True. Also, tomorrow's meeting is compulsory — everyone must attend.", translation: "صح. وكمان ميتينج بكرة إلزامي (compulsory) — لازم الكل يحضر." },
      { speaker: "A", text: "By the way, that other paragraph said the earth and atmosphere rotate together, not separately.", translation: "على فكرة، البراجراف التاني قال الأرض والغلاف الجوي بيدوروا مع بعض، مش لوحدهم." },
      { speaker: "B", text: "Interesting. Anyway, Sherry drives the most carefully out of all of us, don't you think?", translation: "حلو. بصراحة شيري هي أكتر واحدة بتسوق بحرص (the most carefully) فينا." },
      { speaker: "A", text: "Definitely — good thing too, since we always need a solid contingency plan just in case.", translation: "أكيد — كويس كده، لأننا محتاجين دايماً خطة بديلة (contingency plan) لو حصل طارئ." }
    ],
    questions: [
      { q: "According to the paragraph about learning a second language, _____", options: ["It is easy to learn a second language.", "occasional studying results in second language learning", "second language learning demands hard work", "a person needs only to listen to learn a second language"], correct: 2 },
      { q: "The meeting is compulsory. Every one _____ attend.", options: ["Must", "should", "may", "have got to"], correct: 0 },
      { q: "According to the paragraph about the atmosphere, _____", options: ["The ground is part of the atmosphere", "The earth rotates without the atmosphere", "The atmosphere rotates around the earth", "The earth and atmosphere rotate together"], correct: 3 },
      { q: "Sherry drives _____", options: ["the most carefully", "the more careful", "the most careful", "more careful"], correct: 0 },
      { q: "They have a _____ plan.", options: ["controversial", "secret", "contingency", "peace"], correct: 2 }
    ],
    vocabulary: [
      { word: "compulsory", meaning: "إلزامي" },
      { word: "contingency plan", meaning: "خطة بديلة" }
    ],
    grammar: "Superlative Adverb: بعد drives محتاجين adverb مش adjective، الصيغة الصح the most carefully."
  },
  {
    id: 14,
    title: "الأمطار الغزيرة والساعات",
    dialogue: [
      { speaker: "A", text: "The heavy rain caused a lot of destruction in the valley last night.", translation: "الشتا الغزير سبب دمار (destruction) كتير في الوادي بالليل." },
      { speaker: "B", text: "That's awful. Hey, quick question — how long is that room over there?", translation: "فظيع. بس سؤال سريع — الأوضة دي طولها قد إيه (how long)؟" },
      { speaker: "A", text: "Not sure. But look, these are clocks, right? I thought they were mirrors!", translation: "مش متأكد. بس بص، الحاجات دي ساعات (clocks) صح؟ فاكرها مرايات!" },
      { speaker: "B", text: "Ha! By the way, does Paul have any cigarettes? Tina needs more.", translation: "هه! بالمناسبة، بول عنده سجاير؟ تينا محتاجة كمان." },
      { speaker: "A", text: "No, he has none. Also, Alan wants to be an airplane mechanic, so he's going to a technical school.", translation: "لأ، معندوش ولا واحدة (none). كمان، آلان عايز يبقى ميكانيكي طيارات، فعشان كده رايح مدرسة فنية." }
    ],
    questions: [
      { q: "The heavy rain caused a lot of _____ in the valley.", options: ["reflection", "destruction", "crops", "location"], correct: 1 },
      { q: "_____ are clocks.", options: ["These", "This", "That", "The"], correct: 0 },
      { q: "_____ is that room?", options: ["How length", "What long", "How long", "What length"], correct: 2 },
      { q: "Tina needs some more cigarettes. Does Paul have any?", options: ["No, he has none", "No, he has any", "No, he doesn't have some", "yes, he has any"], correct: 0 },
      { q: "Alan wants to be an airplane mechanic, _____ he's going to a technical school.", options: ["or", "because", "if", "so"], correct: 3 }
    ],
    vocabulary: [
      { word: "destruction", meaning: "دمار" },
      { word: "none", meaning: "لا شيء منه" }
    ],
    grammar: "Demonstrative Pronoun (plural): clocks جمع فبنستخدم These مش This."
  },
  {
    id: 15,
    title: "الذخيرة وإشارات الغطاسين",
    dialogue: [
      { speaker: "A", text: "We have to determine how much ammunition the unit has before the mission.", translation: "لازم نحدد قد إيه (how much) الوحدة عندها ذخيرة قبل المهمة." },
      { speaker: "B", text: "Got it. Also, some divers use hand signals to communicate underwater, remember that.", translation: "تمام. كمان، الغطاسين بيستخدموا إشارات بالإيد (hand signals) عشان يتواصلوا تحت الميه." },
      { speaker: "A", text: "Oh, and could you adjust the volume, please? It's way too loud.", translation: "آه، وممكن تظبط (adjust) الصوت لو سمحت؟ عالي قوي كده." },
      { speaker: "B", text: "Sure. By the way, the prices at this supermarket are actually pretty reasonable.", translation: "أكيد. بالمناسبة، أسعار السوبرماركت ده فعلاً معقولة (reasonable)." },
      { speaker: "A", text: "Yeah, there's even been a nice reduction in prices lately.", translation: "أيوة، وكمان حصل تخفيض (reduction) لطيف في الأسعار مؤخراً." }
    ],
    questions: [
      { q: "We have to determine _____ ammunition the unit _____", options: ["how many – have", "how much – is have", "amount – having", "how much – has"], correct: 3 },
      { q: "Some divers may use hand arm _____", options: ["lanes", "limits", "signals", "cautions"], correct: 2 },
      { q: "It's too loud. Could you _____ the volume, please, by turning it down?", options: ["install", "adjust", "shut down", "assemble"], correct: 1 },
      { q: "The prices at this supermarket are not high. They are _____", options: ["Sharp", "busy", "reasonable", "boring"], correct: 2 },
      { q: "There has been a _____ in that store's prices.", options: ["Reduction", "reduce", "reduces", "to reduce"], correct: 0 }
    ],
    vocabulary: [
      { word: "adjust", meaning: "يضبط" },
      { word: "reasonable", meaning: "معقول" },
      { word: "reduction", meaning: "تخفيض" }
    ],
    grammar: "Uncountable Nouns: ammunition غير معدود، فبنستخدم how much مع has (مفرد يتبع the unit)."
  },
  {
    id: 16,
    title: "رفع اليد ودوا الكحة",
    dialogue: [
      { speaker: "A", text: "When you want to ask a question, just raise your hand, okay?", translation: "لما تحب تسأل سؤال، بس ارفع إيدك (raise your hand)، تمام؟" },
      { speaker: "B", text: "Will do. Ugh, this medicine tastes so bad, I can barely swallow it.", translation: "تمام. الدوا ده طعمه وحش (bad) قوي، بالكاد أقدر أبلعه." },
      { speaker: "A", text: "I heard the parachutist hurt his legs pretty badly when he landed on the rocks.", translation: "سمعت إن المظلاتي اتصاب (hurt) في رجليه لما نزل على الصخور." },
      { speaker: "B", text: "Ouch. Anyway, to get to the store, go three blocks, then turn left.", translation: "آآه. على فكرة، عشان توصل المحل، امشي 3 مقاطع (three blocks) وبعدين لف شمال." },
      { speaker: "A", text: "Oh, and one Echo Company private shoplifted from the BX yesterday — can you believe that?", translation: "آه، وواحد جندي من سرية إيكو سرق (shoplifted) من الـ BX إمبارح — تصدق؟" }
    ],
    questions: [
      { q: "When you want to ask a question, _____ your hand.", options: ["replace", "collect", "remove", "raise"], correct: 3 },
      { q: "The medicine tastes _____", options: ["bad", "badly", "well", "worse"], correct: 0 },
      { q: "The parachutist _____ his legs when he landed roughly among some rocks.", options: ["hurt", "hurting", "hurts", "hurted"], correct: 0 },
      { q: "Go three _____, then turn left.", options: ["Moments", "gardens", "parks", "blocks"], correct: 3 },
      { q: "One Echo Company private _____ from the BX.", options: ["Shoplifted", "shoplift", "was shoplifted", "was shoplift"], correct: 0 }
    ],
    vocabulary: [
      { word: "raise your hand", meaning: "يرفع إيده" },
      { word: "blocks", meaning: "مقاطع شارع" },
      { word: "shoplifted", meaning: "سرق من محل" }
    ],
    grammar: "Linking Verb + Adjective: بعد أفعال الحواس زي taste بنستخدم adjective مش adverb (tastes bad)."
  },
  {
    id: 17,
    title: "القطر والطيارة والتزوير",
    dialogue: [
      { speaker: "A", text: "A train is faster than a car, but an airplane is the fastest of all, obviously.", translation: "القطر أسرع من العربية، بس الطيارة هي الأسرع (the fastest) من الكل طبعاً." },
      { speaker: "B", text: "True. I anticipate going back home in a few weeks myself.", translation: "صح. أنا كمان متوقع (anticipate) إني هرجع البيت خلال كام أسبوع." },
      { speaker: "A", text: "The general ordered that Sgt Smith be in his office at 0700 sharp.", translation: "الجنرال أمر إن الرقيب سميث يكون (be) في مكتبه الساعة 7 بالظبط." },
      { speaker: "B", text: "Yikes. Did you hear that young woman falsified the document on purpose?", translation: "ياساتر. سمعت إن الست دي زوّرت (falsified) الورقة عن قصد؟" },
      { speaker: "A", text: "Crazy. Meanwhile, Mary can write with both hands — she's completely ambidextrous.", translation: "جنان. ماري كمان تقدر تكتب بإيديها الاتنين — هي ماهرة بالإيدين (ambidextrous)." }
    ],
    questions: [
      { q: "A train is faster than a car but an airplane is _____", options: ["the fastest", "the faster", "the fast", "faster than"], correct: 0 },
      { q: "I anticipate _____ back home in a few weeks.", options: ["To be go", "going", "to go", "go"], correct: 1 },
      { q: "The general ordered that Sgt Smith _____ in his office at 0700.", options: ["Be", "was", "being", "is"], correct: 0 },
      { q: "The young woman purposely signed the wrong name on the document. She _____ the document.", options: ["Falsification", "falsify", "false", "falsified"], correct: 3 },
      { q: "Mary can write equally well with both her left and right hands. She is _____", options: ["Amphibious", "ambiguous", "ambidextrous", "ambulatory"], correct: 2 }
    ],
    vocabulary: [
      { word: "anticipate", meaning: "يتوقع" },
      { word: "falsified", meaning: "زوّر" },
      { word: "ambidextrous", meaning: "يستخدم يديه بمهارة" }
    ],
    grammar: "Subjunctive after ordered / verbs of command: الفعل بعدها بيرجع لصورته الأساسية (be)."
  },
  {
    id: 18,
    title: "ستيف والمظهر المثالي",
    dialogue: [
      { speaker: "A", text: "Steve has so many outstanding attributes — his appearance is always impeccable, neat and clean.", translation: "ستيف عنده صفات مميزة (outstanding) كتير — شكله دايماً مثالي (impeccable) ونضيف." },
      { speaker: "B", text: "True. Hey, thanks for sticking your neck out for me last week, taking that risk to help me out.", translation: "صح. بالمناسبة، شكراً إنك خاطرت (stuck your neck out) عشان تساعدني الأسبوع اللي فات." },
      { speaker: "A", text: "No problem. Just make sure your report stays succinct, clear and brief, okay?", translation: "عادي. بس خلي الريبورت بتاعك موجز وواضح (succinct)، تمام؟" },
      { speaker: "B", text: "Got it. By the way, Larry said he's going to foot the bill tonight, pay for everyone.", translation: "تمام. لاري قال هو اللي هيدفع الحساب (foot the bill) الليلة عن الكل." },
      { speaker: "A", text: "Nice! Speaking of business, Cuba really does have the best cigar factories in the world.", translation: "تمام! بالمناسبة، كوبا فعلاً عندها أحسن مصانع سيجار (cigar factories) في العالم." }
    ],
    questions: [
      { q: "Steve has many outstanding attributes, not the least of which is his impeccable appearance.", options: ["Steve would be outstanding if he weren't sloppy.", "Steve looks bad most of the time.", "Steve is usually neat and clean.", "Steve has no outstanding attributes."], correct: 2 },
      { q: "Thanks for sticking your neck out for me.", options: ["Thanks for deciding for me.", "Thanks for taking my place", "thanks for taking the risk to help me.", "thanks for letting me use your office."], correct: 2 },
      { q: "I want your report about the helicopter repairs to be as succinct as possible.", options: ["clear and brief", "vague and pointless", "erroneous and flawed", "long and wordy"], correct: 0 },
      { q: "Larry is going to foot the bill.", options: ["Leave the restaurant without paying", "Make everyone pay him later", "lend everyone some money", "pay for everyone"], correct: 3 },
      { q: "Cuba has the best _____ in the world.", options: ["cigars factory", "cigar manufactory", "cigars factories", "cigar factories"], correct: 3 }
    ],
    vocabulary: [
      { word: "impeccable", meaning: "لا تشوبه شائبة" },
      { word: "stick your neck out", meaning: "يخاطر لمساعدة حد" },
      { word: "succinct", meaning: "موجز وواضح" },
      { word: "foot the bill", meaning: "يدفع الحساب" }
    ],
    grammar: "Noun Modifier: لما اسم بيوصف اسم تاني بيفضل مفرد (cigar factories مش cigars factories)."
  },
  {
    id: 19,
    title: "التعارف وتعليم العجلة",
    dialogue: [
      { speaker: "A", text: "Let me introduce myself — it is I who am your new teacher this semester.", translation: "خليني أعرفك بنفسي — أنا اللي هكون مدرسك الجديد الترم ده." },
      { speaker: "B", text: "Nice to meet you! My son is so awkward, clumsy, whenever he tries to ride his new bike.", translation: "تشرفنا! ابني بقى أخرق (awkward) قوي لما بيحاول يركب عجلته الجديدة." },
      { speaker: "A", text: "Ha, that's normal at first. I actually had the dog fetch the bone earlier, and even he struggled a bit.", translation: "هه، عادي في الأول. أنا خليت الكلب يجيب (fetch) العضمة بدري، وحتى هو اتعب شوية." },
      { speaker: "B", text: "Cute. So, what are your weekend plans? Americans always go window shopping on weekends, right?", translation: "ظريف. طب خططك في الويك إند إيه؟ الأمريكان دايماً بيتفرجوا على المحلات (go window shopping) في الويك إند صح؟" },
      { speaker: "A", text: "Exactly — and honestly, I'm just thirsty for success this year, so I'll probably work too.", translation: "بالظبط — وبصراحة أنا متعطش للنجاح (thirsty for success) السنة دي، فهشتغل غالباً كمان." }
    ],
    questions: [
      { q: "It is I who _____ your next teacher.", options: ["Are", "were", "am", "is"], correct: 2 },
      { q: "My son is very awkward when he tries to ride his new bicycle.", options: ["Clumsy", "proficient", "irritated", "graceful"], correct: 0 },
      { q: "I had the dog _____ the bone.", options: ["Fetch", "fetching", "fetches", "fetched"], correct: 0 },
      { q: "Americans always _____ on weekends.", options: ["Went window shopping", "have window shop", "are window shop", "go window shopping"], correct: 3 },
      { q: "John is _____ success.", options: ["thirsty", "thirsty for", "thirsty of", "thirsty in"], correct: 1 }
    ],
    vocabulary: [
      { word: "awkward", meaning: "أخرق" },
      { word: "fetch", meaning: "يجيب" },
      { word: "go window shopping", meaning: "يتفرج على المحلات" },
      { word: "thirsty for", meaning: "متعطش لـ" }
    ],
    grammar: "Pronoun 'I' + am: الضمير I دايماً بياخد am حتى في جمل معقدة (it is I who am)."
  },
  {
    id: 20,
    title: "الهجرة الفاشلة والهرطقة القديمة",
    dialogue: [
      { speaker: "A", text: "After all those visa attempts, his immigration plans just fizzled — completely failed.", translation: "بعد كل محاولات الفيزا دي، خطط هجرته فشلت تماماً (fizzled)." },
      { speaker: "B", text: "That's rough. Back in ancient times, ideas like his about religion were considered pure heresy.", translation: "قاسي. في الأزمنة القديمة، أفكار زي بتاعته عن الدين كانت تعتبر هرطقة (heresy)." },
      { speaker: "A", text: "Speaking of history, Sgt Don lobbed — threw — several grenades around the platoon's position back in the war.", translation: "بالمناسبة عن التاريخ، الرقيب دون رمى (lobbed) شوية قنابل حوالين موقع الفصيلة زمان في الحرب." },
      { speaker: "B", text: "Wow. Did you also hear that story about his alleged affairs? It really smeared, tainted, his good name.", translation: "واو. سمعت عن قصة علاقاته المزعومة؟ فعلاً لطخت (smeared) سمعته." },
      { speaker: "A", text: "Yeah. Anyway, my refusal to that offer is unequivocal — totally clear, no doubts.", translation: "أيوة. على العموم، رفضي للعرض ده واضح تماماً (unequivocal)، من غير أي شك." }
    ],
    questions: [
      { q: "After numerous times trying to apply for a visa, his immigration fizzled.", options: ["Impressed", "succeeded", "failed", "worked"], correct: 2 },
      { q: "In those ancient times his ideas about religion were considered _____", options: ["Hearsay", "heresy", "heritage", "hereafter"], correct: 1 },
      { q: "Sgt Don lobbed several grenades around the platoon position.", options: ["stole", "saved", "hid", "threw"], correct: 3 },
      { q: "The story about his alleged affairs smeared his good name.", options: ["Quaffed", "tainted", "dawdled", "rallied"], correct: 1 },
      { q: "My refusal to this offer is unequivocal.", options: ["Hazy", "ambivalent", "clear", "obscure"], correct: 2 }
    ],
    vocabulary: [
      { word: "fizzled", meaning: "فشل تماماً" },
      { word: "heresy", meaning: "هرطقة" },
      { word: "lobbed", meaning: "رمى" },
      { word: "smeared", meaning: "لطخ سمعة" },
      { word: "unequivocal", meaning: "واضح تماماً" }
    ],
    grammar: "لا توجد قاعدة نحوية مباشرة في هذه المجموعة، التركيز على vocabulary / synonyms متقدمة."
  },
  {
    id: 21,
    title: "استقالة جون والمحسوبية",
    dialogue: [
      { speaker: "Alex", text: "John finally quit his job — turns out promotions there were all about nepotism, not actual ability.", translation: "جون استقال أخيراً من شغله — طلع الترقيات هناك كانت كلها محسوبية (nepotism)، مش على الكفاءة." },
      { speaker: "Jamie", text: "Wow, that takes some nerve to admit. Did he have the courage to confront his boss first?", translation: "واو، ده محتاج جرأة (nerve) إنه يعترف بكده. هل كانت عنده الشجاعة إنه يواجه مديره الأول؟" },
      { speaker: "Alex", text: "Kind of. He said his ex-coworker's perfume just lingered in the office the whole time he worked there — drove him crazy.", translation: "شوية. قال إن ريحة عطر زميلته السابقة كانت لسه باقية (lingered) في المكتب طول ما اشتغل هناك — كانت بتجننه." },
      { speaker: "Jamie", text: "Random, but okay. Hey, did you hurt your shin? You can barely kneel down.", translation: "كلام غريب، بس تمام. حاجة تانية، إنت واخد ضربة في قصبة رجلك (shin)؟ بالكاد تقدر تركع." },
      { speaker: "Alex", text: "Yeah, and honestly I'm still perplexed — totally baffled — about how it even happened.", translation: "أيوة، وبصراحة لسه حاسس بحيرة (perplexed) قوي، مش فاهم ده حصل إزاي." }
    ],
    questions: [
      { q: "John left his position because advancement was based on nepotism rather than ability.", options: ["Performance", "caliber", "creativity", "favoritism to a relative"], correct: 3 },
      { q: "Don't you have the nerve to tell the truth?", options: ["Courage", "cowardice", "shyness", "timidity"], correct: 0 },
      { q: "The young man found himself unable to resist the magic effect of the perfume as it _____ in the air.", options: ["Crawled", "lingered", "wandered", "misled"], correct: 1 },
      { q: "He hurt his shin, so it is hard for him to _____", options: ["Eat", "yawn", "speak", "kneel"], correct: 3 },
      { q: "Perplexed about the assignments, John could not deal with such an arduous task. He was _____", options: ["Certain", "confident", "amused", "baffled"], correct: 3 }
    ],
    vocabulary: [
      { word: "nepotism", meaning: "محسوبية" },
      { word: "nerve", meaning: "جرأة" },
      { word: "lingered", meaning: "بقيت لفترة" },
      { word: "shin", meaning: "قصبة الساق" },
      { word: "perplexed", meaning: "محتار / مرتبك" }
    ],
    grammar: "لا توجد قاعدة نحوية أساسية في هذه المجموعة، التركيز على المفردات والمرادفات (synonyms)."
  },
  {
    id: 22,
    title: "مشاكل العم المالية",
    dialogue: [
      { speaker: "Jamie", text: "How's your uncle feeling these days?", translation: "عمك عامل إزاي في الفترة دي؟" },
      { speaker: "Alex", text: "He's better, thanks. Actually, he was up a creek without a paddle last month — real financial trouble.", translation: "أحسن، شكراً. أصلاً كان في ورطة كبيرة (up a creek without a paddle) الشهر اللي فات — مشكلة مادية حقيقية." },
      { speaker: "Jamie", text: "What happened?", translation: "حصل إيه بالظبط؟" },
      { speaker: "Alex", text: "Someone ransacked his store, searched through everything, and then the new tariff, basically a tax hike, hit his business too.", translation: "حد فتش (ransacked) محله بالكامل، وبعدين الجمرك الجديد (tariff)، يعني زيادة ضريبة، أثر على شغله كمان." },
      { speaker: "Jamie", text: "That's rough. No wonder this whole conversation feels smothering, suffocating.", translation: "ده قاسي. مش غريب إن الكلام ده كله حاسس إنه خانق (smothering)." }
    ],
    questions: [
      { q: "How's your uncle feeling?", options: ["He's better, thanks.", "He isn't here", "Certainly, he is", "No, he isn't"], correct: 0 },
      { q: "She was up a creek without a paddle.", options: ["angry", "in time", "in prosperity", "in difficulty"], correct: 3 },
      { q: "She forced her way into the house and ransacked all my drawers.", options: ["Presided", "raided", "struck", "searched thoroughly"], correct: 3 },
      { q: "They imposed a very high tariff on cosmetics.", options: ["Tax", "division", "coalition", "decoration"], correct: 0 },
      { q: "The stuffy room is smothering.", options: ["Hairsplitting", "skidding", "suffocating", "ventilating"], correct: 2 }
    ],
    vocabulary: [
      { word: "up a creek without a paddle", meaning: "في ورطة كبيرة" },
      { word: "ransacked", meaning: "فتش بالكامل" },
      { word: "tariff", meaning: "ضريبة جمركية" },
      { word: "smothering", meaning: "خانق" }
    ],
    grammar: "لا توجد قاعدة نحوية أساسية في هذه المجموعة، التركيز على vocabulary والتعبيرات الاصطلاحية."
  },
  {
    id: 23,
    title: "حادثة الطائرة والتحقيق",
    dialogue: [
      { speaker: "Alex", text: "Did you hear? Only three people survived — were saved — from that crash.", translation: "سمعتي؟ بس 3 ناس نجوا (survived) من الحادثة دي." },
      { speaker: "Jamie", text: "I heard. It's evident, totally clear, the pilot made a mistake.", translation: "سمعت. واضح جداً (evident) إن الطيار غلط." },
      { speaker: "Alex", text: "Yeah, smoking was even flagged as a threat, a real danger, beforehand.", translation: "أيوة، والتدخين كان متعلّم عليه كتهديد (threat) حقيقي من الأول." },
      { speaker: "Jamie", text: "Whatever became of the investigation, by the way?", translation: "طيب حصل إيه في التحقيق (what became of) بالمناسبة؟" },
      { speaker: "Alex", text: "Still going. People have real concerns, real worries, about safety now.", translation: "لسه مستمر. الناس عندها قلق حقيقي (concerns) بخصوص السلامة دلوقتي." }
    ],
    questions: [
      { q: "Only three people survived the accident.", options: ["Were reversed", "were sustained", "were saved", "were killed"], correct: 2 },
      { q: "It's evident that she was involved in the murder.", options: ["Disturbing", "clear", "doubtful", "ambiguous"], correct: 1 },
      { q: "Smoking is a real threat to general health.", options: ["Pain", "warning", "defect", "danger"], correct: 3 },
      { q: "What happened to General Robert?", options: ["became of", "felt to", "became", "created"], correct: 0 },
      { q: "They have some concerns about their scores.", options: ["Doubts", "graduation", "hopes", "worries"], correct: 3 }
    ],
    vocabulary: [
      { word: "survived", meaning: "نجا" },
      { word: "evident", meaning: "واضح" },
      { word: "threat", meaning: "تهديد / خطر" },
      { word: "what became of", meaning: "إيه اللي حصل لـ" },
      { word: "concerns", meaning: "مخاوف" }
    ],
    grammar: "لا توجد قاعدة نحوية أساسية في هذه المجموعة، التركيز على vocabulary والتعبيرات."
  },
  {
    id: 24,
    title: "صاحب البيت والسخان",
    dialogue: [
      { speaker: "Jamie", text: "I need to convince, or persuade, my landlord to fix the heater.", translation: "أنا محتاج أقنع (convince) صاحب البيت إنه يصلح السخان." },
      { speaker: "Alex", text: "Drivers should obey traffic laws, rules — but landlords don't seem to follow any.", translation: "السواقين المفروض يلتزموا بقوانين المرور (laws) — بس أصحاب البيوت مش شكلهم بيلتزموا بأي حاجة." },
      { speaker: "Jamie", text: "True. Also, Andy has a fever, a high temperature, so he's out today.", translation: "صح. كمان أندي عنده حرارة عالية (fever)، فهو مش جاي الشغل النهاردة." },
      { speaker: "Alex", text: "Were I you, I wouldn't stress about it.", translation: "لو كنت مكانك (were I you)، ماكنتش هتوتر بخصوص الموضوع." },
      { speaker: "Jamie", text: "I found Anna's flat in spite of losing her address, so I'll manage this landlord thing too.", translation: "أنا لقيت شقة آنا رغم (in spite of) إني ضيعت عنوانها، فهدبر موضوع صاحب البيت ده كمان." }
    ],
    questions: [
      { q: "I need to convince them of our opinion about the job.", options: ["Persuade", "advise", "appoint", "agree"], correct: 0 },
      { q: "Drivers should obey traffic laws.", options: ["Rules", "policemen", "streets", "signals"], correct: 0 },
      { q: "Andy has a fever and won't come to work today.", options: ["Normal temperature", "high temperature", "regular temperature", "low temperature"], correct: 1 },
      { q: "_____ I you, I wouldn't do that.", options: ["Was", "Would be", "Am", "Were"], correct: 3 },
      { q: "I found Anna's flat _____ losing her address.", options: ["In spite of", "although", "though", "if"], correct: 0 }
    ],
    vocabulary: [
      { word: "convince", meaning: "يقنع" },
      { word: "fever", meaning: "حرارة عالية" },
      { word: "in spite of", meaning: "رغم" }
    ],
    grammar: "Second Conditional: Were I you = لو كنت مكانك، بنستخدم were مع كل الضمائر في الشرط الافتراضي."
  },
  {
    id: 25,
    title: "الكمان وجيران سميث",
    dialogue: [
      { speaker: "Alex", text: "The violin is one of my favorite instruments, even though it's hard to play well.", translation: "الكمان (violin) من أكتر الآلات اللي بحبها، بالرغم إنه صعب تعزف عليه كويس." },
      { speaker: "Jamie", text: "Nice. Have you still got last Saturday's newspaper?", translation: "حلو. لسه معاك جريدة يوم السبت اللي فات (Saturday's)؟" },
      { speaker: "Alex", text: "I think so. Oh, and did you see the Smith's house down the street? Beautiful.", translation: "أعتقد أيوة. آه، وشفت بيت آل سميث (Smith's) في آخر الشارع؟ جميل." },
      { speaker: "Jamie", text: "Do you mind taking a walk over there with me later?", translation: "تمانع (mind) نمشي هناك مع بعض بعدين؟" },
      { speaker: "Alex", text: "Sure — what would you have done if you had seen an accident on the way, though?", translation: "أكيد — بس لو كنت شفت حادثة في الطريق، كنت هتعمل إيه (would you have done)؟" }
    ],
    questions: [
      { q: "_____ is one of my favorite instruments, although it is a difficult instrument to play well.", options: ["The violin", "some violin", "any violin", "A violin"], correct: 0 },
      { q: "Have you still got last _____ newspaper?", options: ["Saturdays'", "Saturday", "Saturdays", "Saturday's"], correct: 3 },
      { q: "The _____ house is beautiful.", options: ["Smith", "Smiths's", "Smith's", "Smiths'"], correct: 2 },
      { q: "Do you mind _____ it with you?", options: ["To take", "taking", "take", "takes"], correct: 1 },
      { q: "What _____ if you had seen an accident on your way here?", options: ["would have you done", "would you had done", "would you have done", "would you do"], correct: 2 }
    ],
    vocabulary: [
      { word: "violin", meaning: "كمان" },
      { word: "'s (possessive)", meaning: "علامة الملكية" },
      { word: "mind + gerund", meaning: "مانع من (فعل)" }
    ],
    grammar: "Third Conditional: would have + past participle للتعبير عن نتيجة افتراضية في الماضي (what would you have done if you had seen)."
  }
];


// ==================== STATE ====================
const AppState = {
    currentConversationId: null,
    isPlaying: false,
    isPaused: false,
    currentUtteranceIndex: 0,
    autoPlay: true,
    voices: [],
    selectedVoice: null,
    completedConversations: new Set(),
    speechQueue: []
};

// ==================== DOM ELEMENTS ====================
const els = {
    listView: document.getElementById('listView'),
    dialogueView: document.getElementById('dialogueView'),
    dialogueTitle: document.getElementById('dialogueTitle'),
    dialogueContent: document.getElementById('dialogueContent'),
    questionsList: document.getElementById('questionsList'),
    vocabList: document.getElementById('vocabList'),
    grammarContent: document.getElementById('grammarContent'),
    searchBox: document.getElementById('searchBox'),
    backBtn: document.getElementById('backBtn'),
    playBtn: document.getElementById('playBtn'),
    stopBtn: document.getElementById('stopBtn'),
    nextBtn: document.getElementById('nextBtn'),
    controlBar: document.getElementById('controlBar'),
    statusText: document.getElementById('statusText'),
    autoPlayToggle: document.getElementById('autoPlayToggle'),
    progressText: document.getElementById('progressText'),
    progressFill: document.getElementById('progressFill')
};

// ==================== STORAGE ====================
const Storage = {
    KEY: 'alcpt_premium_state',
    save() {
        const data = {
            lastConversationId: AppState.currentConversationId,
            completed: Array.from(AppState.completedConversations),
            autoPlay: AppState.autoPlay
        };
        localStorage.setItem(this.KEY, JSON.stringify(data));
    },
    load() {
        try {
            const raw = localStorage.getItem(this.KEY);
            if (raw) {
                const data = JSON.parse(raw);
                if (data.completed) AppState.completedConversations = new Set(data.completed);
                if (data.autoPlay !== undefined) AppState.autoPlay = data.autoPlay;
                return data.lastConversationId || null;
            }
        } catch (e) { console.error('Storage load error:', e); }
        return null;
    }
};

// ==================== SPEECH ENGINE ====================
const SpeechEngine = {
    synth: window.speechSynthesis,
    
    init() {
        // Load voices
        const loadVoices = () => {
            AppState.voices = this.synth.getVoices();
            // Prefer premium US English voices
            const preferred = ['Samantha', 'Karen', 'Victoria', 'Alex', 'Fred', 'Google US English', 'Microsoft Zira'];
            AppState.selectedVoice = AppState.voices.find(v => 
                preferred.some(p => v.name.includes(p)) && v.lang.startsWith('en-US')
            ) || AppState.voices.find(v => v.lang.startsWith('en-US')) || AppState.voices[0];
        };
        
        loadVoices();
        if (speechSynthesis.onvoiceschanged !== undefined) {
            speechSynthesis.onvoiceschanged = loadVoices;
        }
    },

    cleanText(text) {
        // Remove speaker labels like "A:", "B:", "Man:", "Woman:"
        return text.replace(/^[A-Z][a-z]*:\s*/g, '').trim();
    },

    speak(text, onStart, onEnd) {
        if (!this.synth) {
            console.warn('Speech synthesis not supported');
            if (onEnd) setTimeout(onEnd, 1000);
            return;
        }

        // Cancel any ongoing speech
        this.synth.cancel();

        const utterance = new SpeechSynthesisUtterance(this.cleanText(text));
        utterance.voice = AppState.selectedVoice;
        utterance.rate = 0.88; // Slightly slower for comprehension
        utterance.pitch = 1.0;
        utterance.volume = 1.0;
        utterance.lang = 'en-US';

        utterance.onstart = () => { if (onStart) onStart(); };
        utterance.onend = () => { if (onEnd) onEnd(); };
        utterance.onerror = (e) => { 
            console.error('Speech error:', e); 
            if (onEnd) onEnd(); 
        };

        this.synth.speak(utterance);
        return utterance;
    },

    stop() {
        if (this.synth) this.synth.cancel();
    }
};

// ==================== UI RENDERERS ====================
const UI = {
    renderList(filter = '') {
        els.listView.innerHTML = '';
        const filtered = CONVERSATIONS_DATA.filter(c => 
            c.title.toLowerCase().includes(filter.toLowerCase()) ||
            c.dialogue.some(u => u.text.toLowerCase().includes(filter.toLowerCase())) ||
            c.dialogue.some(u => u.translation.includes(filter))
        );

        if (filtered.length === 0) {
            els.listView.innerHTML = `
                <div class="empty-state">
                    <div style="font-size: 3rem; margin-bottom: 12px;">🔍</div>
                    <div>لا توجد نتائج مطابقة للبحث</div>
                </div>
            `;
            return;
        }

        filtered.forEach(conv => {
            const isCompleted = AppState.completedConversations.has(conv.id);
            const card = document.createElement('div');
            card.className = `conv-card ${isCompleted ? 'completed' : ''}`;
            card.innerHTML = `
                <span class="conv-number">#${conv.id}</span>
                <div class="conv-title">${conv.title}</div>
                <div class="conv-preview">${conv.dialogue[0].text}</div>
            `;
            card.addEventListener('click', () => App.openConversation(conv.id));
            els.listView.appendChild(card);
        });

        UI.updateProgress();
    },

    renderDialogue(conv) {
        els.dialogueTitle.textContent = `${conv.id}. ${conv.title}`;
        els.dialogueContent.innerHTML = '';

        conv.dialogue.forEach((u, idx) => {
            const div = document.createElement('div');
            div.className = 'utterance';
            div.dataset.index = idx;
            div.innerHTML = `
                <span class="speaker-label speaker-${u.speaker.toLowerCase()}">المتحدث ${u.speaker}</span>
                <div class="utterance-text">${u.text}</div>
                <div class="utterance-translation">${u.translation}</div>
            `;
            els.dialogueContent.appendChild(div);
        });

        // Render questions
        els.questionsList.innerHTML = conv.questions.map((q, qi) => `
            <div class="question-item">
                <div class="question-text">${qi + 1}. ${q.q}</div>
                <div class="options">
                    ${q.options.map((opt, oi) => `
                        <div class="option ${oi === q.correct ? 'correct' : ''}" onclick="this.classList.toggle('revealed')">
                            ${String.fromCharCode(65 + oi)}. ${opt}
                        </div>
                    `).join('')}
                </div>
            </div>
        `).join('');

        // Render vocabulary
        els.vocabList.innerHTML = conv.vocabulary.map(v => `
            <div class="vocab-item">
                <span class="vocab-word">${v.word}</span>
                <span class="vocab-meaning">${v.meaning}</span>
            </div>
        `).join('');

        // Render grammar
        els.grammarContent.innerHTML = `<div class="grammar-note">${conv.grammar}</div>`;
    },

    highlightUtterance(index, status = 'speaking') {
        const utterances = els.dialogueContent.querySelectorAll('.utterance');
        utterances.forEach((u, i) => {
            u.classList.remove('speaking', 'completed');
            if (i < index) u.classList.add('completed');
            if (i === index && status === 'speaking') {
                u.classList.add('speaking');
                u.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        });
    },

    updateProgress() {
        const total = CONVERSATIONS_DATA.length;
        const completed = AppState.completedConversations.size;
        const pct = (completed / total) * 100;
        els.progressText.textContent = `${completed} / ${total}`;
        els.progressFill.style.width = `${pct}%`;
    },

    setStatus(text, isSpeaking = false) {
        els.statusText.textContent = text;
        els.statusText.className = isSpeaking ? 'status-text speaking' : 'status-text';
    },

    updatePlayButton() {
        els.playBtn.innerHTML = AppState.isPlaying && !AppState.isPaused ? '⏸' : '▶';
    }
};

// ==================== APP CONTROLLER ====================
const App = {
    init() {
        SpeechEngine.init();
        
        // Load saved state
        const lastId = Storage.load();
        if (lastId) AppState.currentConversationId = lastId;
        
        // Setup auto-play toggle
        els.autoPlayToggle.classList.toggle('active', AppState.autoPlay);
        els.autoPlayToggle.addEventListener('click', () => {
            AppState.autoPlay = !AppState.autoPlay;
            els.autoPlayToggle.classList.toggle('active', AppState.autoPlay);
            Storage.save();
        });

        // Setup search
        els.searchBox.addEventListener('input', (e) => {
            UI.renderList(e.target.value);
        });

        // Setup controls
        els.backBtn.addEventListener('click', () => this.showList());
        els.playBtn.addEventListener('click', () => this.togglePlay());
        els.stopBtn.addEventListener('click', () => this.stop());
        els.nextBtn.addEventListener('click', () => this.nextConversation());

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            if (e.code === 'Space' && els.dialogueView.classList.contains('active')) {
                e.preventDefault();
                this.togglePlay();
            }
        });

        // Initial render
        UI.renderList();
        
        // If there's a saved conversation, optionally resume (user can click)
        if (lastId) {
            // Show subtle indicator or just stay on list
        }

        // Register service worker
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('sw.js').catch(console.error);
        }
    },

    openConversation(id) {
        const conv = CONVERSATIONS_DATA.find(c => c.id === id);
        if (!conv) return;

        AppState.currentConversationId = id;
        AppState.currentUtteranceIndex = 0;
        AppState.isPlaying = false;
        AppState.isPaused = false;

        UI.renderDialogue(conv);
        UI.updatePlayButton();
        
        els.listView.style.display = 'none';
        els.dialogueView.classList.add('active');
        els.controlBar.style.display = 'flex';
        
        UI.setStatus('اضغط ▶ للبدء');
        Storage.save();
    },

    showList() {
        this.stop();
        els.dialogueView.classList.remove('active');
        els.listView.style.display = 'grid';
        els.controlBar.style.display = 'none';
        UI.renderList(els.searchBox.value);
    },

    togglePlay() {
        if (!AppState.currentConversationId) return;
        
        if (AppState.isPlaying && !AppState.isPaused) {
            // Pause
            SpeechEngine.stop();
            AppState.isPaused = true;
            UI.setStatus('متوقف مؤقتاً');
        } else if (AppState.isPaused) {
            // Resume
            AppState.isPaused = false;
            this.playCurrentUtterance();
        } else {
            // Start fresh
            AppState.isPlaying = true;
            AppState.currentUtteranceIndex = 0;
            this.playCurrentUtterance();
        }
        UI.updatePlayButton();
    },

    playCurrentUtterance() {
        const conv = CONVERSATIONS_DATA.find(c => c.id === AppState.currentConversationId);
        if (!conv || !AppState.isPlaying) return;

        const idx = AppState.currentUtteranceIndex;
        if (idx >= conv.dialogue.length) {
            this.finishConversation();
            return;
        }

        const utterance = conv.dialogue[idx];
        UI.highlightUtterance(idx, 'speaking');
        UI.setStatus(`جارٍ النطق: المتحدث ${utterance.speaker}`, true);

        SpeechEngine.speak(utterance.text, 
            () => { /* onStart */ },
            () => { 
                // onEnd
                if (!AppState.isPlaying || AppState.isPaused) return;
                
                AppState.currentUtteranceIndex++;
                
                if (AppState.currentUtteranceIndex < conv.dialogue.length) {
                    this.playCurrentUtterance();
                } else {
                    this.finishConversation();
                }
            }
        );
    },

    finishConversation() {
        UI.highlightUtterance(AppState.currentUtteranceIndex);
        AppState.completedConversations.add(AppState.currentConversationId);
        AppState.isPlaying = false;
        AppState.isPaused = false;
        UI.updatePlayButton();
        UI.updateProgress();
        Storage.save();

        if (AppState.autoPlay) {
            UI.setStatus('اكتملت المحادثة. الانتقال للتالية بعد 3 ثوانٍ...');
            setTimeout(() => {
                if (AppState.autoPlay) this.nextConversation();
            }, 3000);
        } else {
            UI.setStatus('اكتملت المحادثة ✅');
        }
    },

    stop() {
        SpeechEngine.stop();
        AppState.isPlaying = false;
        AppState.isPaused = false;
        AppState.currentUtteranceIndex = 0;
        UI.highlightUtterance(-1);
        UI.updatePlayButton();
        UI.setStatus('تم الإيقاف');
    },

    nextConversation() {
        this.stop();
        const currentIdx = CONVERSATIONS_DATA.findIndex(c => c.id === AppState.currentConversationId);
        if (currentIdx >= 0 && currentIdx < CONVERSATIONS_DATA.length - 1) {
            const nextConv = CONVERSATIONS_DATA[currentIdx + 1];
            this.openConversation(nextConv.id);
            // Auto-start if auto-play is on
            if (AppState.autoPlay) {
                setTimeout(() => this.togglePlay(), 500);
            }
        } else {
            UI.setStatus('انتهت جميع المحادثات! 🎉');
        }
    }
};

// ==================== BOOT ====================
document.addEventListener('DOMContentLoaded', () => App.init());
