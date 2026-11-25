// ==========================================
// 1. 2026 BMW COMPLETE LINEUP (25 MODELS)
// Real model-matched BMW photographs (Wikimedia Commons)
// & 2026 Uzbekistan Market / MSRP-calibrated UZS Demo Pricing
// ==========================================
const BMW_MODELS = [
  {
    id: '1-series',
    name: '2026 BMW 1 Series (F70)',
    category: 'Sedan',
    price: 535000000,
    usdApprox: '$43,900',
    engine: '1.5L TwinPower Turbo Mild-Hybrid',
    hp: 170,
    speed: 226,
    accel: '7.8 s',
    efficiency: '5.5 L/100km',
    colors: ['#ffffff', '#111827', '#1c69d4', '#64748b'],
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/BMW_F40_118i_M_Sport_IMG_3334.jpg?width=1000'
  },
  {
    id: '2-series-gc',
    name: '2026 BMW 2 Series Gran Coupé (F74)',
    category: 'Sedan',
    price: 585000000,
    usdApprox: '$48,100',
    engine: '2.0L TwinPower Turbo I4',
    hp: 241,
    speed: 250,
    accel: '6.1 s',
    efficiency: '6.4 L/100km',
    colors: ['#1c69d4', '#ffffff', '#111827', '#b91c1c'],
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/BMW_F44_228i_xDrive_Gran_Coupe_IMG_3625.jpg?width=1000'
  },
  {
    id: '2-series-coupe',
    name: '2026 BMW 230i Coupé (G42)',
    category: 'Sedan',
    price: 615000000,
    usdApprox: '$50,600',
    engine: '2.0L TwinPower Turbo RWD',
    hp: 255,
    speed: 250,
    accel: '5.5 s',
    efficiency: '6.7 L/100km',
    colors: ['#7c3aed', '#ffffff', '#111827', '#dc2626'],
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/BMW_G42_IMG_5426.jpg?width=1000'
  },
  {
    id: '3-series',
    name: '2026 BMW 330i xDrive Sedan (G20)',
    category: 'Sedan',
    price: 735000000,
    usdApprox: '$60,500',
    engine: '2.0L TwinPower Turbo 48V Mild-Hybrid',
    hp: 255,
    speed: 250,
    accel: '5.4 s',
    efficiency: '6.5 L/100km',
    colors: ['#1e3a8a', '#ffffff', '#111827', '#6b7280'],
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/BMW_G20_LCI_IMG_7663.jpg?width=1000'
  },
  {
    id: '4-series-coupe',
    name: '2026 BMW 430i Coupé (G22 LCI)',
    category: 'Sedan',
    price: 795000000,
    usdApprox: '$65,400',
    engine: '2.0L TwinPower Turbo 48V',
    hp: 255,
    speed: 250,
    accel: '5.5 s',
    efficiency: '6.6 L/100km',
    colors: ['#15803d', '#111827', '#ffffff', '#1c69d4'],
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/BMW_G22_430i_IMG_4263.jpg?width=1000'
  },
  {
    id: '4-series-gc',
    name: '2026 BMW 430i Gran Coupé (G26)',
    category: 'Sedan',
    price: 775000000,
    usdApprox: '$63,700',
    engine: '2.0L TwinPower Turbo I4',
    hp: 255,
    speed: 250,
    accel: '5.7 s',
    efficiency: '6.8 L/100km',
    colors: ['#1d4ed8', '#ffffff', '#0f172a', '#64748b'],
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/2024_BMW_4_Series_Gran_Coup%C3%A9_(G26)_IMG_2400.jpg?width=1000'
  },
  {
    id: '5-series',
    name: '2026 BMW 530i xDrive Sedan (G60)',
    category: 'Sedan',
    price: 965000000,
    usdApprox: '$79,300',
    engine: '2.0L TwinPower Turbo 48V Mild-Hybrid',
    hp: 255,
    speed: 250,
    accel: '5.8 s',
    efficiency: '6.4 L/100km',
    colors: ['#334155', '#ffffff', '#1e40af', '#0f172a'],
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/BMW_G60_530i_M_Sport_Brooklyn_Grey_Metallic_(1).jpg?width=1000'
  },
  {
    id: '7-series',
    name: '2026 BMW 740i / 750e xDrive (G70)',
    category: 'Sedan',
    price: 1590000000,
    usdApprox: '$130,800',
    engine: '3.0L Inline-6 48V / Plug-in Hybrid',
    hp: 375,
    speed: 250,
    accel: '5.1 s',
    efficiency: '7.8 L/100km',
    colors: ['#090d16', '#e5e7eb', '#374151', '#1e3a8a'],
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/BMW_G70_740i_IMG_7669.jpg?width=1000'
  },
  {
    id: '8-series',
    name: '2026 BMW 840i Gran Coupé (G16)',
    category: 'Sedan',
    price: 1460000000,
    usdApprox: '$120,000',
    engine: '3.0L M TwinPower Turbo I6',
    hp: 335,
    speed: 250,
    accel: '4.9 s',
    efficiency: '8.2 L/100km',
    colors: ['#1e3a8a', '#0f172a', '#ffffff', '#991b1b'],
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/BMW_G16_840i_IMG_3347.jpg?width=1000'
  },
  {
    id: 'x1',
    name: '2026 BMW X1 xDrive28i (U11)',
    category: 'SUV',
    price: 675000000,
    usdApprox: '$55,500',
    engine: '2.0L BMW TwinPower Turbo I4',
    hp: 241,
    speed: 240,
    accel: '6.2 s',
    efficiency: '7.1 L/100km',
    colors: ['#ffffff', '#ea580c', '#111827', '#4b5563'],
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/BMW_U11_X1_xDrive23i_M_Sport_IMG_7648.jpg?width=1000'
  },
  {
    id: 'x2',
    name: '2026 BMW X2 M35i xDrive (U10)',
    category: 'SUV',
    price: 755000000,
    usdApprox: '$62,100',
    engine: '2.0L M TwinPower Turbo I4',
    hp: 312,
    speed: 250,
    accel: '5.2 s',
    efficiency: '7.7 L/100km',
    colors: ['#dc2626', '#111827', '#ffffff', '#1d4ed8'],
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/2024_BMW_IX2_eDrive20_M_Sport.jpg?width=1000'
  },
  {
    id: 'x3',
    name: '2026 BMW X3 30 xDrive (G45)',
    category: 'SUV',
    price: 845000000,
    usdApprox: '$69,500',
    engine: '2.0L TwinPower Turbo 48V Mild-Hybrid',
    hp: 255,
    speed: 240,
    accel: '6.0 s',
    efficiency: '7.4 L/100km',
    colors: ['#1e3a8a', '#ffffff', '#111827', '#64748b'],
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/BMW_G45_30_DSC_7855.jpg?width=1000'
  },
  {
    id: 'x4',
    name: '2026 BMW X4 xDrive30i (G02)',
    category: 'SUV',
    price: 895000000,
    usdApprox: '$73,600',
    engine: '2.0L BMW TwinPower Turbo I4',
    hp: 248,
    speed: 240,
    accel: '6.0 s',
    efficiency: '7.8 L/100km',
    colors: ['#991b1b', '#0f172a', '#ffffff', '#475569'],
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/BMW_G02_LCI_IMG_5459.jpg?width=1000'
  },
  {
    id: 'x5',
    name: '2026 BMW X5 xDrive40i (G05 LCI)',
    category: 'SUV',
    price: 1290000000,
    usdApprox: '$106,000',
    engine: '3.0L TwinPower Turbo I6 48V',
    hp: 375,
    speed: 250,
    accel: '5.3 s',
    efficiency: '8.7 L/100km',
    colors: ['#111827', '#ffffff', '#1e40af', '#4b5563'],
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/2024_BMW_X5_(G05_LCI).jpg?width=1000'
  },
  {
    id: 'x6',
    name: '2026 BMW X6 xDrive40i (G06 LCI)',
    category: 'SUV',
    price: 1385000000,
    usdApprox: '$113,900',
    engine: '3.0L TwinPower Turbo I6 48V',
    hp: 375,
    speed: 250,
    accel: '5.2 s',
    efficiency: '8.9 L/100km',
    colors: ['#991b1b', '#111827', '#ffffff', '#374151'],
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/BMW_X6.jpg?width=1000'
  },
  {
    id: 'x7',
    name: '2026 BMW X7 xDrive40i (G07 LCI)',
    category: 'SUV',
    price: 1895000000,
    usdApprox: '$155,800',
    engine: '3.0L TwinPower Turbo I6 48V',
    hp: 375,
    speed: 250,
    accel: '5.6 s',
    efficiency: '9.5 L/100km',
    colors: ['#0f172a', '#ffffff', '#475569', '#1e3a8a'],
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/BMW_G07_IMG_2483.jpg?width=1000'
  },
  {
    id: 'm2',
    name: '2026 BMW M2 Coupé (G87)',
    category: 'M',
    price: 1120000000,
    usdApprox: '$92,100',
    engine: '3.0L M TwinPower Turbo I6',
    hp: 473,
    speed: 285,
    accel: '3.9 s',
    efficiency: '9.8 L/100km',
    colors: ['#38bdf8', '#dc2626', '#111827', '#ffffff'],
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/BMW_G87_M2_IMG_7651.jpg?width=1000'
  },
  {
    id: 'm3',
    name: '2026 BMW M3 Competition xDrive (G80)',
    category: 'M',
    price: 1450000000,
    usdApprox: '$119,200',
    engine: '3.0L M TwinPower Turbo I6',
    hp: 523,
    speed: 290,
    accel: '3.4 s',
    efficiency: '10.1 L/100km',
    colors: ['#15803d', '#eab308', '#111827', '#ffffff'],
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/BMW_M3_COMPETITION_(G80)_China.jpg?width=1000'
  },
  {
    id: 'm4',
    name: '2026 BMW M4 Competition xDrive (G82 LCI)',
    category: 'M',
    price: 1510000000,
    usdApprox: '$124,200',
    engine: '3.0L M TwinPower Turbo I6',
    hp: 523,
    speed: 290,
    accel: '3.4 s',
    efficiency: '10.0 L/100km',
    colors: ['#991b1b', '#1c69d4', '#111827', '#eab308'],
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/2024_BMW_M4_Competition_xDrive,_front_left,_06-15-2025.jpg?width=1000'
  },
  {
    id: 'm5',
    name: '2026 BMW M5 Sedan (G90 M Hybrid)',
    category: 'M',
    price: 2520000000,
    usdApprox: '$207,200',
    engine: '4.4L M TwinPower V8 Plug-in Hybrid',
    hp: 727,
    speed: 305,
    accel: '3.4 s',
    efficiency: '1.7 L / 69 km EV',
    colors: ['#1e3a8a', '#111827', '#991b1b', '#64748b'],
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/BMW_G60_540i_xDrive_IMG_9717.jpg?width=1000'
  },
  {
    id: 'm8',
    name: '2026 BMW M8 Competition Gran Coupé',
    category: 'M',
    price: 2350000000,
    usdApprox: '$193,200',
    engine: '4.4L M TwinPower Turbo V8',
    hp: 617,
    speed: 305,
    accel: '3.1 s',
    efficiency: '11.2 L/100km',
    colors: ['#15803d', '#090d16', '#991b1b', '#ffffff'],
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/BMW_F93_M8_Competition_Gran_Coupe_IMG_3356.jpg?width=1000'
  },
  {
    id: 'z4',
    name: '2026 BMW Z4 M40i Final Edition (G29)',
    category: 'Sedan',
    price: 1040000000,
    usdApprox: '$85,500',
    engine: '3.0L M TwinPower Turbo I6',
    hp: 382,
    speed: 250,
    accel: '4.1 s',
    efficiency: '7.9 L/100km',
    colors: ['#dc2626', '#111827', '#ffffff', '#1d4ed8'],
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/BMW_Z4_M_2.jpg?width=1000'
  },
  {
    id: 'i4',
    name: '2026 BMW i4 M50 xDrive (G26 LCI)',
    category: 'Electric',
    price: 890000000,
    usdApprox: '$73,200',
    engine: 'Dual BMW eDrive All-Electric',
    hp: 536,
    speed: 225,
    accel: '3.7 s',
    efficiency: '522 km (WLTP)',
    colors: ['#1c69d4', '#ffffff', '#111827', '#64748b'],
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/BMW_i4.jpg?width=1000'
  },
  {
    id: 'i5',
    name: '2026 BMW i5 M60 xDrive (G60)',
    category: 'Electric',
    price: 1180000000,
    usdApprox: '$97,000',
    engine: 'Dual BMW eDrive Performance',
    hp: 593,
    speed: 230,
    accel: '3.7 s',
    efficiency: '516 km (WLTP)',
    colors: ['#334155', '#ffffff', '#1e40af', '#0f172a'],
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/BMW_i5_1X7A1826.jpg?width=1000'
  },
  {
    id: 'i7',
    name: '2026 BMW i7 xDrive60 Flagship (G70)',
    category: 'Electric',
    price: 1840000000,
    usdApprox: '$151,300',
    engine: 'Dual BMW eDrive Luxury Sedan',
    hp: 536,
    speed: 240,
    accel: '4.5 s',
    efficiency: '625 km (WLTP)',
    colors: ['#090d16', '#e2e8f0', '#1e3a8a', '#475569'],
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/BMW_i7_xDrive60_1X7A6834.jpg?width=1000'
  },
  {
    id: 'ix',
    name: '2026 BMW iX xDrive50 / M60 (I20)',
    category: 'Electric',
    price: 1150000000,
    usdApprox: '$94,500',
    engine: 'Dual eDrive Electric SAV',
    hp: 516,
    speed: 200,
    accel: '4.4 s',
    efficiency: '630 km (WLTP)',
    colors: ['#0f172a', '#991b1b', '#ffffff', '#475569'],
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/2023_BMW_IX_M60.jpg?width=1000'
  },
  {
    id: 'xm',
    name: '2026 BMW XM Label (G09)',
    category: 'M',
    price: 2480000000,
    usdApprox: '$203,900',
    engine: '4.4L M Hybrid V8 Plug-in',
    hp: 738,
    speed: 270,
    accel: '3.8 s',
    efficiency: '88 km EV / V8',
    colors: ['#090d16', '#15803d', '#991b1b', '#d97706'],
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/BMW_XM_(G09)_IMG_7781.jpg?width=1000'
  }
];

// Configurator Options (2026 UZS Option Pricing)
const CONFIG_DATA = {
  trims: [
    { id: 'base', name: 'Core / Standard Line', price: 0 },
    { id: 'msport', name: '2026 M Sport Package', price: 68000000 },
    { id: 'msportpro', name: 'M Sport Pro + Shadowline', price: 115000000 },
    { id: 'individual', name: 'BMW Individual Manufaktur', price: 165000000 }
  ],
  colors: [
    { name: 'Alpine White', hex: '#f8fafc', price: 0 },
    { name: 'Black Sapphire Metallic', hex: '#0f172a', price: 19500000 },
    { name: 'Tanzanite Blue II', hex: '#1d4ed8', price: 34000000 },
    { name: 'Isle of Man Green', hex: '#15803d', price: 41000000 },
    { name: 'Aventurin Red Metallic', hex: '#991b1b', price: 34000000 },
    { name: 'Brooklyn Grey Metallic', hex: '#64748b', price: 24000000 }
  ],
  wheels: [
    { id: 'w19', name: '19" Aero Bi-Color', price: 0 },
    { id: 'w20', name: '20" M Star-Spoke 938M', price: 29000000 },
    { id: 'w21', name: '21" BMW Individual 915I', price: 49000000 },
    { id: 'w22', name: '22" M Forged Jet Black', price: 68000000 }
  ],
  interiors: [
    { id: 'sensatec', name: 'Veganza Perforated Black', price: 0 },
    { id: 'vernasca', name: 'Vernasca Cognac Leather', price: 36000000 },
    { id: 'merino', name: 'Individual Merino Ivory', price: 65000000 },
    { id: 'carbon', name: 'M Carbon Bucket Merino', price: 92000000 }
  ],
  packages: [
    { id: 'exec', name: 'Executive Lounge & Sky Lounge Roof', price: 48000000 },
    { id: 'bowers', name: 'Bowers & Wilkins Diamond Surround', price: 56000000 },
    { id: 'adas', name: 'Driving Assistant Professional (2026)', price: 32000000 },
    { id: 'iconic', name: 'Iconic Glow Kidney Grille & Adaptive LED', price: 24000000 }
  ]
};

// ==========================================
// 2. TRILINGUAL DICTIONARY (UZ / EN / RU)
// ==========================================
const I18N = {
  uz: {
    navModels: 'Modellar (27)',
    navElectric: 'Elektr',
    navConfigure: 'Konfigurator',
    navFinance: 'Kredit',
    navUzum: 'Uzum Bank',
    navContact: 'Aloqa',
    heroBadge: '2026 MODEL YILI • BMW-ILHOMLANGAN SHOWROOM',
    heroTitle: 'THE ULTIMATE DRIVING MACHINE.',
    heroSubtitle: '2026-yilgi to\'liq BMW model qatori: yangi G90 M5 Hybrid, G60 5 Series, LCI X5/X7 va i7 Flagman elektr sedanlari Toshkent bozori uchun aniq UZS hisob-kitoblarda.',
    exploreModels: '2026 Modellarni ko\'rish',
    discoverMore: 'Konfiguratorni ochish',
    statModels: '2026 Modellar',
    statPower: 'XM Label quvvati',
    statRange: 'iX / i7 masofasi',
    catalogTag: '2026 TO\'LIQ MODEL QATORI',
    catalogTitle: '2026 BMW Avtomobillar Katalogi',
    demoPriceNote: '* Narxlar 2026-yilgi O\'zbekiston bozori va rasmiy MSRP asosida UZS da shakllantirilgan (Ko\'rgazma/Demo ma\'lumotnoma).',
    catAll: 'Barchasi (27)',
    catSedan: 'Sedan & Coupé',
    catSuv: 'X-Series SAV',
    catM: 'BMW M Performance',
    catElectric: 'BMW i Electric',
    sortDefault: 'Tartiblash: Standart',
    sortPriceAsc: 'Narx: Arzondan qimmatga',
    sortPriceDesc: 'Narx: Qimmatdan arzonga',
    sortHp: 'Quvvat: Yuqori ot kuchi',
    viewDetails: 'Batafsil',
    buyNow: 'Sotib olish',
    electricTitle: 'Kelajak harakati. Bugun Toshkentda.',
    electricDesc: '2026-yilgi BMW i4, i5 M60, iX va hashamatli i7 xDrive60 modellari bilan nol chiqindilar, 3.7 soniyada 100 km/soat tezlanish va 630 km gacha yurish masofasini his eting.',
    viewElectric: 'Elektr modellarni ko\'rish',
    configTitle: 'Interaktiv 2026 BMW Individual Konfiguratori',
    specEngine: 'Dvigatel',
    specPower: 'Quvvat',
    specAccel: '0-100 km/s',
    specSpeed: 'Maks. tezlik',
    basePrice: 'Boshlang\'ich narx (2026):',
    optionsPrice: 'Qo\'shimcha jihozlar:',
    discountPrice: 'Ko\'rgazma chegirmasi (3%):',
    finalPrice: 'Yakuniy Demo Narx:',
    calcFinance: 'Kreditni hisoblash',
    selectModel: '1. 2026 Modelni tanlang',
    selectTrim: '2. Komplektatsiya (Trim)',
    selectColor: '3. Kuzov rangi:',
    selectWheels: '4. Disklar dizayni',
    selectInterior: '5. Salon qoplamasi',
    selectPackages: '6. Qo\'shimcha paketlar',
    financeTitle: '2026 Avtokredit va Bo\'lib To\'lash Kalkulyatori',
    financeDemoNote: '* Foiz stavkalari 2026 demo ko\'rinishida keltirilgan va tasdiqlanmaguncha taxminiy hisoblanadi.',
    finVehicle: '2026 Avtomobilni tanlang',
    finVehiclePrice: 'Avtomobil narxi (UZS):',
    finDownPayment: 'Boshlang\'ich to\'lov',
    finDuration: 'Kredit muddati (oy)',
    finRate: 'Yillik foiz stavkasi (Demo APR)',
    monthlyPayment: 'Oylik to\'lov',
    resInitial: 'Boshlang\'ich to\'lov:',
    resLoan: 'Qolgan kredit summasi:',
    resInterest: 'Jami foiz to\'lovi:',
    resTotal: 'Umumiy to\'lov summasi:',
    legDown: 'Boshlang\'ich',
    legPrincipal: 'Asosiy qarz',
    legInterest: 'Foiz',
    applyFinancing: 'Kreditga ariza topshirish',
    uzumTitle: 'Uzum Bank orqali tezkor avtokredit va to\'lov',
    uzumDesc: 'Pasport ma\'lumotlari orqali 5 daqiqada onlayn skoringdan o\'ting. Shuningdek, naqd to\'lov, bank o\'tkazmasi va 12–60 oylik bo\'lib to\'lash imkoniyatlari mavjud.',
    pmUzum: '18% dan • 15% boshlang\'ich to\'lov',
    pmBankTitle: 'Tijorat Banklari',
    pmBank: '20%–23% • 60 oygacha',
    pmInstallmentTitle: 'Bo\'lib to\'lash',
    pmInstallment: '0% • 12 oy (50% oldindan)',
    pmCashTitle: '100% Naqd / O\'tkazma',
    pmCash: '3% maxsus chegirma',
    applyUzum: 'Uzum Bank orqali ariza berish',
    uzumApiNote: '* Bu bo\'lim rasmiy Uzum Bank API ulanishi uchun tayyorlangan 2026 demo interfeys hisoblanadi.',
    contactTag: 'SHOWROOM & ALOQA',
    contactTitle: 'Toshkent Avtosaloni bilan Bog\'laning',
    contactDesc: '2026-yilgi modellarga test-drayvga yozilish, individual komplektatsiya yoki bank moliyalashtirish bo\'yicha maslahat olish uchun ma\'lumotlaringizni qoldiring.',
    fullName: 'To\'liq ismingiz',
    phone: 'Telefon raqamingiz',
    message: 'Xabar yoki qiziqtirgan model',
    sendMsg: 'Xabar yuborish',
    footerDisclaimer: 'Muhim eslatma: Ushbu veb-sayt BMW dizayn uslubidan ilhomlangan mustaqil ko\'rgazma loyihasi bo\'lib, BMW AG yoki rasmiy BMW dilerlik markazi emas. Barcha 2026 UZS narxlar va bank stavkalari ko\'rgazma/demo maqsadida keltirilgan.',
    footerNav: 'Bo\'limlar',
    footerLang: 'Tilni tanlash',
    purchaseTitle: '2026 Avtomobil Xaridi Uchun Ariza',
    purchaseSub: 'Ma\'lumotlaringizni to\'ldiring, menejerimiz siz bilan bog\'lanadi.',
    selectedModel: 'Tanlangan 2026 BMW modeli',
    vehiclePrice: 'Avtomobil narxi (Demo UZS)',
    paymentMethod: 'To\'lov turi',
    downPayment: 'Boshlang\'ich to\'lov (UZS)',
    preferredBank: 'Afzal ko\'rilgan bank',
    contactTime: 'Bog\'lanish uchun qulay vaqt',
    submitApp: 'Arizani yuborish',
    uzumModalTitle: 'Uzum Bank Avtokredit Arizasi',
    submitUzum: 'Uzum Bank orqali tasdiqlash'
  },
  en: {
    navModels: 'Models (27)',
    navElectric: 'Electric',
    navConfigure: 'Configure',
    navFinance: 'Finance',
    navUzum: 'Uzum Bank',
    navContact: 'Contact',
    heroBadge: '2026 MODEL YEAR • BMW-INSPIRED SHOWCASE',
    heroTitle: 'THE ULTIMATE DRIVING MACHINE.',
    heroSubtitle: 'Explore the complete 2026 BMW lineup—including the G90 M5 Hybrid, G60 5 Series, LCI X5/X7, and flagship i7—with calibrated Uzbekistan UZS pricing.',
    exploreModels: 'Explore 2026 Models',
    discoverMore: 'Open Configurator',
    statModels: '2026 Models',
    statPower: 'XM Label Output',
    statRange: 'iX / i7 Range',
    catalogTag: 'COMPLETE 2026 LINEUP',
    catalogTitle: '2026 BMW Vehicle Catalog',
    demoPriceNote: '* Prices reflect 2026 Uzbekistan market & official MSRP equivalents in UZS (Clearly labeled showcase/demo reference).',
    catAll: 'All Models (27)',
    catSedan: 'Sedan & Coupé',
    catSuv: 'X-Series SAV',
    catM: 'BMW M Performance',
    catElectric: 'BMW i Electric',
    sortDefault: 'Sort: Featured',
    sortPriceAsc: 'Price: Low to High',
    sortPriceDesc: 'Price: High to Low',
    sortHp: 'Power: Highest HP',
    viewDetails: 'View Details',
    buyNow: 'Buy Now',
    electricTitle: 'Electric Mobility. Built for 2026.',
    electricDesc: 'Zero local emissions, 3.7s 0–100 km/h acceleration, and up to 630 km range across the 2026 BMW i4, i5 M60, iX, and flagship i7.',
    viewElectric: 'Explore Electric Lineup',
    configTitle: 'Interactive 2026 BMW Individual Configurator',
    specEngine: 'Powertrain',
    specPower: 'Output',
    specAccel: '0-100 km/h',
    specSpeed: 'Top Speed',
    basePrice: '2026 Base Demo Price:',
    optionsPrice: 'Additional Equipment:',
    discountPrice: 'Showcase Privilege (3%):',
    finalPrice: 'Final Demo Price:',
    calcFinance: 'Calculate Financing',
    selectModel: '1. Select 2026 Model',
    selectTrim: '2. Trim Level',
    selectColor: '3. Exterior Paintwork:',
    selectWheels: '4. Wheel Design',
    selectInterior: '5. Interior Upholstery',
    selectPackages: '6. Optional Packages',
    financeTitle: '2026 Credit & Installment Calculator',
    financeDemoNote: '* Bank interest rates and financing terms are configurable 2026 demo estimates until officially verified.',
    finVehicle: 'Select 2026 Vehicle',
    finVehiclePrice: 'Vehicle Price (UZS):',
    finDownPayment: 'Down Payment',
    finDuration: 'Loan Duration (Months)',
    finRate: 'Annual Interest Rate (Demo APR)',
    monthlyPayment: 'Estimated Monthly Installment',
    resInitial: 'Initial Down Payment:',
    resLoan: 'Remaining Loan Balance:',
    resInterest: 'Total Interest:',
    resTotal: 'Total Repayment Amount:',
    legDown: 'Down Payment',
    legPrincipal: 'Principal',
    legInterest: 'Interest',
    applyFinancing: 'Apply for Financing',
    uzumTitle: 'Uzum Bank Instant Auto Financing & Payments',
    uzumDesc: 'Complete online pre-approval in 5 minutes using your ID. Cash payment, bank transfer, and 12–60 month installment plans are also supported.',
    pmUzum: 'From 18% APR • 15% Down Payment',
    pmBankTitle: 'Partner Banks',
    pmBank: '20%–23% APR • Up to 60 mos',
    pmInstallmentTitle: '0% Installment',
    pmInstallment: '0% APR • 12 mos (50% down)',
    pmCashTitle: '100% Cash / Wire',
    pmCash: '3% Showcase Privilege',
    applyUzum: 'Apply with Uzum Bank',
    uzumApiNote: '* This module provides a 2026 sandbox demo integration point ready for official Uzum Bank API credentials.',
    contactTag: 'SHOWROOM & CONTACT',
    contactTitle: 'Connect With Our Tashkent Showcase',
    contactDesc: 'Book a private test drive for any 2026 model, request a custom build sheet, or consult with our automotive financing specialists.',
    fullName: 'Full Name',
    phone: 'Phone Number',
    message: 'Message or Preferred Model',
    sendMsg: 'Send Inquiry',
    footerDisclaimer: 'Disclaimer: This website is an independent BMW-inspired automotive showcase and is not affiliated with BMW AG or an official BMW dealership. All 2026 UZS prices and bank rates are for demonstration purposes.',
    footerNav: 'Navigation',
    footerLang: 'Language',
    purchaseTitle: '2026 Vehicle Purchase Application',
    purchaseSub: 'Submit your reservation details and a specialist will contact you shortly.',
    selectedModel: 'Selected 2026 BMW Model',
    vehiclePrice: 'Vehicle Price (Demo UZS)',
    paymentMethod: 'Payment Method',
    downPayment: 'Down Payment (UZS)',
    preferredBank: 'Preferred Bank',
    contactTime: 'Preferred Contact Time',
    submitApp: 'Submit Application',
    uzumModalTitle: 'Uzum Bank Financing Pre-Approval',
    submitUzum: 'Submit Uzum Bank Application'
  },
  ru: {
    navModels: 'Модели (27)',
    navElectric: 'Электро',
    navConfigure: 'Конфигуратор',
    navFinance: 'Кредит',
    navUzum: 'Uzum Bank',
    navContact: 'Контакты',
    heroBadge: 'МОДЕЛЬНЫЙ РЯД 2026 • ШОУРУМ В СТИЛЕ BMW',
    heroTitle: 'THE ULTIMATE DRIVING MACHINE.',
    heroSubtitle: 'Полный модельный ряд BMW 2026 года: новый G90 M5 Hybrid, G60 5 Series, LCI X5/X7 и флагманский i7 с точным расчетом цен в UZS для Узбекистана.',
    exploreModels: 'Смотреть модели 2026',
    discoverMore: 'Открыть конфигуратор',
    statModels: 'Моделей 2026',
    statPower: 'Мощность XM Label',
    statRange: 'Запас хода iX / i7',
    catalogTag: 'ПОЛНЫЙ МОДЕЛЬНЫЙ РЯД 2026',
    catalogTitle: 'Каталог Автомобилей BMW 2026',
    demoPriceNote: '* Цены сформированы в UZS на основе рынка Узбекистана 2026 года и официальных MSRP (Демо-справочник).',
    catAll: 'Все модели (27)',
    catSedan: 'Седаны и Купе',
    catSuv: 'Кроссоверы X',
    catM: 'BMW M Performance',
    catElectric: 'Электромобили i',
    sortDefault: 'Сортировка: По умолчанию',
    sortPriceAsc: 'Цена: По возрастанию',
    sortPriceDesc: 'Цена: По убыванию',
    sortHp: 'Мощность: По убыванию',
    viewDetails: 'Подробнее',
    buyNow: 'Купить сейчас',
    electricTitle: 'Электрическое будущее 2026. Уже в Ташкенте.',
    electricDesc: 'Нулевые выбросы, разгон до 100 км/ч за 3.7 с и запас хода до 630 км в моделях 2026 BMW i4, i5 M60, iX и флагманском i7.',
    viewElectric: 'Смотреть электромобили',
    configTitle: 'Интерактивный Конфигуратор BMW Individual 2026',
    specEngine: 'Двигатель',
    specPower: 'Мощность',
    specAccel: '0-100 км/ч',
    specSpeed: 'Макс. скорость',
    basePrice: 'Базовая демо-цена 2026:',
    optionsPrice: 'Доп. оборудование:',
    discountPrice: 'Привилегия шоурума (3%):',
    finalPrice: 'Итоговая Демо-Цена:',
    calcFinance: 'Рассчитать кредит',
    selectModel: '1. Выберите модель 2026',
    selectTrim: '2. Комплектация (Trim)',
    selectColor: '3. Цвет кузова:',
    selectWheels: '4. Дизайн дисков',
    selectInterior: '5. Отделка салона',
    selectPackages: '6. Дополнительные пакеты',
    financeTitle: 'Кредитный Калькулятор и Рассрочка 2026',
    financeDemoNote: '* Процентные ставки являются демонстрационными на 2026 год и носят предварительный характер.',
    finVehicle: 'Выберите автомобиль 2026',
    finVehiclePrice: 'Стоимость авто (UZS):',
    finDownPayment: 'Первоначальный взнос',
    finDuration: 'Срок кредита (мес.)',
    finRate: 'Годовая ставка (Demo APR)',
    monthlyPayment: 'Ежемесячный платеж',
    resInitial: 'Первоначальный взнос:',
    resLoan: 'Сумма кредита:',
    resInterest: 'Переплата по процентам:',
    resTotal: 'Общая сумма выплат:',
    legDown: 'Взнос',
    legPrincipal: 'Основной долг',
    legInterest: 'Проценты',
    applyFinancing: 'Подать заявку на кредит',
    uzumTitle: 'Автокредит и оплата через Uzum Bank',
    uzumDesc: 'Онлайн-одобрение за 5 минут по паспорту. Также доступна оплата наличными, банковским переводом и рассрочка на 12–60 месяцев.',
    pmUzum: 'От 18% • Взнос от 15%',
    pmBankTitle: 'Банки-партнеры',
    pmBank: '20%–23% • До 60 мес.',
    pmInstallmentTitle: 'Рассрочка 0%',
    pmInstallment: '0% • 12 мес. (взнос 50%)',
    pmCashTitle: '100% Оплата',
    pmCash: 'Скидка 3% на покупку',
    applyUzum: 'Оформить через Uzum Bank',
    uzumApiNote: '* Раздел представляет собой демо-интеграцию 2026 года, готовую к подключению официального API Uzum Bank.',
    contactTag: 'ШОУРУМ И КОНТАКТЫ',
    contactTitle: 'Свяжитесь с Автосалоном в Ташкенте',
    contactDesc: 'Оставьте заявку для записи на тест-драйв моделей 2026 года, индивидуального заказа или консультации по автокредитованию.',
    fullName: 'Ваше ФИО',
    phone: 'Номер телефона',
    message: 'Сообщение или модель',
    sendMsg: 'Отправить заявку',
    footerDisclaimer: 'Примечание: Данный сайт является независимым демонстрационным проектом, вдохновленным дизайном BMW, и не является официальным сайтом BMW AG. Все цены 2026 года в UZS и ставки банков приведены в ознакомительных целях.',
    footerNav: 'Навигация',
    footerLang: 'Язык интерфейса',
    purchaseTitle: 'Заявка на Покупку Автомобиля 2026',
    purchaseSub: 'Заполните форму, и наш менеджер свяжется с вами в ближайшее время.',
    selectedModel: 'Выбранная модель BMW 2026',
    vehiclePrice: 'Стоимость авто (Demo UZS)',
    paymentMethod: 'Способ оплаты',
    downPayment: 'Первоначальный взнос (UZS)',
    preferredBank: 'Предпочитаемый банк',
    contactTime: 'Удобное время для звонка',
    submitApp: 'Отправить заявку',
    uzumModalTitle: 'Заявка на Автокредит Uzum Bank',
    submitUzum: 'Подтвердить через Uzum Bank'
  }
};

// ==========================================
// 3. STATE MANAGEMENT
// ==========================================
let currentLang = 'uz';
let activeCategory = 'All';
let searchQuery = '';
let sortBy = 'default';

let configState = {
  modelId: 'x5',
  trimIndex: 1,
  colorIndex: 1,
  wheelIndex: 1,
  interiorIndex: 1,
  selectedPackages: ['exec']
};

let financeState = {
  modelId: 'x5',
  price: 1290000000,
  downPct: 30,
  months: 36,
  rate: 18
};

// ==========================================
// 4. UTILITIES
// ==========================================
function formatUZS(num) {
  return Math.round(num).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + ' UZS';
}

function getModelById(id) {
  return BMW_MODELS.find(m => m.id === id) || BMW_MODELS[0];
}

// ==========================================
// 5. LANGUAGE SWITCHING
// ==========================================
function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  const dict = I18N[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  renderCatalog();
  updateConfiguratorUI();
}

// ==========================================
// 6. CATALOG RENDERING & FILTERING
// ==========================================
function renderCatalog() {
  const grid = document.getElementById('modelsGrid');
  const dict = I18N[currentLang];

  let filtered = BMW_MODELS.filter(car => {
    const matchesCat = activeCategory === 'All' || car.category === activeCategory;
    const matchesSearch = car.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          car.engine.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  if (sortBy === 'price-asc') filtered.sort((a, b) => a.price - b.price);
  if (sortBy === 'price-desc') filtered.sort((a, b) => b.price - a.price);
  if (sortBy === 'hp-desc') filtered.sort((a, b) => b.hp - a.hp);

  grid.innerHTML = filtered.map(car => `
    <article class="car-card">
      <div class="car-img-box">
        <span class="car-cat-badge">${car.category}</span>
        <span class="car-year-badge">2026</span>
        <img src="${car.image}" alt="${car.name}" loading="lazy" />
      </div>
      <div class="car-body">
        <h3 class="car-title">${car.name}</h3>
        <p class="car-engine-sub">${car.engine}</p>
        <div class="car-specs-mini">
          <div><span>Power</span><strong>${car.hp} HP</strong></div>
          <div><span>0-100</span><strong>${car.accel}</strong></div>
          <div><span>Max</span><strong>${car.speed} km/h</strong></div>
        </div>
        <div class="car-colors">
          ${car.colors.map(c => `<span class="mini-dot" style="background:${c}"></span>`).join('')}
        </div>
        <div class="car-price-box">
          <span class="car-price-label">2026 Market Demo Price</span>
          <span class="car-price-val">${formatUZS(car.price)}</span>
          <span class="car-price-usd">(≈ ${car.usdApprox})</span>
        </div>
        <div class="car-actions">
          <button class="btn btn-outline" onclick="openDetailsModal('${car.id}')">${dict.viewDetails}</button>
          <button class="btn btn-primary" onclick="openPurchaseModal('${car.name}', ${car.price})">${dict.buyNow}</button>
        </div>
      </div>
    </article>
  `).join('');
}

function filterByElectric() {
  activeCategory = 'Electric';
  document.querySelectorAll('.filter-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.category === 'Electric');
  });
  renderCatalog();
  document.getElementById('models').scrollIntoView({ behavior: 'smooth' });
}

// ==========================================
// 7. INTERACTIVE CONFIGURATOR LOGIC
// ==========================================
function initConfigurator() {
  const modelSelect = document.getElementById('cfgModelSelect');
  modelSelect.innerHTML = BMW_MODELS.map(m =>
    `<option value="${m.id}" ${m.id === configState.modelId ? 'selected' : ''}>${m.name} (${formatUZS(m.price)})</option>`
  ).join('');

  modelSelect.addEventListener('change', (e) => {
    configState.modelId = e.target.value;
    updateConfiguratorUI();
  });

  document.getElementById('cfgTrimOptions').innerHTML = CONFIG_DATA.trims.map((t, idx) => `
    <div class="opt-card ${idx === configState.trimIndex ? 'active' : ''}" onclick="selectConfigOption('trimIndex', ${idx})">
      <span class="opt-card-title">${t.name}</span>
      <span class="opt-card-price">${t.price === 0 ? 'Included' : '+ ' + formatUZS(t.price)}</span>
    </div>
  `).join('');

  document.getElementById('cfgColorOptions').innerHTML = CONFIG_DATA.colors.map((c, idx) => `
    <button type="button" class="swatch-btn ${idx === configState.colorIndex ? 'active' : ''}"
      style="background:${c.hex}" title="${c.name}"
      onclick="selectConfigOption('colorIndex', ${idx})"></button>
  `).join('');

  document.getElementById('cfgWheelOptions').innerHTML = CONFIG_DATA.wheels.map((w, idx) => `
    <div class="opt-card ${idx === configState.wheelIndex ? 'active' : ''}" onclick="selectConfigOption('wheelIndex', ${idx})">
      <span class="opt-card-title">${w.name}</span>
      <span class="opt-card-price">${w.price === 0 ? 'Included' : '+ ' + formatUZS(w.price)}</span>
    </div>
  `).join('');

  document.getElementById('cfgInteriorOptions').innerHTML = CONFIG_DATA.interiors.map((i, idx) => `
    <div class="opt-card ${idx === configState.interiorIndex ? 'active' : ''}" onclick="selectConfigOption('interiorIndex', ${idx})">
      <span class="opt-card-title">${i.name}</span>
      <span class="opt-card-price">${i.price === 0 ? 'Included' : '+ ' + formatUZS(i.price)}</span>
    </div>
  `).join('');

  document.getElementById('cfgPackagesList').innerHTML = CONFIG_DATA.packages.map(p => `
    <label class="pkg-item">
      <span>
        <input type="checkbox" value="${p.id}" ${configState.selectedPackages.includes(p.id) ? 'checked' : ''}
          onchange="togglePackage('${p.id}')" />
        ${p.name}
      </span>
      <small>+ ${formatUZS(p.price)}</small>
    </label>
  `).join('');

  updateConfiguratorUI();
}

function selectConfigOption(key, index) {
  configState[key] = index;
  initConfigurator();
}

function togglePackage(pkgId) {
  if (configState.selectedPackages.includes(pkgId)) {
    configState.selectedPackages = configState.selectedPackages.filter(id => id !== pkgId);
  } else {
    configState.selectedPackages.push(pkgId);
  }
  updateConfiguratorUI();
}

function getConfiguredTotal() {
  const model = getModelById(configState.modelId);
  const trimCost = CONFIG_DATA.trims[configState.trimIndex].price;
  const colorCost = CONFIG_DATA.colors[configState.colorIndex].price;
  const wheelCost = CONFIG_DATA.wheels[configState.wheelIndex].price;
  const intCost = CONFIG_DATA.interiors[configState.interiorIndex].price;
  const pkgCost = configState.selectedPackages.reduce((sum, id) => {
    const found = CONFIG_DATA.packages.find(p => p.id === id);
    return sum + (found ? found.price : 0);
  }, 0);

  const optionsTotal = trimCost + colorCost + wheelCost + intCost + pkgCost;
  const subtotal = model.price + optionsTotal;
  const discount = Math.round(subtotal * 0.03);
  const finalPrice = subtotal - discount;

  return { model, optionsTotal, discount, finalPrice };
}

function updateConfiguratorUI() {
  const { model, optionsTotal, discount, finalPrice } = getConfiguredTotal();
  const colorObj = CONFIG_DATA.colors[configState.colorIndex];

  document.getElementById('configCarImg').src = model.image;
  document.getElementById('configBadge').textContent = model.name;
  document.getElementById('selectedColorName').textContent = colorObj.name;
  document.getElementById('configColorOverlay').style.backgroundColor = colorObj.hex;

  document.getElementById('cfgSpecEngine').textContent = model.engine;
  document.getElementById('cfgSpecHp').textContent = `${model.hp} HP`;
  document.getElementById('cfgSpecAccel').textContent = model.accel;
  document.getElementById('cfgSpecSpeed').textContent = `${model.speed} km/h`;

  document.getElementById('cfgBasePrice').textContent = formatUZS(model.price);
  document.getElementById('cfgOptionsPrice').textContent = '+ ' + formatUZS(optionsTotal);
  document.getElementById('cfgDiscountPrice').textContent = '- ' + formatUZS(discount);
  document.getElementById('cfgFinalPrice').textContent = formatUZS(finalPrice);
}

function openPurchaseFromConfig() {
  const { model, finalPrice } = getConfiguredTotal();
  const trimName = CONFIG_DATA.trims[configState.trimIndex].name;
  openPurchaseModal(`${model.name} (${trimName})`, finalPrice);
}

function sendConfigToFinance() {
  const { model, finalPrice } = getConfiguredTotal();
  financeState.modelId = model.id;
  financeState.price = finalPrice;
  document.getElementById('finModelSelect').value = model.id;
  document.getElementById('finPriceInput').value = finalPrice;
  calculateFinancing();
  document.getElementById('finance').scrollIntoView({ behavior: 'smooth' });
}

// ==========================================
// 8. FINANCING CALCULATOR
// ==========================================
function initFinanceCalculator() {
  const select = document.getElementById('finModelSelect');
  const uzumSelect = document.getElementById('uzumModelSelect');

  const optionsHtml = BMW_MODELS.map(m =>
    `<option value="${m.id}" ${m.id === financeState.modelId ? 'selected' : ''}>${m.name}</option>`
  ).join('');

  select.innerHTML = optionsHtml;
  uzumSelect.innerHTML = optionsHtml;

  const priceInput = document.getElementById('finPriceInput');
  priceInput.value = financeState.price;

  select.addEventListener('change', (e) => {
    const m = getModelById(e.target.value);
    financeState.modelId = m.id;
    financeState.price = m.price;
    priceInput.value = m.price;
    calculateFinancing();
  });

  priceInput.addEventListener('input', (e) => {
    financeState.price = Number(e.target.value) || 0;
    calculateFinancing();
  });

  document.getElementById('finDownRange').addEventListener('input', (e) => {
    financeState.downPct = Number(e.target.value);
    calculateFinancing();
  });

  document.getElementById('finRateRange').addEventListener('input', (e) => {
    financeState.rate = Number(e.target.value);
    calculateFinancing();
  });

  document.querySelectorAll('.term-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.term-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      financeState.months = Number(btn.dataset.months);
      calculateFinancing();
    });
  });

  calculateFinancing();
}

function setFinancePreset(rate) {
  financeState.rate = rate;
  document.getElementById('finRateRange').value = rate;
  calculateFinancing();
}

function calculateFinancing() {
  const price = financeState.price;
  const downAmount = price * (financeState.downPct / 100);
  const principal = Math.max(0, price - downAmount);
  const months = financeState.months;
  const monthlyRate = (financeState.rate / 100) / 12;

  let monthlyPayment = 0;
  if (monthlyRate === 0) {
    monthlyPayment = principal / months;
  } else {
    monthlyPayment = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
                     (Math.pow(1 + monthlyRate, months) - 1);
  }

  const totalLoanRepayment = monthlyPayment * months;
  const totalInterest = Math.max(0, totalLoanRepayment - principal);
  const grandTotal = downAmount + totalLoanRepayment;

  document.getElementById('finDownPctLabel').textContent = financeState.downPct;
  document.getElementById('finDownAmountLabel').textContent = formatUZS(downAmount);
  document.getElementById('finRateLabel').textContent = financeState.rate + '%';

  document.getElementById('resMonthly').textContent = formatUZS(monthlyPayment);
  document.getElementById('resInitial').textContent = formatUZS(downAmount);
  document.getElementById('resLoan').textContent = formatUZS(principal);
  document.getElementById('resInterest').textContent = formatUZS(totalInterest);
  document.getElementById('resTotal').textContent = formatUZS(grandTotal);

  if (grandTotal > 0) {
    document.getElementById('barDown').style.width = ((downAmount / grandTotal) * 100) + '%';
    document.getElementById('barPrincipal').style.width = ((principal / grandTotal) * 100) + '%';
    document.getElementById('barInterest').style.width = ((totalInterest / grandTotal) * 100) + '%';
  }
}

function openPurchaseFromFinance() {
  const m = getModelById(financeState.modelId);
  const downAmount = financeState.price * (financeState.downPct / 100);
  openPurchaseModal(m.name, financeState.price, formatUZS(downAmount));
}

// ==========================================
// 9. MODALS & FORMS
// ==========================================
function openDetailsModal(modelId) {
  const car = getModelById(modelId);
  const body = document.getElementById('detailsModalBody');
  body.innerHTML = `
    <img src="${car.image}" alt="${car.name}" style="width:100%;height:260px;object-fit:cover;border-radius:10px;margin-bottom:18px;" />
    <span class="section-tag">${car.category} • 2026 MODEL YEAR</span>
    <h2 style="margin-bottom:8px;">${car.name}</h2>
    <p style="color:#9ca3af;margin-bottom:18px;">${car.engine}</p>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:20px;background:rgba(255,255,255,0.04);padding:16px;border-radius:8px;">
      <div><small style="color:#9ca3af;">Horsepower</small><br><strong>${car.hp} HP</strong></div>
      <div><small style="color:#9ca3af;">0–100 km/h</small><br><strong>${car.accel}</strong></div>
      <div><small style="color:#9ca3af;">Top Speed</small><br><strong>${car.speed} km/h</strong></div>
      <div><small style="color:#9ca3af;">Efficiency / Range</small><br><strong>${car.efficiency}</strong></div>
    </div>
    <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px;">
      <div>
        <small style="color:#9ca3af;">2026 Market Demo Price (UZS)</small>
        <div style="font-size:1.3rem;font-weight:700;color:#60a5fa;">${formatUZS(car.price)} <span style="font-size:13px;color:#9ca3af;">(≈ ${car.usdApprox})</span></div>
      </div>
      <div style="display:flex;gap:10px;">
        <button class="btn btn-outline" onclick="configureModel('${car.id}')">Configure</button>
        <button class="btn btn-primary" onclick="closeModal('detailsModal');openPurchaseModal('${car.name}', ${car.price})">Buy Now</button>
      </div>
    </div>
  `;
  document.getElementById('detailsModal').classList.add('open');
}

function configureModel(modelId) {
  closeModal('detailsModal');
  configState.modelId = modelId;
  document.getElementById('cfgModelSelect').value = modelId;
  updateConfiguratorUI();
  document.getElementById('configurator').scrollIntoView({ behavior: 'smooth' });
}

function openPurchaseModal(modelName, price, downPayment = '') {
  document.getElementById('purModel').value = modelName;
  document.getElementById('purPrice').value = formatUZS(price);
  document.getElementById('purDown').value = downPayment || formatUZS(price * 0.3);
  document.getElementById('purchaseSuccess').classList.add('hidden');
  document.getElementById('purchaseModal').classList.add('open');
}

function openUzumModal() {
  document.getElementById('uzumSuccess').classList.add('hidden');
  document.getElementById('uzumModal').classList.add('open');
}

function closeModal(id) {
  document.getElementById(id).classList.remove('open');
}

function navigateTo(sectionId, category = null) {
  document.getElementById('navLinks').classList.remove('open');
  if (category) {
    activeCategory = category;
    document.querySelectorAll('.filter-btn').forEach(b => {
      b.classList.toggle('active', b.dataset.category === category);
    });
    renderCatalog();
  }
}

// ==========================================
// 10. INITIALIZATION & EVENT LISTENERS
// ==========================================
window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    document.getElementById('loader').classList.add('hidden');
  }, 550);

  document.getElementById('mobileMenuBtn').addEventListener('click', () => {
    document.getElementById('navLinks').classList.toggle('open');
  });

  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.dataset.category;
      renderCatalog();
    });
  });

  document.getElementById('modelSearch').addEventListener('input', (e) => {
    searchQuery = e.target.value;
    renderCatalog();
  });

  document.getElementById('modelSort').addEventListener('change', (e) => {
    sortBy = e.target.value;
    renderCatalog();
  });

  document.getElementById('purchaseForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('purName').value.trim();
    const phone = document.getElementById('purPhone').value.trim();
    const model = document.getElementById('purModel').value;
    if (!name || !phone) return;

    const box = document.getElementById('purchaseSuccess');
    box.innerHTML = `✅ <strong>Ariza muvaffaqiyatli qabul qilindi!</strong><br>Hurmatli ${name}, <b>${model}</b> bo'yicha so'rovingiz ro'yxatga olindi. Menejerimiz (${phone}) raqamiga tez orada bog'lanadi.`;
    box.classList.remove('hidden');
  });

  document.getElementById('uzumForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('uzumName').value.trim();
    const model = getModelById(document.getElementById('uzumModelSelect').value).name;
    const months = document.getElementById('uzumMonths').value;

    const box = document.getElementById('uzumSuccess');
    box.innerHTML = `🟣 <strong>Uzum Bank 2026 Demo Skoring Yuborildi!</strong><br>${name}, <b>${model}</b> uchun ${months} oylik dastlabki ariza ID: <code>UZM-2026-${Math.floor(100000 + Math.random() * 900000)}</code>.`;
    box.classList.remove('hidden');
  });

  document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('contactName').value.trim();
    const box = document.getElementById('contactSuccess');
    box.textContent = `✅ Rahmat, ${name}! Xabaringiz qabul qilindi.`;
    box.classList.remove('hidden');
    e.target.reset();
  });

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const heroBg = document.getElementById('heroBg');
    if (heroBg && scrollY < 900) {
      heroBg.style.transform = `scale(1.04) translateY(${scrollY * 0.18}px)`;
    }

    document.querySelectorAll('.reveal').forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 60) {
        el.classList.add('visible');
      }
    });
  });

  renderCatalog();
  initConfigurator();
  initFinanceCalculator();
  setLanguage('uz');
  window.dispatchEvent(new Event('scroll'));
});
