const { useEffect, useMemo, useState } = React;

const images = {
  hero: "https://lh3.googleusercontent.com/aida-public/AB6AXuB3ARgd3WjF3d51Ew1-ZHiX3aPcq8jKbfqAV0uMfEkvH-8QdY8IJ-0pJ7Ka_31luuGGjp4Qvro1Gkc_LW5IEV9r5cg-116u4tRQQorQ9SgU_yuV1iMyxLIwC_Vz-Cv-tCenZIUHisEW-Hl0H5h3roCmE4d6WTxoBNnXXCmJMjo4eNsSWR7-f-8v9b_vt7cOSpWHTOqyGfRFF3ojGOPqGLN68mKc7zpZVYf8p0Ov-vI170XCR2P1LVuWvZDc_WOQ8uv4FpB5wAvfYeJ9",
  pilot: "https://lh3.googleusercontent.com/aida-public/AB6AXuAB2WxBogFGSp3pH28Ci7I7iprHEAQZIgCLrevrdKG55xoLE8PWU5tGJSvbb4SiWg2NL4iuNWcdOIiCqVjsHpuLTtnPvfeJshUxlrZFe2CitNACyFEzkLupA-SEk9Xw1eXku4IQ-F9OcmWOrOxdhsYXfh-9STK2i4NueeUvscQ8J1yb8Yio0SWUaQyGhvhznIrETnmu5tPlHDr4dM9UURtCgjmEuc1jHmann0yhWun-WCvbIv1xQ9BwDhm7eRc5N-ZXAeRxjX6cZiHM",
  course: "https://lh3.googleusercontent.com/aida-public/AB6AXuBikvDbqVuvKh5lTqV6tenbjTAeuQEZhx_z9oq6L1JE_pTDAQFC0AgF1fc_X8r7utukTKVI8CH4Ae_URHiffOAZlLfXJi9ExHvHSZUXDnxuRsbuXL9iv7ltDAc1FpyhLoKwSjPODQvVc14M1bUS6bGcfrMuZ1cr5eUqaEFhkF7ENFHX6ZWsvdYerjj1nDpd4msgBLGh27SGazFCZZ0G_zxg9S6HqGvdY42MCflMR8K-0SPeKVFDL59jAvkjEIuA_3DEL1rZXG10Qypw",
  portfolio: [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAlBVNN51qunHtSIbU4GRj42Uu6UMBBXNYRcLXeEsLLDz8Ao3WUq4a809io9dOr2OQUNeXVYC5CbLIaueNUfTwCq97TdkzVIENb5MjjwpA1ZZ-EfGV9PiNGEN-UvPwamIEgwJ-9bzuJYekzW2vdIR8-ar0k_fA9_fabLMa8kqyS9_cr4iWuWHiKNaBXQoRUmGji-pXYAiQnCnyWlroN4quuiajSPT6vhoMwehQIU0cjzhW_HwGsm3mA52yO5JMt-m9M8EBx2aImm7wa",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDXBTJnJkEwt0T4ef6SSL3zjYJZH5BVy8ctWMq_w8EKZ47XYOc9K7CC95myTlnmfvOTqmRXesdsoyim92SSQoUO1OS4Woo8ab_mSFWtfM8TpNXwOd4WEMN_PxKWAowRKkN-2i8xRVz4jVmxkIA8nzZrjZQFMd7t8tEdCBrhChawXC1eKgeG6XiwyYv006RpyQhA7qNU6utu0909D-Ha6psEQenwf5b2V9AbnKG4NTDWVCrGqzHrV8owIPjQM86sZZZRfJFEZIG8zkBq",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDedZCjRfbjSV7y4DcGZ1Wf7EbswyUrDhctr5bt5q2dviVmxeAs80SpeX_2zUuCF5sQ9DY06Vemr__ZqzcE1ROaJRgnwobNLKlmaGP46XRWOAU3KWVvv5MYvU9AIz9U1Wv4QultpHZiMCaFEtl3CRGtOi4NjPetcmuGAYfj5P6zUyB6B6c4A7dReh_5RtoxaqF_HYeJUHE2YiVaCBvfPbGpwJj8BuOcxSl8GnD15LDWmkStF5Cyn7NT-b5lOD6cOmsqnkE0FCMP-fhg",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDAQYEGkcS0nfdUxTpwMCh0uH5SFIUiNMyTFm_7jGnsNnbzEop7mgvTr1gy-Uzz4bpRjSUoOqlPr3svsLI1liw5Mx5DrXWVSky79NfH_uOpwJefTZHAGbthAKFudVelvYwzVcN9TjLMdKAoX-U3WWXAXPsFk3i0sfbKRAWwocmw4RTAYzKt5gLlQtGABkYXoyMHj5DbfZPqoAXDvjQ1C2kNvnwMvEjq-eGrGlbeSlofnhBlOy9cY0x785hJaMYRjKm8_hTTdcp9m1kk",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCMXENhNjjeEAecNoxZLWv6-E5_mmyxmUr_Yw7hT8W2Y97iCvt6NpAl-pgp1OHom6pd5hmTQ_GkSqxRFkgyrfK6CUwoxwCk4oo7iq9m9ABFzEVP7cPX08r63FUcsPMUO8UcHGklSLmEW94sbTmhcDG0rwz3Krsc5NJ-9X9RZuQxdqTc5C1kBUwEtVlbScO2bLTI5Da37SZFqEeVsC-Q8dJVQWxhCk2VUo8hALlVxhHBwMpTyCOjvW0fnZCOwbrCQSp8d9RZe7OyPPCl",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDJGVmHti_61lMXR2nSpnK-lm1TTz-a95Vd1BotgLZAPdG2i4yoKLopCdv88Hnq_bWe8NvRpx5-AWYlidpQTu-zoPv2Jsy6tB5hLWWv_nopZOZoVLG4099Q3c2WntN2QyGP1HZXqboSF9JEiS_gDSFBGwxhJDwhbJVHHRhfkBtM_3SaVTGvqufBwyTUwKT0x_ZusGaaj6E1IS4Xvr1DZOgIOO0yDgr7Oc6QwNuoOrBO2js0vUuLspNH8kbaPYV-3aWQVFF1MV4Pm45b",
  ],
};

const copy = {
  pl: {
    nav: ["Courses", "Filming", "Portfolio", "Pricing"],
    enroll: "Запишись зараз",
    chips: ["Szkolenia dla początkujących", "Filmowanie eventów", "Ujęcia FPV i cinematic"],
    heroTitle: ["Szkoła dronowa i", "filmowanie z powietrza"],
    heroText:
      "Naucz się latać dronem pewnie i bezpiecznie albo zleć nam stworzenie dynamicznych ujęć z powietrza dla Twojego wydarzenia, marki lub przygody.",
    primaryCta: "Zarezerwuj szkolenie",
    secondaryCta: "Zobacz usługi filmowania",
    servicesEyebrow: "Co robimy",
    servicesTitle: "Kompleksowe rozwiązania z powietrza",
    services: [
      ["school", "Szkolenia dronowe", "Od pierwszego startu po zaawansowane manewry FPV. Przygotowujemy do egzaminów i uczymy praktycznego wykorzystania sprzętu."],
      ["videocam", "Filmowanie z powietrza", "Produkcja wideo dla biznesu, nieruchomości i eventów. Ujęcia 4K/6K z najwyższą precyzją i stabilizacją obrazu."],
      ["sports_motorsports", "Sport i outdoor", "Dynamiczne ujęcia akcji. Specjalizujemy się w szybkich pościgach FPV za motocyklami, samochodami i sportowcami ekstremalnymi."],
    ],
    pilotTitle: ["Dron to nie zabawka.", "To narzędzie do tworzenia", "mocnych ujęć."],
    pilotBadge: "Technika lotu",
    benefits: [
      ["Certyfikowani instruktorzy", "Prowadzimy szkolenia z realnymi scenariuszami lotniczymi."],
      ["Sprzęt klasy Premium", "Latamy dronami DJI, FPV i zestawami cinematic-ready."],
      ["Bezpieczeństwo po Pierwsze", "Uczymy planowania lotu i pracy w przestrzeni powietrznej."],
      ["Zdjęcia Cinematic", "Nie tylko latamy: komponujemy obraz, ruch i emocje."],
    ],
    courseTitle: "Naucz się latać dronem od zera",
    courseBullets: ["Ponad 1000h+ praktyki", "Budowa drona i konfiguracja oprogramowania", "Praktyczne loty na otwartej przestrzeni", "Omówienie formalności i bezpieczeństwa lotu"],
    courseButton: "Sprawdź następny lot",
    filmingTitle: "Filmowanie dronem dla wydarzeń, sportu i biznesu",
    filmingText:
      "Dostarczamy unikalną perspektywę, która wyróżni Twoją markę. Od spokojnych ujęć nieruchomości po ekstremalne pościgi FPV.",
    tags: ["Wesela", "Eventy", "Motocross", "Real Estate", "Reklamy TV", "Teledyski"],
    portfolio: [
      ["Real Estate", "Modern Villa Aerial"],
      ["Events", "Wedding Palace Sunset"],
      ["Action", "Motocross Jump FPV"],
      ["Urban", "Night City Hyperlapse"],
      ["Automotive", "Mountain Pursuit"],
      ["Nature", "Tatra Peaks Cinematic"],
    ],
    processEyebrow: "Proces",
    processTitle: "Jak to działa?",
    process: [
      ["contact_mail", "Kontakt", "Omawiamy Twoje potrzeby i cele projektu."],
      ["assignment", "Plan", "Analizujemy teren, strefy i przygotowujemy scenariusz."],
      ["flight_takeoff", "Lot / Realizacja", "Przystępujemy do działania i zbieramy materiał."],
      ["task_alt", "Efekt", "Dostarczamy gotowe pliki lub certyfikat ukończenia."],
    ],
    pricingEyebrow: "Cennik",
    pricingTitle: "Wybierz swój pakiet",
    popular: "Najpopularniejszy",
    packages: [
      ["Pierwszy lot", "Kurs dla amatorów", "599", "PLN", ["4h zajęć praktycznych", "Podstawy bezpieczeństwa", "Materiały szkoleniowe"], "Zapytaj o termin"],
      ["Cinematic video", "Produkcja reklamowa", "od 1499", "PLN", ["Całodniowa sesja", "Montaż i color grading", "Muzyka z licencją"], "Zamów realizację"],
      ["Action / FPV", "Ujęcia ekstremalne", "Indywidualnie", "", ["Pościgi FPV High-Speed", "Specjalistyczne drony", "Surowy materiał 6K"], "Skontaktuj się"],
    ],
    contactTitle: ["Masz pytania?", "Porozmawiajmy o locie."],
    contactText:
      "Chcesz zacząć szkolenie? Potrzebujesz wyceny filmu? Wypełnij formularz, a my odezwiemy się w ciągu 24 godzin z gotową propozycją.",
    form: ["Imię", "Email / Telefon", "Temat", "Wiadomość", "Wyślij zapytanie", "Jan Kowalski", "jan@example.com", "Opisz swój projekt..."],
    subjects: ["Szkolenie", "Filmowanie", "Sport", "Inne"],
    footer:
      "Jesteśmy pasjonatami technologii, którzy patrzą na świat z innej perspektywy.",
    footerNav: "Nawigacja",
    legal: "Legal",
  },
  ua: {
    nav: ["Курси", "Зйомка", "Портфоліо", "Ціни"],
    enroll: "Запишись зараз",
    chips: ["Навчання для початківців", "Зйомка подій", "FPV та cinematic кадри"],
    heroTitle: ["Школа дронів і", "аерозйомка"],
    heroText:
      "Навчіться керувати дроном впевнено й безпечно або замовте динамічні кадри з повітря для події, бренду чи пригоди.",
    primaryCta: "Забронювати навчання",
    secondaryCta: "Дивитися зйомку",
    servicesEyebrow: "Що ми робимо",
    servicesTitle: "Комплексні рішення з повітря",
    services: [
      ["school", "Навчання дронам", "Від першого зльоту до просунутих FPV-маневрів. Готуємо до іспитів і навчаємо практичного використання техніки."],
      ["videocam", "Аерозйомка", "Відеопродакшн для бізнесу, нерухомості та подій. 4K/6K кадри з максимальною точністю і стабілізацією."],
      ["sports_motorsports", "Спорт і outdoor", "Динамічні action-кадри. Спеціалізуємося на FPV-переслідуваннях мото, авто та екстремального спорту."],
    ],
    pilotTitle: ["Дрон - це не іграшка.", "Це інструмент для", "сильних кадрів."],
    pilotBadge: "Техніка польоту",
    benefits: [
      ["Сертифіковані інструктори", "Проводимо навчання на реальних польотних сценаріях."],
      ["Преміальне обладнання", "Працюємо з DJI, FPV і cinematic-ready комплектами."],
      ["Безпека насамперед", "Навчаємо планування польоту та роботи у повітряному просторі."],
      ["Cinematic зйомка", "Ми не просто літаємо: будуємо композицію, рух і емоцію."],
    ],
    courseTitle: "Навчіться літати дроном з нуля",
    courseBullets: ["1000+ годин практики", "Будова дрона і налаштування ПЗ", "Практичні польоти на відкритій місцевості", "Формальності та безпека польоту"],
    courseButton: "Дізнатися дату",
    filmingTitle: "Аерозйомка для подій, спорту і бізнесу",
    filmingText:
      "Даємо перспективу, яка вирізняє ваш бренд: від спокійних кадрів нерухомості до екстремальних FPV-переслідувань.",
    tags: ["Весілля", "Події", "Мотокрос", "Нерухомість", "ТВ-реклама", "Кліпи"],
    portfolio: [
      ["Нерухомість", "Modern Villa Aerial"],
      ["Події", "Wedding Palace Sunset"],
      ["Action", "Motocross Jump FPV"],
      ["Місто", "Night City Hyperlapse"],
      ["Авто", "Mountain Pursuit"],
      ["Природа", "Tatra Peaks Cinematic"],
    ],
    processEyebrow: "Процес",
    processTitle: "Як це працює?",
    process: [
      ["contact_mail", "Контакт", "Обговорюємо ваші потреби та цілі проєкту."],
      ["assignment", "План", "Аналізуємо локацію, зони польоту і готуємо сценарій."],
      ["flight_takeoff", "Політ / Реалізація", "Переходимо до польоту і збираємо матеріал."],
      ["task_alt", "Результат", "Передаємо готові файли або сертифікат проходження."],
    ],
    pricingEyebrow: "Ціни",
    pricingTitle: "Оберіть свій пакет",
    popular: "Найпопулярніший",
    packages: [
      ["Перший політ", "Курс для аматорів", "599", "PLN", ["4 години практики", "Основи безпеки", "Навчальні матеріали"], "Запитати дату"],
      ["Cinematic video", "Рекламний продакшн", "від 1499", "PLN", ["Зйомка протягом дня", "Монтаж і color grading", "Ліцензована музика"], "Замовити зйомку"],
      ["Action / FPV", "Екстремальні кадри", "Індивідуально", "", ["High-speed FPV", "Спеціалізовані дрони", "Сирий матеріал 6K"], "Зв'язатися"],
    ],
    contactTitle: ["Є питання?", "Поговорімо про політ."],
    contactText:
      "Хочете почати навчання або отримати кошторис зйомки? Заповніть форму, і ми повернемося з пропозицією протягом 24 годин.",
    form: ["Ім'я", "Email / Телефон", "Тема", "Повідомлення", "Надіслати запит", "Іван Петренко", "ivan@example.com", "Опишіть ваш проєкт..."],
    subjects: ["Навчання", "Зйомка", "Спорт", "Інше"],
    footer:
      "Ми захоплюємося технологіями і дивимося на світ з іншої перспективи.",
    footerNav: "Навігація",
    legal: "Документи",
  },
  en: {
    nav: ["Courses", "Filming", "Portfolio", "Pricing"],
    enroll: "Запишись зараз",
    chips: ["Beginner drone training", "Event filming", "FPV and cinematic shots"],
    heroTitle: ["Drone school and", "aerial filming"],
    heroText:
      "Learn to fly with confidence and safety, or hire us to create dynamic aerial footage for your event, brand, or adventure.",
    primaryCta: "Book training",
    secondaryCta: "View filming services",
    servicesEyebrow: "What we do",
    servicesTitle: "Complete aerial solutions",
    services: [
      ["school", "Drone training", "From first takeoff to advanced FPV maneuvers. We prepare pilots for exams and practical equipment use."],
      ["videocam", "Aerial filming", "Video production for business, real estate, and events. 4K/6K shots with precise control and stable images."],
      ["sports_motorsports", "Sport and outdoor", "Dynamic action footage. We specialize in high-speed FPV follows for motorcycles, cars, and extreme sports."],
    ],
    pilotTitle: ["A drone is not a toy.", "It is a tool for creating", "powerful shots."],
    pilotBadge: "Flight technique",
    benefits: [
      ["Certified instructors", "We train with real flight scenarios and practical decision-making."],
      ["Premium equipment", "We fly DJI, FPV, and cinematic-ready drone systems."],
      ["Safety first", "We teach flight planning and responsible airspace operations."],
      ["Cinematic shots", "We do not just fly: we compose image, motion, and emotion."],
    ],
    courseTitle: "Learn to fly a drone from zero",
    courseBullets: ["1000+ hours of practice", "Drone hardware and software setup", "Practical flights in open terrain", "Formalities and flight safety"],
    courseButton: "Check next flight",
    filmingTitle: "Drone filming for events, sport, and business",
    filmingText:
      "We deliver a perspective that makes your brand stand out, from calm real estate shots to extreme FPV chases.",
    tags: ["Weddings", "Events", "Motocross", "Real Estate", "TV Ads", "Music Videos"],
    portfolio: [
      ["Real Estate", "Modern Villa Aerial"],
      ["Events", "Wedding Palace Sunset"],
      ["Action", "Motocross Jump FPV"],
      ["Urban", "Night City Hyperlapse"],
      ["Automotive", "Mountain Pursuit"],
      ["Nature", "Tatra Peaks Cinematic"],
    ],
    processEyebrow: "Process",
    processTitle: "How it works",
    process: [
      ["contact_mail", "Contact", "We discuss your needs and project goals."],
      ["assignment", "Plan", "We analyze the location, zones, and build the shot plan."],
      ["flight_takeoff", "Flight / Production", "We fly and capture the material."],
      ["task_alt", "Delivery", "We deliver final files or a training certificate."],
    ],
    pricingEyebrow: "Pricing",
    pricingTitle: "Choose your package",
    popular: "Most popular",
    packages: [
      ["First flight", "Amateur course", "599", "PLN", ["4h practical class", "Safety basics", "Training materials"], "Ask for a date"],
      ["Cinematic video", "Commercial production", "from 1499", "PLN", ["Full-day session", "Editing and color grading", "Licensed music"], "Order production"],
      ["Action / FPV", "Extreme shots", "Custom", "", ["High-speed FPV chases", "Specialized drones", "Raw 6K footage"], "Contact us"],
    ],
    contactTitle: ["Have questions?", "Let's talk flight."],
    contactText:
      "Want to start training or price a film project? Fill the form and we will reply within 24 hours with a ready proposal.",
    form: ["Name", "Email / Phone", "Subject", "Message", "Send inquiry", "John Smith", "john@example.com", "Describe your project..."],
    subjects: ["Training", "Filming", "Sport", "Other"],
    footer:
      "We are technology enthusiasts who look at the world from a different perspective.",
    footerNav: "Navigation",
    legal: "Legal",
  },
};

function Icon({ name, className = "" }) {
  return <span className={`material-symbols-outlined ${className}`}>{name}</span>;
}

function LanguageSwitch({ lang, setLang }) {
  return (
    <div className="glass-card flex rounded-full p-1" aria-label="Language switcher">
      {["pl", "ua", "en"].map((code) => (
        <button
          key={code}
          onClick={() => setLang(code)}
          className={`h-8 min-w-10 rounded-full px-3 font-mono text-[10px] uppercase transition-all ${
            lang === code ? "bg-primary-container text-[#00363d]" : "text-on-surface-variant hover:text-primary-container"
          }`}
          aria-pressed={lang === code}
        >
          {code}
        </button>
      ))}
    </div>
  );
}

function App() {
  const [lang, setLang] = useState(() => localStorage.getItem("dap-lang") || "pl");
  const [menuOpen, setMenuOpen] = useState(false);
  const t = copy[lang];

  const navTargets = useMemo(() => ["courses", "filming", "portfolio", "pricing"], []);

  useEffect(() => {
    document.documentElement.lang = lang === "ua" ? "uk" : lang;
    localStorage.setItem("dap-lang", lang);
  }, [lang]);

  const jump = (id) => {
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (!element) return;
    const top = Math.max(0, element.getBoundingClientRect().top + window.scrollY - 92);
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <>
      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-surface/50 shadow-[0_8px_32px_rgba(0,229,255,0.08)] backdrop-blur-xl">
        <div className="mx-auto flex max-w-container-max items-center justify-between gap-4 px-margin-mobile py-4 md:px-margin-desktop">
          <button onClick={() => jump("top")} className="max-w-[220px] text-left font-sora text-base font-bold tracking-tight text-primary md:text-lg lg:max-w-none">
            Drone Academy Poland
          </button>
          <div className="hidden items-center gap-6 lg:flex">
            {t.nav.map((item, index) => (
              <button
                key={item}
                onClick={() => jump(navTargets[index])}
                className={`text-sm transition-colors hover:text-primary-container ${
                  index === 0 ? "border-b-2 border-primary pb-1 text-primary" : "text-on-surface-variant"
                }`}
              >
                {item}
              </button>
            ))}
            <LanguageSwitch lang={lang} setLang={setLang} />
            <button onClick={() => jump("contact")} className="rounded-full bg-primary-container px-6 py-2 font-hanken text-sm font-bold text-[#00363d] transition-transform hover:scale-105 active:scale-95">
              {t.enroll}
            </button>
          </div>
          <button className="text-primary lg:hidden" onClick={() => setMenuOpen((open) => !open)} aria-label="Menu">
            <Icon name={menuOpen ? "close" : "menu"} />
          </button>
        </div>
        {menuOpen && (
          <div className="border-t border-white/10 bg-surface-container-low px-margin-mobile py-5 lg:hidden">
            <div className="mb-4 flex flex-col gap-4">
              {t.nav.map((item, index) => (
                <button key={item} onClick={() => jump(navTargets[index])} className="text-left text-on-surface-variant">
                  {item}
                </button>
              ))}
            </div>
            <LanguageSwitch lang={lang} setLang={setLang} />
          </div>
        )}
      </nav>

      <header id="top" className="relative flex min-h-screen items-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img src={images.hero} alt="" className="h-full w-full object-cover opacity-60" />
          <div className="hero-gradient absolute inset-0" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-container-max px-margin-mobile md:px-margin-desktop">
          <div className="max-w-3xl">
            <div className="mb-8 flex flex-wrap gap-3">
              {t.chips.map((chip, index) => (
                <span key={chip} className="hud-chip animate-float px-4 py-1.5 font-mono text-xs uppercase tracking-[0.1em] text-primary-container" style={{ animationDelay: `${index * 0.5}s` }}>
                  {chip}
                </span>
              ))}
            </div>
            <h1 className="hero-title mb-6 font-sora font-bold text-on-surface">
              {t.heroTitle[0]} <span className="text-glow text-primary-container">{t.heroTitle[1]}</span>
            </h1>
            <p className="mb-10 max-w-xl text-lg leading-relaxed text-on-surface-variant">{t.heroText}</p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <button onClick={() => jump("contact")} className="rounded-full bg-primary-container px-8 py-4 text-sm font-bold uppercase tracking-widest text-[#00363d] transition-all hover:brightness-110 active:scale-95">
                {t.primaryCta}
              </button>
              <button onClick={() => jump("filming")} className="glass-card rounded-full px-8 py-4 text-sm font-bold uppercase tracking-widest text-primary transition-all hover:bg-white/5 active:scale-95">
                {t.secondaryCta}
              </button>
            </div>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-container-max px-margin-mobile py-section-gap md:px-margin-desktop" id="services">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-primary">{t.servicesEyebrow}</h2>
          <p className="font-sora text-3xl font-medium text-on-surface">{t.servicesTitle}</p>
        </div>
        <div className="grid grid-cols-1 gap-gutter md:grid-cols-2 lg:grid-cols-3">
          {t.services.map(([icon, title, text]) => (
            <div key={title} className="glass-card group min-w-0 p-10 transition-transform duration-500 hover:-translate-y-2">
              <Icon name={icon} className="mb-6 text-4xl text-primary-container" />
              <h3 className="mb-4 font-sora text-2xl font-medium text-on-surface">{title}</h3>
              <p className="mb-6 leading-relaxed text-on-surface-variant">{text}</p>
              <div className="h-1 w-12 bg-primary-container transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>
      </section>

      <section className="pilot-section relative py-section-gap" id="pilot">
        <div className="section-skew absolute inset-0 z-0 bg-surface-container-low" />
        <div className="pilot-grid section-skew-content relative z-10 mx-auto grid max-w-container-max grid-cols-1 items-center gap-12 px-margin-mobile md:px-margin-desktop lg:grid-cols-2 lg:gap-16">
          <div className="pilot-media relative mx-auto w-full max-w-[620px]">
            <img src={images.pilot} alt="" className="aspect-[4/3] w-full rounded-xl object-cover grayscale shadow-2xl transition-all duration-700 hover:grayscale-0" />
            <div className="pilot-badge glass-card absolute p-5 text-center">
              <div className="font-sora text-2xl font-bold text-primary-container">100%</div>
              <div className="font-mono text-[10px] uppercase tracking-[0.12em] text-on-surface-variant">{t.pilotBadge}</div>
            </div>
          </div>
          <div className="pilot-copy mx-auto w-full max-w-[660px] lg:mx-0">
            <h2 className="pilot-title mb-8 font-sora font-semibold leading-tight text-on-surface">
              {t.pilotTitle[0]}<br />
              {t.pilotTitle[1]} <span className="text-primary-container">{t.pilotTitle[2]}</span>
            </h2>
            <div className="pilot-benefits grid gap-5">
              {t.benefits.map(([title, text]) => (
                <div key={title} className="flex gap-4">
                  <Icon name="verified" className="mt-1 text-lg text-primary-container" />
                  <div>
                    <h3 className="font-sora font-semibold text-on-surface">{title}</h3>
                    <p className="text-sm leading-relaxed text-on-surface-variant">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="courses" className="mx-auto max-w-container-max px-margin-mobile py-section-gap md:px-margin-desktop">
        <div className="glass-card grid grid-cols-1 overflow-hidden rounded-xl lg:grid-cols-2">
          <div className="p-8 md:p-10 lg:p-16">
            <h2 className="mb-8 max-w-md font-sora text-4xl font-semibold leading-tight text-on-surface">{t.courseTitle}</h2>
            <ul className="mb-10 space-y-5">
              {t.courseBullets.map((item) => (
                <li key={item} className="flex items-center gap-3 text-on-surface-variant">
                  <Icon name="check_circle" className="text-base text-primary-container" />
                  {item}
                </li>
              ))}
            </ul>
            <button onClick={() => jump("contact")} className="rounded-full bg-primary-container px-8 py-3 text-xs font-bold uppercase tracking-widest text-[#00363d]">
              {t.courseButton}
            </button>
          </div>
          <div className="relative min-h-[360px]">
            <img src={images.course} alt="" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-surface-container/80 to-transparent" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-container-max px-margin-mobile py-section-gap md:px-margin-desktop" id="filming">
        <div className="mb-16 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <h2 className="mb-6 font-sora text-4xl font-semibold leading-tight text-on-surface md:text-5xl">{t.filmingTitle}</h2>
            <div className="flex flex-wrap gap-2">
              {t.tags.map((tag) => (
                <span key={tag} className="hud-chip px-3 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-primary-container">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <p className="max-w-sm leading-relaxed text-on-surface-variant">{t.filmingText}</p>
        </div>
        <div className="grid grid-cols-1 gap-gutter md:grid-cols-2 lg:grid-cols-3" id="portfolio">
          {t.portfolio.map(([type, title], index) => (
            <div key={title} className="glass-card group relative aspect-video overflow-hidden rounded-xl">
              <img src={images.portfolio[index]} alt="" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 flex items-center justify-center bg-surface/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <Icon name="play_circle" className="text-6xl text-primary-container" />
              </div>
              <div className="absolute bottom-4 left-4">
                <p className="font-mono text-xs uppercase tracking-[0.1em] text-primary-container">{type}</p>
                <p className="font-sora text-lg text-on-surface">{title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto my-section-gap max-w-container-max rounded-[40px] bg-surface-container-low px-margin-mobile py-section-gap md:px-margin-desktop">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-primary">{t.processEyebrow}</h2>
          <p className="font-sora text-3xl font-medium text-on-surface">{t.processTitle}</p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {t.process.map(([icon, title, text]) => (
            <div key={title} className="text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-primary-container/20 bg-surface-container-highest">
                <Icon name={icon} className="text-primary-container" />
              </div>
              <h3 className="mb-2 font-sora text-xl text-on-surface">{title}</h3>
              <p className="text-sm leading-relaxed text-on-surface-variant">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-container-max px-margin-mobile py-section-gap md:px-margin-desktop" id="pricing">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-primary">{t.pricingEyebrow}</h2>
          <p className="font-sora text-3xl font-medium text-on-surface">{t.pricingTitle}</p>
        </div>
        <div className="grid grid-cols-1 gap-gutter lg:grid-cols-3">
          {t.packages.map(([name, subtitle, price, currency, items, button], index) => (
            <div key={name} className={`glass-card relative flex min-w-0 flex-col items-center rounded-2xl p-8 text-center md:p-10 ${index === 1 ? "border-primary-container/30 lg:scale-105" : ""}`}>
              {index === 1 && <div className="absolute -top-4 rounded-full bg-primary-container px-4 py-1 font-mono text-[10px] uppercase tracking-[0.08em] text-[#00363d]">{t.popular}</div>}
              <h3 className="mb-2 font-sora text-2xl font-medium text-on-surface">{name}</h3>
              <p className="mb-8 font-mono text-xs uppercase tracking-[0.1em] text-primary-container">{subtitle}</p>
              <p className="mb-8 font-sora text-5xl font-bold text-on-surface">
                {price} {currency && <span className="text-lg">{currency}</span>}
              </p>
              <ul className="mb-10 w-full space-y-4 text-left text-on-surface-variant">
                {items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <Icon name="check_circle" className="text-sm text-primary-container" />
                    {item}
                  </li>
                ))}
              </ul>
              <button onClick={() => jump("contact")} className={`mt-auto w-full rounded-full py-3 transition-all ${index === 1 ? "bg-primary-container font-bold text-[#00363d] hover:brightness-110" : "border border-primary-container text-primary-container hover:bg-primary-container hover:text-[#00363d]"}`}>
                {button}
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-container-max px-margin-mobile py-section-gap md:px-margin-desktop" id="contact">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-section-gap">
          <div>
            <h2 className="mb-8 font-sora text-4xl font-semibold leading-tight text-on-surface md:text-5xl">
              {t.contactTitle[0]} <span className="text-primary-container">{t.contactTitle[1]}</span>
            </h2>
            <p className="mb-12 text-lg leading-relaxed text-on-surface-variant">{t.contactText}</p>
            <div className="space-y-6">
              <div className="flex items-center gap-4"><Icon name="mail" className="text-primary-container" /><span>kontakt@droneacademypoland.pl</span></div>
              <div className="flex items-center gap-4"><Icon name="call" className="text-primary-container" /><span>+48509161238</span></div>
              <div className="flex items-center gap-4"><Icon name="location_on" className="text-primary-container" /><span>Warszawa / Kraków / Cała Polska</span></div>
            </div>
          </div>
          <div className="glass-card rounded-3xl p-8 md:p-12">
            <form className="space-y-6" onSubmit={(event) => event.preventDefault()}>
              <Field label={t.form[0]} placeholder={t.form[5]} />
              <Field label={t.form[1]} placeholder={t.form[6]} />
              <div>
                <label className="mb-2 block font-mono text-[10px] uppercase tracking-[0.12em] text-on-surface-variant">{t.form[2]}</label>
                <select className="w-full border-0 border-b border-outline-variant bg-transparent py-3 text-on-surface transition-colors focus:border-primary-container focus:ring-0">
                  {t.subjects.map((subject) => <option key={subject} className="bg-surface">{subject}</option>)}
                </select>
              </div>
              <div>
                <label className="mb-2 block font-mono text-[10px] uppercase tracking-[0.12em] text-on-surface-variant">{t.form[3]}</label>
                <textarea className="w-full resize-none border-0 border-b border-outline-variant bg-transparent py-3 text-on-surface transition-colors placeholder:text-on-surface-variant/50 focus:border-primary-container focus:ring-0" placeholder={t.form[7]} rows="4" />
              </div>
              <button className="w-full rounded-full bg-primary-container py-4 text-sm font-bold uppercase tracking-widest text-[#00363d] transition-all hover:brightness-110 active:scale-95">
                {t.form[4]}
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="border-t border-outline-variant/20 bg-surface-container-lowest py-section-gap">
        <div className="mx-auto grid max-w-container-max grid-cols-1 gap-gutter px-margin-mobile sm:grid-cols-2 lg:grid-cols-4 md:px-margin-desktop">
          <div className="lg:col-span-2">
            <div className="mb-4 font-sora text-xl font-semibold text-on-surface">Drone Academy Poland</div>
            <p className="mb-8 max-w-sm text-on-surface-variant">© 2026 Drone Academy Poland. Precision in every frame. {t.footer}</p>
            <div className="flex gap-4">
              {["public", "share"].map((icon) => (
                <a key={icon} className="glass-card flex h-10 w-10 items-center justify-center rounded-full text-on-surface-variant transition-colors hover:text-primary-container" href="#">
                  <Icon name={icon} className="text-sm" />
                </a>
              ))}
            </div>
          </div>
          <FooterColumn title={t.footerNav} items={t.nav} />
          <FooterColumn title={t.legal} items={["Privacy Policy", "Terms of Service", "Contact", "Careers"]} />
        </div>
      </footer>
    </>
  );
}

function Field({ label, placeholder }) {
  return (
    <div>
      <label className="mb-2 block font-mono text-[10px] uppercase tracking-[0.12em] text-on-surface-variant">{label}</label>
      <input className="w-full border-0 border-b border-outline-variant bg-transparent py-3 text-on-surface transition-colors placeholder:text-on-surface-variant/50 focus:border-primary-container focus:ring-0" placeholder={placeholder} type="text" />
    </div>
  );
}

function FooterColumn({ title, items }) {
  return (
    <div>
      <h3 className="mb-6 font-mono text-xs uppercase tracking-[0.12em] text-on-surface">{title}</h3>
      <ul className="space-y-4">
        {items.map((item) => (
          <li key={item}>
            <a className="text-on-surface-variant transition-colors hover:text-primary-container" href="#">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
