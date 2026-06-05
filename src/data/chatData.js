export const WELCOME_MESSAGE =
  "Hi! 👋 I'm Zeta, your AI learning assistant. Ask me anything about our courses, fees, schedule, or how to enroll!";

export const QUICK_REPLIES = [
  'What courses do you offer?',
  'How much are the fees?',
  'When is the next batch?',
  'Book a free demo',
];

export const intents = [
  // ─── Greetings ────────────────────────────────────────────────────
  {
    keywords: ['hi', 'hello', 'hey', 'good morning', 'good afternoon', 'good evening', 'hii', 'helo'],
    answer: "Hello! 😊 Welcome to Zeta Nextmind. I'm here to help you find the right course and kickstart your tech career. What would you like to know?",
    quickReplies: ['What courses do you offer?', 'Book a free demo', 'Talk to team'],
  },

  // ─── About the institute ──────────────────────────────────────────
  {
    keywords: ['about', 'who are you', 'what is zeta', 'zeta nextmind', 'institute', 'company', 'tell me about'],
    answer: `Zeta Nextmind is an AI-integrated software training institute in Coimbatore, Tamil Nadu. We train students to build real-world tech projects using AI tools — not just theory.\n\n✅ 600+ students trained\n✅ 90% placement rate\n✅ Max 15 students per batch (personal attention)\n✅ Every course uses AI tools like GitHub Copilot, Cursor, v0.dev from Week 1`,
    quickReplies: ['What courses do you offer?', 'What makes you unique?', 'Book a free demo'],
  },

  // ─── Uniqueness / Differentiators ─────────────────────────────────
  {
    keywords: ['unique', 'different', 'why choose', 'better', 'special', 'why you', 'what makes', 'advantage', 'best'],
    answer: `Here's what makes Zeta Nextmind different:\n\n🤖 **AI tools from Day 1** — Cursor, GitHub Copilot, v0.dev, Bolt.new in every session\n👥 **Max 15 students/batch** — no overcrowded classrooms\n🚀 **3 live deployed projects** — real portfolio, not certificates only\n🎙️ **Weekly communication training** — we fix your spoken English too\n🎓 **Demo Day graduation** — present to real audience, get hired\n⚡ **Internship pathway** — top students become TAs and earn a stipend`,
    quickReplies: ['Tell me about AI tools', 'What is Demo Day?', 'Book a free demo'],
  },

  // ─── All courses ──────────────────────────────────────────────────
  {
    keywords: ['courses', 'programs', 'what do you offer', 'all courses', 'list of courses', 'what can i learn', 'course list'],
    answer: `We offer 11 AI-integrated courses across 4 categories:\n\n**Full Stack** 💻\n• AI Python Full Stack (6 months)\n• AI Java Full Stack (6 months)\n• AI MERN Stack (6 months)\n\n**Data & Analytics** 📊\n• AI Data Science (6 months)\n• AI Data Analytics/Power BI (4 months)\n• SQL Database Master (4 weeks)\n\n**Design** 🎨\n• AI Web Designing (4 months)\n• AI UI/UX Course (6 months)\n• No-Code Website using AI (2 months)\n\n**Emerging Tech** 🧠\n• AI Development – NLP & CV (6 months)\n• AI Digital Marketing (2 months)\n\nWhich one interests you?`,
    quickReplies: ['Python Full Stack', 'MERN Stack', 'Data Science', 'Book a free demo'],
  },

  // ─── Python Full Stack ────────────────────────────────────────────
  {
    keywords: ['python', 'django', 'python full stack', 'python course'],
    answer: `**AI-Integrated Python Full Stack** 🐍\n\nDuration: 6 months (24 weeks)\nStack: HTML/CSS, JavaScript, Bootstrap, Python, Django, MySQL\nAI tools: GitHub Copilot, Cursor, ChatGPT, v0.dev\n\nYou'll build and deploy 3 live projects including an AI-powered SaaS app. Ends with Demo Day graduation.\n\n🏆 Most Popular course — 180+ students trained, rated 4.9/5`,
    quickReplies: ['How much are the fees?', 'When is the next batch?', 'Book a free demo'],
  },

  // ─── Java Full Stack ──────────────────────────────────────────────
  {
    keywords: ['java', 'spring', 'spring boot', 'java full stack'],
    answer: `**AI-Integrated Java Full Stack** ☕\n\nDuration: 6 months (24 weeks)\nStack: Java, Spring Boot, JPA/Hibernate, MySQL, REST APIs\nAI tools: GitHub Copilot, Cursor, Tabnine, ChatGPT\n\nYou'll build enterprise-grade applications including a multi-module system with AI features. Great for CS graduates targeting product companies.\n\n⭐ 4.8/5 — 120+ students trained`,
    quickReplies: ['How much are the fees?', 'When is the next batch?', 'Book a free demo'],
  },

  // ─── MERN Stack ───────────────────────────────────────────────────
  {
    keywords: ['mern', 'react', 'node', 'mongodb', 'express', 'mern stack', 'reactjs', 'nodejs'],
    answer: `**AI-Integrated MERN Stack** ⚛️\n\nDuration: 6 months (24 weeks)\nStack: React, Node.js, Express, MongoDB, TypeScript, Next.js\nAI tools: v0.dev, Bolt.new, GitHub Copilot, Cursor\n\nYou'll build an AI-powered SaaS app with Stripe billing and real-time features. Top choice for frontend developers moving full-stack.\n\n🔥 Trending — 140+ students, rated 4.9/5`,
    quickReplies: ['How much are the fees?', 'When is the next batch?', 'Book a free demo'],
  },

  // ─── Data Science ─────────────────────────────────────────────────
  {
    keywords: ['data science', 'machine learning', 'ml', 'deep learning', 'tensorflow', 'pandas', 'numpy', 'data scientist'],
    answer: `**AI-Integrated Data Science** 🤖\n\nDuration: 6 months (24 weeks)\nStack: Python, NumPy, Pandas, Scikit-learn, TensorFlow, NLP, Computer Vision\nAI tools: Perplexity AI, ChatGPT, Replit AI, Context7\n\nYou'll build and deploy ML models, a computer vision app, and a production RAG (LLM) application. Ends with Demo Day.\n\n⭐ 4.8/5 — 90+ students trained`,
    quickReplies: ['How much are the fees?', 'When is the next batch?', 'Book a free demo'],
  },

  // ─── Data Analytics ───────────────────────────────────────────────
  {
    keywords: ['data analytics', 'power bi', 'analytics', 'powerbi', 'business intelligence', 'bi', 'dashboard'],
    answer: `**AI-Integrated Data Analytics (Power BI)** 📊\n\nDuration: 4 months (16 weeks)\nStack: SQL, Excel, Power BI, DAX, Python–Power BI integration, Azure AI\nAI tools: Perplexity AI, ChatGPT, Context7\n\nYou'll build live business dashboards and a predictive analytics solution. Great for business analysts and non-programmers entering data roles.\n\n⭐ 4.7/5 — 70+ students trained`,
    quickReplies: ['How much are the fees?', 'When is the next batch?', 'Book a free demo'],
  },

  // ─── SQL ──────────────────────────────────────────────────────────
  {
    keywords: ['sql', 'database', 'mysql', 'sql course', 'relational database'],
    answer: `**SQL Database Master Course** 🗄️\n\nDuration: 4 weeks (intensive)\nTopics: SELECT to window functions, CTEs, stored procedures, normalisation, query optimisation, MySQL\nAI tools: ChatGPT, Context7\n\nPerfect as a standalone skill-up or as prep before a full stack course. Ends with a real project and certificate.\n\n⭐ 4.7/5 — 60+ students trained`,
    quickReplies: ['How much are the fees?', 'When is the next batch?', 'Book a free demo'],
  },

  // ─── Web Designing ────────────────────────────────────────────────
  {
    keywords: ['web design', 'web designing', 'html', 'css', 'figma', 'responsive', 'web designer'],
    answer: `**AI-Integrated Web Designing** 🎨\n\nDuration: 4 months (16 weeks)\nStack: HTML5, CSS3, JavaScript, Figma, Bootstrap, CSS animations\nAI tools: v0.dev, Lovable.dev, ChatGPT, Bolt.new\n\nYou'll design and deploy websites using AI tools — 60% faster delivery. Great for beginners and creatives entering tech.\n\n⭐ 4.8/5 — 85+ students trained`,
    quickReplies: ['How much are the fees?', 'When is the next batch?', 'Book a free demo'],
  },

  // ─── UI/UX ────────────────────────────────────────────────────────
  {
    keywords: ['ui', 'ux', 'ui ux', 'uiux', 'design', 'figma', 'prototype', 'wireframe', 'user experience'],
    answer: `**AI-Integrated UI/UX Course** 🖌️\n\nDuration: 6 months (24 weeks)\nStack: Figma, UX Research, Wireframing, Prototyping, Design Systems, AI design tools\nAI tools: v0.dev, ChatGPT, Lovable.dev, Perplexity AI\n\nYou'll create end-to-end product designs with AI acceleration. Ends with a full product design portfolio and Demo Day.\n\n⭐ 4.9/5 — 55+ students trained`,
    quickReplies: ['How much are the fees?', 'When is the next batch?', 'Book a free demo'],
  },

  // ─── No-Code AI ──────────────────────────────────────────────────
  {
    keywords: ['no code', 'nocode', 'generative ai', 'gen ai', 'no coding', 'without coding', 'build without code'],
    answer: `**No Code Website using Generative AI** ⚡\n\nDuration: 2 months (8 weeks)\nTools: Bolt.new, Lovable.dev, v0.dev, ChatGPT prompt engineering\n\nBuild professional websites using AI prompts — zero programming knowledge required. Perfect for entrepreneurs, freelancers, and non-technical professionals.\n\n⭐ 4.6/5 — 45+ students trained`,
    quickReplies: ['How much are the fees?', 'When is the next batch?', 'Book a free demo'],
  },

  // ─── AI Development ───────────────────────────────────────────────
  {
    keywords: ['ai development', 'artificial intelligence', 'nlp', 'computer vision', 'llm', 'langchain', 'rag', 'bert', 'gpt fine', 'ai course', 'ai dev'],
    answer: `**Artificial Intelligence Development** 🧠\n\nDuration: 6 months (24 weeks)\nStack: Python, TensorFlow, NLP, Computer Vision, Transformers, LangChain, Vector DBs, RAG\nAI tools: Claude, ChatGPT, Replit AI, Perplexity AI, Context7\n\nOur most advanced course. You'll build Computer Vision systems, LLM-powered apps, and a publishable-quality AI project. For serious tech professionals.\n\n🔬 Advanced — 4.9/5, 50+ students`,
    quickReplies: ['How much are the fees?', 'When is the next batch?', 'Book a free demo'],
  },

  // ─── Digital Marketing ────────────────────────────────────────────
  {
    keywords: ['digital marketing', 'seo', 'sem', 'google ads', 'social media', 'marketing', 'content marketing'],
    answer: `**AI-Integrated Digital Marketing** 📱\n\nDuration: 2 months (8 weeks)\nTopics: SEO, Google Ads, Meta Ads, Social Media Strategy, Email Marketing, AI content generation\nAI tools: ChatGPT, Perplexity AI, Context7\n\nYou'll run a real live ad campaign and build a complete digital marketing portfolio. Great for business owners and marketing professionals.\n\n⭐ 4.7/5 — 65+ students trained`,
    quickReplies: ['How much are the fees?', 'When is the next batch?', 'Book a free demo'],
  },

  // ─── Fees / Pricing ───────────────────────────────────────────────
  {
    keywords: ['fee', 'fees', 'cost', 'price', 'pricing', 'how much', 'charges', 'payment', 'emi', 'instalment', 'installment', 'afford'],
    answer: `Our fees are competitive for the quality and outcomes we deliver. Specific fees depend on the course you choose.\n\n💳 We offer **EMI / instalment options** to make it accessible.\n📞 For exact fee details, our counselors will walk you through the options in a free demo call — no pressure, just clarity.\n\nWould you like to book a free demo and get the full fee breakdown?`,
    quickReplies: ['Book a free demo', 'Talk to team', 'What courses do you offer?'],
  },

  // ─── Schedule / Batches ───────────────────────────────────────────
  {
    keywords: ['batch', 'schedule', 'timing', 'time', 'when', 'start', 'next batch', 'upcoming', 'joining', 'dates', 'calendar', 'weekday', 'weekend'],
    answer: `New batches start regularly throughout the year! 📅\n\n🌙 **Weekday batches**: Mon–Fri evenings 7–9 PM IST\n📅 **Weekend batches**: Saturday mornings (available on request)\n\nBatch size is capped at **15 students** — so seats fill quickly.\n\nTo know the exact next start date for your chosen course, book a free demo call with our team.`,
    quickReplies: ['Book a free demo', 'Talk to team'],
  },

  // ─── Duration ─────────────────────────────────────────────────────
  {
    keywords: ['duration', 'how long', 'length', 'months', 'weeks', 'how many months'],
    answer: `Course durations vary by program:\n\n• **6-month (24-week)** programs: Python, Java, MERN, Data Science, AI Dev, UI/UX\n• **4-month (16-week)** programs: Data Analytics, Web Designing\n• **2-month (8-week)** programs: No-Code AI, Digital Marketing\n• **4-week** intensive: SQL Master\n\nAll programs end with a **Demo Day graduation event** (except SQL).`,
    quickReplies: ['What courses do you offer?', 'Book a free demo'],
  },

  // ─── AI Tools ─────────────────────────────────────────────────────
  {
    keywords: ['ai tools', 'tools', 'cursor', 'copilot', 'github copilot', 'v0', 'bolt', 'lovable', 'chatgpt', 'claude', 'perplexity', 'replit', 'tabnine'],
    answer: `AI tools aren't extras at Zeta Nextmind — they're **core workflow from Week 1** 🤖\n\nTools we teach:\n• **Cursor & GitHub Copilot** — AI pair programming\n• **v0.dev & Bolt.new** — UI generation\n• **Lovable.dev** — full-stack AI app builder\n• **ChatGPT & Claude** — research and code review\n• **Perplexity AI** — technical research\n• **Replit AI & Tabnine** — browser-based coding\n• **Context7** — documentation AI\n\nStudents using these tools code 3–5× faster than peers who don't.`,
    quickReplies: ['What courses do you offer?', 'Book a free demo'],
  },

  // ─── Communication Training ───────────────────────────────────────
  {
    keywords: ['communication', 'english', 'spoken', 'language', 'soft skills', 'interview', 'communication training', 'speak', 'presentation'],
    answer: `**Communication training runs every week** alongside your technical classes 🎙️\n\n7 activities every student does:\n1. Self-video recording & review\n2. YouTube presentation uploads\n3. Peer review sessions\n4. TED Talk analysis\n5. English group discussions\n6. 3× full mock interviews\n7. Demo Day pitch (final presentation)\n\n*"Technical skills get you the interview. Communication gets you the job."* — Aravind Kumar, CEO`,
    quickReplies: ['What is Demo Day?', 'Book a free demo'],
  },

  // ─── Demo Day ─────────────────────────────────────────────────────
  {
    keywords: ['demo day', 'graduation', 'demo', 'final', 'showcase', 'present', 'week 24'],
    answer: `**Demo Day** is our graduation milestone — Week 24 of every 6-month course 🎓\n\n• 120-minute live presentation to a real audience\n• You showcase 3 deployed projects\n• Industry professionals and hiring partners attend\n• **Placement drive happens the same day**\n• Certificate issued at the event\n\nStudents don't just complete a course — they *launch* their careers at Demo Day.`,
    quickReplies: ['Book a free demo', 'What courses do you offer?'],
  },

  // ─── Placement ────────────────────────────────────────────────────
  {
    keywords: ['placement', 'job', 'career', 'hire', 'hiring', 'employed', 'salary', 'package', 'placement rate', 'placement support', 'get job'],
    answer: `Our placement support starts at **Week 18** — not at the end 💼\n\n✅ 3 live mock interview rounds\n✅ ATS-optimised resume with keywords\n✅ LinkedIn profile reviewed and updated\n✅ GitHub portfolio polished\n✅ Direct job leads and warm introductions\n✅ Campus placement drives at Demo Day\n\n**90% placement rate** across all batches. We track and celebrate every placement.`,
    quickReplies: ['What is Demo Day?', 'Book a free demo'],
  },

  // ─── Projects / Portfolio ─────────────────────────────────────────
  {
    keywords: ['project', 'portfolio', 'build', 'deploy', 'live', 'real project', 'portfolio project'],
    answer: `Every student graduates with **3 live deployed projects** — not mockups, not local files 🚀\n\n• **Week 10**: First full-stack app — deployed and publicly accessible\n• **Week 17**: AI-powered SaaS product (Stripe billing, multi-user auth)\n• **Week 23**: Complex AI platform — your capstone\n\nAll projects are real portfolio pieces that employers can review on your GitHub.`,
    quickReplies: ['What courses do you offer?', 'Book a free demo'],
  },

  // ─── Internship ───────────────────────────────────────────────────
  {
    keywords: ['internship', 'intern', 'ta', 'teaching assistant', 'stipend', 'work', 'experience'],
    answer: `We offer 4 internship tracks for top students and graduates 🌟\n\n1. **TA Program** — Earn a stipend, guide students, get a trainer path\n2. **Live Project Internship** — Work on real client projects\n3. **Content & Marketing** — Create content for Zeta Nextmind's channels\n4. **Tech & Automation** — Build internal tools and systems\n\nAll tracks come with a stipend, certificate, and LinkedIn recommendation from the CEO.\n\nVisit our /internship page for full details!`,
    quickReplies: ['Book a free demo', 'Talk to team'],
  },

  // ─── Certificate ─────────────────────────────────────────────────
  {
    keywords: ['certificate', 'certification', 'recognised', 'recognized', 'valid', 'industry', 'credential'],
    answer: `Our certificate carries the **Zeta Nextmind seal** and Aravind Kumar's signature 📜\n\nBut more importantly, employers look at your **deployed projects, GitHub portfolio, and interview performance** — not just the certificate. Our placement process makes sure you have all three.\n\nThe certificate validates what your portfolio already proves.`,
    quickReplies: ['Tell me about placement', 'Book a free demo'],
  },

  // ─── Beginner / Who can join ─────────────────────────────────────
  {
    keywords: ['beginner', 'no experience', 'zero', 'fresh', 'fresher', 'can i join', 'eligible', 'qualification', 'requirement', 'who can'],
    answer: `Absolutely — several courses are designed for complete beginners! 🙌\n\n✅ **Zero coding required**: Python Full Stack, Web Designing, Data Analytics, No-Code AI\n✅ **First 4 weeks** of all courses focus entirely on foundations before any framework\n✅ Our small batch size (15 max) ensures you never fall behind\n\nNot sure which course fits you? Book a free 30-minute demo call — we'll advise you honestly, no pressure.`,
    quickReplies: ['Book a free demo', 'What courses do you offer?'],
  },

  // ─── Online / Remote ──────────────────────────────────────────────
  {
    keywords: ['online', 'offline', 'remote', 'live online', 'virtual', 'physical', 'class mode', 'attend'],
    answer: `Our classes are **live online** via Google Meet 💻\n\n✅ Sessions are recorded — watch again if you miss anything\n✅ All classes are interactive — instructors pause for questions\n✅ WhatsApp group with TA support for daily doubts\n✅ Fully compatible with college schedules and part-time work\n\nYou never miss a lesson — recordings are uploaded within 24 hours.`,
    quickReplies: ['What courses do you offer?', 'Book a free demo'],
  },

  // ─── Missed class / recordings ───────────────────────────────────
  {
    keywords: ['miss', 'missed', 'absent', 'recording', 'replay', 'cannot attend', 'skip'],
    answer: `No worries — every session is recorded and uploaded within 24 hours 📹\n\nMissed a class? Just:\n1. Watch the recording\n2. Drop your doubts in the WhatsApp group\n3. A TA will respond the same day\n\nMissed assignments can be submitted within 48 hours without penalty.`,
    quickReplies: ['Book a free demo', 'What courses do you offer?'],
  },

  // ─── Contact / Location ───────────────────────────────────────────
  {
    keywords: ['contact', 'phone', 'call', 'email', 'address', 'location', 'where', 'coimbatore', 'reach', 'office'],
    answer: `Here's how to reach us 📞\n\n📱 **Phone**: +91 73567 64410\n📧 **Email**: admissions@zetanextmind.com\n📧 **CEO direct**: ceo@zetanextmind.com\n📍 **Location**: Coimbatore, Tamil Nadu 641012, India\n\nOr just click the WhatsApp button on this page — fastest way to get a response!`,
    quickReplies: ['Book a free demo', 'Talk to team'],
  },

  // ─── Enroll / How to join ─────────────────────────────────────────
  {
    keywords: ['enroll', 'enrolment', 'join', 'register', 'signup', 'sign up', 'admission', 'how to join', 'start'],
    answer: `Enrolling is simple! Here's the process:\n\n1️⃣ **Book a free demo class** — attend one live session\n2️⃣ **Talk to a counselor** — we help you pick the right course\n3️⃣ **Confirm your seat** — pay the fee and you're in\n\nBatches are capped at 15 students, so seats fill quickly. Click below to get started!`,
    quickReplies: ['Book a free demo', 'Talk to team'],
  },

  // ─── Free demo ────────────────────────────────────────────────────
  {
    keywords: ['demo', 'free demo', 'trial', 'try', 'sample class', 'free class', 'book demo', 'demo class'],
    answer: `Great choice! A free demo class is the best way to experience Zeta Nextmind before committing 🎯\n\n• 100% free — no payment, no pressure\n• Attend a real live class session\n• Meet the instructor and ask questions\n• Get personalised course advice\n\nCall us now at **+91 73567 64410** or chat on WhatsApp to book your slot!`,
    quickReplies: ['Talk to team'],
    whatsapp: true,
  },

  // ─── Aravind Kumar / Founder ──────────────────────────────────────
  {
    keywords: ['aravind', 'founder', 'ceo', 'who founded', 'who started', 'director', 'teacher', 'instructor'],
    answer: `**Aravind Kumar** is the Founder & CEO of Zeta Nextmind 👨‍💻\n\nHe personally reviews student projects, leads strategic curriculum design, and reads every email sent to ceo@zetanextmind.com. His philosophy: world-class tech education should be within reach of every passionate learner.\n\nYou can write to him directly at ceo@zetanextmind.com — he replies within 48 hours.`,
    quickReplies: ['Book a free demo', 'Talk to team'],
  },

  // ─── Thank you ────────────────────────────────────────────────────
  {
    keywords: ['thank', 'thanks', 'thank you', 'appreciated', 'great', 'helpful', 'awesome'],
    answer: `You're very welcome! 😊 Feel free to ask anything else. Wishing you the best on your tech career journey! 🚀`,
    quickReplies: ['Book a free demo', 'Talk to team'],
  },
];

export const FALLBACK =
  "I'm not sure about that one — but our team will know! 😊\n\nYou can:\n📱 Call/WhatsApp: **+91 73567 64410**\n📧 Email: **admissions@zetanextmind.com**";

export const QUICK_REPLY_ACTIONS = {
  'Book a free demo': `Great choice! 🎯 Our free demo class gives you a real look at how we teach — live session, no pressure.\n\nCall us at **+91 73567 64410** or tap the WhatsApp button to book your slot right now!`,
  'Talk to team': `Sure! The fastest way to reach us:\n\n📱 **WhatsApp / Call**: +91 73567 64410\n📧 **Email**: admissions@zetanextmind.com\n\nOr tap the green WhatsApp button on this page — we typically reply within minutes during business hours.`,
};
