// Array of MCQs with correct answers
const questions = [
    { question: "Who coined the term Rajput Paintings?", options: ["E. B. Havell", "Anand Coomaraswamy", "Stella Kramrisch", "Percy Brown"], correct: 1 },
    { question: "Which was NOT a princely kingdom associated with the Rajasthani Schools of Painting?", options: ["Bundi", "Malwa", "Mewar", "Hyderabad"], correct: 3 },
    { question: "Why is the term Rajput Schools considered obsolete?", options: ["Mughal influence made the classification irrelevant", "It generalized diverse regional styles under one term", "It was replaced by 'Mughal-Rajput Synthesis'", "There was no Rajput patronage of painting"], correct: 1 },
    { question: "The primary purpose of painting in Rajasthani schools was:", options: ["Decoration of royal palaces", "Documentation of battles", "Religious and poetic themes", "Commemoration of British rule"], correct: 2 },
    { question: "Which of the following painting techniques was NOT commonly used in Rajasthani miniature painting?", options: ["Use of squirrel hair brushes", "Painting on waslis", "Oil painting on canvas", "Burnishing with agate"], correct: 2 },
    { question: "The pictorial style of Rajasthani paintings was heavily influenced by:", options: ["Persian naturalism", "European perspective techniques", "Jain manuscript traditions", "Indo-Greek sculptures"], correct: 2 },
    { question: "What was a unique feature of the painting process in the Rajasthani schools?", options: ["A single artist completed the entire painting", "A team of specialists worked on different aspects", "The colors were pre-mixed and stored for later use", "Paintings were only created for temple rituals"], correct: 1 },
    { question: "Which of the following is a characteristic NOT commonly associated with Rajasthani miniature paintings?", options: ["Brilliant and vibrant colors", "Extensive use of gold and silver", "Photorealistic perspective", "Stylized human figures"], correct: 2 },
    { question: "Which of the following was NOT a material used for coloring in Rajasthani paintings?", options: ["Mineral-based pigments", "Precious metals like gold and silver", "Plant-based dyes", "Synthetic chemical colors"], correct: 3 },
    { question: "Which of the following is NOT a major theme of Rajasthani miniature paintings?", options: ["Ragamala series", "Vaishnavite Bhakti themes", "Portraits of British officials", "Courtly life and festivals"], correct: 2 },
    { question: "The Gita Govinda paintings from Mewar primarily depict:", options: ["Battles of Rajput kings", "Mystical love between Krishna and Radha", "The coronation of Mughal emperors", "Folk tales of Rajasthan"], correct: 1 },
    { question: "The Rasamanjari text is concerned with:", options: ["Bhakti poetry", "Classification of heroes and heroines", "Manuscript illumination techniques", "The genealogy of Rajput rulers"], correct: 1 },
    { question: "In Rasikapriya, lovers' emotions are depicted using:", options: ["Religious symbols", "Architectural backgrounds", "Mythological allegories", "Gestures and body language"], correct: 3 },
    { question: "The poetic work Baramasa focuses on:", options: ["The seasonal cycle and its effects on emotions", "The life of Buddha", "Military conquests of Rajput rulers", "The formation of the Himalayas"], correct: 0 },
    { question: "The depiction of Ragamala paintings is based on:", options: ["Musical ragas personified as humans", "Jain Tirthankaras in meditation", "Persian miniatures", "Mahabharata battle scenes"], correct: 0 },
    { question: "Which of these themes was NOT commonly depicted in Rajasthani paintings?", options: ["Darbar scenes", "Hunting expeditions", "Industrial revolution", "Festivals and wedding processions"], correct: 2 },
    { question: "Bihari Satsai was primarily painted in which school?", options: ["Bikaner", "Mewar", "Jaipur", "Bundi"], correct: 1 },
    { question: "The Bhagvata Purana and Ramayana were favorite painting themes because:", options: ["They contained battle sequences", "They depicted Rajput rulers' genealogy", "They were revered in Bhakti traditions", "They were commissioned by British patrons"], correct: 2 },
    { question: "The Dhola-Maru tale originates from:", options: ["Mughal court literature", "Rajput bardic legends", "Persian Sufi poetry", "Buddhist Jataka stories"], correct: 1 },
    { question: "Raga Megha in Ragamala paintings is associated with:", options: ["Summer and the color red", "Monsoon and cloudy skies", "Spring and blooming flowers", "Autumn and golden leaves"], correct: 1 },
    { question: "The waslis used for Rajasthani paintings were made by:", options: ["Pressing silk cloth with wooden boards", "Layering handmade paper sheets together", "Boiling plant extracts to create a canvas", "Importing parchment from Persia"], correct: 1 },
    { question: "What was the primary purpose of burnishing Rajasthani miniature paintings with an agate stone?", options: ["To add waterproofing properties", "To make colors appear deeper and richer", "To ensure faster drying of pigments", "To give the surface a rough texture"], correct: 1 },
    { question: "Why were camel and squirrel hair preferred for making brushes in Rajasthani paintings?", options: ["They absorbed more pigment than other animal hairs", "They allowed fine and controlled strokes", "They retained their shape for a longer time", "They could be easily obtained in desert regions"], correct: 1 },
    { question: "The composition of Rajasthani miniature paintings often featured:", options: ["Symmetrical, highly realistic cityscapes", "Flattened perspective with bold color contrasts", "Three-dimensional shading with chiaroscuro", "Minimal background details to focus on figures"], correct: 1 },
    { question: "Which of these ws a common color preference in Rajasthani paintings?", options: ["Muted pastels and earthy tones", "Vivid and contrasting primary colors", "Heavy use of metallic silver and grey shades", "Naturalistic color blending for realism"], correct: 1 },
    { question: "How were natural pigments for Rajasthani paintings traditionally sourced?", options: ["By grinding minerals and semi-precious stones", "By extracting dyes from factory-made chemicals", "By boiling wood pulp and tree bark", "By using only animal-derived substances"], correct: 0 },
    { question: "The fine detailing in Rajasthani paintings was primarily done using:", options: ["A thick layer of underpainting", "Repetitive brushstrokes with gold highlights", "A single-hair brush and magnification techniques", "Printing methods introduced by the British"], correct: 2 },
    { question: "Which of the following statements about the Rajasthani painting process is TRUE?", options: ["Artists used pre-mixed colors stored for later use", "Outlines were drawn in charcoal before applying color", "Different specialists handled different aspects of a painting", "Backgrounds were always painted first before figures"], correct: 2 },
    { question: "What was a distinguishing feature of the narrative technique used in Rajasthani paintings?", options: ["Sequential storytelling in a single frame", "Western-style one-point perspective", "Hidden symbols for secret messages", "Use of only religious subjects"], correct: 0 },
    { question: "The use of gold and silver in Rajasthani paintings served to:", options: ["Highlight divine figures and luxurious elements", "Make paintings resistant to humidity", "Create three-dimensional sculptural effects", "Preserve paintings for longer durations"], correct: 0 },
    { question: "The outlining of figures in Rajasthani paintings was typically done using:", options: ["Dark brown or black ink", "White chalk for preliminary sketches", "Thin gold-leaf strips", "Indigo-dyed cotton threads"], correct: 0 },
    { question: "The primary influence on the brushwork of Rajasthani paintings came from:", options: ["Mughal calligraphy techniques", "Ajanta cave murals", "Persian miniature art", "Jain manuscript illustrations"], correct: 3 },
    { question: "What was the function of the scribe in the creation of Rajasthani paintings?", options: ["Writing the text in designated spaces", "Applying the final gold embellishments", "Deciding the color composition", "Making the preliminary sketches"], correct: 0 },
    { question: "The preference for two-dimensional, stylized human figures in Rajasthani paintings was due to:", options: ["The influence of traditional Indian aesthetic principles", "A lack of knowledge about Western realism", "The dominance of Islamic iconography", "The use of crude painting materials"], correct: 0 },
    { question: "The 'Mughalized' Rajasthani paintings typically displayed:", options: ["Softer color palettes and more shading", "Abstract geometric designs with calligraphy", "Depictions of European landscapes", "Minimal use of human figures"], correct: 0 },
    { question: "The preferred medium for Rajasthani paintings was:", options: ["Wooden panels", "Silk scrolls", "Handmade paper", "Marble slabs"], correct: 2 },
    { question: "Rajasthani artists often used aerial perspective by:", options: ["Layering multiple levels of the scene in a single frame", "Adding a central vanishing point", "Shading darker tones for background elements", "Blurring the distant elements"], correct: 0 },
    { question: "The depiction of emotions in Rajasthani paintings was primarily achieved through:", options: ["Detailed facial expressions and hand gestures", "Shadow and lighting effects", "Perspective-based depth representation", "Use of mirrors and reflections"], correct: 0 },
    { question: "The 'flattened space' effect in Rajasthani paintings was influenced by:", options: ["Early Buddhist mural paintings", "Persian manuscript illustrations", "Mughal fresco traditions", "European oil paintings"], correct: 1 },
    { question: "The emphasis on decorative elements such as floral patterns and ornate borders in Rajasthani paintings was meant to:", options: ["Showcase the artist's skills in intricate detailing", "Create optical illusions of depth", "Ensure paintings fit within architectural designs", "Serve as hidden codes for storytelling"], correct:0 },
    { question: "The Mewar School of Painting is believed to have originated in which location?", options: ["Chawand", "Jaipur", "Kishangarh", "Bundi"], correct: 0 },
    { question: "Which artist is most prominently associated with the early development of the Mewar School?", options: ["Nihal Chand", "Sahibdin", "Manohar", "Ruknuddin"], correct: 1 },
    { question: "What was a distinguishing feature of Bundi paintings compared to other Rajasthani schools?", options: ["Use of muted pastel tones", "Preference for depicting lush vegetation and landscapes", "Avoidance of human figures", "Complete absence of Mughal influence"], correct: 1 },
    { question: "The Kota School of Painting is particularly known for its:", options: ["Religious depictions of Krishna", "Extreme stylization of human forms", "Intense focus on hunting scenes", "Use of large wall murals instead of miniatures"], correct: 2 },
    { question: "The Kishangarh School’s distinct style is best represented by which painting?", options: ["Bani Thani", "Raga Dipak", "The Ragamala Set", "Ramayana Paintings"], correct: 0 },
    { question: "The facial features in Kishangarh paintings are characterized by:", options: ["Sharp noses, elongated eyes, and curved eyebrows", "Round faces with soft features", "Highly muscular and exaggerated forms", "Expressions of sorrow and tragedy"], correct: 0 },
    { question: "The Bikaner School of Painting is unique because:", options: ["It had a strong influence from Mughal styles", "It exclusively painted Jain themes", "It never used gold in its compositions", "It focused primarily on architectural designs"], correct: 0 },
    { question: "The Nathdwara School is particularly associated with:", options: ["The depiction of Shrinathji and Vaishnavite themes", "Hunting expeditions of Rajput kings", "The lives of Jain monks", "The Persian epic Shahnameh"], correct: 0 },
    { question: "Which ruler’s patronage is associated with the flourishing of Jaipur painting?", options: ["Sawai Jai Singh", "Akbar", "Maharana Pratap", "Udai Singh"], correct: 0 },
    { question: "The Baramasa series from Bundi illustrates:", options: ["Twelve moods of lovers in different seasons", "The twelve divine forms of Lord Vishnu", "The daily routine of Rajput kings", "Scenes from Jain cosmology"], correct: 0 },
    { question: "Which external influence was LEAST significant in shaping the Rajasthani schools of painting?", options: ["Mughal art", "Persian miniature tradition", "European Renaissance art", "Chinese ink painting"], correct: 3 },
    { question: "The early Rajasthani paintings show continuity with which earlier tradition?", options: ["Ajanta cave murals", "Jain manuscript paintings", "Gandhara sculptures", "Indo-Greek frescoes"], correct: 1 },
    { question: "The Pahari School of Painting differs from Rajasthani styles primarily in its:", options: ["Greater emphasis on naturalism", "Exclusive use of monochrome shading", "Preference for depicting Islamic court life", "Adoption of calligraphic elements"], correct: 0 },
    { question: "Which technique in Mughal painting was later adapted in Rajasthani schools?", options: ["Fine shading and use of perspective", "Lack of human depictions", "Exclusive use of geometric patterns", "Use of large oil canvases"], correct: 0 },
    { question: "Why did Rajasthani painters often avoid direct imitation of Mughal styles?", options: ["To preserve their distinct regional identity", "Mughal styles were considered too simplistic", "They had no exposure to Mughal influences", "Mughal painting was banned in Rajput courts"], correct: 0 },
    { question: "Which of the following themes was a direct adaptation from Mughal painting traditions?", options: ["Portraits of rulers in court settings", "Depiction of Krishna’s childhood stories", "Jain cosmology and mythology", "Pahari folk narratives"], correct: 0 },
    { question: "European influence on Rajasthani miniature paintings became more prominent in:", options: ["The 18th century", "The early 16th century", "The period before Mughal rule", "The early 12th century"], correct: 0 },
    { question: "Which Mughal emperor’s reign had the most significant impact on Rajasthani art?", options: ["Akbar", "Aurangzeb", "Babur", "Bahadur Shah II"], correct: 0 },
    { question: "The use of portraiture in Rajasthani paintings was influenced by:", options: ["Mughal naturalism", "Jain manuscript styles", "Buddhist iconography", "Persian calligraphy"], correct: 0 },
    { question: "Which of the following is NOT a reason why Rajasthani painting continued to thrive despite Mughal dominance?", options: ["Strong patronage by Rajput rulers", "Isolation from Mughal administrative centers", "Resistance to Persian artistic techniques", "Religious and cultural themes appealing to local audiences"], correct: 2 },
    { question: "Which Rajasthani school was the last to develop?", options: ["Jaipur", "Bundi", "Nathdwara", "Bikaner"], correct: 2 },
    { question: "Which artist is credited with the painting Bani Thani?", options: ["Nihal Chand", "Sahibdin", "Ruknuddin", "Madho Das"], correct: 0 },
    { question: "In which century did Rajasthani miniature painting reach its peak?", options: ["17th century", "15th century", "12th century", "19th century"], correct: 0 },
    { question: "Which animal was most commonly depicted in Rajasthani hunting scenes?", options: ["Tigers", "Elephants", "Camels", "Bears"], correct: 0 },
    { question: "Which Rajput king was a major patron of the Mewar School?", options: ["Jagat Singh I", "Prithviraj Chauhan", "Rana Sanga", "Bhim Singh"], correct: 0 },
    { question: "What was the main function of Ragamala paintings?", options: ["To visualize musical modes as human figures", "To depict scenes from epic literature", "To illustrate courtly intrigues", "To serve as maps for musicians"], correct: 0 },
    { question: "Which of the following schools is NOT part of the Rajasthani tradition?", options: ["Chamba", "Jodhpur", "Jaipur", "Kishangarh"], correct: 0 },
    { question: "What is the main characteristic of Marwar paintings?", options: ["Strong folk elements and vibrant colors", "Delicate Mughal-style portraits", "Absence of human figures", "Heavy Persian influences"], correct: 0 },
    { question: "Who commissioned most of the religious-themed paintings in Rajasthan?", options: ["Vaishnavite kings and merchants", "British administrators", "Jain monks", "Mughal emperors"], correct: 0 },
    { question: "Which of these themes was almost NEVER depicted in Rajasthani painting?", options: ["Scientific diagrams", "Courtly celebrations", "Epic battles", "Krishna’s life events"], correct: 0 },
    { question: "The use of exaggerated gestures in Rajasthani paintings was primarily to:", options: ["Emphasize emotions over realism", "Create a sense of movement", "Avoid religious iconography", "Mimic Persian artistic conventions"], correct: 0 },
    { question: "The depiction of Chaurpanchasika in Mewar paintings was inspired by:", options: ["Love poetry", "Epic battle scenes", "Jain cosmology", "Sufi philosophy"], correct: 0 },
    { question: "The Malwa School of Painting is unique because:", options: ["It lacks a clear regional patronage", "It uses only black and white colors", "It depicts only Islamic themes", "It does not use wasli paper"], correct: 0 },
    { question: "What distinguishes Bundi and Kota paintings from other Rajasthani styles?", options: ["Their intricate depiction of water and landscapes", "Their strict adherence to Persian calligraphy", "The use of large canvas paintings", "The complete absence of gold in their compositions"], correct: 0 },
    { question: "Which school was most heavily influenced by the Mughal style?", options: ["Bikaner", "Bundi", "Kota", "Kishangarh"], correct: 0 },
    { question: "Why did Rajasthani paintings favor a bright color palette?", options: ["To symbolize energy and devotion", "Due to the availability of cheap synthetic dyes", "To reflect the European influence", "Because dark colors were forbidden in Rajput courts"], correct: 0 },
    { question: "Which school of painting often depicted Rajput rulers in grand hunting expeditions?", options: ["Kota", "Jaipur", "Kishangarh", "Nathdwara"], correct: 0 },
    { question: "What is a common feature of equestrian portraits in Rajasthani paintings?", options: ["The horse is shown in dynamic movement", "The ruler is never depicted on a horse", "The background is filled with European elements", "The figures are drawn with a realistic approach"], correct: 0 },
    { question: "Which element of Rajasthani paintings was introduced due to Jain influence?", options: ["Intricate decorative patterns", "Battle scenes", "Large-scale murals", "Three-dimensional depth"], correct: 0 },
    { question: "The depiction of Krishna as Shrinathji is most commonly found in:", options: ["Nathdwara School", "Bundi School", "Jodhpur School", "Malwa School"], correct: 0 },
    { question: "The paintings of Jaipur School were influenced by:", options: ["Mughal and Vaishnavite traditions", "Jain and Buddhist art", "Persian and Ottoman miniatures", "Pahari and Nepali painting styles"], correct: 0 },
    { question: "Raga Dipak from the Ragamala paintings is associated with which element?", options: ["Fire", "Water", "Air", "Earth"], correct: 0 },
    { question: "The earliest set of Mewar Ragamala paintings was painted in which year?", options: ["1605", "1701", "1650", "1550"], correct: 0 },
    { question: "Bal Kanda of Ramayana was painted by which Mewar artist?", options: ["Manohar", "Nihal Chand", "Ruknuddin", "Madho Das"], correct: 0 },
    { question: "The Nathdwara style developed primarily due to the influence of:", options: ["The Pushtimarg sect", "The Mughal court", "Jain monks", "British colonial rule"], correct: 0 },
    { question: "The depiction of feminine beauty in Bundi paintings follows which stylistic feature?", options: ["Small waists and rounded faces", "Realistic European proportions", "Geometric simplification of features", "Exaggerated muscularity"], correct: 0 },
    { question: "What makes Jodhpur paintings different from other Rajasthani schools?", options: ["They retained strong folk elements", "They strictly followed Mughal court style", "They avoided all religious themes", "They had no depictions of royalty"], correct: 0 },
    { question: "Which material was NOT traditionally used in Rajasthani painting?", options: ["Synthetic pigments", "Ground minerals", "Squirrel hair brushes", "Handmade paper"], correct: 0 },
    { question: "Which Rajput ruler was famously depicted in battle scenes in Mewar paintings?", options: ["Maharana Pratap", "Raja Man Singh", "Sawai Jai Singh", "Raja Bhoj"], correct: 0 },
    { question: "Why do Rajasthani paintings often show multiple events in one frame?", options: ["To create a continuous narrative", "Due to influence from Persian calligraphy", "To reduce the cost of paper", "Because single-scene paintings were banned"], correct: 0 },
    { question: "Which Rajasthani school was most closely associated with Ragamala paintings?", options: ["Bundi", "Jaipur", "Nathdwara", "Bikaner"], correct: 0 },
    { question: "How did Rajasthani painting techniques differ from Mughal painting?", options: ["Rajasthani paintings used flatter compositions", "Mughal paintings had simpler color schemes", "Rajasthani artists used only natural landscapes", "Mughal paintings never depicted rulers"], correct: 0 },
    { question: "The use of bold, simplified forms in Malwa paintings is likely influenced by:", options: ["Earlier Jain manuscript traditions", "Mughal miniatures", "Persian illuminated manuscripts", "Italian Renaissance art"], correct: 0 },
    { question: "The composition of the famous Kishangarh painting Bani Thani is inspired by:", options: ["Radha’s divine beauty", "Jain asceticism", "Mughal court ladies", "Sufi saint portraits"], correct: 0 },
    { question: "The depiction of Padmini, Chitrini, and Shankhini women in paintings was based on:", options: ["Rasamanjari classifications", "Rajput battle stories", "Persian literary traditions", "Jain spiritual texts"], correct: 0 },
    { question: "The Mughal-style shading technique introduced in later Rajasthani paintings was called:", options: ["Tadkirah", "Gudarayi", "Marammat", "Charbagh"], correct: 1 },
    { question: "The preferred background in Bundi paintings often features:", options: ["Lush green landscapes", "Monochrome abstract patterns", "Persian-style architecture", "Calligraphic inscriptions"], correct: 0 },
    { question: "The practice of painting Krishna’s life events in Rajasthani schools was linked to:", options: ["The Bhakti movement", "Mughal court influence", "Buddhist cosmology", "Jain ascetic traditions"], correct: 0 },
    { question: "A key difference between the Jaipur and Bikaner schools is:", options: ["Jaipur followed Mughal influences more closely", "Bikaner paintings never used human figures", "Jaipur paintings depicted only Jain themes", "Bikaner paintings were larger than Jaipur ones"], correct: 0 },
    { question: "The Rajput rulers’ strong patronage of Rajasthani paintings was primarily due to:", options: ["Their desire to assert cultural identity", "Mughal pressure to promote local art", "European demand for miniatures", "The decline of Persian manuscript traditions"], correct: 0 },
];

// Function to render all questions dynamically
function loadQuestions() {
    const container = document.getElementById("questions-container");
    questions.forEach((q, index) => {
        const questionDiv = document.createElement("div");
        questionDiv.classList.add("question");

        const questionText = document.createElement("h4");
        questionText.textContent = `${index + 1}. ${q.question}`;
        questionDiv.appendChild(questionText);

        const optionsDiv = document.createElement("div");
        optionsDiv.classList.add("options");

        q.options.forEach((option, i) => {
            const button = document.createElement("button");
            button.textContent = option;
            button.onclick = () => checkAnswer(button, i, q.correct);
            optionsDiv.appendChild(button);
        });

        questionDiv.appendChild(optionsDiv);
        container.appendChild(questionDiv);
    });
}

// Function to check answer and apply styling
function checkAnswer(button, selected, correct) {
    const parent = button.parentElement;
    const buttons = parent.querySelectorAll("button");

    buttons.forEach(btn => {
        btn.disabled = true;
        if (btn === button) {
            btn.classList.add(selected === correct ? "correct" : "wrong");
        }
        if (buttons[correct] !== button) {
            buttons[correct].classList.add("correct");
        }
    });
}

// Load questions on page load
window.onload = loadQuestions;
