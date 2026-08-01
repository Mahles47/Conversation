const CONVERSATIONS = [
  {
    "id": 1,
    "title": "After the Storm",
    "dialogue": [
      { "speaker": "Alex", "text": "Did you hear about last night's storm? The heavy rain caused a lot of destruction in the valley.", "translation": "سمعت عن عاصفة إمبارح بليل؟ المطر الشديد تسبب في دمار كتير في الوادي." },
      { "speaker": "Jamie", "text": "Yeah — during the storm, many houses were destroyed on your street too, right?", "translation": "أيوه — أثناء العاصفة، بيوت كتير اتدمرت في شارعك أنت كمان، صح؟" },
      { "speaker": "Alex", "text": "Exactly, and the wind even blew off a large limb of the old oak tree in our yard.", "translation": "بالظبط، وكمان الرياح طيرت فرع شجرة كبير من شجرة البلوط القديمة في حوشنا." },
      { "speaker": "Jamie", "text": "That's nothing compared to what happened down in Florida, though. The general had been living there for only two months when the hurricane came through.", "translation": "ولا حاجة مقارنة باللي حصل في فلوريدا. الجنرال كان عايش هناك بقاله شهرين بس لما الإعصار ضرب المنطقة." },
      { "speaker": "Alex", "text": "I heard about that one — it destroyed many houses in the town, apparently.", "translation": "سمعت عن الموضوع ده — واضح إنه دمر بيوت كتير في المدينة." },
      { "speaker": "Jamie", "text": "After the storm subsided, people found their city to be totally in ruins.", "translation": "بعد ما العاصفة هديت، الناس لقت مدينتهم مدمّرة بالكامل وفي حالة خراب." },
      { "speaker": "Alex", "text": "Terrifying. Honestly, everyone here keeps talking about the weather's severity these days.", "translation": "شيء يرعب. بصراحة، كل الناس هنا بيتكلموا عن قسوة الجو الأيام دي." },
      { "speaker": "Jamie", "text": "No kidding. And with the terrible weather affecting the crops, prices are bound to go up as a result.", "translation": "بدون مبالغة. ومع تأثير الجو السيء على المحاصيل، الأسعار أكيد هتزيد كنتيجة لده." },
      { "speaker": "Alex", "text": "The weatherman predicts more rain tomorrow, unfortunately.", "translation": "مراصد الجو بتتوقع مطر أكتيرة بكرة، للأسف." },
      { "speaker": "Jamie", "text": "There's a possibility it might rain here too — we've been having such inclement weather lately.", "translation": "فيه إمكانية تمطر هنا كمان — الجو بقى قاسي وسيء جداً الفتره الأخيرة دي." },
      { "speaker": "Alex", "text": "Speaking of bad news, did you catch the report about the tornados in Oklahoma and Kansas? It's very bad.", "translation": "بمناسبة الأخبار السيئة، شفت التقرير عن الأعاصير في أوكلاهوما وكانساس؟ الموضوع سيء جداً." },
      { "speaker": "Jamie", "text": "Yeah, apparently that tornado had winds whirling at over 100 mph.", "translation": "أيوه، واضح إن الإعصار ده كان فيه رياح بتدور بسرعة أكتر من 100 ميل في الساعة." },
      { "speaker": "Alex", "text": "Insane. My son still wanted to go to the beach in spite of the heavy rain that day, if you can believe it.", "translation": "جنون! ابني كان لسه عايز يروح الشاطئ بالرغم من المطر الغزير في اليوم ده، تخيل؟" },
      { "speaker": "Jamie", "text": "Kids never care about the weather, honestly. There's a man who actually got lost in a blizzard and died of exposure to the elements last winter — that's the real danger.", "translation": "الأطفال مابيهتموش بالجو بصراحة. ده فيه راجل تاه في عاصفة ثلجية ومات من التعرض للظروف الجوية الشتاء اللي فات — ده الخطر الحقيقي." },
      { "speaker": "Alex", "text": "The forecaster said it would be 95 degrees and sunny this morning — clearly meant the forecast, not how it actually turned out.", "translation": "مؤشر الجو قال إنها هتكون 95 درجة ومشمش الصبح — كان يقصد النشرة طبعاً، مش اللي حصل في الحقيقة." },
      { "speaker": "Jamie", "text": "That's the news for you. Stay safe out there.", "translation": "هي دي الأخبار! خلي بالك من نفسك." }
    ]
  },
  {
    "id": 2,
    "title": "Training Day at Base",
    "dialogue": [
      { "speaker": "Mitchell", "text": "By next month, I will have been in the navy for 22 years, you know.", "translation": "لغاية الشهر الجاي، هكون قضيت 22 سنة في البحرية، أنت عارف." },
      { "speaker": "Cole", "text": "Wow, that long. I just completed a course in the fundamentals of flight mechanics myself.", "translation": "واو، كل المدة دي! أنا لسه مخلص دورة في أساسيات ميكانيكا الطيران بنفسي." },
      { "speaker": "Mitchell", "text": "Nice. Did you hear the tired soldier actually dropped off during the briefing yesterday?", "translation": "حلو. سمعت إن الجندي التعبان نام فعلاً أثناء الإيجاز إمبارح؟" },
      { "speaker": "Cole", "text": "Ha, no wonder — all the soldiers seemed sluggish during parade practice all week.", "translation": "هههه مش غريبة — كل الجند كان باين عليهم الكسل والخمول أثناء تدريب العرض طول الأسبوع." },
      { "speaker": "Mitchell", "text": "True. A leader has to have a lot of confidence in his soldiers though, even on rough days.", "translation": "حقيقي. القائد لازم يكون عنده ثقة كبيرة في جنوده، حتى في الأيام الصعبة." },
      { "speaker": "Cole", "text": "Speaking of which, we have to determine how much ammunition the unit has before the next mission.", "translation": "بمناسبة الموضوع ده، لازم نحدد كمية الذخيرة اللي مع الوحدة قبل المهمة الجاية." },
      { "speaker": "Mitchell", "text": "Right. The general ordered that Sgt Smith be in his office at 0700 sharp about that.", "translation": "صح. الجنرال أمر إن الرقيب سميث يكون في مكتبه الساعة 0700 بالظبط عشان الموضوع ده." },
      { "speaker": "Cole", "text": "I heard Sgt Don lobbed several grenades around the platoon's position during the last exercise.", "translation": "سمعت إن الرقيب دون حدف عدة قنابل يدوية حول موقع الفصيلة أثناء التدريب الأخير." },
      { "speaker": "Mitchell", "text": "Yeah, and the skirmish had hardly begun when we ran out of ammo completely.", "translation": "أيوه، والمناوشة كانت يادوب بدأت لما الذخيرة خلصت مننا بالكامل." },
      { "speaker": "Cole", "text": "That's rough. At least the commander told me I was the best in my class afterward.", "translation": "حاجة صعبة. على الأقل القائد قال لي إني كنت الأفضل في دفعتي بعد كده." },
      { "speaker": "Mitchell", "text": "Nice. Did you also hear our position was overrun by the enemy last night?", "translation": "جميل. سمعت كمان إن موقعنا اجتاحه العدو إمبارح بليل؟" },
      { "speaker": "Cole", "text": "What? Our positions were overrun too, apparently.", "translation": "إيه؟ مواكعنا إحنا كمان تم اجتياحها على ما يبدو." },
      { "speaker": "Mitchell", "text": "The final thing to do now is reconsolidate the troops before dawn.", "translation": "الحاجة الأخيرة اللي لازم نعملها دلوقتي هي إعادة تجميع وتماسك القوات قبل الفجر." },
      { "speaker": "Cole", "text": "Agreed. You should report to the army headquarters ASAP and let them know.", "translation": "متفق معاك. لازم تبلغ قيادة الجيش في أسرع وقت وتعرفهم." },
      { "speaker": "Mitchell", "text": "Will do. Several soldiers were wounded during the battle, unfortunately.", "translation": "هعمل كده. للأسف فيه كذا جندي اتجرحوا أثناء المعركة." },
      { "speaker": "Cole", "text": "I know. Do you still live on base these days?", "translation": "أنا عارف. هو أنت لسه عايش في القاعدة الأيام دي؟" },
      { "speaker": "Mitchell", "text": "Yeah. Anyway, divide the ammo evenly among all four units before you go.", "translation": "أيوه. على العموم، وزع الذخيرة بالتساوي على الأربع وحدات قبل ما تمشي." },
      { "speaker": "Cole", "text": "Got it. The captain made some very astute comments about all this earlier, by the way.", "translation": "فهمتك. الكابتن قال ملاحظات ذكية جداً عن كل ده بدري، بالمناسبة." },
      { "speaker": "Mitchell", "text": "He usually does. Living in almost constant danger really forged an indelible bond among us all.", "translation": "هو عادته كده. العيشة في خطر مستمر تقريباً صنعت رابطة لا تمحى بينا كلنا." },
      { "speaker": "Cole", "text": "True. Stay safe out there.", "translation": "حقيقي. خلي بالك من نفسك." }
    ]
  },
  {
    "id": 3,
    "title": "The Investigation and Trial",
    "dialogue": [
      { "speaker": "Reyes", "text": "The police have been here twice already looking for you about the robbery.", "translation": "الشرطة جت هنا مرتين يدوروا عليك بخصوص سرقة الإكراه." },
      { "speaker": "Cole", "text": "I know. We're searching for clues at the scene right now.", "translation": "عارف. إحنا بندور على أدلة في مسرح الجريمة دلوقتي." },
      { "speaker": "Reyes", "text": "Did you hear the police found a white powder in his suitcase during the search?", "translation": "سمعت إن الشرطة لقت بودرة بيضا في شنطة سفره أثناء التفتيش؟" },
      { "speaker": "Cole", "text": "Yeah, and apparently they're investigating the murder of my neighbor's nephew too.", "translation": "أيوه، وواضح إنهم بيحققوا في جريمة قتل ابن أخو جاري كمان." },
      { "speaker": "Reyes", "text": "Wow. When the police arrived, the men tried to flee immediately.", "translation": "واو! أول ما الشرطة وصلت، الرجالة حاولوا يهربوا فوراً." },
      { "speaker": "Cole", "text": "Of course they did. The suspect tried to evade every question we asked him.", "translation": "أكيد. المتهم حاول يتهرب من كل سؤال سألناهوله." },
      { "speaker": "Reyes", "text": "He also denied having any involvement in the crime at first.", "translation": "هو كمان أنكر إن ليه أي علاقة بالجريمة في الأول." },
      { "speaker": "Cole", "text": "Typical. Then he provided an alibi for the night of the crime, if you can believe that.", "translation": "المعتاد! وبعدين قدم حجة غياب (إثبات إنه كان في مكان تاني) ليلة الجريمة، تخيل ده." },
      { "speaker": "Reyes", "text": "We're closer to having a suspect now that the autopsy was completed.", "translation": "إحنا بقينا أقرب لتحديد متهم دلوقتي بعد ما التشريح اكتمل." },
      { "speaker": "Cole", "text": "Good. The detective reported that the homicide had occurred prior to the accident, by the way.", "translation": "كويس. المحقق بلغ إن جريمة القتل حصلت قبل الحادثة، بالمناسبة." },
      { "speaker": "Reyes", "text": "Interesting. It's evident that she was involved in the murder too.", "translation": "مثير للإهتمام. واضح جداً إنها كانت متورطة في القتل هي كمان." },
      { "speaker": "Cole", "text": "She was accused of killing her husband, wasn't she?", "translation": "هي اتاتهمت بقتل جوزها، صح؟" },
      { "speaker": "Reyes", "text": "Yeah. Everyone suspected that Carol herself had called the police that night.", "translation": "أيوه. كل الناس كانت شاكة إن كارول نفسها هي اللي اتصلت بالشرطة الليلة دي." },
      { "speaker": "Cole", "text": "As a result of the investigation, several people were charged with theft as well.", "translation": "كنتيجة للتحقيق، اتوجهت تهمة السرقة لكذا شخص كمان." },
      { "speaker": "Reyes", "text": "My brother actually got 30 years in prison because he tried to rob a bank once.", "translation": "أخويا أخد 30 سنة سجن لأنه حاول يسرق بنك في مرة." },
      { "speaker": "Cole", "text": "That's rough. Some prisoners have to subsist on nothing but bread and water for months in there.", "translation": "صعبة قوي. بعض المساجين بيضطروا يعيشوا على العيش والمية بس لشهور هناك." },
      { "speaker": "Reyes", "text": "Anyway, the police caught the criminal yesterday, didn't they?", "translation": "على العموم، الشرطة مسكت المجرم إمبارح، صح؟" },
      { "speaker": "Cole", "text": "They did. Although the police were right behind him, the thief managed to elude them at first.", "translation": "حصل. مع إن الشرطة كانت وراه بالظبط، بس الحرامي قدر يزيغ منهم في الأول." },
      { "speaker": "Reyes", "text": "He compiled many facts about the crime before he confessed, apparently.", "translation": "هو جمع حقايق كتير عن الجريمة قبل ما يعترف، على ما يبدو." },
      { "speaker": "Cole", "text": "The detective drew a quick sketch of the crime suspect for the file.", "translation": "المحقق رسم رسمة سريعة للمتهم بالجريمة عشان الملف." },
      { "speaker": "Reyes", "text": "The police are looking into the bank robbery from last month too.", "translation": "الشرطة بتحقق في سرقة البنك بتاعة الشهر اللي فات كمان." },
      { "speaker": "Cole", "text": "And they'll search your luggage at the airport if they think you're involved.", "translation": "وهيفتشوا شنطك في المطار لو افتكروا إنك متورط." },
      { "speaker": "Reyes", "text": "The policeman showed his badge to me before he asked any questions.", "translation": "الظابط وراني الشارة بتاعته قبل ما يسأل أي سؤال." },
      { "speaker": "Cole", "text": "Why is he under investigation by the FBI anyway?", "translation": "هو ليه تحت التحقيق من الـ FBI أصلاً؟" },
      { "speaker": "Reyes", "text": "Not sure. But the evidence against the suspect was refuted in the end.", "translation": "مش تأكد. بس الأدلة ضد المتهم اتفضحت وتم تفنيدها في الآخر." },
      { "speaker": "Cole", "text": "Really? Well, this man will be prosecuted to the full extent of the law regardless.", "translation": "بجد؟ عموماً الراجل ده هيتم مقاضاته بأقصى عقوبة في القانون بغض النظر." },
      { "speaker": "Reyes", "text": "The lawyer gave the client some professional advice before the trial started.", "translation": "المحامي ادى للموكل نصيحة مهنية قبل ما المحاكمة تبدأ." },
      { "speaker": "Cole", "text": "The suspect refused to cooperate with any of it.", "translation": "المتهم رفض يتعاون مع أي حاجة من دي." },
      { "speaker": "Reyes", "text": "Since the boy who stole the car was only 16, he'll have to be tried in juvenile court.", "translation": "بما إن الولد اللي سرق العربية كان عنده 16 سنة بس، هيتحاكم في محكمة الأحداث." },
      { "speaker": "Cole", "text": "Makes sense. Whereas the accused has been found guilty of murder in the first degree, the punishment will be severe.", "translation": "منطقي. بينما المتهم أُدين بتهمة القتل العمد من الدرجة الأولى، العقوبة هتكون شديدة." },
      { "speaker": "Reyes", "text": "The man was convicted of assault with a deadly weapon too.", "translation": "الراجل اتدان بتهمة الاعتداء بسلاح فتاك كمان." },
      { "speaker": "Cole", "text": "After being convicted by the jury, the prisoner was sentenced to five years in prison.", "translation": "بعد ما اتدان من الهيئة، السجين اتحكم عليه بـ 5 سنين سجن." },
      { "speaker": "Reyes", "text": "The court took a recess for one hour before announcing that.", "translation": "المحكمة أخدت استراحة لمدة ساعة قبل ما تعلن ده." },
      { "speaker": "Cole", "text": "I heard the jury will believe Bob's story, though — he has never done anything wrong.", "translation": "سمعت إن المحلفين هيصدقوا كلام بوب، هو عمره ما عمل حاجة غلط." },
      { "speaker": "Reyes", "text": "The present law has failed to achieve its objectives; the aims were never reached.", "translation": "القانون الحالي فشل يحقق أهدافه، الغايات ما وصلنالهاش أبداً." },
      { "speaker": "Cole", "text": "Hate crimes are born of ignorance — prejudice has no place in our society.", "translation": "جرائم الكراهية مولودة من الجهل — التعصب ملوش مكان في مجتمعنا." },
      { "speaker": "Reyes", "text": "True. The government decided to abolish the old tax law this year too.", "translation": "صح. الحكومة قررت تلغي قانون الضرائب القديم السنة دي كمان." },
      { "speaker": "Cole", "text": "I don't know what effect the new law will have on any of this, honestly.", "translation": "مش عارف القانون الجديد هيبقى ليه تأثير إيه على كل ده بصراحة." },
      { "speaker": "Reyes", "text": "After having served time in jail for political corruption, the former president was forced to leave his country in disgrace.", "translation": "بعد ما قضى فترة في السجن بسبب الفساد السياسي، الرئيس السابق اتجبر يسيب بلده في خزي وعار." },
      { "speaker": "Cole", "text": "Some prisoners looked emaciated by the time they were released.", "translation": "بعض المساجين كان شكلهم مهزول وشديد النحافة وقت ما خرجوا." },
      { "speaker": "Reyes", "text": "A crime of arson would involve fire, remember that for the report.", "translation": "جريمة الحريق العمد بتتضمن نار، افتكر ده عشان التقرير." },
      { "speaker": "Cole", "text": "The police found a corpse behind the Rialto Theater this morning, actually.", "translation": "الشرطة لقت جثة ورا مسرح ريالتو الصبح بصراحة." },
      { "speaker": "Reyes", "text": "They also cautioned him about speeding on the way there.", "translation": "هم كمان حذروه من السرعة وهو في طريقه هناك." },
      { "speaker": "Cole", "text": "The police were just here to question you again about the fire, by the way.", "translation": "الشرطة كانت لسه هنا عشان تستجوبك تاني عن الحريق بالمناسبة." },
      { "speaker": "Reyes", "text": "Right, they're waiting in the supervisor's office for you now.", "translation": "تمام، هم مستنيينك في مكتب المشرف دلوقتي." }
    ]
  },
  {
    "id": 4,
    "title": "Tight Budget",
    "dialogue": [
      { "speaker": "Dana", "text": "We were awfully broke after our shopping trip yesterday, honestly.", "translation": "إحنا كنا مفلسين جداً بعد رحلة التسوق إمبارح بصراحة." },
      { "speaker": "Ray", "text": "Did he insist on you going to the drugstore with him again too?", "translation": "هو أصر إنك تروحي معاه الصيدلية تاني هو كمان؟" },
      { "speaker": "Dana", "text": "Yeah. The company had to go through so much red tape just to get the new plan approved.", "translation": "أيوه. الشركة اضطرت تعدي على روتين وبيروقراطية كتير جداً عشان تاخد موافقة على الخطة الجديدة." },
      { "speaker": "Ray", "text": "At least the prices at this supermarket are reasonable these days.", "translation": "على الأقل الأسعار في السوبرماركت ده معقولة الأيام دي." },
      { "speaker": "Dana", "text": "True, there's even been a nice reduction in that store's prices lately.", "translation": "صح، ده حتى كان فيه تخفيض حلو في أسعار المحل ده مؤخراً." },
      { "speaker": "Ray", "text": "One Echo Company private actually shoplifted from the BX last week, can you believe that?", "translation": "واحد عسكري في سرية إيكو سرق من متجر القاعدة الأسبوع اللي فات، تصدق ده؟" },
      { "speaker": "Dana", "text": "No way. We didn't spend much money on groceries this month at least.", "translation": "مش معقول! إحنا مصرفناش فلوس كتير على البقالة الشهر ده على الأقل." },
      { "speaker": "Ray", "text": "If you want a job at that bank, you need to go to the personnel department first.", "translation": "لو عايز شريحة/شغلانة في البنك ده، لازم تروح لإدارة شؤون العاملين الأول." },
      { "speaker": "Dana", "text": "My sister walks to her company every day just to save money on gas.", "translation": "أختي بتمشي لشركتها كل يوم عشان توفر فلوس البنزين بس." },
      { "speaker": "Ray", "text": "The price of cars, boats, furs, and other luxury items is rising steadily.", "translation": "أسعار العربيات والمراكب والفرو والسلع الترفيهية التانية بتزيد باستمرار." },
      { "speaker": "Dana", "text": "I had been working two years for that company before I decided to resign, actually.", "translation": "أنا كنت شغالة بقالي سنتين في الشركة دي قبل ما أقرر أستقيل بصراحة." },
      { "speaker": "Ray", "text": "After you buy what you need, it's important to keep your receipt.", "translation": "بعد ما تشتري اللي محتاجه، مهم تحتفظ بالفاتورة بتاعتك." },
      { "speaker": "Dana", "text": "When my sister bought her new shoes, they were on sale — there was a nice discount.", "translation": "لما أختي اشترت جزمتها الجديدة، كانت في العرض — كان فيه خصم حلو." },
      { "speaker": "Ray", "text": "Americans regard the half-dollar as good luck, apparently.", "translation": "الأمريكان بيعتبروا النصف دولار حظ سعيد، على ما يبدو." },
      { "speaker": "Dana", "text": "Speaking of our budget, we need more funds before the end of the month.", "translation": "بمناسبة ميزانيتنا، إحنا محتاجين تمويل أكتر قبل آخر الشهر." },
      { "speaker": "Ray", "text": "Is this car very expensive? No, it's actually cheap.", "translation": "هي العربية دي غالية قوي؟ لا، هي رخيصة بصراحة." },
      { "speaker": "Dana", "text": "Did you buy a new house? Yes, we bought one last week.", "translation": "هو انتوا اشتريتوا بيت جديد؟ أيوه اشترينا واحد الأسبوع اللي فات." },
      { "speaker": "Ray", "text": "The cost of the tomatoes, beans, onions, and apples was a lot less than I expected.", "translation": "تكلفة الطماطم والفاصوليا والبصل والتفاح كانت أقل بكتير مما توقعت." },
      { "speaker": "Dana", "text": "They'd better take a taxi, it's getting late and we've spent enough.", "translation": "الأحسن ياخدوا تاكسي، الوقت تأخر وإحنا صرفنا كفاية." },
      { "speaker": "Ray", "text": "Rita will buy a car next month, she told me.", "translation": "ريتا هشتري عربية الشهر الجاي، هي قالت لي." },
      { "speaker": "Dana", "text": "They said we had to pay for it ourselves in the end.", "translation": "قالوا إننا لازم ندفع ثمنها بنفسنا في الآخر." },
      { "speaker": "Ray", "text": "The rich man hid the money, but it was stolen anyway.", "translation": "الراجل الغني خبى الفلوس، بس اتسرقت برضه." },
      { "speaker": "Dana", "text": "This jacket is so costly, so expensive, I can't believe it.", "translation": "الجاكيت ده مكلف وغالي جداً، مش مصدقة!" },
      { "speaker": "Ray", "text": "This tax should be abolished completely, if you ask me.", "translation": "الضريبة دي المفروض تتلغي تماماً لو بتسألني." },
      { "speaker": "Dana", "text": "James has been flirting with bankruptcy for a while now, unfortunately.", "translation": "جيمس بيلعب على إفلاسه وبي قرب منه بقاله فترة للأسف." },
      { "speaker": "Ray", "text": "My mother suggested I not spend all my money on clothes either.", "translation": "أمي اقترحت عليّ ما أصرفش كل فلوسي على الهدوم برضه." },
      { "speaker": "Dana", "text": "You had better pay the bill on time, or you'll get a late fee.", "translation": "الأحسن تدفع الفاتورة في وقتها وإلا سينزل عليك غرامة تأخير." },
      { "speaker": "Ray", "text": "These ads just entice people into buying things they don't need.", "translation": "العلانات دي بتغري الناس يمي تشتروا حاجات مش محتاجينها." },
      { "speaker": "Dana", "text": "We heard a large business conglomerate bought the property downtown.", "translation": "سمعنا إن التكتل الاقتصادي الكبير اشترى العقار اللي في وسط البلد." },
      { "speaker": "Ray", "text": "That's such an affluent neighborhood, homes cost millions there.", "translation": "ده حي غني ومرفه جداً، البيوت بتتكلف ملايين هناك." }
    ]
  },
  {
    "id": 5,
    "title": "Studying for the Test",
    "dialogue": [
      { "speaker": "Mia", "text": "Several students are slouching in the campus today, have you noticed?", "translation": "كذا طالب قاعدين متكاسلين ومطأطئين في الحرم الجامعي النهاردة، لاحظت ده؟" },
      { "speaker": "Leo", "text": "Yeah, everyone's tired. The student in my class can't comprehend the Japanese lecture at all.", "translation": "أيوه، الكل تعبان. الطالب اللي في فصلي مش قادر يستوعب محاضرة الياباني خالص." },
      { "speaker": "Mia", "text": "A real dispute arose in the training class earlier too, apparently.", "translation": "نزاع وخلاف حقيقي قام في فصل التدريب بدري كمان على ما يبدو." },
      { "speaker": "Leo", "text": "The scores on the final test were incredible though, just unbelievable.", "translation": "بس درجات الامتحان النهائي كانت خيالية بصراحة، حاجة لا تصدق." },
      { "speaker": "Mia", "text": "Because he refused to study for the Book Quiz, he got a really low score.", "translation": "عشان هو رفض يذاكر لاختبار الكتاب، أخد درجة واطية جداً." },
      { "speaker": "Leo", "text": "Makes sense. Alan wants to be an airplane mechanic, so he's going to a technical school.", "translation": "منطقي. ألان عايز يطلع ميكانيكي طيارات، عشان كده رايح مدرسة فنية." },
      { "speaker": "Mia", "text": "It is I who am your new teacher this semester, by the way — did I mention that?", "translation": "أنا هي مدرستك الجديدة التيرم ده بالمناسبة — هو أنا قولتلك ده؟" },
      { "speaker": "Leo", "text": "Ha, right. The students really like Mr. William because he's so friendly.", "translation": "هههه صح. الطلبة بتحب مستر ويليام جداً لأنه ودود للغاية." },
      { "speaker": "Mia", "text": "I can't concentrate on my homework — would you switch off the TV?", "translation": "مش عارفة أركز في واجبي — ممكن تقفل التلفزيون؟" },
      { "speaker": "Leo", "text": "Sure. The students sit on the chairs in the front row, remember, not the floor.", "translation": "أكيد. الطلبة بيقعدوا على الكراسي في الصف الأولاني، افتكر، مش على الأرض." },
      { "speaker": "Mia", "text": "The test was not easy, honestly — it was actually difficult.", "translation": "الامتحان مكنش سهل بصراحة — كان صعب فعلاً." },
      { "speaker": "Leo", "text": "I would study Friday nights at the learning center were I you.", "translation": "لو كنت مكانك كنت ذاكرت ليالي الجمعة في مركز التعلم." },
      { "speaker": "Mia", "text": "You ought to study hard, our test is tomorrow. Yes, we should.", "translation": "لازم تذاكر بجد، امتحاننا بكرة. أيوه المفروض نعمل كده." },
      { "speaker": "Leo", "text": "This test is so boring, honestly.", "translation": "الامتحان ده ممل جداً بصراحة." },
      { "speaker": "Mia", "text": "The teacher gives too much homework, if you ask me.", "translation": "المدرس بيدي واجبات كتير جداً، لو بتسألني." },
      { "speaker": "Leo", "text": "Are you teaching this subject at college now?", "translation": "هو انت بتدرس المادة دي في الكلية دلوقتي؟" },
      { "speaker": "Mia", "text": "I'm pleased with my ECL results, actually.", "translation": "أنا مبسوطة من نتائج اختبار الـ ECL بتاعي بصراحة." },
      { "speaker": "Leo", "text": "The instructors here are so strict, they never let anyone leave without permission.", "translation": "المدربين هنا صارمين جداً، عمرهم ما بيسيبوا حد يمشي بدون إذن." },
      { "speaker": "Mia", "text": "That student was very rude today.", "translation": "الطالب ده كان قليل الأدب جداً النهاردة." },
      { "speaker": "Leo", "text": "She failed her English test unfortunately.", "translation": "هي سقطت في امتحان الإنجليزي للأسف." },
      { "speaker": "Mia", "text": "The students succeeded because the test was easy this time.", "translation": "الطلبة نجحوا عشان الامتحان كان سهل المرة دي." },
      { "speaker": "Leo", "text": "By the time I graduate, I will have taken at least 20 tests here.", "translation": "على وقت ما أتخرج، هكون دخلت على الأقل 20 امتحان هنا." },
      { "speaker": "Mia", "text": "How do you account for these low test scores anyway?", "translation": "أنت بتفسر إزاي درجات الامتحانات الواطية دي على أي حال؟" },
      { "speaker": "Leo", "text": "He can't administer the school properly, that's the real problem.", "translation": "هو مش عارف يدير المدرسة بشكل مضبوط، دي المشكلة الحقيقية." },
      { "speaker": "Mia", "text": "My teacher was a European scientist, actually.", "translation": "مدرسي كان عالم أوروبي بصراحة." },
      { "speaker": "Leo", "text": "The coach urged that the player be given a second chance.", "translation": "المدرب حث وشدد إن اللاعب يتاخد فرصة تانية." },
      { "speaker": "Mia", "text": "Baggy pants are the latest trend for teenage boys, apparently.", "translation": "البنطلونات الواسعة (الباجي) هي أحدث موضة للمراهقين على ما يبدو." },
      { "speaker": "Leo", "text": "Peter finished the test in a relatively short time.", "translation": "بيتر خلص الامتحان في وقت قصير نسبياً." },
      { "speaker": "Mia", "text": "All students must abide by the school regulations, remember.", "translation": "كل الطلبة لازم يلتزموا بقواعد ولوائح المدرسة، افتكر ده." },
      { "speaker": "Leo", "text": "Yesterday the instructor spoke about her trip in class.", "translation": "إمبارح المحاضرة اتكلمت عن رحلتها في الفصل." },
      { "speaker": "Mia", "text": "An additional password is required for the student database now.", "translation": "باسوورد إضافي مطلوب لقاعدة بيانات الطلبة دلوقتي." },
      { "speaker": "Leo", "text": "The new students had to attend orientation, didn't they?", "translation": "الطلبة الجداد كان لازم يحضروا الجلسة التعريفية، صح؟" },
      { "speaker": "Mia", "text": "That quotation he used to open his speech was very apt.", "translation": "الاقتباس اللي استخدمه عشان يفتح بيه كلامه كان مناسب جداً." },
      { "speaker": "Leo", "text": "Turns out Karl wasn't even qualified to teach driving, according to that story.", "translation": "اتضح إن كارل مكنش حتى مؤهل لتعليم السواقة، طبقا للقضة دي." }
    ]
  },
  {
    "id": 6,
    "title": "Family News",
    "dialogue": [
      { "speaker": "Nora", "text": "We've known one another since we were children, remember?", "translation": "إحنا نعرف بعض من ساعة ما كنا أطفال، فاكر؟" },
      { "speaker": "Sam", "text": "Of course. My son is very awkward whenever he tries to ride his new bicycle, by the way.", "translation": "أكيد. ابني مرتبك ومش متناسق خالص لما بيحاول يرشب عجلته الجديدة، بالمناسبة." },
      { "speaker": "Nora", "text": "Ha, cute. My family will travel in October, actually.", "translation": "هههه كيوت! عيلتي هتسافر في أكتوبر بصراحة." },
      { "speaker": "Sam", "text": "Nice. Did you see the outfit Lt Smith's wife wore to the General's reception? Totally unsuitable.", "translation": "جميل. شفت اللبس اللي مرات الملازم سميث لبسته في استقبال الجنرال؟ مش مناسب خالص." },
      { "speaker": "Nora", "text": "I heard! She really regrets not being with her family during the Christmas holidays too.", "translation": "سمعت! هي ندمانة جداً إنها مكنتش مع عيلتها في إجازة الكريسماس هي كمان." },
      { "speaker": "Sam", "text": "Understandable. She never speaks English at home though, apparently.", "translation": "مفهوم. هي عمرها ما بتتكلم إنجليزي في البيت على ما يبدو." },
      { "speaker": "Nora", "text": "Really? Anyway, Mary has two brothers, right?", "translation": "بجد؟ على العموم، ماري عندها أخين، صح؟" },
      { "speaker": "Sam", "text": "Yeah. My favorite season of the year is autumn, by the way.", "translation": "أيوه. فصلي المفضّل في السنة هو الخريف بالمناسبة." },
      { "speaker": "Nora", "text": "Of your two daughters, which one is the older?", "translation": "من البنتين بتوعك، أنهي واحدة فيهم الأكبر؟" },
      { "speaker": "Sam", "text": "The younger one, actually. They respect their grandparents so much, they really look up to them.", "translation": "الصغيرة بصراحة. هم بيحترموا أجدادهم جداً، وبيعتبروهم قدوة ليهم." },
      { "speaker": "Nora", "text": "The kids have been rowdy all day. They were just rambunctious, honestly.", "translation": "العيال كانت عاملة دوشة وهيصة طول اليوم. كانوا مشاغبين بصراحة." },
      { "speaker": "Sam", "text": "What does your brother do these days? He works for a company that makes office furniture.", "translation": "أخوك بيشتغل إيه الأيام دي؟ بيشتغل في شركة بتصنع أثاث مكتبي." },
      { "speaker": "Nora", "text": "He's the man who lives just beside us too, right?", "translation": "هو الراجل اللي ساكن جنَبنا على طول برضه، صح؟" },
      { "speaker": "Sam", "text": "Right. I punished the children for laughing at the boy who stutters, unfortunately.", "translation": "صح. أنا عاقبت الأطفال عشان ضحكوا على الولد اللي بيلعثم في الكلام للأسف." },
      { "speaker": "Nora", "text": "That's tough. Daisy's friends consider her neither vain nor ignorant, at least.", "translation": "حاجة صعبة. أصحاب ديزي بيعتبروها لا مغرورة ولا جاهلة على الأقل." },
      { "speaker": "Sam", "text": "The man refused to replace the worn-out tires, thereby putting his family at risk.", "translation": "الراجل رفض يغير الكاوتشات المتهالكة، وبكده عرض عيلته للخطر." },
      { "speaker": "Nora", "text": "Mr. and Mrs. Carter announced their daughter's marriage in the local newspaper.", "translation": "الاستاذ وزوجته كارتار أعلنوا عن جواز بنتهم في الجريدة المحلية." },
      { "speaker": "Sam", "text": "A very dear friend of mine is getting married that day too, and I have to be there.", "translation": "صديق عزيز عليا جداً هيتجوز في اليوم ده كمان، ولازم أكون هناك." },
      { "speaker": "Nora", "text": "I want you to ensure Mr. Jackson's money is credited to his account by tomorrow, by the way.", "translation": "عايزاك تتأكد إن فلوس أستاذ جاكسون نزلت في حسابه قبل بكرة بالمناسبة." },
      { "speaker": "Sam", "text": "Will your son be coming by bus or by plane for the wedding?", "translation": "هو ابنك هييجي بالأوتوبيس ولا بالطيارة عشان الفرح؟" },
      { "speaker": "Nora", "text": "As soon as I saw the present, I thought it must have come from my mother — she always gives ties.", "translation": "أول ما شفت الهدية افتكرت إنها أكيد جاية من أمي — هي دايماً بتجيب كرافتات." },
      { "speaker": "Sam", "text": "My sister insisted that I take her two kids to the zoo, and so we went.", "translation": "أختي أصرت إني أخد عيالها الإثنين حديقة الحيوان، وفعلاً رحنا." },
      { "speaker": "Nora", "text": "His father's job demanded that he work many long hours too, sadly.", "translation": "شغل أبوه كان بيتطلب إنه يشتغل ساعات طويلة جداً برضه للأسف." },
      { "speaker": "Sam", "text": "My parents think my friends are a bad influence on me, honestly.", "translation": "والدايا شايفين إن أصحابي تأثيرهم سيء عليا بصراحة." },
      { "speaker": "Nora", "text": "Does your son enjoy playing in that rock band still?", "translation": "هو ابنك لسه مستمتع بالعزف في فرقة الروك دي؟" },
      { "speaker": "Sam", "text": "The student's father tried to gloss over his son's bad academic record, apparently.", "translation": "أبو الطالب حاول يداري ويزوق التقدير الدراسي السيء بتاع ابنه على ما يبدو." },
      { "speaker": "Nora", "text": "Mrs. Jenkins smiled as her son waved goodbye to her.", "translation": "ست جينكينز ابتسمت لما ابنها لوّحلها باي باي." },
      { "speaker": "Sam", "text": "I don't know why one of my twin sons is so much more prone to accidents than the other.", "translation": "مش عارف ليه واحد من ولادي التوأم معرض للحوادث أكتر بكتير من التاني." },
      { "speaker": "Nora", "text": "Your son is as tall as my son now, have you noticed?", "translation": "ابنك بقى بطول ابني دلوقتي، لاحظت ده؟" },
      { "speaker": "Sam", "text": "My mother found an ugly old Chinese vase in the attic recently.", "translation": "أمي لقت فازة صينية قديمة وشكلها وحش في السندرة قريب." },
      { "speaker": "Nora", "text": "It wasn't easy for the widow to raise her children alone, you know.", "translation": "مكنش سهل على الأرملة إنها تربي عيالها لوحدها، أنت عارف." },
      { "speaker": "Sam", "text": "Her daughter's wedding was a very emotional event for Janice — she cried throughout the entire ceremony.", "translation": "فرح بنت جانيس كان حدث مؤثر جداً ليها — عيطت طول فترة الحفل." },
      { "speaker": "Nora", "text": "The money my mother left enabled us to take a trip, at least.", "translation": "الفلوس اللي أمي سابتها مكنتنا إننا نطلع رحلة على الأقل." },
      { "speaker": "Sam", "text": "Did you know that Dr. Moore has been appointed as the new department chairperson?", "translation": "عرفت إن دكتور مور تم تعيينه كرئيس قسم جديد؟" }
    ]
  },
  {
    "id": 7,
    "title": "Asking About Relatives",
    "dialogue": [
      { "speaker": "A", "text": "Hey, how's your uncle feeling these days?", "translation": "أهلاً، هو خالك حاسس بإيه الأيام دي؟" },
      { "speaker": "B", "text": "He's better, thanks. He's staying at my grandparents' farm this month.", "translation": "هو أحسن، شكراً. قاعد في مزرعة جدي وجدتي الشهر ده." },
      { "speaker": "A", "text": "Oh really, where do your grandparents live?", "translation": "بجد؟ هم جدك وجدتك ساكنين فين؟" },
      { "speaker": "B", "text": "My uncle lives on a small farm out in the countryside.", "translation": "خالي عايش في مزرعة صغيرة بره في الريف." },
      { "speaker": "A", "text": "That's nice. Doesn't your uncle deal in real estate too?", "translation": "جميل. هو خالك مبيشتغلش في العقارات برضه؟" },
      { "speaker": "B", "text": "Yes, he owns land and property all over the region. He's done well for himself.", "translation": "أيوه، بيملك أراضي وعقارات في المنطقة كلها. عمل شغل كويس لنفسه." },
      { "speaker": "A", "text": "What about your aunt? I haven't heard from her family in a while.", "translation": "طب وخالتك؟ مسمعتش حاجة عن عيلتها بقالي فترة." },
      { "speaker": "B", "text": "My aunt is no spring chicken anymore, but she's still full of energy. She visits every summer.", "translation": "خالتي مش صغيرة في السن خلاص (كبرت)، بس لسه مليانة طاقة. بتزورنا كل صيف." },
      { "speaker": "A", "text": "And that man sitting by the door — is that your uncle too?", "translation": "والراجل اللي قاعد جنَب الباب ده — هو ده خالك برضه؟" },
      { "speaker": "B", "text": "Yes, that's him! He always sits right there when he visits.", "translation": "أيوه هو ده! دايماً بيقعد هناك بالظبط لما بيزورنا." },
      { "speaker": "A", "text": "Didn't you have a cousin who served overseas?", "translation": "هو مش كان عندك ابن عم خدم بره البلد؟" },
      { "speaker": "B", "text": "Yeah, my cousin was in Vietnam back in 1969. It's a story he still tells us.", "translation": "أيوه، ابن عمي كان في فيتنام سنة 1969. حكاية لسه بيحكيهالنا." },
      { "speaker": "A", "text": "When you go to Dallas next time, try to find my cousin and visit him.", "translation": "لما تروح دالاس المرة الجاية، حاول تلاقي ابن عمي وتزوره." },
      { "speaker": "B", "text": "I will. When does your father's flight get in, by the way?", "translation": "هعمل كده. هي طيارة أيوك بتوصل امتى بالمناسبة؟" },
      { "speaker": "A", "text": "Tomorrow evening. We're all going to pick him up together.", "translation": "بكرة بليل. إحنا كلنا رايحين نجيبه مع بعض." }
    ]
  },
  {
    "id": 8,
    "title": "Weddings and Marriage",
    "dialogue": [
      { "speaker": "A", "text": "Did you hear? Pat was a secretary before she married Ron.", "translation": "سمعت؟ بات كانت سكرتيرة قبل ما تتجوز رون." },
      { "speaker": "B", "text": "Really? I didn't know that. How did they meet?", "translation": "بجد؟ مكنتش اعرف ده. هم اتعرفوا إزاي؟" },
      { "speaker": "A", "text": "At his office, actually. She pondered his proposal of marriage for several days before she said yes.", "translation": "في مكتبه بصراحة. هي فكرت في عرض الجواز بتاعه كذا يوم قبل ما توافق." },
      { "speaker": "B", "text": "That's sweet. What do you think makes a marriage actually work?", "translation": "حاجة لطيفة. أنت شايف إيه اللي يخلي الجواز ينجح فعلاً؟" },
      { "speaker": "A", "text": "Honestly, commitment is one of the fundamental cornerstones of a successful marriage.", "translation": "بصراحة، الالتزام هو واحد من الأحجار الأساسية للجواز الناجح." },
      { "speaker": "B", "text": "I agree. My sister married a famous actor, if you can believe it.", "translation": "أنا متفق. أختي اتجوزت ممثل مشهور، تصدق ده؟" },
      { "speaker": "A", "text": "Wow, was it a big wedding?", "translation": "واو! هو كان فرح كبير؟" },
      { "speaker": "B", "text": "Huge. At the wedding, the bride wore a beautiful white dress, just like tradition says.", "translation": "ضخم! في الفرح، العروسة لبست فستان أبيض جميل، زي التقاليد ما بتقول." },
      { "speaker": "A", "text": "Before Joe got engaged, he had to formally call on Susan's parents first.", "translation": "قبل ما جو يخطب، كان لازم يزور أهل سوزان رسمياً الأول." },
      { "speaker": "B", "text": "That's a nice old custom. It shows real respect for the family.", "translation": "دي عادة قديمة جميلة. بتظهر احترام حقيقي للعائلة." },
      { "speaker": "A", "text": "Speaking of respect, my neighbor stood by her husband through some really hard times.", "translation": "بمناسبة الاحترام، جارتي وقفت جنَب جوزها في أوقات صعبة جداً." },
      { "speaker": "B", "text": "That kind of loyalty is rare these days. Sadly, not every marriage lasts.", "translation": "النوع ده من الوفاء بقى نادر الأيام دي. للأسف، مش كل جواز بيستمر." },
      { "speaker": "A", "text": "True. I heard their divorce was granted on the grounds of irreconcilable differences.", "translation": "حقيقي. سمعت إن طلاقهم اتوافق عليه بسبب خلافات لا يمكن حلها." },
      { "speaker": "B", "text": "That's always sad to hear, no matter the reason.", "translation": "ده دايماً خبر يحزن، بغض النظر عن السبب." }
    ]
  },
  {
    "id": 9,
    "title": "Raising Children",
    "dialogue": [
      { "speaker": "A", "text": "If you're a mother, isn't it your duty to look after your children?", "translation": "لو أنتِ أم، مش ده واجبك إنك تاخدي بالك من عيالك؟" },
      { "speaker": "B", "text": "Of course. And parental involvement in a child's education matters just as much.", "translation": "أكيد. ومشاركة الأبوين في تعليم الطفل بتفرق بنفس القدر برضه." },
      { "speaker": "A", "text": "My kids quarrel all the time. Do yours bicker too?", "translation": "عيالي بيتخانقوا طول الوقت. عيالك بيتغابوا وينقروا في بعض برضه؟" },
      { "speaker": "B", "text": "Constantly! Siblings just seem to like fighting with each other.", "translation": "باستمرار! الأخوات شكلهم بيحبوا يتخانقوا مع بعض وخلاص." },
      { "speaker": "A", "text": "I want you to look after my kids while I run to the store.", "translation": "عايزك تاخد بالك من عيالي عقبال ما أجري على المحل." },
      { "speaker": "B", "text": "No problem. My sister asked me to take care of her brats last weekend too.", "translation": "مفيش مشكلة. أختي طلبت مني أخد بالي من عيالها الشقية الأسبوع اللي فات برضه." },
      { "speaker": "A", "text": "When you're driving near a school, you really have to look out for children.", "translation": "لما تسوق قريب من مدرسة، لازم تاخد بالك جداً من الأطفال." },
      { "speaker": "B", "text": "Absolutely. Children should walk on the sidewalks, not in the streets.", "translation": "بالظبط. الأطفال المفروض يمشوا على الرصيف، مش في الشارع." },
      { "speaker": "A", "text": "Right, and they definitely shouldn't play in the street again after we told them not to.", "translation": "صح، وأكيد المفروض م يلعبوش في الشارع تاني بعد ما قولنالهم لأ." },
      { "speaker": "B", "text": "My son drew pictures on the wall of his bedroom last week. I nearly lost it.", "translation": "ابني رسم صور على حيطة أوضته الأسبوع اللي فات. كنت هفقد أعصابي." },
      { "speaker": "A", "text": "Kids should not play near the dump with bare feet either — it's not safe.", "translation": "الأطفال المفروض م يلعبوش قريب من المقالب برجلين حافية برضه — مش أمان." },
      { "speaker": "B", "text": "True. Some children openly oppose their parents just to test the limits.", "translation": "صح. بعض الأطفال بيعاندوا ويعارضوا أهاليهم علناً عشان يختبروا الحدود بس." },
      { "speaker": "A", "text": "His parents prohibited him from smoking or driving, and he still resents it.", "translation": "أهله منعوه من التدخين أو السواقة، وهو لسه متضايق من ده." },
      { "speaker": "B", "text": "The children were also prohibited from entering that construction building.", "translation": "الأطفال اتمنعوا كمان من دخول مبنى الإنشاءات ده." },
      { "speaker": "A", "text": "I made the children play outside so I could get some peace and quiet.", "translation": "خليت عيالي يلعبوا بره عشان أخد شوية هدوء وراحة." },
      { "speaker": "B", "text": "The children didn't go to bed until after midnight last night, though.", "translation": "بس الأطفال ماناموش غير بعد نص الليل إمبارح." },
      { "speaker": "A", "text": "My son wants a dog now — specifically a collie.", "translation": "ابني عايز كليب دلوقتي — وتحديداً كلب كولي." },
      { "speaker": "B", "text": "When I was a child, I used to torture the neighborhood cats. Kids can be strange sometimes.", "translation": "لما كنت طفل، كنت متعود أضايق قطط المنطقة. الأطفال بيبقوا غريبين ساعات." }
    ]
  },
  {
    "id": 10,
    "title": "Siblings and Family Traits",
    "dialogue": [
      { "speaker": "A", "text": "I'm not sure where he gets his negative attitude — maybe from one of his brothers or sisters.", "translation": "مش عارف هو جايب السلبية بتاعته دي منين — يمكن من حد من إخواته الولاد أو البنات." },
      { "speaker": "B", "text": "Could be. Neither my mother nor my sisters are like that, thankfully.", "translation": "يمكُن. لا أمي ولا إخواتي البنات كده، الحمد لله." },
      { "speaker": "A", "text": "For all his faults, he's still a good father.", "translation": "بالرغم من كل عيوبه، هو لسه أيب كويس." },
      { "speaker": "B", "text": "That's true of a lot of people. My sister and I went there together yesterday.", "translation": "ده حقيقي بالنسبة لناس كتير. أنا وأختي رحنا هناك سوا إمبارح." },
      { "speaker": "A", "text": "I helped my brother carry my bag to the car this morning.", "translation": "أنا ساعدت أخويا يشيل الشنطة للعربية الصبح." },
      { "speaker": "B", "text": "My brother helped me carry my bag too, actually.", "translation": "أخويا ساعدني أشيل شنطتي برضه بصراحة." },
      { "speaker": "A", "text": "His family isn't rich at all. In fact, they're very poor.", "translation": "عيلته مش غنية خالص. في الحقيقة هم فقراء جداً." },
      { "speaker": "B", "text": "That reminds me — Mr. Walters is such a skinflint, everyone says he's very stingy.", "translation": "ده بيفكرني — أستاذ والترز ده راجل جلدة ومسخاط، كل الناس بتقول عليه بخيل جداً." },
      { "speaker": "A", "text": "My brother is the opposite — he's not generous at all either, if I'm honest.", "translation": "أخويا العكس — هو مش كريم خالص هو كمان لو أكون صريح." },
      { "speaker": "B", "text": "The dynamic between the two brothers has gotten pretty strained lately.", "translation": "العلاقة والديناميكية بين الأخين بقت متوترة جداً مؤخراً." },
      { "speaker": "A", "text": "My father was so angry with me that he hung up the phone.", "translation": "أبويا كان زعلان مني جداً لدرجة إنه قفل السكة في وشي." },
      { "speaker": "B", "text": "He was mad when I told him I wrecked the car, too.", "translation": "هو اضايق لما قولتله إني دمرت العربية برضه." },
      { "speaker": "A", "text": "My brother wrecked his car as well, last winter.", "translation": "أخويا دمر عربيته هو كمان الشتا اللي فات." },
      { "speaker": "B", "text": "The children are going to sleep on the sofa tonight since we have guests.", "translation": "الأطفال هيناموا على الكنبة بليل عشان عندنا ضيوف." },
      { "speaker": "A", "text": "My brother travelled to the States and made more friends there than he ever did back home.", "translation": "أخويا سافر أمريكا وعمل أصحاب هناك اكتر من اللي عملهم في بلده." },
      { "speaker": "B", "text": "My parents are going to redecorate my grandmother's house in Houston next month.", "translation": "والدايا هيددوا ديكور بيت جدتي في هيوستن الشهر الجاي." },
      { "speaker": "A", "text": "Tom will take over the family business from his father next year.", "translation": "توم هيستلم شغل العيلة من أبوه السنة الجاية." }
    ]
  },
  {
    "id": 11,
    "title": "Health and Doctor Visit",
    "dialogue": [
      { "speaker": "Doc", "text": "Take this pill and call me in the morning if you don't feel better.", "translation": "خد الحباية دي وكلمني الصبح لو محسيتش بتبدّل أو تحسن." },
      { "speaker": "Patient", "text": "Will do. The nurse said my high blood pressure is what caused my severe headaches.", "translation": "هعمل كده. الممرضة قالت إن ضغط دمي العالي هو اللي سبب لي الصداع الشديد ده." },
      { "speaker": "Doc", "text": "That's very likely. You should avoid eating any candy or salty foods for a while.", "translation": "ده وارد جداً. المفروض تتجنب أكل أين حلويات أو أكل مالح لفترة." },
      { "speaker": "Patient", "text": "Got it. I've also had a dry throat and a bad cough since yesterday.", "translation": "فهمتك. وعندي كمان جفاف في الزور وكحة شديدة من إمبارح." },
      { "speaker": "Doc", "text": "I see. Let me examine your chest and listen to your breathing.", "translation": "تمام. خليني أفحص صدرك وأسمع تنفسك." },
      { "speaker": "Patient", "text": "Is it anything serious? I was worried it might be pneumonia.", "translation": "هي حاجة خطيرة؟ أنا كنت خايف تتطلع التهاب رئوي." },
      { "speaker": "Doc", "text": "No, it's just a common mild infection. Rest and drink plenty of fluids.", "translation": "لا، دي مجرد عدوى خفيفة عادية. ارتاح واشرب سوائل كتير." },
      { "speaker": "Patient", "text": "That's a relief. Should I take any antibiotics?", "translation": "ده يطمن. هو أنا المفروض أخد أي مضاد حيوي؟" },
      { "speaker": "Doc", "text": "Not necessary right now. Just take the prescribed pain reliever if the headache returns.", "translation": "مش ضروري دلوقتي. بس خد مسكن الآلام المكتوب لك لو الصداع رجع تاني." },
      { "speaker": "Patient", "text": "Thanks, Doctor. I'll make sure to follow your instructions closely.", "translation": "شكراً يا دكتور. هتأكد إني أتبع تعليماتك بدقة." }
    ]
  },
  {
    "id": 12,
    "title": "At the Airport",
    "dialogue": [
      { "speaker": "Agent", "text": "Good morning. May I see your passport and flight ticket, please?", "translation": "صباح الخير. ممكن أوف جواز سفرك وتذكرة الطيران من فضلك؟" },
      { "speaker": "Passenger", "text": "Sure, here they are. Is the flight to New York still on schedule?", "translation": "أكيد، اتفضل هم هنا اهو. هي الرحلة لنيويورك لسه في موعدها؟" },
      { "speaker": "Agent", "text": "Yes, it is departing at 1400 hours as planned. Do you have any luggage to check in?", "translation": "أيوه، هتطلع الساعة 1400 زي ما متخطط. معاك أي أمتعة أو شنط هتسجلها؟" },
      { "speaker": "Passenger", "text": "Just this one suitcase. I'll take this small backpack as carry-on.", "translation": "الشنطة دي بس. وهاخد الشنطة الصغيرة دي معايا على الطيارة." },
      { "speaker": "Agent", "text": "Please place your suitcase on the scale. It's slightly heavy, but within the limit.", "translation": "من فضلك حط الشنطة على الميزان. هي تقيلة شوية بس جوه الحد المسموح." },
      { "speaker": "Passenger", "text": "Great! Which gate do I need to go to for boarding?", "translation": "عظيم! أنهي بوابه المفروض أروحها عشان الركوب؟" },
      { "speaker": "Agent", "text": "You'll be boarding at Gate B12. Security screening is right down that hallway.", "translation": "تركب من البوابة B12. التفتيش الأمني على طول في الممر ده." },
      { "speaker": "Passenger", "text": "Thank you. How much time do I have before boarding starts?", "translation": "شكراً لك. معايا وقت قد إيه قبل ما الركوب يبدأ؟" },
      { "speaker": "Agent", "text": "Boarding begins in about 45 minutes, so you have plenty of time.", "translation": "الركوب يبدأ كمان حوالي 45 دقيقة، فمعاك وقت كافي جداً." },
      { "speaker": "Passenger", "text": "Perfect. Thanks for your help!", "translation": "تمام جداً. شكراً لمساعدتك!" }
    ]
  },
  {
    "id": 13,
    "title": "Hotel Reservation",
    "dialogue": [
      { "speaker": "Clerk", "text": "Welcome to the Grand Hotel. How can I assist you today?", "translation": "أهلاً بك في الفندق الكبير. إزاي أقدر أساعدك النهاردة؟" },
      { "speaker": "Guest", "text": "Hi, I have a reservation under the name of Miller for three nights.", "translation": "أهلاً، أنا عندي حجز باسم ميلر لمدة ثلاث ليالي." },
      { "speaker": "Clerk", "text": "Let me check... Yes, Mr. Miller. A single room with a sea view, correct?", "translation": "خليني أراجع... أيوه يا أستاذ ميلر. غرفة فردية بإطلالة على البحر، مظبوط؟" },
      { "speaker": "Guest", "text": "That's correct. Does the room rate include breakfast?", "translation": "مظبوط. هو سعر الاوضة شامل الفطار؟" },
      { "speaker": "Clerk", "text": "Yes, complementary breakfast is served daily from 0700 to 1000 in the dining hall.", "translation": "أيوه، الفطار المجاني بيتقدم يومياً من 0700 لـ 1000 في صالة الطعام." },
      { "speaker": "Guest", "text": "Excellent. Is there Wi-Fi available in the room as well?", "translation": "ممتاز. هو فيه واي فاي متاح في الأوضة كمان؟" },
      { "speaker": "Clerk", "text": "Of course. The password is on your keycard envelope. Here is room 405.", "translation": "أكيد. الباسوورد مكتوب على غلاف كارت المفتاح. اتفضل أهو غرفة 405." },
      { "speaker": "Guest", "text": "Thank you. Is there an elevator nearby to get to the fourth floor?", "translation": "شكراً لك. هو فيه أسانسير قريب عشان أطلع الدور الرابع؟" },
      { "speaker": "Clerk", "text": "Yes, right behind you to the left. Enjoy your stay with us!", "translation": "أيوه، وراك على طول على الشمال. إقامة سعيدة معانا!" }
    ]
  },
  {
    "id": 14,
    "title": "Restaurant Order",
    "dialogue": [
      { "speaker": "Waiter", "text": "Good evening. Are you ready to order or do you need a few more minutes?", "translation": "مساء الخير. جاهز تطلب ولا محتاج كذا دقيقة كمان؟" },
      { "speaker": "Customer", "text": "I think I'm ready. What would you recommend for the main course?", "translation": "أعتقد إني جاهز. بيا إيه التوصية بتاعتك بالنسبة للطبق الرئيسي؟" },
      { "speaker": "Waiter", "text": "Our grilled steak with mashed potatoes is very popular tonight.", "translation": "الستيك المشوي مع البطاطس المهروسة بتاعنا محبوب ومطلوب جداً الليلة دي." },
      { "speaker": "Customer", "text": "Sounds delicious. I'll have the steak, medium-well please.", "translation": "يبدو لديد. هاخد الستيك، مظبوط/متوسط التسوية من فضلك." },
      { "speaker": "Waiter", "text": "Certainly. Would you like a salad or soup to start with?", "translation": "بالتأكيد. تحب تبدأ بسلطة ولا شوربة؟" },
      { "speaker": "Customer", "text": "I'll take the vegetable soup, thanks. And a glass of iced water.", "translation": "هاخد شوربة خضار، شكراً. وكوباية مية بتلج." },
      { "speaker": "Waiter", "text": "Coming right up! I'll bring your soup in just a moment.", "translation": "حاضر فوراً! هجيب لك الشوربة في لحظة." },
      { "speaker": "Customer", "text": "Take your time, no rush at all.", "translation": "خد وقتك، مفيش استعجال خالص." }
    ]
  },
  {
    "id": 15,
    "title": "Car Maintenance",
    "dialogue": [
      { "speaker": "Mechanic", "text": "What seems to be the trouble with your vehicle today?", "translation": "إيه المشكلة اللي باينة في عربيتك النهاردة؟" },
      { "speaker": "Driver", "text": "The engine has been making a strange knocking noise whenever I accelerate.", "translation": "الموتور بيعمل صوت خبط غريب كل ما بدوس بنزين." },
      { "speaker": "Mechanic", "text": "Let's pop the hood and take a look at the oil level and spark plugs.", "translation": "يلا نفتح الكابوت وناخد بصة على مستوى الزيت والبوجيهات." },
      { "speaker": "Driver", "text": "I checked the oil yesterday and it looked pretty low and dirty.", "translation": "أنا فحصت الزيت إمبارح وكان باين إنه قليل جداً ومش نظيف." },
      { "speaker": "Mechanic", "text": "That explains it. Running low on oil can cause serious damage to the engine components.", "translation": "ده يوضح كل حاجة. المشي بزيت قليل ممكن يسبب تلف شديد لمكونات الموتور." },
      { "speaker": "Driver", "text": "Can you do a full oil change and replace the filter now?", "translation": "تقدر تعمل تغيير زيت كامل وتغير الفلتر دلوقتي؟" },
      { "speaker": "Mechanic", "text": "Sure thing. It'll take about 30 minutes to finish the service.", "translation": "أكيد طبعاً. هياخد حوالي 30 دقيقة عشان يخلص الصيانة." },
      { "speaker": "Driver", "text": "Great, I'll wait in the reception room until it's done.", "translation": "عظيم، هستنى في أوضة الاستقبال لحد ما تخلص." }
    ]
  },
  {
    "id": 16,
    "title": "Talking About the Weather",
    "dialogue": [
      { "speaker": "A", "text": "It's extremely hot today, isn't it?", "translation": "الجو حر جداً النهاردة، مش كده؟" },
      { "speaker": "B", "text": "Yeah, the temperature reached 40 degrees this afternoon.", "translation": "أيوه، درجة الحرارة وصلت 40 درجة بعد الظهر." },
      { "speaker": "A", "text": "I heard it's going to rain tomorrow, though.", "translation": "بس أنا سمعت إنها هتمطر بكرة." },
      { "speaker": "B", "text": "Really? I hope the heat breaks a little bit.", "translation": "بجد؟ أتمنى الحر يخف شوية." },
      { "speaker": "A", "text": "Me too. High humidity makes it feel even worse.", "translation": "وأنا كمان. الرطوبة العالية بتخلي الجو يبان أسوأ." },
      { "speaker": "B", "text": "Definitely. Let's stay inside where the air conditioning is on.", "translation": "أكيد. خلينا قاعدين جوه حيث التكييف شغال." }
    ]
  },
  {
    "id": 17,
    "title": "Office Workload",
    "dialogue": [
      { "speaker": "A", "text": "Did you finish the monthly report for the boss?", "translation": "خلصت التقرير الشهري للمدير؟" },
      { "speaker": "B", "text": "Almost, I just need to verify a few numbers.", "translation": "تقريباً، فاضل لي بس أتأكد من شوية أرقام." },
      { "speaker": "A", "text": "Make sure to send it before the 5 o'clock deadline.", "translation": "تأكد إنك تبعته قبل الموعد النهائي الساعة 5." },
      { "speaker": "B", "text": "Don't worry, I'll email it in ten minutes.", "translation": "متلقش، هبعته في إيميل خلال عشر دقايق." },
      { "speaker": "A", "text": "Great. We also have a staff meeting scheduled for tomorrow morning.", "translation": "عظيم. وعندنا كمان إجتماع مع الموظفين متحدد بكرة الصبح." },
      { "speaker": "B", "text": "Thanks for the reminder. I'll prepare my presentation tonight.", "translation": "شكراً على التذكرة. هجهز العرض بتاعي بليل." }
    ]
  },
  {
    "id": 18,
    "title": "At the Supermarket",
    "dialogue": [
      { "speaker": "A", "text": "Do we need to buy anything else for dinner tonight?", "translation": "محتاجين نشتري أي حاجة تانية للعشا النهاردة؟" },
      { "speaker": "B", "text": "We need some fresh vegetables and a loaf of bread.", "translation": "محتاجين شوية خضار طازة ورغيف عيش." },
      { "speaker": "A", "text": "I'll pick up some milk and cheese while we're here too.", "translation": "هجيب شوية لبن وجبنة بالمرة وإحنا هنا." },
      { "speaker": "B", "text": "Sounds good. Let me check if they have any discounts on fruit.", "translation": "تمام. خليني أشوف لو عندهم أي تخفيضات على الفاكهة." },
      { "speaker": "A", "text": "Looks like apples are on sale today.", "translation": "باين إن التفاح عليه عرض النهاردة." },
      { "speaker": "B", "text": "Awesome, let's grab a kilo of those and head to the cashier.", "translation": "عاش، يلا ناخد كيلو منهم ونطلع على الكاشير." }
    ]
  },
  {
    "id": 19,
    "title": "Calling for Help",
    "dialogue": [
      { "speaker": "A", "text": "What's the emergency number for the police here?", "translation": "إيه هو رقم الطوارئ للشرطة هنا؟" },
      { "speaker": "B", "text": "It's 122. What happened? Is everything alright?", "translation": "هو 122. إيه اللي حصل؟ كل حاجة تمام؟" },
      { "speaker": "A", "text": "There was a minor car accident down the road.", "translation": "كان فيه حادثة عربية خفيفة على بعد الشارع." },
      { "speaker": "B", "text": "I'll call an ambulance just in case anyone is hurt.", "translation": "هتصل بالإسعاف للاحتياط لو حد اتصاب." },
      { "speaker": "A", "text": "Good idea. Luckily, both drivers seem fine and are talking.", "translation": "فكرة كويسة. لحسن الحظ، السواقين الاثنين باين عليهم بخير وبيتكلموا." },
      { "speaker": "B", "text": "That's a relief. Stay on the sidewalk until the patrol arrives.", "translation": "ده يطمن. خليك على الرصيف لحد ما الدورية توصل." }
    ]
  },
  {
    "id": 20,
    "title": "Taking the Metro",
    "dialogue": [
      { "speaker": "A", "text": "Which train goes directly to downtown?", "translation": "أنهي قطر بيروح لوسط البلد مباشرة؟" },
      { "speaker": "B", "text": "Take Line 1 toward the central station.", "translation": "اركب الخط الأولاني في اتجاه المحطة المركزية." },
      { "speaker": "A", "text": "How many stops is it from here?", "translation": "هي كم محطة من هنا؟" },
      { "speaker": "B", "text": "It's about five stops, roughly 15 minutes.", "translation": "حوالي خمس محطات، يعني حوالي 15 دقيقة." },
      { "speaker": "A", "text": "Do I need to buy a ticket before going through the turnstile?", "translation": "محتاج أشتري تذكرة قبل ما أعدي من بوابات التذاكر؟" },
      { "speaker": "B", "text": "Yes, get a ticket from the counter or use your transit card.", "translation": "أيوه، هات تذكرة من الشباك أو استخدم كارت المواصلات بتاعك." }
    ]
  },
  {
    "id": 21,
    "title": "Daily Routine and Habits",
    "dialogue": [
      { "speaker": "A", "text": "What time do you usually wake up on weekdays?", "translation": "عادةً بتصحى الساعة كام في أيام الشغل؟" },
      { "speaker": "B", "text": "I always set my alarm for 0600, but I usually get up around 0615.", "translation": "دايماً بظبط المنبه على 0600، بس عادةً بقوم من السرير على 0615." },
      { "speaker": "A", "text": "Do you have time for breakfast before heading out?", "translation": "بيكون عندك وقت تفطر قبل ما تنزل؟" },
      { "speaker": "B", "text": "Just a quick cup of coffee and some quick toast. What about you?", "translation": "مجرد فنجان قهوة سريع وتوست. أنت بقى إيه النظام؟" },
      { "speaker": "A", "text": "I like to go for a short run first, then eat a full breakfast.", "translation": "بحب أطلع أدري شوية في الأول، وبعدين آكل فطار كامل." },
      { "speaker": "B", "text": "That sounds healthy. I wish I had that kind of discipline!", "translation": "ده كلام صحي جداً. أتمنى يكون عندي الالتزام ده!" }
    ]
  },
  {
    "id": 22,
    "title": "Planning a Weekend Trip",
    "dialogue": [
      { "speaker": "A", "text": "Are you doing anything special this coming weekend?", "translation": "هتعمل أي حاجة مميزة الويك إند الجاي ده؟" },
      { "speaker": "B", "text": "A few friends and I are thinking of going camping near the lake.", "translation": "أنا وشوية أصحاب بنفكر نطلع نكيمب قريب من البحيرة." },
      { "speaker": "A", "text": "That sounds awesome. Are you going to stay in tents or rent a cabin?", "translation": "فكرة جامدة جداً. هتناموا في خيم ولا تأجروا كوخ؟" },
      { "speaker": "B", "text": "We're bringing tents. It's much cheaper and more adventurous.", "translation": "هنجيب خيم معانا. أرخص بكتير وفيه مغامرة اكتر." },
      { "speaker": "A", "text": "Make sure to check the weather forecast before you pack.", "translation": "تأكد إنك تشوف النشرة الجوية قبل ما تحزم الشنط." },
      { "speaker": "B", "text": "Good point. If it looks like rain, we might change our plans.", "translation": "نقطة مهمة. لو شكلها هتمطر، ممكن نغير خططنا." }
    ]
  },
  {
    "id": 23,
    "title": "Tech Support and Gadgets",
    "dialogue": [
      { "speaker": "A", "text": "My laptop has been running so slow lately. Any idea why?", "translation": "اللا بتاعي بقى بطيء جداً مؤخراً. عندك أي فكرة ليه؟" },
      { "speaker": "B", "text": "Have you tried clearing your cache or restarting the operating system?", "translation": "جربت تمسح الـ Cache أو تعمل إعادة تشغيل لنظام التشغيل؟" },
      { "speaker": "A", "text": "I restarted it this morning, but it didn't help much.", "translation": "عملتله ريستارت الصبح، بس مفرقش كتير." },
      { "speaker": "B", "text": "You might be running out of storage space or have too many background apps.", "translation": "يمكن المساحة عندك قربت تخلص أو فيه تطبيقات كتير شغالة في الخلفية." },
      { "speaker": "A", "text": "I'll back up my main files to an external drive and check.", "translation": "هاخد نسخة احتياطية من ملفاتي المهمة على كارت/هارد خارجي وأشوف." },
      { "speaker": "B", "text": "That's a good step. Let me know if you need help with the software.", "translation": "خطوة ممتازة. عرفني لو محتاج مساعدة في السوفت وير." }
    ]
  },
  {
    "id": 24,
    "title": "Fitness and Health Goals",
    "dialogue": [
      { "speaker": "A", "text": "Have you been hitting the gym regularly these days?", "translation": "انت منتظم في الجيم الأيام دي؟" },
      { "speaker": "B", "text": "Yeah, I've been trying to go at least four times a week.", "translation": "أيوه، بحاول أروح على الأقل أربع مرات في الأسبوع." },
      { "speaker": "A", "text": "Nice! Are you focusing more on cardio or strength training?", "translation": "عاش! بتركز أكتر على الكارديو ولا تمارين القوة/الحديد؟" },
      { "speaker": "B", "text": "Mostly lifting weights, followed by 15 minutes of high-intensity cardio.", "translation": "معظم الوقت أوزان، وبعدها 15 دقيقة كارديو شديد." },
      { "speaker": "A", "text": "I need to start tracking my nutrition and daily steps again.", "translation": "أنا محتاج أرجع أتابع تغذيتي وخطواتي اليومية تاني." },
      { "speaker": "B", "text": "Tracking really makes a huge difference. Consistency is key!", "translation": "المتابعة بتفرق جداً فعلاً. الاستمرارية هي السر!" }
    ]
  },
  {
    "id": 25,
    "title": "Asking for Directions",
    "dialogue": [
      { "speaker": "A", "text": "Excuse me, do you know where the nearest bank branch is?", "translation": "لو سمحت، تعرف فين أقرب فرع بنك هنا؟" },
      { "speaker": "B", "text": "Sure! Go straight down this street for two blocks, then turn left.", "translation": "أكيد! امشي طوالي في الشارع ده لمسافة بلوكين، وبعدين حيود شمال." },
      { "speaker": "A", "text": "Is it located next to the big supermarket?", "translation": "هو موجود جنَب السوبرماركت الكبير؟" },
      { "speaker": "B", "text": "Exactly. It's right opposite the gas station.", "translation": "بالظبط. هتلاقيه قدام محطة البنزين مباشرة." },
      { "speaker": "A", "text": "Is it within walking distance or should I take a cab?", "translation": "ينفع اروح مشي ولا الأحسن أخد تاكسي؟" },
      { "speaker": "B", "text": "It's barely a five-minute walk from here. You don't need a cab.", "translation": "ده يادوب خمس دقايق مشي من هنا. مش محتاج تاكسي خالص." }
    ]
  },
  {
    "id": 26,
    "title": "Shopping for Clothes",
    "dialogue": [
      { "speaker": "A", "text": "Hi, I'm looking for a casual jacket in medium size.", "translation": "أهلاً، أنا بدور على جاكيت كاجوال مقاس وسط (Medium)." },
      { "speaker": "B", "text": "We have these new arrivals in blue, black, and dark gray.", "translation": "عندنا الموديلات الجديدة دي باللون الأزرق، الأسود، والرمادي الغامق." },
      { "speaker": "A", "text": "The black one looks great. Can I try it on?", "translation": "الأسود شكله تحفة. ينفع أقيسه؟" },
      { "speaker": "B", "text": "Of course, the fitting rooms are right around the corner.", "translation": "أكيد طبعاً، غرف القياس على بعد خطوات هنا في الزاوية." },
      { "speaker": "A", "text": "It fits perfectly! How much is it?", "translation": "المقاس مضبوط بالظبط! هو بكام؟" },
      { "speaker": "B", "text": "It's on sale today for 45 dollars.", "translation": "عليه عرض النهاردة بـ 45 دولار." }
    ]
  },
  {
    "id": 27,
    "title": "Renting an Apartment",
    "dialogue": [
      { "speaker": "A", "text": "I saw your listing for the two-bedroom apartment online.", "translation": "أنا شفت الإعلان بتاعك لشقة غرفتين نوم على النت." },
      { "speaker": "B", "text": "Yes, it's still available. Would you like to schedule a viewing?", "translation": "أيوه، لسه متاحة. تحب نحدد موعد عشان تشوفها؟" },
      { "speaker": "A", "text": "That would be great. Does the rent include utilities like water and gas?", "translation": "يبقى ممتاز جداً. هو الإيجار شامل المرافق زي المية والغاز؟" },
      { "speaker": "B", "text": "Water is included, but electricity and gas are paid separately.", "translation": "المية شاملة الإيجار، بس الكهرباء والغاز بتدفعهم لوحدهم." },
      { "speaker": "A", "text": "Understood. Is there a security deposit required upfront?", "translation": "فهمتك. هو فيه مبلغ تأمين مطلوب تدفعه مقدم؟" },
      { "speaker": "B", "text": "Yes, one month's rent as a deposit upon signing the contract.", "translation": "أيوه، إيجار شهر واحد كتأمين عند توقيع العقد." }
    ]
  },
  {
    "id": 28,
    "title": "Making Weekend Plans",
    "dialogue": [
      { "speaker": "A", "text": "Hey, do you have any plans for Friday evening?", "translation": "يا صاحبي، عندك أي خطط ليوم الجمعة بليل؟" },
      { "speaker": "B", "text": "Not really, I was just thinking of staying home and relaxing.", "translation": "مش قوي، كنت بفكر أقعد في البيت وأرتاح." },
      { "speaker": "A", "text": "A few of us are getting together for dinner. You should come!", "translation": "شوّية مننا متجمعين على العشا. لازم تيجي!" },
      { "speaker": "B", "text": "Sounds like fun! Where are you guys meeting up?", "translation": "فكرة ممتعة! انتوا متجمعين فين؟" },
      { "speaker": "A", "text": "At that new grill place near the city center around 0800 PM.", "translation": "في محل المشويات الجديد اللي قريب من وسط البلد على الساعة 8 بليل." },
      { "speaker": "B", "text": "Count me in! Send me the location on WhatsApp.", "translation": "أنا معاكوا جداً! ابعتلي اللوكيشن على الواتساب." }
    ]
  },
  {
    "id": 29,
    "title": "Job Interview Questions",
    "dialogue": [
      { "speaker": "A", "text": "Can you walk us through your previous maintenance experience?", "translation": "ممكن تكلمنا وتدينا فكرة عن خبرتك السابقة في الصيانة؟" },
      { "speaker": "B", "text": "Sure. I've spent the last few years troubleshooting complex mechanical and electronic systems.", "translation": "أكيد. أنا قضيت السنين الأخيرة في تشخيص وإصلاح أنظمة ميكانيكية وإلكترونية معقدة." },
      { "speaker": "A", "text": "How do you handle high-pressure equipment failures during a shift?", "translation": "بتتعامل إزاي مع أعطال المعدات الشديدة تحت الضغط أثناء الشفت؟" },
      { "speaker": "B", "text": "I prioritize safety first, isolate the problem quickly, and follow standard diagnostic procedures.", "translation": "برتب أولوية الأمان الأول، بعزل المشكلة بسرعة، وبتبع خطوات التشخيص القياسية." },
      { "speaker": "A", "text": "Impressive. What are your expectations regarding working hours?", "translation": "ممتاز. إيه توقعاتك بخصوص ساعات العمل؟" },
      { "speaker": "B", "text": "I am fully adaptable to regular shifts and emergency calls when needed.", "translation": "أنا مَرِن وجاهز للتكيف التام مع الشفتات المنتظمة أو استدعاءات الطوارئ عند الحاجة." }
    ]
  },
  {
    "id": 30,
    "title": "Cooking and Recipes",
    "dialogue": [
      { "speaker": "A", "text": "This dish tastes amazing! What ingredients did you use?", "translation": "الطبق ده طعمه روعة! إيه المكونات اللي استخدمتها؟" },
      { "speaker": "B", "text": "It's a simple recipe: grilled chicken, olive oil, garlic, and fresh herbs.", "translation": "هي وصفة بسيطة: فراخ مشوية، زيت زيتون، ثوم، وأعشاب طازة." },
      { "speaker": "A", "text": "How long do you marinate the meat before cooking?", "translation": "بتسيب اللحمة/الفراخ في التتبيلة قد إيه قبل الطبخ؟" },
      { "speaker": "B", "text": "At least two hours in the fridge so the flavors really soak in.", "translation": "ساعتين على الأقل في الثلاجة عشان النكهات تتشرب وتظبط." },
      { "speaker": "A", "text": "I'll definitely try making this at home this weekend.", "translation": "أكيد هجرب أعمل الوصفة دي في البيت الويك إند ده." },
      { "speaker": "B", "text": "Let me know how it turns out! I can send you the exact measurements.", "translation": "عرفني هتطلع معاك إزاي! ممكن ابعتلك المقادير بالظبط." }
    ]
  },
  {
    "id": 31,
    "title": "Public Transportation and Commuting",
    "dialogue": [
      { "speaker": "A", "text": "Do you usually take the bus or the metro to work?", "translation": "عادةً بتركب الأتوبيس ولا المترو وأنت رايح الشغل؟" },
      { "speaker": "B", "text": "I prefer the metro. It completely avoids the morning rush-hour traffic.", "translation": "بفضل المترو. بيبعد تماماً عن زحمة المرور بتاعة الصبح." },
      { "speaker": "A", "text": "How long does your daily commute take on average?", "translation": "المشوار اليومي بياخد منك وقت قد إيه في المتوسط؟" },
      { "speaker": "B", "text": "About 35 minutes door-to-door, which isn't too bad.", "translation": "حوالي 35 دقيقة من الباب للباب، وده مش وحش خالص." },
      { "speaker": "A", "text": "That's pretty convenient. I spend over an hour in traffic every day.", "translation": "ده مريح جداً. أنا بقضي أكتر من ساعة في الزحمة كل يوم." },
      { "speaker": "B", "text": "You should really consider switching to the train if there's a nearby station.", "translation": "المفروض تفكر جدياً تحول للقطار/المترو لو فيه محطة قريبة منك." }
    ]
  },
  {
    "id": 32,
    "title": "Planning a Solar Power Setup",
    "dialogue": [
      { "speaker": "A", "text": "Have you considered installing solar panels on the roof?", "translation": "فكرت تركب ألواح طاقة شمسية على السطح؟" },
      { "speaker": "B", "text": "Yes, we're calculating the overall capacity and battery requirements right now.", "translation": "أيوه، بنحسب السعة الإجمالية ومتطلبات البطاريات دلوقتي." },
      { "speaker": "A", "text": "Is the upfront installation cost very high?", "translation": "هي تكلفة التركيب المبدئية غالية جداً؟" },
      { "speaker": "B", "text": "It requires an initial investment, but it cuts electricity bills drastically in the long run.", "translation": "بتتطلب استثمار في الأول، بس بتقلل فواتير الكهرباء جداً على المدى الطويل." },
      { "speaker": "A", "text": "Are you going with an off-grid system or connected to the main grid?", "translation": "هتعمل نظام منفصل (Off-grid) ولا متوصل بالشبكة القومية؟" },
      { "speaker": "B", "text": "A hybrid system so we have reliable backup power during outages.", "translation": "نظام هجين (Hybrid) عشان يكون عندنا طوارئ موثوقة وقت انقطاع الكهرباء." }
    ]
  },
  {
    "id": 33,
    "title": "At the Local Bakery",
    "dialogue": [
      { "speaker": "A", "text": "Good morning! Do you have freshly baked loaves available?", "translation": "صباح الخير! عندك عيش طازة لسه ملموم من الفرن؟" },
      { "speaker": "B", "text": "Yes, a new batch of whole wheat bread just came out of the oven.", "translation": "أيوه، دفعة جديدة من العيش القمح الكامل لسه طالعة من الفرن حالا." },
      { "speaker": "A", "text": "Great! Give me two loaves of that and four croissants, please.", "translation": "عظيم! اديني رغيفين من ده وأربعة كواسون من فضلك." },
      { "speaker": "B", "text": "Would you like anything else? We also have fresh pastries today.", "translation": "تحب أي حاجة تانية؟ عندنا حلويات/مخبوزات طازة النهاردة برضه." },
      { "speaker": "A", "text": "That will be all for today, thanks. How much do I owe you?", "translation": "ده كل حاجة النهاردة، شكراً. الحساب كام؟" },
      { "speaker": "B", "text": "That comes to 6 dollars in total.", "translation": "كده الحساب الإجمالي 6 دولار." }
    ]
  },
  {
    "id": 34,
    "title": "Discussing Agriculture and Land",
    "dialogue": [
      { "speaker": "A", "text": "How is the irrigation system holding up on the farm?", "translation": "نظام الري شغال إزاي وأخباره إيه في المزرعة؟" },
      { "speaker": "B", "text": "We just repaired the main pump, so water flow is back to normal.", "translation": "لسه مصلحين الطلمبة الرئيسية، فتدفق المية رجع لطبيعته." },
      { "speaker": "A", "text": "Are you planning to plant crops on the new acreage this season?", "translation": "مخطط تزرع محاصيل في المساحة الأرض الجديدة الموسم ده؟" },
      { "speaker": "B", "text": "Yes, we're preparing the soil for date palms and olive trees.", "translation": "أيوه، بنجهز التربة دلوقتي لنخيل البلح وشجر الزيتون." },
      { "speaker": "A", "text": "That's a smart choice for arid soil conditions.", "translation": "اختيار ذكي جداً لظروف التربة الصحراوية/الجافة." },
      { "speaker": "B", "text": "Definitely. They require less groundwater and yield good returns.", "translation": "بالتأكيد. بيحتاجوا مية جوفية أقل وبيدوا إنتاج ومردود كويس." }
    ]
  },
  {
    "id": 35,
    "title": "Troubleshooting Electronic Equipment",
    "dialogue": [
      { "speaker": "A", "text": "The display unit on the diagnostic control board isn't turning on.", "translation": "شاشة العرض اللي في كارتة التحكم والتشخيص مش راضية تفتح." },
      { "speaker": "B", "text": "Did you inspect the fuse and check the input voltage with a multimeter?", "translation": "فحصت الفيوز وشفت جهد الدخل (Voltage) بالآفو ولا لسه؟" },
      { "speaker": "A", "text": "Voltage is fine, but there seems to be a loose wiring connection.", "translation": "الجهد مظبوط، بس باين إن فيه سلك سايب أو التوصيلة فيها بوش." },
      { "speaker": "B", "text": "Re-solder the joint and test the circuit again under load.", "translation": "اعيد لحام النقطة دي وجرب الدائرة تاني تحت الحمل." },
      { "speaker": "A", "text": "Done! The screen lit up and all systems are responding now.", "translation": "تم! الشاشة نورت وكل الأنظمة شغالة وبترد دلوقتي." },
      { "speaker": "B", "text": "Excellent work. Document the fix in the maintenance logbook.", "translation": "شغل ممتاز. سجل الإصلاح ده في دفتر الصيانة." }
    ]
  },
  {
    "id": 36,
    "title": "Software Development and PWAs",
    "dialogue": [
      { "speaker": "A", "text": "Are we building this module as a full Native App or a Progressive Web App?", "translation": "إحنا هني الموديل ده كـ Native App كامل ولا PWA؟" },
      { "speaker": "B", "text": "A PWA is definitely the way to go — it's lightweight and works seamlessly offline.", "translation": "الـ PWA أكيد هو الخيار الصح — خفيف وبيشتغل أوفلاين كفاءة وبدون مشاكل." },
      { "speaker": "A", "text": "Have you set up the service worker to cache the dynamic JSON data properly?", "translation": "ظبطت الـ Service Worker عشان يكش (Cache) بيانات الـ JSON الديناميكية بشكل مظبوط؟" },
      { "speaker": "B", "text": "Yes, all dialogues and assets will load instantly even with zero network coverage.", "translation": "أيوه، كل المحادثات والملفات هتحمل في اللحظة حتى لو مفيش تغطية شبكة خالص." },
      { "speaker": "A", "text": "Awesome. That makes the entire user experience so much smoother.", "translation": "عاش جداً. ده بيخلي تجربة المستخدم كلها أسرع وأسلس بكتير." },
      { "speaker": "B", "text": "Exactly. Less bandwidth, zero lag, and total control over data storage.", "translation": "بالظبط. استهلاك أقل للباقة، زيرو تهنيج، وتحكم كامل في تخزين البيانات." }
    ]
  },
  {
    "id": 37,
    "title": "Off-Grid Camping and Safari Trip",
    "dialogue": [
      { "speaker": "A", "text": "Did you pack all the essential gear for the safari camping trip?", "translation": "حزمت كل المعدات الضرورية لرحلة التخييم والسفاري؟" },
      { "speaker": "B", "text": "Yes, we have the tents, solar chargers, water filters, and first-aid kits ready.", "translation": "أيوه، معانا الخيم، الشواحن الشمسية، الفلاتر المية، وشنط الإسعافات الأولية جاهزة." },
      { "speaker": "A", "text": "Keep in mind that there will be absolute zero internet connection out in the oasis.", "translation": "خلي بالك إن مش هيكون فيه أي تغطية إنترنت خالص هناك في الواحة." },
      { "speaker": "B", "text": "That's perfect. All our offline apps and reference guides are pre-stored and cached anyway.", "translation": "ممتاز جداً! كل تطبيقاتنا اللي شغالة أوفلاين والدلائل متخزنة ومحفوظة مسبقاً على أي حال." },
      { "speaker": "A", "text": "Great! It's going to be an awesome experience off the grid.", "translation": "عظيم! هتبقى تجربة تحفة بعيداً عن الزحمة والشبكات." },
      { "speaker": "B", "text": "Definitely. Time to disconnect and enjoy the stars.", "translation": "بالتأكيد. جه الوقت نصل من العالم ونستمتع بالنجوم." }
    ]
  },
  {
    "id": 38,
    "title": "Night Shift Duties",
    "dialogue": [
      { "speaker": "A", "text": "Who is handing over the maintenance logs for tonight's night shift?", "translation": "مين اللي بيسلم سجلات الصيانة لشفت بليل النهاردة؟" },
      { "speaker": "B", "text": "The day shift technician just updated the records on the local app.", "translation": "فني شفت النهار لسه محدد البيانات والسجلات على البرنامج المحلي." },
      { "speaker": "A", "text": "Did any critical alarms go off on the main control unit earlier?", "translation": "هل فيه أي إنذارات خطيرة اشتغلت في وحدة التحكم الرئيسية بدري؟" },
      { "speaker": "B", "text": "Only a minor pressure drop on pump line B, but it was resolved quickly.", "translation": "مجرد هبوط خفيف في الضغط على خط الطلمبة B، وتصلحت بسرعة." },
      { "speaker": "A", "text": "Good. Make sure to conduct a routine check every two hours.", "translation": "كويس. تأكد إنك تعمل مروري وفحص روتيني كل ساعتين." },
      { "speaker": "B", "text": "Understood. Everything is stable and operating normally right now.", "translation": "فهمتك. كل حاجة مستقرة وشغالة طبيعي جداً دلوقتي." }
    ]
  },
  {
    "id": 39,
    "title": "Language Learning Milestone",
    "dialogue": [
      { "speaker": "A", "text": "How is your daily vocabulary and sentence building practice going?", "translation": "ممارسة الكلمات وتكوين الجمل اليومية بتاعتك ماشية إزاي؟" },
      { "speaker": "B", "text": "It's going great! Breaking down large dialogues into small JSON chunks makes learning way easier.", "translation": "ماشية روعة! تقسيم المحادثات الكبيرة لقطع JSON صغيرة بيخلي التعلم أسهل بكتير." },
      { "speaker": "A", "text": "Consistency is really the secret to mastering any new language rapidly.", "translation": "الاستمرارية فعلاً هي السر عشان تتقن أي لغة جديدة بسرعة." },
      { "speaker": "B", "text": "Absolutely! A few targeted practice sessions every day build up a massive vocabulary pool over time.", "translation": "بالتأكيد! شوية جلسات ممارسة مستهدفة كل يوم بتعمل حصيلة كلمات ضخمة جداً مع الوقت." },
      { "speaker": "A", "text": "Keep up the fantastic momentum!", "translation": "استمر على العاش والقوة دي!" },
      { "speaker": "B", "text": "Thanks, man! On to building more modules and hitting the next targets.", "translation": "تسلم يا صاحبي! نطلع بقى على بناء باقي الموديلات وتحقيق الأهداف الجاية." }
    ]
  }
]









;
