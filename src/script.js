import './style.css';

// ==========================================
// EMAIL NOTIFICATION CONFIG (EmailJS)
// ==========================================
// This site sends the contact-form submissions to your inbox using EmailJS
// (a frontend-only email API — no backend server required).
//
// TO MAKE THIS WORK, YOU MUST:
//   1. Create a free account at https://www.emailjs.com
//   2. Add an Email Service (e.g. connect your Gmail) and copy its Service ID
//   3. Create an Email Template and copy its Template ID
//      (Use the variable names below in your template: from_name, from_phone,
//      from_email, preferred_type, preferred_year, preferred_package, city,
//      message, submitted_at, to_email)
//   4. Copy your Public Key from Account > General
//   5. Paste all three values into EMAILJS_CONFIG below
//   6. Add the EmailJS SDK script tag to index.html (see EMAIL_SETUP.md for
//      the exact tag) — it must load BEFORE this script.
//
// Full step-by-step instructions (including a Nodemailer backend
// alternative) are in EMAIL_SETUP.md, delivered alongside these files.
const EMAILJS_CONFIG = {
   enabled: true, // set to true once the 3 values below are filled in
    publicKey: "SW424E7lJHnU80Eq8",
    serviceId: "service_55jt2uv",
    templateId: "template_6xhdq6l",
    destinationEmail: "abdulawalcvs@gmail.com"
};

if (EMAILJS_CONFIG.enabled && window.emailjs) {
    window.emailjs.init({ publicKey: EMAILJS_CONFIG.publicKey });
}

// ==========================================
// Default Database Initialization (LocalStorage)
// ==========================================
const DEFAULT_CONFIG = {
    agencyName: "আল কারীম হজ্জ কাফেলা",
    licenseText: "বাংলাদেশ সরকার অনুমোদিত হজ্জ লাইসেন্স নং - ১৪৮৯",
    licenseNumber: "১৪৮৯",
    phone1: "01917713580",
    phone2: "01917713581",
    email: "abdulawalcvs@gmail.com",
    agentName: "মোঃ আব্দুল আউয়াল মজুমদার",
    agentTitle: "Hajj & Umrah Consultant",
    agentPhoto: "agent_photo.png",
    agencyLogo: "logo.jpg",
    announcement: "📢 হজ্জ ২০২৭ নিবন্ধন চলছে! সীমিত আসন খালি আছে। আজই আপনার যোগাযোগ সম্পন্ন করুন।",
    aboutText: `আসসালামু আলাইকুম ওয়া রাহমাতুল্লাহি ওয়া বারাকাতুহু।

আমি মোঃ আব্দুল আউয়াল মজুমদার। বিগত বহু বছর ধরে আল কারীম হজ্জ কাফেলা-এর সঙ্গে নিষ্ঠার সঙ্গে যুক্ত আছি। এই দীর্ঘ সময়ে আল্লাহর অশেষ রহমতে বড় হজ ও ওমরাহ্ মিলিয়ে সফলভাবে প্রায় কয়েক হাজার হজযাত্রীকে পবিত্র মক্কা ও মদিনায় আল্লাহর ঘর জিয়ারতের সুযোগ করে দিতে পেরেছি। আলহামদুলিল্লাহ।

আপনাদের অবগতির জন্য জানাচ্ছি যে, আমি ঢাকার নীলক্ষেত/নিউমার্কেট এলাকার একজন প্রতিষ্ঠিত ব্যবসায়ী এবং একজন লেখক। প্রতি বছর হজযাত্রীদের হজের মতো মহান ইবাদত সুন্দর, নিরাপদ ও সুশৃঙ্খলভাবে সম্পন্ন করতে সহযোগিতা করা এবং তাঁদের আন্তরিক দোয়া লাভ করাকে আমি আমার জীবনের অন্যতম সৌভাগ্য ও সম্মান বলে মনে করি। এই লক্ষ্যেই আমি আল কারীম হজ্জ কাফেলা-এর সঙ্গে দায়িত্বশীলভাবে কাজ করে আসছি।

আমাদের হজ ও ওমরাহ্ প্যাকেজসমূহ সম্পর্কে বিস্তারিত জানতে এবং নিরাপদ, নির্ভরযোগ্য ও সফলভাবে হজ পালন করতে আগ্রহী সম্মানিত হজযাত্রীদের আমার সঙ্গে যোগাযোগ করার আন্তরিক আহ্বান জানাচ্ছি।

ইনশাআল্লাহ, সর্বোচ্চ আন্তরিকতা, সততা ও দায়িত্বশীলতার সঙ্গে আপনাদের সেবা প্রদান করার সর্বাত্মক চেষ্টা করব।

আল্লাহ তাআলা আমাদের সকলের হজ ও ওমরাহ্ কবুল করুন। আমীন।
ধন্যবাদ।`,
    location1Name: "পরামর্শক ও এজেন্ট অফিস",
    location1Address: "২৭ নতুন পল্টন লাইন, আজিমপুর, ঢাকা-১২০৫",
    location1Map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d228.28178515295875!2d90.37979027263174!3d23.729237489427973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8ce77968b73%3A0x4c293bf8e946ac35!2sMasjid%20E%20Ali%20Mosque!5e0!3m2!1sen!2sbd!4v1783373581342!5m2!1sen!2sbd",
    location2Name: "মূল কাফেলা অফিস",
    location2Address: "৬০/১ পুরানা পল্টন (৩য় তলা), ঢাকা-১০০০",
    location2Map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.4872542282883!2d90.40831167511449!3d23.729997878684323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8f7b2d4461d%3A0xb2154c15c44c3a0a!2s60%2C%201%20Purana%20Paltan%2C%20Dhaka%201000!5e0!3m2!1sen!2sbd!4v1783373837480!5m2!1sen!2sbd",
    heroSlogan: "বিশ্বস্ত ও আন্তরিক সেবার মাধ্যমে হজের পবিত্র সফর সম্পন্ন করুন",
    heroContactBtn: "যোগাযোগ করুন",
    heroPackagesBtn: "প্যাকেজ সমূহ দেখুন",
    aboutTitle: "আমার পরিচিতি ও অঙ্গীকার",
    aboutExperience1: "দীর্ঘদিনের",
    aboutExperience2: "অভিজ্ঞতা ও বিশ্বস্ততা",
    aboutBtn: "পরামর্শের জন্য মেসেজ দিন",
    packagesBadge: "আমাদের সেবা সমূহ",
    packagesTitle: "হজ্জ ও ওমরাহ প্যাকেজ সমূহ",
    packagesDesc: "পরম যত্ন ও বিশ্বস্ততায় ডিজাইন করা আমাদের সাশ্রয়ী ও প্রিমিয়াম প্যাকেজ সমূহ থেকে আপনার পছন্দের প্যাকেজটি নির্বাচন করুন।",
    specialNoteTitle: "বিশেষ দ্রষ্টব্য",
    specialNoteText: "বেসরকারি ব্যবস্থাপনায় গমনেচ্ছু হজ্জযাত্রীদের জন্য সরকারের সকল নিয়মনীতি বলবৎ থাকবে।",
    hajjIntroTitle: "সম্মানিত হজ্জযাত্রীবৃন্দ!",
    hajjIntroSalutation: "আসসালামু আলাইকুম ওয়ারাহমাতুল্লাহ।",
    hajjIntroText: `সমস্ত প্রশংসা ও শুকর মহান আল্লাহ রাব্বুল আলামিনের জন্য। দরুদ ও সালাম সর্বশেষ নবী হযরত মুহাম্মদ (সা.) ও তাঁর পরিবারবর্গ এবং সাহাবীগণের উপর।

হজ্জ একটি ইবাদত। আল্লাহর সন্তুষ্টির জন্য হজ্জ করা ফরজ। ইসলামের মৌলিক পাঁচটি ফরজের অন্যতম হলো সামর্থ্যবানদের জন্য হজ্জ পালন করা। আল্লাহর ঘরের দিকে হজ্জের উদ্দেশ্যে মুসলমানদের আধ্যাত্মিক রাজধানী মক্কার পথে আল্লাহর বান্দাদের সফর হলো হজ্জ।

আল্লাহর বন্ধু হযরত ইব্রাহীম (আ.) ও তাঁর পরিবারের ত্যাগের স্মৃতি স্মরণ করে মুসলমানরা প্রতি বছর নির্ধারিত সময়ে আল্লাহর ঘর কাবা জিয়ারত করেন এবং তাওয়াফ, সাঈ, মিনা, আরাফাহ, মুযদালিফা, জামারাতে পাথর নিক্ষেপ, কোরবানি ও মাথার চুল কাটাসহ হজ্জের সকল বিধান পালন করেন।

আল-কারীম হজ্জ কাফেলা (এম. আল-কারীম ট্যুরস এন্ড ট্রাভেলস) বাংলাদেশ মুজাহিদ কমিটি কর্তৃক পরিচালিত এবং সরকার ঘোষিত গাইডলাইন ও নীতিমালা অনুসারে হজ্জ পরিচালনা করে থাকে।

নিচে ৩টি হজ্জ প্যাকেজের মূল্য ও সুযোগ-সুবিধা বর্ণনা করা হলো। আপনারা দেখে বুঝে সুবিধামতো প্যাকেজ নির্বাচন করে আমাদের সঙ্গে যোগাযোগ করতে পারবেন। ইনশাআল্লাহ।`,
    formSideTitle: "আগ্রহ প্রকাশ ফর্ম",
    formSideText: "পবিত্র হজ্জ বা ওমরাহ পালনে আগ্রহী হলে ফর্মটি পূরণ করে জমা দিন। আমাদের টিম দ্রুত আপনার সাথে যোগাযোগ করবে, ইনশাআল্লাহ।",
    formTitle: "আপনার তথ্য দিন",
    pledgeBadge: "আমাদের মিশন ও কল্যাণমূলক কর্মকাণ্ড",
    pledgeTitle: "আমাদের লক্ষ্য ও অঙ্গীকার",
    pledgeCard1Title: "মূল লক্ষ্য ও উদ্দেশ্য",
    pledgeCard1Text: "আল কারীম হজ্ব কাফেলা-এর মূল লক্ষ্য হলো মহান আল্লাহর সন্তুষ্টি অর্জনের উদ্দেশ্যে তাঁর সম্মানিত মেহমান—হজযাত্রীদের সর্বোচ্চ আন্তরিকতা, সততা ও দায়িত্বশীলতার সঙ্গে সেবা প্রদান করা।",
    pledgeCard2Title: "লভ্যাংশ যে সকল খাতে ব্যয় করা হবে",
    pledgeCard2Text: "আল্লাহর মেহমানদের খেদমত সম্পন্ন করার পর প্রতিষ্ঠানের বৈধ ও অবশিষ্ট লভ্যাংশ নিম্নোক্ত দীনি ও কল্যাণমূলক কার্যক্রমে ব্যয় করা হবে। ইনশাআল্লাহ, এসব মহৎ কাজে আপনাদের অংশগ্রহণও সদকায়ে জারিয়া হিসেবে পরকালে কল্যাণ বয়ে আনবে।",
    pledgeCharityList: `বাংলাদেশ কুরআন শিক্ষা বোর্ড-এর মাধ্যমে দেশের ৬৮ হাজার গ্রামে ৬৮ হাজার কওমি মাদ্রাসা প্রতিষ্ঠা ও পরিচালনার কার্যক্রমে সহায়তা।
দেশে দীন প্রতিষ্ঠা ও ইসলামী দাওয়াতি কার্যক্রম পরিচালনাকারী সংগঠনসমূহের বিভিন্ন কার্যক্রমে সহযোগিতা।
বাংলাদেশ মুজাহিদ কমিটি-এর দীনি কার্যক্রম ও ইসলাম প্রচারমূলক কর্মকাণ্ডে সহায়তা।`,
    addressBadge: "আমাদের অবস্থান",
    addressTitle: "অফিস ও এজেন্টের ঠিকানা",
    addressDesc: "সরাসরি আলোচনার জন্য আমাদের অফিস বা এজেন্টের সাথে দেখা করতে পারেন। নিচে মানচিত্র দেওয়া হলো。",
    facebookUrl: "https://www.facebook.com",
    facebookName: "ফেসবুক",
};

const DEFAULT_PACKAGES = [
    {
        id: "hajj-vip-shifting",
        type: "Hajj",
        name: "🌟 প্রিমিয়াম / ভিআইপি (শিফটিং) প্যাকেজ",
        price: "৮,৫০,০০০ টাকা",
        summary: "বিজনেস ক্লাস বিমান, জামারাতের নিকটবর্তী মানসম্মত হোটেল, হাই স্পিড ট্রেন এবং উন্নত মানের বুফে খাবারসহ আরামদায়ক ও পূর্ণাঙ্গ প্রিমিয়াম হজ্জ অভিজ্ঞতা।",
        priceBreakdown: [
            { label: "হজ্জ", value: "৭,৬৫,০০০ টাকা" },
            { label: "কোরবানি", value: "২৫,০০০ টাকা" },
            { label: "খাবার", value: "৬০,০০০ টাকা" },
            { label: "মোট", value: "৮,৫০,০০০ টাকা" }
        ],
        duration: "৪০-৪৫ দিন",
        qurbani: "প্যাকেজের মধ্যে",
        makkahHotel: "সফা টাওয়ার / মেরিডিয়ান / জমজম টাওয়ার",
        madinahHotel: "মারকাজিয়ার ১০০–২০০ মিটারের মধ্যে (৩-স্টার মানের)",
        transport: "মক্কা-মদিনা: হাই স্পিড ট্রেন | মিনা, আরাফাহ, মুযদালিফা, জামারাত: ট্রেন / এসি বাস",
        meals: "তিন বেলা উন্নত মানের বুফে খাবার",
        pdfUrl: "",
        benefits: [
            "এয়ার লাইন্স: বাংলাদেশ বিমান / সৌদিয়া (বিজনেস ক্লাস)",
            "হজ্জ জোন হোটেল: জামারাতের নিকটে মানসম্মত হোটেল (হজ্জের আগে ১ দিন এবং পরে ২–৩ দিন অবস্থান)",
            "মক্কা ও মদিনার দর্শনীয় স্থান পরিদর্শন",
            "অভিজ্ঞ গাইড দ্বারা পরিচালিত"
        ],
        notes: "কোরবানি ও খাবারসহ প্রিমিয়াম অভিজ্ঞতা।"
    },
    {
        id: "hajj-special-fixed",
        type: "Hajj",
        name: "🕌 বিশেষ প্যাকেজ (স্থায়ী বাড়ি)",
        price: "৬,৮৫,০০০ টাকা",
        summary: "ইকোনমি ক্লাস বিমান, ৬০০–৮০০ মিটারের মধ্যে মক্কা হোটেল, মারকাজিয়া মদিনা হোটেল এবং দেশীয় খাবারসহ ভারসাম্যপূর্ণ ও সাশ্রয়ী হজ্জ প্যাকেজ।",
        priceBreakdown: [
            { label: "হজ্জ", value: "৬,২০,০০০ টাকা" },
            { label: "কোরবানি", value: "২৫,০০০ টাকা" },
            { label: "খাবার", value: "৪০,০০০ টাকা" },
            { label: "মোট", value: "৬,৮৫,০০০ টাকা" }
        ],
        duration: "৩০-৪০ দিন",
        qurbani: "প্যাকেজের মধ্যে",
        makkahHotel: "মক্কা হোটেল: ৬০০–৮০০ মিটারের মধ্যে",
        madinahHotel: "মদিনা হোটেল: মারকাজিয়া (৩০০–৪০০ মিটার)",
        transport: "মিনা, আরাফাহ, মুযদালিফা, জামারাত: ট্রেন / এসি বাস",
        meals: "তিন বেলা উন্নত মানের দেশীয় খাবার",
        pdfUrl: "",
        benefits: [
            "এয়ার লাইন্স: বাংলাদেশ বিমান / সৌদিয়া (ইকোনমি ক্লাস)",
            "কোরবানি প্যাকেজের মধ্যে",
            "মক্কা ও মদিনার দর্শনীয় স্থান পরিদর্শন",
            "অভিজ্ঞ গাইড দ্বারা পরিচালিত"
        ],
        notes: "স্থায়ী বাড়ি ভিত্তিক আরামদায়ক হজ্জ যাত্রা।"
    },
    {
        id: "hajj-sathi-economy",
        type: "Hajj",
        name: "🕌 সাথী প্যাকেজ (আশের ফিতরা)",
        price: "৫,৬০,০০০ টাকা",
        summary: "সাশ্রয়ী মূল্যে ইকোনমি ক্লাস বিমান, এসি বাস যাতায়াত, নির্ধারিত অবস্থানকাল এবং অভিজ্ঞ গাইডের তত্ত্বাবধানে সুশৃঙ্খল হজ্জ সফর।",
        priceBreakdown: [
            { label: "হজ্জ", value: "৪,৯৫,০০০ টাকা" },
            { label: "কোরবানি", value: "২৫,০০০ টাকা" },
            { label: "খাবার", value: "৪০,০০০ টাকা" },
            { label: "মোট", value: "৫,৬০,০০০ টাকা" }
        ],
        duration: "৩০-৪০ দিন",
        qurbani: "প্যাকেজের মধ্যে",
        makkahHotel: "হজ্জের আগে ৫ দিন ৩–৪ কিলোমিটারের মধ্যে | হজ্জ শেষে হারামের নিকটবর্তী হোটেলে ৬০০–১০০০ মিটারের মধ্যে",
        madinahHotel: "মারকাজিয়ার ৭০০–৮০০ মিটারের মধ্যে",
        transport: "মক্কা–মদিনা: এসি বাস | মিনা, আরাফাহ, মুযদালিফা, জামারাত: ট্রেন / এসি বাস",
        meals: "তিন বেলা উন্নত মানের দেশীয় খাবার",
        pdfUrl: "",
        benefits: [
            "এয়ার লাইন্স: বাংলাদেশ বিমান / সৌদিয়া (ইকোনমি ক্লাস)",
            "হজ্জের আগে ৫ দিন এবং পরে ৪–৫ দিন অবস্থান",
            "কোরবানি প্যাকেজের মধ্যে",
            "মক্কা ও মদিনার দর্শনীয় স্থান পরিদর্শন",
            "অভিজ্ঞ গাইড দ্বারা পরিচালিত"
        ],
        notes: "সাশ্রয়ী ও সঙ্গী-নির্ভর প্যাকেজ।"
    },
    {
        id: "umrah-ramadan",
        type: "Umrah",
        name: "রমজান স্পেশাল ওমরাহ প্যাকেজ",
        price: "২,১০,০০০ টাকা",
        duration: "১৫ দিন",
        qurbani: "প্রযোজ্য নয়",
        makkahHotel: "হারামের খুব কাছে হোটেল (হারাম থেকে ৩০০ মিটার)",
        madinahHotel: "মারকাজিয়া হোটেল (হারাম থেকে ২০০ মিটার)",
        transport: "এসি বাস সার্ভিস",
        meals: "৩ বেলা বুফে ও রিফ্রেশমেন্ট",
        pdfUrl: "",
        notes: "রমজানের পবিত্র পরিবেশে ওমরাহ পালন ও তারাবি নামাজ পড়ার সুবর্ণ সুযোগ।"
    },
    {
        id: "umrah-economy",
        type: "Umrah",
        name: "ইকোনমি ওমরাহ প্যাকেজ",
        price: "১,৩০,০০০ টাকা",
        duration: "১৪ দিন",
        qurbani: "প্রযোজ্য নয়",
        makkahHotel: "ইব্রাহিম খলিল রোড (হারাম থেকে ৮০০ মিটার, শাটল সার্ভিস)",
        madinahHotel: "মারকাজিয়ার বাইরে (হারাম থেকে ৪০০ মিটার)",
        transport: "এসি লাক্সারি বাস",
        meals: "আলাদা ব্যবস্থা (খাবার প্যাকেজ নিলে অতিরিক্ত যুক্ত হবে)",
        pdfUrl: "",
        notes: "সাশ্রয়ী মূল্যে ভিসা, ইন্সুরেন্স, বিমান টিকিট ও গাইড সার্ভিস অন্তর্ভুক্ত।"
    }
];

// Load Database Helpers
function getDB(key, defaultValue) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : defaultValue;
}

function saveDB(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

// Initialize database
let dbConfig = getDB("hajj_agency_config", DEFAULT_CONFIG);
const PACKAGE_STORAGE_KEY = "hajj_agency_packages_v4";
let dbPackages = getDB(PACKAGE_STORAGE_KEY, DEFAULT_PACKAGES);
let dbInquiries = getDB("hajj_agency_inquiries", []);

let adminToken = sessionStorage.getItem("adminToken") || "";

// Load initial data from backend API
async function loadDataFromServer() {
    try {
        const [configRes, packagesRes] = await Promise.all([
            fetch('/api/config'),
            fetch('/api/packages')
        ]);

        if (configRes.ok) {
            dbConfig = await configRes.ok ? await configRes.json() : dbConfig;
            saveDB("hajj_agency_config", dbConfig);
        }
        if (packagesRes.ok) {
            dbPackages = await packagesRes.json();
            saveDB(PACKAGE_STORAGE_KEY, dbPackages);
        }

        if (adminToken) {
            await fetchInquiriesFromServer();
        }
    } catch (err) {
        console.warn("Backend API offline or loading error, falling back to LocalStorage:", err);
    }
    updateSiteUI();
}

async function fetchInquiriesFromServer() {
    if (!adminToken) return;
    try {
        const inquiriesRes = await fetch('/api/inquiries', {
            headers: { 'Authorization': `Bearer ${adminToken}` }
        });
        if (inquiriesRes.ok) {
            dbInquiries = await inquiriesRes.json();
            saveDB("hajj_agency_inquiries", dbInquiries);
        }
    } catch (err) {
        console.error("Failed to fetch inquiries from server:", err);
    }
}

function updateSiteUI() {
    // Dynamic Agent Photo and Agency Logo
    const agentPhotoDisplay = document.getElementById("agentPhotoDisplay");
    if (agentPhotoDisplay && dbConfig.agentPhoto) {
        let src = dbConfig.agentPhoto;
        if (!src.startsWith("/") && !src.startsWith("data:") && !src.startsWith("http")) {
            src = "/static/" + src;
        }
        agentPhotoDisplay.src = src;
    }

    const logoDisplay = document.getElementById("logoDisplay");
    if (logoDisplay && dbConfig.agencyLogo) {
        let src = dbConfig.agencyLogo;
        if (!src.startsWith("/") && !src.startsWith("data:") && !src.startsWith("http")) {
            src = "/static/" + src;
        }
        logoDisplay.src = src;
    }

    document.querySelectorAll(".footer-logo").forEach(el => {
        if (dbConfig.agencyLogo) {
            let src = dbConfig.agencyLogo;
            if (!src.startsWith("/") && !src.startsWith("data:") && !src.startsWith("http")) {
                src = "/static/" + src;
            }
            el.src = src;
        }
    });

    const aboutTextEl = document.getElementById("aboutTextDisplay");
    if (aboutTextEl && dbConfig.aboutText) {
        // Convert newlines to paragraphs
        const paragraphs = dbConfig.aboutText.split("\n\n").map(p => `<p class="mb-3">${p.replace(/\n/g, "<br>")}</p>`).join("");
        aboutTextEl.innerHTML = paragraphs;
    }

    // Announcement bar: show/hide + populate based on admin-set text.
    const announcementBar = document.getElementById("announcementBar");
    const announcementTextEl = document.getElementById("announcementText");
    if (announcementBar && announcementTextEl) {
        const text = (dbConfig.announcement || "").trim();
        if (text) {
            // Repeat the text so the marquee loop has no visible gap
            announcementTextEl.textContent = `${text}\u00A0\u00A0\u00A0★\u00A0\u00A0\u00A0${text}`;
            announcementBar.classList.remove("d-none");
        } else {
            announcementBar.classList.add("d-none");
        }
    }
    
    // Footer contact info
    document.querySelectorAll(".phone-display-1").forEach(el => {
        el.textContent = dbConfig.phone1;
    });
    document.querySelectorAll(".phone-display-2").forEach(el => {
        el.textContent = dbConfig.phone2;
    });
    document.querySelectorAll(".email-display").forEach(el => {
        el.textContent = dbConfig.email;
    });

    // Call and WhatsApp buttons
    document.querySelectorAll(".call-link-1").forEach(el => {
        el.href = "tel:" + dbConfig.phone1;
        el.innerHTML = `<i class="fa-solid fa-phone-flip"></i> কল করুন: ${dbConfig.phone1}`;
    });
    document.querySelectorAll(".wa-link-1").forEach(el => {
        el.href = "https://wa.me/88" + dbConfig.phone1.replace(/\s+/g, "");
    });
    document.querySelectorAll(".wa-link-2").forEach(el => {
        el.href = "https://wa.me/88" + dbConfig.phone2.replace(/\s+/g, "");
    });
    document.querySelectorAll(".gmail-link").forEach(el => {
        el.href = "https://mail.google.com/mail/?view=cm&fs=1&to=" + dbConfig.email;
        el.setAttribute("target", "_blank");
    });

    // Dynamic Locations and Maps
    const loc1NameEl = document.getElementById("loc1Name");
    const loc1AddressEl = document.getElementById("loc1Address");
    const loc1MapEl = document.getElementById("loc1Map");
    const loc2NameEl = document.getElementById("loc2Name");
    const loc2AddressEl = document.getElementById("loc2Address");
    const loc2MapEl = document.getElementById("loc2Map");
    const footerLoc1El = document.getElementById("footerLoc1");
    const footerLoc2El = document.getElementById("footerLoc2");

    if (loc1NameEl && dbConfig.location1Name) {
        loc1NameEl.textContent = dbConfig.location1Name;
    }
    if (loc1AddressEl && dbConfig.location1Address) {
        loc1AddressEl.textContent = dbConfig.location1Address;
    }
    if (loc1MapEl && dbConfig.location1Map) {
        let src = dbConfig.location1Map;
        if (src.includes("src=\"")) {
            const match = src.match(/src="([^"]+)"/);
            if (match) src = match[1];
        }
        loc1MapEl.src = src;
    }

    if (loc2NameEl && dbConfig.location2Name) {
        loc2NameEl.textContent = dbConfig.location2Name;
    }
    if (loc2AddressEl && dbConfig.location2Address) {
        loc2AddressEl.textContent = dbConfig.location2Address;
    }
    if (loc2MapEl && dbConfig.location2Map) {
        let src = dbConfig.location2Map;
        if (src.includes("src=\"")) {
            const match = src.match(/src="([^"]+)"/);
            if (match) src = match[1];
        }
        loc2MapEl.src = src;
    }

    if (footerLoc1El && dbConfig.location1Address) {
        footerLoc1El.textContent = `এজেন্ট অফিস: ${dbConfig.location1Address}`;
    }
    if (footerLoc2El && dbConfig.location2Address) {
        footerLoc2El.textContent = `প্রধান অফিস: ${dbConfig.location2Address}`;
    }

    // Update newly editable contents safely
    const safeSetText = (id, text) => {
        const el = document.getElementById(id);
        if (el) el.textContent = text || "";
    };

    safeSetText("heroSloganDisplay", dbConfig.heroSlogan);
    
    // Buttons (with icons)
    const heroContactBtnDisplay = document.getElementById("heroContactBtnDisplay");
    if (heroContactBtnDisplay) {
        heroContactBtnDisplay.innerHTML = `<i class="fa-solid fa-paper-plane me-2"></i> ${dbConfig.heroContactBtn || "যোগাযোগ করুন"}`;
    }
    const heroPackagesBtnDisplay = document.getElementById("heroPackagesBtnDisplay");
    if (heroPackagesBtnDisplay) {
        heroPackagesBtnDisplay.innerHTML = `<i class="fa-solid fa-layer-group me-2"></i> ${dbConfig.heroPackagesBtn || "প্যাকেজ সমূহ দেখুন"}`;
    }
    const aboutBtnDisplay = document.getElementById("aboutBtnDisplay");
    if (aboutBtnDisplay) {
        aboutBtnDisplay.innerHTML = `<i class="fa-solid fa-paper-plane me-2"></i> ${dbConfig.aboutBtn || "পরামর্শের জন্য মেসেজ দিন"}`;
    }

    safeSetText("aboutTitleDisplay", dbConfig.aboutTitle);
    safeSetText("aboutExperience1Display", dbConfig.aboutExperience1);
    safeSetText("aboutExperience2Display", dbConfig.aboutExperience2);
    safeSetText("packagesBadgeDisplay", dbConfig.packagesBadge);
    safeSetText("packagesTitleDisplay", dbConfig.packagesTitle);
    safeSetText("packagesDescDisplay", dbConfig.packagesDesc);
    safeSetText("specialNoteTitleDisplay", dbConfig.specialNoteTitle);
    safeSetText("specialNoteTextDisplay", dbConfig.specialNoteText);
    
    // Hajj Intro Text
    safeSetText("hajjIntroTitleDisplay", dbConfig.hajjIntroTitle);
    safeSetText("hajjIntroSalutationDisplay", dbConfig.hajjIntroSalutation);
    const hajjIntroTextEl = document.getElementById("hajjIntroTextDisplay");
    if (hajjIntroTextEl && dbConfig.hajjIntroText) {
        const paragraphs = dbConfig.hajjIntroText.split("\n\n").map(p => `<p class="text-secondary lh-lg mb-3">${p.replace(/\n/g, "<br>")}</p>`).join("");
        hajjIntroTextEl.innerHTML = paragraphs;
    }

    safeSetText("formSideTitleDisplay", dbConfig.formSideTitle);
    safeSetText("formSideTextDisplay", dbConfig.formSideText);
    safeSetText("formTitleDisplay", dbConfig.formTitle);
    safeSetText("pledgeBadgeDisplay", dbConfig.pledgeBadge);
    safeSetText("pledgeTitleDisplay", dbConfig.pledgeTitle);
    safeSetText("pledgeCard1TitleDisplay", dbConfig.pledgeCard1Title);
    safeSetText("pledgeCard1TextDisplay", dbConfig.pledgeCard1Text);
    safeSetText("pledgeCard2TitleDisplay", dbConfig.pledgeCard2Title);
    safeSetText("pledgeCard2TextDisplay", dbConfig.pledgeCard2Text);
    
    // Pledge Charity List Rendering
    const pledgeCharityListDisplay = document.getElementById("pledgeCharityListDisplay");
    if (pledgeCharityListDisplay && dbConfig.pledgeCharityList) {
        pledgeCharityListDisplay.innerHTML = dbConfig.pledgeCharityList.split("\n").filter(l => l.trim()).map((line, i) => `
            <li class="d-flex align-items-start gap-2">
                <span class="badge bg-gold text-dark rounded-circle p-1 px-2.5 mt-1">${toBengaliNumber(i + 1)}</span>
                <span>${line}</span>
            </li>
        `).join("");
    }

    safeSetText("addressBadgeDisplay", dbConfig.addressBadge);
    safeSetText("addressTitleDisplay", dbConfig.addressTitle);
    safeSetText("addressDescDisplay", dbConfig.addressDesc);

    // Update Facebook Links
    const facebookUrl = dbConfig.facebookUrl || "https://www.facebook.com";
    const facebookName = dbConfig.facebookName || "ফেসবুক";
    const topFacebookLink = document.getElementById("topFacebookLink");
    if (topFacebookLink) {
        topFacebookLink.href = facebookUrl;
    }
    const topFacebookName = document.getElementById("topFacebookName");
    if (topFacebookName) {
        topFacebookName.textContent = facebookName;
    }
    const footerFacebookLink = document.getElementById("footerFacebookLink");
    if (footerFacebookLink) {
        footerFacebookLink.href = facebookUrl;
    }
    
    // Render package lists and populate form dropdowns
    renderPackagesUI();
    updateFormSelects();
    updateInquiryBadge();
}

function renderPackagesUI() {
    const hajjList = document.getElementById("hajjPackagesList");
    const umrahList = document.getElementById("umrahPackagesList");
    
    if (hajjList) hajjList.innerHTML = "";
    if (umrahList) umrahList.innerHTML = "";

    const hajjPackages = dbPackages.filter(p => p.type === "Hajj");
    const umrahPackages = dbPackages.filter(p => p.type === "Umrah");

    const renderCard = (pkg) => `
        <div class="col-12 col-md-6 col-xl-4">
            <div class="package-card package-card-compact h-100 d-flex flex-column overflow-hidden shadow-sm">
                <div class="package-header p-3 text-center">
                    <h5 class="fw-bold mb-2 Bengali-serif text-white lh-sm">${pkg.name}</h5>
                    <div class="d-flex flex-wrap justify-content-center gap-2 mb-2">
                        <span class="badge bg-gold-light text-dark px-3 py-1 rounded-pill small fw-semibold text-uppercase">
                            <i class="fa-solid fa-clock me-1 text-accent-gold"></i> মেয়াদ: ${pkg.duration}
                        </span>
                        <span class="badge bg-dark text-white px-3 py-1 rounded-pill small fw-semibold text-uppercase">${pkg.type === 'Hajj' ? 'হজ্জ' : 'ওমরাহ'}</span>
                    </div>
                    <div class="package-price package-price-sm">${pkg.price}</div>
                    ${pkg.summary ? `<p class="text-white-50 small lh-base mt-2 mb-0 package-summary">${pkg.summary}</p>` : ''}
                </div>
                <div class="package-body p-3 flex-grow-1">
                    <button type="button" class="btn btn-view-details btn-sm w-100 rounded-pill py-2 mb-3" data-bs-toggle="collapse" data-bs-target="#details-${pkg.id}" aria-expanded="false" aria-controls="details-${pkg.id}">
                        <i class="fa-solid fa-chevron-down me-1"></i> আরও দেখুন
                    </button>
                    <div class="collapse" id="details-${pkg.id}">
                        ${pkg.priceBreakdown ? `
                            <div class="mb-3">
                                <div class="small fw-semibold text-accent-gold text-uppercase mb-2">প্যাকেজ মূল্য বিবরণ</div>
                                <table class="table table-sm align-middle package-details-table mb-0">
                                    <thead>
                                        <tr>
                                            <th>বিষয়</th>
                                            <th class="text-end">মূল্য</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        ${pkg.priceBreakdown.map(item => `
                                            <tr>
                                                <th>${item.label}</th>
                                                <td class="text-end fw-semibold">${item.value}</td>
                                            </tr>
                                        `).join('')}
                                    </tbody>
                                </table>
                            </div>
                        ` : ''}
                        <table class="table table-borderless table-sm package-details-table mb-3">
                            <tbody>
                                <tr>
                                    <th><i class="fa-solid fa-kaaba text-accent-gold me-1"></i> মক্কা হোটেল:</th>
                                    <td>${pkg.makkahHotel}</td>
                                </tr>
                                <tr>
                                    <th><i class="fa-solid fa-mosque text-accent-gold me-1"></i> মদিনা হোটেল:</th>
                                    <td>${pkg.madinahHotel}</td>
                                </tr>
                                <tr>
                                    <th><i class="fa-solid fa-bus text-accent-gold me-1"></i> পরিবহন:</th>
                                    <td>${pkg.transport}</td>
                                </tr>
                                <tr>
                                    <th><i class="fa-solid fa-utensils text-accent-gold me-1"></i> খাবার:</th>
                                    <td>${pkg.meals}</td>
                                </tr>
                                <tr>
                                    <th><i class="fa-solid fa-hand-holding-dollar text-accent-gold me-1"></i> কুরবানি:</th>
                                    <td>${pkg.qurbani}</td>
                                </tr>
                            </tbody>
                        </table>
                        ${pkg.benefits ? `
                            <div class="package-benefits bg-light p-3 rounded mb-3 border-start border-gold border-3">
                                <div class="small fw-semibold text-accent-gold mb-2">সুবিধাসমূহ</div>
                                <ul class="mb-0 ps-3">
                                    ${pkg.benefits.map(item => `<li class="mb-1">${item}</li>`).join('')}
                                </ul>
                            </div>
                        ` : ''}
                        ${pkg.notes ? `<div class="package-notes bg-light p-3 rounded mb-3 border-start border-gold border-3"><i class="fa-solid fa-circle-info text-accent-gold me-1"></i> ${pkg.notes}</div>` : ''}
                    </div>
                </div>
                <div class="package-footer p-3 pt-0 text-center">
                    <div class="d-flex flex-column gap-2">
                        <button type="button" class="btn btn-green w-100 rounded-pill py-2 fw-semibold book-pkg-btn" data-pkg-name="${pkg.name}">
                            <i class="fa-regular fa-calendar-check me-1"></i> বুক করুন
                        </button>
                        ${pkg.pdfUrl ? `
                            <a href="${pkg.pdfUrl}" target="_blank" class="btn btn-outline-secondary rounded-pill px-3 py-2 small" title="পিডিএফ ডাউনলোড">
                                <i class="fa-solid fa-file-pdf me-1"></i> ব্রোশার ডাউনলোড
                            </a>
                        ` : ''}
                    </div>
                </div>
            </div>
        </div>
    `;

    if (hajjList) {
        if (hajjPackages.length === 0) {
            hajjList.innerHTML = `<div class="col-12 text-center py-5"><p class="text-muted">বর্তমানে কোনো হজ্জ প্যাকেজ পাওয়া যায়নি।</p></div>`;
        } else {
            hajjPackages.forEach(pkg => hajjList.innerHTML += renderCard(pkg));
        }
    }

    if (umrahList) {
        if (umrahPackages.length === 0) {
            umrahList.innerHTML = `<div class="col-12 text-center py-5"><p class="text-muted">বর্তমানে কোনো ওমরাহ প্যাকেজ পাওয়া যায়নি।</p></div>`;
        } else {
            umrahPackages.forEach(pkg => umrahList.innerHTML += renderCard(pkg));
        }
    }

    // Attach click listeners to "Book Now" buttons
    document.querySelectorAll(".book-pkg-btn").forEach(btn => {
        btn.addEventListener("click", function() {
            const pkgName = this.getAttribute("data-pkg-name");
            const selectEl = document.getElementById("preferredPackage");
            
            // Try to find matching package option and select it
            let found = false;
            for (let i = 0; i < selectEl.options.length; i++) {
                if (selectEl.options[i].text.includes(pkgName) || selectEl.options[i].value === pkgName) {
                    selectEl.selectedIndex = i;
                    found = true;
                    break;
                }
            }

            // Scroll to Form
            document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
        });
    });
}

function updateFormSelects() {
    const select = document.getElementById("preferredPackage");
    select.innerHTML = '<option value="">কোনো নির্দিষ্ট প্যাকেজ নেই</option>';
    
    dbPackages.forEach(p => {
        select.innerHTML += `<option value="${p.name}">${p.name} (${p.price})</option>`;
    });
}

function updateInquiryBadge() {
    const unread = dbInquiries.filter(inq => !inq.contacted).length;
    const badge = document.getElementById("unreadInquiriesBadge");
    if (badge) {
        badge.textContent = unread;
        badge.style.display = unread > 0 ? "inline-block" : "none";
    }
}

// ==========================================
// Customer Interest Form Submission
// ==========================================

const form = document.getElementById("interestForm");
if (form) {
    form.addEventListener("submit", async function(e) {
        e.preventDefault();
        
        // Inputs
        const fullName = document.getElementById("fullName").value.trim();
        const phoneNumber = document.getElementById("phoneNumber").value.trim();
        const emailAddress = document.getElementById("emailAddress").value.trim();
        const preferredType = document.getElementById("preferredType").value;
        const preferredYear = document.getElementById("preferredYear").value;
        const preferredPackage = document.getElementById("preferredPackage").value;
        const city = document.getElementById("city").value.trim();
        const message = document.getElementById("message").value.trim();
        
        // Reset Validation states
        let isValid = true;
        document.querySelectorAll(".invalid-feedback").forEach(el => el.classList.add("d-none"));
        document.getElementById("formSuccessMessage").classList.add("d-none");
        document.getElementById("formGeneralError").classList.add("d-none");

        // Validate
        if (!fullName) {
            document.getElementById("fullNameError").classList.remove("d-none");
            isValid = false;
        }
        if (!phoneNumber || phoneNumber.length < 10) {
            document.getElementById("phoneNumberError").classList.remove("d-none");
            isValid = false;
        }
        if (!emailAddress || !emailAddress.includes("@")) {
            document.getElementById("emailAddressError").classList.remove("d-none");
            isValid = false;
        }
        if (!preferredYear) {
            document.getElementById("preferredYearError").classList.remove("d-none");
            isValid = false;
        }

        if (!isValid) {
            document.getElementById("formGeneralError").classList.remove("d-none");
            return;
        }

        // Show loading state
        const submitBtn = document.getElementById("submitFormBtn");
        const spinner = document.getElementById("submitSpinner");
        const icon = document.getElementById("submitIcon");
        
        submitBtn.disabled = true;
        spinner.classList.remove("d-none");
        icon.classList.add("d-none");

        // Construct submission object
        const newInquiryPayload = {
            fullName,
            phoneNumber,
            emailAddress,
            preferredType,
            preferredYear,
            preferredPackage: preferredPackage || "কোনোটিই নয়",
            city: city || "উল্লেখ নেই",
            message: message || "কোনো বার্তা নেই"
        };

        let savedInquiry = {
            id: "inq_" + Date.now(),
            ...newInquiryPayload,
            date: new Date().toLocaleDateString('bn-BD', { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' }),
            contacted: false
        };

        // Save to Database via API
        let apiSuccess = false;
        try {
            const response = await fetch('/api/inquiries', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newInquiryPayload)
            });
            if (response.ok) {
                savedInquiry = await response.json();
                apiSuccess = true;
            }
        } catch (err) {
            console.error("Failed to submit inquiry to server, falling back to local storage:", err);
        }

        dbInquiries.push(savedInquiry);
        saveDB("hajj_agency_inquiries", dbInquiries);

        // Send the submission by email using EmailJS.
        const emailPayload = {
            to_email: dbConfig.email || EMAILJS_CONFIG.destinationEmail,
            from_name: fullName,
            from_phone: phoneNumber,
            from_email: emailAddress,
            preferred_type: preferredType === "Hajj" ? "হজ্জ" : "ওমরাহ",
            preferred_year: preferredYear,
            preferred_package: savedInquiry.preferredPackage,
            city: savedInquiry.city,
            message: savedInquiry.message,
            submitted_at: savedInquiry.date
        };

        let emailSendPromise;
        if (EMAILJS_CONFIG.enabled && window.emailjs) {
            emailSendPromise = window.emailjs.send(EMAILJS_CONFIG.serviceId, EMAILJS_CONFIG.templateId, emailPayload);
        } else {
            console.warn("EmailJS is not configured yet — Inquiry was saved to database:", savedInquiry);
            emailSendPromise = Promise.resolve();
        }

        emailSendPromise
            .catch(err => {
                console.error("Email notification failed to send:", err);
            })
            .finally(() => {
                submitBtn.disabled = false;
                spinner.classList.add("d-none");
                icon.classList.remove("d-none");

                // Show Success Message
                document.getElementById("formSuccessMessage").classList.remove("d-none");
                form.reset();

                // Update admin notifications
                updateInquiryBadge();
                renderInquiriesAdmin();

                // Scroll success message to view
                document.getElementById("formSuccessMessage").scrollIntoView({ behavior: "smooth", block: "center" });
            });
    });
}

// ==========================================
// Admin Panel Control and Dashboard Logic
// ==========================================

const adminLoginBtn = document.getElementById("adminLoginBtn");
const adminOverlay = document.getElementById("adminDashboardOverlay");
const closeAdminBtn = document.getElementById("closeAdminBtn");
const loginSubmitBtn = document.getElementById("loginSubmitBtn");
const adminLogoutBtn = document.getElementById("adminLogoutBtn");

// Toggle controls view
function toggleAdminOverlay(show) {
    if (show) {
        adminOverlay.classList.add("show");
        // Check if already logged in this session
        if (sessionStorage.getItem("adminLoggedIn") === "true") {
            showAdminControls();
        } else {
            showAdminLogin();
        }
    } else {
        adminOverlay.classList.remove("show");
    }
}

adminLoginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    toggleAdminOverlay(true);
});

closeAdminBtn.addEventListener("click", () => toggleAdminOverlay(false));

// Close overlay on click outside sidebar
adminOverlay.addEventListener("click", function(e) {
    if (e.target === adminOverlay) {
        toggleAdminOverlay(false);
    }
});

function showAdminLogin() {
    document.getElementById("adminLoginWrapper").classList.remove("d-none");
    document.getElementById("adminControlsWrapper").classList.add("d-none");
}

function showAdminControls() {
    document.getElementById("adminLoginWrapper").classList.add("d-none");
    document.getElementById("adminControlsWrapper").classList.remove("d-none");
    populateAdminSettings();
    renderPackagesAdmin();
    renderInquiriesAdmin();
}

// Submit Login
loginSubmitBtn.addEventListener("click", async function() {
    const user = document.getElementById("adminUsername").value;
    const pass = document.getElementById("adminPassword").value;
    const errorEl = document.getElementById("adminLoginError");
    
    try {
        const response = await fetch('/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: user, password: pass })
        });
        const data = await response.json();
        if (response.ok && data.success) {
            errorEl.classList.add("d-none");
            sessionStorage.setItem("adminLoggedIn", "true");
            adminToken = data.token;
            sessionStorage.setItem("adminToken", adminToken);
            await fetchInquiriesFromServer();
            showAdminControls();
        } else {
            errorEl.textContent = data.error || "ভুল ব্যবহারকারীর নাম অথবা পাসওয়ার্ড!";
            errorEl.classList.remove("d-none");
        }
    } catch (err) {
        console.error("Login failed, falling back to local credentials:", err);
        if (user === "admin" && pass === "admin123") {
            errorEl.classList.add("d-none");
            sessionStorage.setItem("adminLoggedIn", "true");
            showAdminControls();
        } else {
            errorEl.textContent = "ভুল ব্যবহারকারীর নাম অথবা পাসওয়ার্ড!";
            errorEl.classList.remove("d-none");
        }
    }
});

// Logout
adminLogoutBtn.addEventListener("click", function() {
    sessionStorage.removeItem("adminLoggedIn");
    sessionStorage.removeItem("adminToken");
    adminToken = "";
    showAdminLogin();
});

// Populate settings forms
function populateAdminSettings() {
    document.getElementById("editAgencyName").value = dbConfig.agencyName;
    document.getElementById("editLicenseText").value = dbConfig.licenseText;
    document.getElementById("editPhone1").value = dbConfig.phone1;
    document.getElementById("editPhone2").value = dbConfig.phone2;
    document.getElementById("editEmail").value = dbConfig.email;
    document.getElementById("editFacebookUrl").value = dbConfig.facebookUrl || "";
    document.getElementById("editFacebookName").value = dbConfig.facebookName || "";
    document.getElementById("editAnnouncementText").value = dbConfig.announcement;
    document.getElementById("editAboutText").value = dbConfig.aboutText;
    document.getElementById("agentPhotoUrl").value = dbConfig.agentPhoto;
    document.getElementById("agencyLogoUrl").value = dbConfig.agencyLogo;
    
    document.getElementById("editLocation1Name").value = dbConfig.location1Name || "";
    document.getElementById("editLocation1Address").value = dbConfig.location1Address || "";
    document.getElementById("editLocation1Map").value = dbConfig.location1Map || "";
    document.getElementById("editLocation2Name").value = dbConfig.location2Name || "";
    document.getElementById("editLocation2Address").value = dbConfig.location2Address || "";
    document.getElementById("editLocation2Map").value = dbConfig.location2Map || "";
}

// Save Settings
document.getElementById("saveGeneralSettings").addEventListener("click", async function() {
    const updated = {
        agencyName: document.getElementById("editAgencyName").value,
        licenseText: document.getElementById("editLicenseText").value,
        phone1: document.getElementById("editPhone1").value,
        phone2: document.getElementById("editPhone2").value,
        email: document.getElementById("editEmail").value,
        facebookUrl: document.getElementById("editFacebookUrl").value,
        facebookName: document.getElementById("editFacebookName").value,
        announcement: document.getElementById("editAnnouncementText").value,
        aboutText: document.getElementById("editAboutText").value,
        agentPhoto: document.getElementById("agentPhotoUrl").value,
        agencyLogo: document.getElementById("agencyLogoUrl").value,
        location1Name: document.getElementById("editLocation1Name").value,
        location1Address: document.getElementById("editLocation1Address").value,
        location1Map: document.getElementById("editLocation1Map").value,
        location2Name: document.getElementById("editLocation2Name").value,
        location2Address: document.getElementById("editLocation2Address").value,
        location2Map: document.getElementById("editLocation2Map").value
    };

    try {
        const response = await fetch('/api/config', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${adminToken}`
            },
            body: JSON.stringify(updated)
        });
        if (response.ok) {
            dbConfig = await response.json();
            saveDB("hajj_agency_config", dbConfig);
            updateSiteUI();
            alert("সাধারণ সেটিংস সফলভাবে আপডেট করা হয়েছে!");
        } else {
            const data = await response.json();
            alert(data.error || "আপডেট ব্যর্থ হয়েছে।");
        }
    } catch (err) {
        console.error("Failed to save config, saving locally:", err);
        dbConfig = updated;
        saveDB("hajj_agency_config", dbConfig);
        updateSiteUI();
        alert("সার্ভার অফলাইন! সেটিংস শুধুমাত্র স্থানীয়ভাবে সেভ করা হয়েছে।");
    }
});

// Save Gallery Settings (Photos & Logos)
document.getElementById("saveGallerySettings").addEventListener("click", async function() {
    // Merge existing config with the new image values
    const updated = {
        ...dbConfig,
        agentPhoto: document.getElementById("agentPhotoUrl").value,
        agencyLogo: document.getElementById("agencyLogoUrl").value
    };

    try {
        const response = await fetch('/api/config', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${adminToken}`
            },
            body: JSON.stringify(updated)
        });
        if (response.ok) {
            dbConfig = await response.json();
            saveDB("hajj_agency_config", dbConfig);
            updateSiteUI();
            alert("ছবি ও লোগো সফলভাবে আপডেট করা হয়েছে!");
        } else {
            const data = await response.json();
            alert(data.error || "আপডেট ব্যর্থ হয়েছে।");
        }
    } catch (err) {
        console.error("Failed to save config, saving locally:", err);
        dbConfig = updated;
        saveDB("hajj_agency_config", dbConfig);
        updateSiteUI();
        alert("সার্ভার অফলাইন! ছবি ও লোগো শুধুমাত্র স্থানীয়ভাবে সেভ করা হয়েছে।");
    }
});

// ==========================================
// Admin File Uploads (Express Backend)
// ==========================================

async function uploadFileToServer(file) {
    const formData = new FormData();
    formData.append('file', file);
    const headers = {};
    if (adminToken) {
        headers['Authorization'] = `Bearer ${adminToken}`;
    }
    const response = await fetch('/api/upload', {
        method: 'POST',
        headers: headers,
        body: formData
    });
    if (!response.ok) {
        throw new Error('Upload failed');
    }
    const data = await response.json();
    return data.fileUrl; // e.g., '/uploads/file-12345.png'
}

function bindFileInputToUpload(fileInputId, textInputId) {
    const fileInput = document.getElementById(fileInputId);
    const textInput = document.getElementById(textInputId);
    
    fileInput.addEventListener("change", async function() {
        if (this.files && this.files[0]) {
            const originalText = textInput.value;
            textInput.value = "আপলোড হচ্ছে...";
            try {
                const fileUrl = await uploadFileToServer(this.files[0]);
                textInput.value = fileUrl;
            } catch (err) {
                console.error("File upload to server failed, falling back to base64:", err);
                const reader = new FileReader();
                reader.onload = function(e) {
                    textInput.value = e.target.result;
                };
                reader.readAsDataURL(this.files[0]);
            }
        }
    });
}

bindFileInputToUpload("agentPhotoFileInput", "agentPhotoUrl");
bindFileInputToUpload("logoFileInput", "agencyLogoUrl");
bindFileInputToUpload("packagePdfFileInput", "packagePdfUrl");

document.getElementById("uploadAgentPhotoTrigger").addEventListener("click", () => {
    document.getElementById("agentPhotoFileInput").click();
});

document.getElementById("uploadLogoTrigger").addEventListener("click", () => {
    document.getElementById("logoFileInput").click();
});

document.getElementById("uploadPdfTrigger").addEventListener("click", () => {
    document.getElementById("packagePdfFileInput").click();
});

// ==========================================
// Admin Package Management
// ==========================================

let currentEditingBenefits = [];

function toBengaliNumber(num) {
    const bDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
    return num.toString().split('').map(d => bDigits[parseInt(d)] || d).join('');
}

function renderBenefitsEditor() {
    const container = document.getElementById("benefitsListContainer");
    if (!container) return;
    container.innerHTML = "";
    
    currentEditingBenefits.forEach((benefit, index) => {
        const item = document.createElement("div");
        item.className = "d-flex align-items-center gap-2 bg-light p-2 rounded border mb-2";
        item.innerHTML = `
            <input type="text" class="form-control form-control-sm flex-grow-1 benefit-item-input" data-index="${index}" value="${benefit.replace(/"/g, '&quot;')}">
            <div class="btn-group btn-group-sm">
                <button type="button" class="btn btn-outline-secondary btn-sm p-1 px-2 move-benefit-up" data-index="${index}" title="উপরে উঠান"><i class="fa-solid fa-arrow-up"></i></button>
                <button type="button" class="btn btn-outline-secondary btn-sm p-1 px-2 move-benefit-down" data-index="${index}" title="নিচে নামান"><i class="fa-solid fa-arrow-down"></i></button>
                <button type="button" class="btn btn-outline-danger btn-sm p-1 px-2 delete-benefit" data-index="${index}" title="মুছুন"><i class="fa-solid fa-trash"></i></button>
            </div>
        `;
        container.appendChild(item);
    });

    // Attach listeners
    container.querySelectorAll(".benefit-item-input").forEach(input => {
        input.addEventListener("input", function() {
            const idx = parseInt(this.getAttribute("data-index"));
            currentEditingBenefits[idx] = this.value;
        });
    });

    container.querySelectorAll(".move-benefit-up").forEach(btn => {
        btn.addEventListener("click", function() {
            const idx = parseInt(this.getAttribute("data-index"));
            if (idx > 0) {
                const temp = currentEditingBenefits[idx];
                currentEditingBenefits[idx] = currentEditingBenefits[idx - 1];
                currentEditingBenefits[idx - 1] = temp;
                renderBenefitsEditor();
            }
        });
    });

    container.querySelectorAll(".move-benefit-down").forEach(btn => {
        btn.addEventListener("click", function() {
            const idx = parseInt(this.getAttribute("data-index"));
            if (idx < currentEditingBenefits.length - 1) {
                const temp = currentEditingBenefits[idx];
                currentEditingBenefits[idx] = currentEditingBenefits[idx + 1];
                currentEditingBenefits[idx + 1] = temp;
                renderBenefitsEditor();
            }
        });
    });

    container.querySelectorAll(".delete-benefit").forEach(btn => {
        btn.addEventListener("click", function() {
            const idx = parseInt(this.getAttribute("data-index"));
            currentEditingBenefits.splice(idx, 1);
            renderBenefitsEditor();
        });
    });
}

// Add Benefit Button and Enter support
const addBenefitBtn = document.getElementById("addBenefitBtn");
const newBenefitInput = document.getElementById("newBenefitInput");
if (addBenefitBtn && newBenefitInput) {
    addBenefitBtn.addEventListener("click", () => {
        const val = newBenefitInput.value.trim();
        if (val) {
            currentEditingBenefits.push(val);
            newBenefitInput.value = "";
            renderBenefitsEditor();
        }
    });
    newBenefitInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            addBenefitBtn.click();
        }
    });
}

const createNewPackageBtn = document.getElementById("createNewPackageBtn");
const packageFormContainer = document.getElementById("packageFormContainer");
const savePackageSubmit = document.getElementById("savePackageSubmit");
const cancelPackageEdit = document.getElementById("cancelPackageEdit");

createNewPackageBtn.addEventListener("click", () => {
    document.getElementById("editPackageId").value = "";
    document.getElementById("packageName").value = "";
    document.getElementById("packagePrice").value = "";
    document.getElementById("packageDuration").value = "";
    document.getElementById("packageQurbani").value = "";
    document.getElementById("packageMakkahHotel").value = "";
    document.getElementById("packageMadinahHotel").value = "";
    document.getElementById("packageTransport").value = "";
    document.getElementById("packageMeals").value = "";
    document.getElementById("packagePdfUrl").value = "";
    document.getElementById("packageFormTitle").textContent = "নতুন প্যাকেজ যোগ করুন";
    
    currentEditingBenefits = [];
    renderBenefitsEditor();
    
    packageFormContainer.classList.remove("d-none");
});

cancelPackageEdit.addEventListener("click", () => {
    packageFormContainer.classList.add("d-none");
});

savePackageSubmit.addEventListener("click", async function() {
    const id = document.getElementById("editPackageId").value;
    const type = document.getElementById("packageType").value;
    const name = document.getElementById("packageName").value;
    const price = document.getElementById("packagePrice").value;
    const duration = document.getElementById("packageDuration").value;
    const qurbani = document.getElementById("packageQurbani").value;
    const makkahHotel = document.getElementById("packageMakkahHotel").value;
    const madinahHotel = document.getElementById("packageMadinahHotel").value;
    const transport = document.getElementById("packageTransport").value;
    const meals = document.getElementById("packageMeals").value;
    const pdfUrl = document.getElementById("packagePdfUrl").value;

    if (!name || !price) {
        alert("প্যাকেজের নাম ও মূল্য প্রদান করা আবশ্যক!");
        return;
    }

    const payload = { type, name, price, duration, qurbani, makkahHotel, madinahHotel, transport, meals, pdfUrl, benefits: currentEditingBenefits };

    try {
        let response;
        if (id) {
            response = await fetch(`/api/packages/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${adminToken}`
                },
                body: JSON.stringify(payload)
            });
        } else {
            response = await fetch('/api/packages', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${adminToken}`
                },
                body: JSON.stringify(payload)
            });
        }

        if (response.ok) {
            const savedPkg = await response.json();
            if (id) {
                const idx = dbPackages.findIndex(p => p.id === id);
                if (idx !== -1) dbPackages[idx] = savedPkg;
            } else {
                dbPackages.push(savedPkg);
            }
            saveDB(PACKAGE_STORAGE_KEY, dbPackages);
            updateSiteUI();
            renderPackagesAdmin();
            packageFormContainer.classList.add("d-none");
            alert("প্যাকেজটি সফলভাবে সংরক্ষণ করা হয়েছে!");
        } else {
            const data = await response.json();
            alert(data.error || "প্যাকেজ সংরক্ষণ করতে ব্যর্থ হয়েছে।");
        }
    } catch (err) {
        console.error("Failed to save package to server, falling back to local:", err);
        if (id) {
            const idx = dbPackages.findIndex(p => p.id === id);
            if (idx !== -1) {
                dbPackages[idx] = { id, type, name, price, duration, qurbani, makkahHotel, madinahHotel, transport, meals, pdfUrl, benefits: currentEditingBenefits };
            }
        } else {
            const newPkg = {
                id: "pkg_" + Date.now(),
                type, name, price, duration, qurbani, makkahHotel, madinahHotel, transport, meals, pdfUrl, benefits: currentEditingBenefits
            };
            dbPackages.push(newPkg);
        }
        saveDB(PACKAGE_STORAGE_KEY, dbPackages);
        updateSiteUI();
        renderPackagesAdmin();
        packageFormContainer.classList.add("d-none");
        alert("সার্ভার অফলাইন! প্যাকেজটি শুধুমাত্র স্থানীয়ভাবে সংরক্ষণ করা হয়েছে।");
    }
});

function renderPackagesAdmin() {
    const listContainer = document.getElementById("adminPackagesListContainer");
    listContainer.innerHTML = "";

    dbPackages.forEach(pkg => {
        listContainer.innerHTML += `
            <div class="card p-2.5 mb-2 border shadow-none bg-light">
                <div class="d-flex justify-content-between align-items-center">
                    <div>
                        <span class="badge ${pkg.type === 'Hajj' ? 'bg-primary' : 'bg-success'} me-1">${pkg.type === 'Hajj' ? 'হজ্জ' : 'ওমরাহ'}</span>
                        <strong>${pkg.name}</strong>
                        <div class="text-accent-gold font-monospace small mt-0.5">${pkg.price} | মেয়াদ: ${pkg.duration}</div>
                    </div>
                    <div class="d-flex gap-1">
                        <button class="btn btn-outline-primary btn-sm px-2 py-1 edit-pkg-action" data-id="${pkg.id}"><i class="fa-solid fa-pen-to-square"></i></button>
                        <button class="btn btn-outline-danger btn-sm px-2 py-1 delete-pkg-action" data-id="${pkg.id}"><i class="fa-solid fa-trash"></i></button>
                    </div>
                </div>
            </div>
        `;
    });

    // Attach actions
    document.querySelectorAll(".edit-pkg-action").forEach(btn => {
        btn.addEventListener("click", function() {
            const id = this.getAttribute("data-id");
            const pkg = dbPackages.find(p => p.id === id);
            if (pkg) {
                document.getElementById("editPackageId").value = pkg.id;
                document.getElementById("packageType").value = pkg.type;
                document.getElementById("packageName").value = pkg.name;
                document.getElementById("packagePrice").value = pkg.price;
                document.getElementById("packageDuration").value = pkg.duration;
                document.getElementById("packageQurbani").value = pkg.qurbani;
                document.getElementById("packageMakkahHotel").value = pkg.makkahHotel;
                document.getElementById("packageMadinahHotel").value = pkg.madinahHotel;
                document.getElementById("packageTransport").value = pkg.transport;
                document.getElementById("packageMeals").value = pkg.meals;
                document.getElementById("packagePdfUrl").value = pkg.pdfUrl || "";
                document.getElementById("packageFormTitle").textContent = "প্যাকেজ এডিট করুন";
                currentEditingBenefits = pkg.benefits ? [...pkg.benefits] : [];
                renderBenefitsEditor();
                packageFormContainer.classList.remove("d-none");
            }
        });
    });

    document.querySelectorAll(".delete-pkg-action").forEach(btn => {
        btn.addEventListener("click", async function() {
            const id = this.getAttribute("data-id");
            if (confirm("আপনি কি নিশ্চিতভাবে এই প্যাকেজটি ডিলিট করতে চান?")) {
                try {
                    const response = await fetch(`/api/packages/${id}`, {
                        method: 'DELETE',
                        headers: { 'Authorization': `Bearer ${adminToken}` }
                    });
                    if (response.ok) {
                        dbPackages = dbPackages.filter(p => p.id !== id);
                        saveDB(PACKAGE_STORAGE_KEY, dbPackages);
                        updateSiteUI();
                        renderPackagesAdmin();
                    } else {
                        const data = await response.json();
                        alert(data.error || "প্যাকেজ ডিলিট করতে ব্যর্থ হয়েছে।");
                    }
                } catch (err) {
                    console.error("Failed to delete package on server, falling back to local:", err);
                    dbPackages = dbPackages.filter(p => p.id !== id);
                    saveDB(PACKAGE_STORAGE_KEY, dbPackages);
                    updateSiteUI();
                    renderPackagesAdmin();
                }
            }
        });
    });
}

// ==========================================
// Admin Inquiries / Submissions Management
// ==========================================

function renderInquiriesAdmin() {
    const list = document.getElementById("adminInquiriesList");
    list.innerHTML = "";

    if (dbInquiries.length === 0) {
        list.innerHTML = `<div class="text-center py-4 text-muted">কোনো আবেদন বা ইনকোয়ারি পাওয়া যায়নি।</div>`;
        return;
    }

    // Show newest first
    const sortedInquiries = [...dbInquiries].reverse();

    sortedInquiries.forEach(inq => {
        list.innerHTML += `
            <div class="inquiry-card ${inq.contacted ? 'contacted' : 'new'}">
                <div class="d-flex justify-content-between align-items-start mb-2">
                    <div>
                        <h6 class="fw-bold mb-0 text-dark-blue">${inq.fullName}</h6>
                        <small class="text-muted"><i class="fa-regular fa-clock me-1"></i> ${inq.date}</small>
                    </div>
                    <span class="badge ${inq.contacted ? 'bg-success' : 'bg-danger'}">${inq.contacted ? 'যোগাযোগ সম্পন্ন' : 'নতুন আবেদন'}</span>
                </div>
                <div class="small mb-2 text-secondary">
                    <div><strong>মোবাইল:</strong> <a href="tel:${inq.phoneNumber}" class="text-decoration-none">${inq.phoneNumber}</a> | <strong>ইমেইল:</strong> ${inq.emailAddress}</div>
                    <div><strong>শহর:</strong> ${inq.city}</div>
                    <div><strong>পছন্দ:</strong> ${inq.preferredType === 'Hajj' ? 'হজ্জ' : 'ওমরাহ'} (${inq.preferredYear}) - ${inq.preferredPackage}</div>
                </div>
                ${inq.message ? `<div class="bg-white p-2 rounded mb-2 border-start border-3 border-accent-gold small italic text-secondary">"${inq.message}"</div>` : ''}
                <div class="d-flex justify-content-between align-items-center mt-2.5">
                    <div class="d-flex gap-1.5">
                        <a href="https://wa.me/88${inq.phoneNumber.replace(/\s+/g, '')}" target="_blank" class="btn btn-whatsapp-custom btn-sm px-2.5 py-1 rounded d-flex align-items-center gap-1"><i class="fa-brands fa-whatsapp"></i> হোয়াটসঅ্যাপ</a>
                        <a href="tel:${inq.phoneNumber}" class="btn btn-outline-primary btn-sm px-2.5 py-1 rounded d-flex align-items-center gap-1"><i class="fa-solid fa-phone"></i> কল দিন</a>
                    </div>
                    <div class="d-flex gap-1.5">
                        <button class="btn btn-sm ${inq.contacted ? 'btn-outline-secondary' : 'btn-outline-success'} toggle-contact-action" data-id="${inq.id}" title="${inq.contacted ? 'নতুন হিসেবে চিহ্নিত করুন' : 'যোগাযোগ হয়েছে বলে চিহ্নিত করুন'}">
                            <i class="fa-solid ${inq.contacted ? 'fa-envelope' : 'fa-check'}"></i>
                        </button>
                        <button class="btn btn-outline-danger btn-sm delete-inq-action" data-id="${inq.id}"><i class="fa-solid fa-trash-can"></i></button>
                    </div>
                </div>
            </div>
        `;
    });

    // Attach Action Listeners
    document.querySelectorAll(".toggle-contact-action").forEach(btn => {
        btn.addEventListener("click", async function() {
            const id = this.getAttribute("data-id");
            const idx = dbInquiries.findIndex(inq => inq.id === id);
            if (idx !== -1) {
                const newStatus = !dbInquiries[idx].contacted;
                try {
                    const response = await fetch(`/api/inquiries/${id}`, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${adminToken}`
                        },
                        body: JSON.stringify({ contacted: newStatus })
                    });
                    if (response.ok) {
                        const updatedInq = await response.json();
                        dbInquiries[idx] = updatedInq;
                    } else {
                        dbInquiries[idx].contacted = newStatus;
                    }
                } catch (err) {
                    console.error("Failed to update status on server, falling back to local:", err);
                    dbInquiries[idx].contacted = newStatus;
                }
                saveDB("hajj_agency_inquiries", dbInquiries);
                updateInquiryBadge();
                renderInquiriesAdmin();
            }
        });
    });

    document.querySelectorAll(".delete-inq-action").forEach(btn => {
        btn.addEventListener("click", async function() {
            const id = this.getAttribute("data-id");
            if (confirm("এই ইনকোয়ারিটি চিরতরে ডিলিট করতে চান?")) {
                try {
                    const response = await fetch(`/api/inquiries/${id}`, {
                        method: 'DELETE',
                        headers: { 'Authorization': `Bearer ${adminToken}` }
                    });
                    if (response.ok) {
                        dbInquiries = dbInquiries.filter(inq => inq.id !== id);
                    }
                } catch (err) {
                    console.error("Failed to delete inquiry on server, falling back to local:", err);
                    dbInquiries = dbInquiries.filter(inq => inq.id !== id);
                }
                saveDB("hajj_agency_inquiries", dbInquiries);
                updateInquiryBadge();
                renderInquiriesAdmin();
            }
        });
    });
}

// Clear all inquiries
const clearAllInquiriesBtn = document.getElementById("clearAllInquiriesBtn");
if (clearAllInquiriesBtn) {
    clearAllInquiriesBtn.addEventListener("click", async function() {
        if (confirm("আপনি কি নিশ্চিত যে সকল ইনকোয়ারি চিরতরে ডিলিট করে দিতে চান? এই কাজটি আর ফেরানো যাবে না।")) {
            try {
                // Delete one by one on backend
                for (const inq of dbInquiries) {
                    await fetch(`/api/inquiries/${inq.id}`, {
                        method: 'DELETE',
                        headers: { 'Authorization': `Bearer ${adminToken}` }
                    });
                }
                dbInquiries = [];
            } catch (err) {
                console.error("Failed to clear inquiries on server, clearing locally:", err);
                dbInquiries = [];
            }
            saveDB("hajj_agency_inquiries", dbInquiries);
            updateInquiryBadge();
            renderInquiriesAdmin();
        }
    });
}

// ==========================================
// Initialization call
// ==========================================

window.addEventListener("DOMContentLoaded", () => {
    updateSiteUI();
    loadDataFromServer();
    initFloatingActionLabels();
    initScrollIndicator();
});

// ==========================================
// Scroll Active Navigation Indicator
// ==========================================
function initScrollIndicator() {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

    window.addEventListener("scroll", () => {
        let currentSectionId = "";
        const scrollPosition = window.scrollY + 150; // offset for sticky navbar and breathing room

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute("id");
            }
        });

        // Special case for top of the page
        if (window.scrollY < 120) {
            currentSectionId = "home";
        }

        if (currentSectionId) {
            navLinks.forEach(link => {
                link.classList.remove("active");
                if (link.getAttribute("href") === `#${currentSectionId}`) {
                    link.classList.add("active");
                }
            });
        }
    });
}

// ==========================================
// Floating WhatsApp/Email button labels
// ==========================================
// Desktop: labels are hidden by default via CSS and reveal on :hover.
// Touch devices don't have hover, so on first touch we reveal the label
// briefly (without blocking the tap-through to the link) and hide it again
// shortly after if the user doesn't navigate away.
function initFloatingActionLabels() {
    const floatBtns = document.querySelectorAll(".floating-actions a");
    floatBtns.forEach(btn => {
        let hideTimeout;
        btn.addEventListener("touchstart", function() {
            floatBtns.forEach(other => { if (other !== btn) other.classList.remove("show-label"); });
            btn.classList.add("show-label");
            clearTimeout(hideTimeout);
            hideTimeout = setTimeout(() => btn.classList.remove("show-label"), 2200);
        }, { passive: true });
    });
}