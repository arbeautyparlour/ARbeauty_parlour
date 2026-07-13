import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'hi';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.gallery': 'Gallery',
    'nav.contact': 'Contact',
    'nav.bookNow': 'Book Now',
    'nav.bookAppointment': 'Book Appointment',

    // Hero
    'hero.luxuryExperience': 'Luxury Salon Experience',
    'hero.mainHeading': 'Reveal Your True Radiance',
    'hero.subtext': 'Indulge in couture bridal styling, restorative skin rituals, and premium beauty services designed exclusively for you by Aaliya Shaikh.',
    'hero.exploreServices': 'Explore Services',
    'hero.bookNow': 'Book Appointment',
    'hero.premiumProducts': 'Premium Products',
    'hero.yearsPractice': 'Years Practice',
    'hero.happyGuests': 'Happy Guests',

    // HomeFeatures (HomeSections.tsx)
    'features.title': 'Our Luxury Features',
    'features.satisfactionTitle': '100% Client Satisfaction',
    'features.satisfactionDesc': 'We personalize every haircut, bridal glow, and beauty therapy to reflect your natural structure.',
    'features.hygieneTitle': 'Clean & Sanitized Space',
    'features.hygieneDesc': 'Disinfected seats, sterile tools, and single-use kits for pristine luxury.',
    'features.productsTitle': 'Top Brand Products',
    'features.productsDesc': 'Only 100% genuine luxury products touch your skin to guarantee a safe, long-lasting glow.',

    // HomeFeaturedServices
    'featured.title': 'Signature Offerings',
    'featured.subtext': 'Handpicked premium treatments loved by our loyal guests.',
    'featured.viewAll': 'View All Services',

    // HomeTestimonials
    'testimonials.title': 'Guest Confessions',
    'testimonials.subtext': 'Read honest feedback from ladies who experienced the transformative touch of Aaliya Shaikh.',

    // HomeLocation
    'location.title': 'Visit Our Sanctuary',
    'location.address': 'Location',
    'location.addressVal': 'Jamil Colony, Amravati, Maharashtra',
    'location.hours': 'Working Hours',
    'location.hoursVal': 'Mon - Sun: 10:00 AM - 8:00 PM',
    'location.interactiveNote': 'Interactive high-fidelity map locator. Touch to get real-time directions on your device.',
    'location.getDirections': 'Get Directions',

    // About
    'about.meetFounder': 'Meet the Founder',
    'about.title': 'Aaliya Shaikh & AR Beauty Parlour',
    'about.desc1': 'At AR Beauty Parlour, we believe beauty is an intimate journey of self-love and restoration. Nestled in the heart of Amravati, our parlour has spent years defining luxury salon care through exceptional, customer-focused service.',
    'about.desc2': 'Founded by expert master-stylist Aaliya Shaikh, we specialize in high-end Bridal Makeup Couture, signature corrective facials, and customized hair therapy designed to restore and elevate your natural canvas.',
    'about.quote': '"Our philosophy is simple: we do not mask your characteristics; we polish your authentic radiance to shine from within."',
    'about.luxurySanctuary': 'Luxury Sanctuary',
    'about.qualityAmbiance': 'Uncompromising Quality & Serene Ambiance',
    'about.badge1Title': 'Expert Artistry',
    'about.badge1Desc': 'Led by Aaliya Shaikh, specialized in luxury couture bridal transformations and skin restoration.',
    'about.badge2Title': 'Pristine Hygiene',
    'about.badge2Desc': 'Medical-grade sanitization standards across all beauty beds, tools, and custom treatments.',
    'about.badge3Title': 'Tailored Luxury',
    'about.badge3Desc': 'We analyze your skin and hair type to formulate bespoke rituals matching your unique glow.',

    // Services
    'services.title': 'Bespoke Beauty Menu',
    'services.subtext': 'Explore our masterfully curated selection of high-end salon therapies. Every treatment is custom-suited to unleash your inner light.',
    'services.selectHelp': 'Click the chevron on any service to instantly load it into the booking engine.',
    'services.filterAll': 'All',
    'services.filterHair': 'Hair',
    'services.filterSkin': 'Skin & Face',
    'services.filterBody': 'Body Care',
    'services.filterBridal': 'Bridal',

    // Gallery
    'gallery.title': 'Our Work',
    'gallery.subtitle': 'Aesthetic Transformations',
    'gallery.desc': 'Browse genuine, professional results of our luxury makeup, signature hair stylings, custom glow rituals, and relaxing nail therapies.',

    // Booking
    'booking.title': 'Bespoke Booking Desk',
    'booking.subtitle': 'Schedule Your Experience',
    'booking.desc': 'Indulge in tailored pampering. Select your premium treatment, reserve a pristine slot, and experience the signature artistry of Aaliya Shaikh.',
    'booking.selectLabel': 'Select Premium Treatment',
    'booking.nameLabel': 'Full Name',
    'booking.phoneLabel': 'Phone Number',
    'booking.dateLabel': 'Preferred Date',
    'booking.timeLabel': 'Preferred Time Slot',
    'booking.notesLabel': 'Special Requests / Notes',
    'booking.submitBtn': 'Secure Appointment Slot',
    'booking.successTitle': 'Appointment Secured!',
    'booking.successDesc': 'Your luxury treatment slot is reserved. We will reach out shortly to finalize details.',
    'booking.successDetails': 'Reservation Details:',
    'booking.successService': 'Service:',
    'booking.successDate': 'Date:',
    'booking.successTime': 'Time:',
    'booking.successClient': 'Client Name:',
    'booking.closeBtn': 'Return to Services',
    'booking.formHelp': 'Need custom counseling? Specify it in the special requests.',

    // Contact
    'contact.title': 'Contact Our Lounge',
    'contact.subtitle': 'Connect with Aaliya',
    'contact.desc': 'Whether booking custom bridal counseling, asking about customized beauty programs, or locating our premium studio, we are here to welcome you.',
    'contact.callTitle': 'Call Support',
    'contact.callDesc': 'Immediate booking inquiries & expert consultations.',
    'contact.ownerLabel': 'Managed by',
    'contact.instagram': 'Instagram',
    'contact.igDesc': 'Browse latest transformations and bridal styles.',
    'contact.emailTitle': 'Email Studio',
    'contact.emailDesc': 'For corporate inquiries or bespoke bridal proposals.',
    'contact.locationTitle': 'Our Sanctuary',
    'contact.locationDesc': 'Located at Jamil Colony, Amravati. For specialized bridal counseling or pre-visit setup instructions, call or book ahead.',

    // Dynamic service categories
    'cat.brow-lip': 'Brow & Lip Shaping',
    'cat.waxing': 'Waxing Rituals',
    'cat.bleach-glow': 'Bleach & Glow',
    'cat.signature-facials': 'Signature Facials',
    'cat.deep-cleanups': 'Deep Cleanups',
    'cat.body-treatments': 'Body Treatments',
    'cat.hair-cuts': 'Signature Hair Cuts',
    'cat.hair-therapy': 'Hair Therapy & Care',
    'cat.hair-colour': 'Hair Colour Studio',
    'cat.bridal-makeup': 'Bridal Makeup Couture',

    // Dynamic service taglines
    'tag.brow-lip': 'Perfectly defined, effortlessly elegant',
    'tag.waxing': 'Silky smooth skin, the way it should feel',
    'tag.bleach-glow': 'Instant radiance, visible glow',
    'tag.signature-facials': 'Nourish. Restore. Glow from within.',
    'tag.deep-cleanups': 'Fresh, clear, radiant skin in minutes',
    'tag.body-treatments': 'Complete pampering, head to toe',
    'tag.hair-cuts': 'Style that speaks for you',
    'tag.hair-therapy': 'Revive. Repair. Restore your crown.',
    'tag.hair-colour': 'Bold shades, lasting shine',
    'tag.bridal-makeup': 'Your special day, flawlessly captured',

    // Dynamic service names
    'svc.Eyebrow Shaping': 'Eyebrow Shaping',
    'svc.Upper Lip Threading': 'Upper Lip Threading',
    'svc.Full Arms': 'Full Arms',
    'svc.Half Leg': 'Half Leg',
    'svc.Underarms': 'Underarms',
    'svc.Full Body Waxing': 'Full Body Waxing',
    'svc.VLCC Bleach': 'VLCC Bleach',
    'svc.FYC Bleach': 'FYC Bleach',
    'svc.Oxy Bleach': 'Oxy Bleach',
    'svc.Golden Glow Bleach': 'Golden Glow Bleach',
    'svc.Fruit Facial': 'Fruit Facial',
    'svc.Gold Facial': 'Gold Facial',
    'svc.Diamond Facial': 'Diamond Facial',
    'svc.Ozone Therapy Facial': 'Ozone Therapy Facial',
    'svc.Corian Facial': 'Corian Facial',
    'svc.Aroma Therapy Facial': 'Aroma Therapy Facial',
    'svc.Bridal Glow Facial': 'Bridal Glow Facial',
    'svc.Dr. Russian Cleanup': 'Dr. Russian Cleanup',
    'svc.Fruit Cleanup': 'Fruit Cleanup',
    'svc.Manicure & Pedicure': 'Manicure & Pedicure',
    'svc.Full Body Spa': 'Full Body Spa',
    'svc.Body Polishing': 'Body Polishing',
    'svc.Straight Cut': 'Straight Cut',
    'svc.U-Shape Cut': 'U-Shape Cut',
    'svc.V-Shape Cut': 'V-Shape Cut',
    'svc.Layer Cut': 'Layer Cut',
    'svc.Luxury Hair Spa': 'Luxury Hair Spa',
    'svc.Hair Oiling Therapy': 'Hair Oiling Therapy',
    'svc.Dandruff Control Spa': 'Dandruff Control Spa',
    'svc.Hair Straightening': 'Hair Straightening',
    'svc.Hair Curling': 'Hair Curling',
    'svc.Black': 'Black',
    'svc.Brown': 'Brown',
    'svc.Golden': 'Golden',
    'svc.Bridal Makeup': 'Bridal Makeup',
    'svc.Reception Look': 'Reception Look',
    'svc.Engagement Glam': 'Engagement Glam',
    'svc.Side Sister Makeup': 'Side Sister Makeup',

    // Gallery item titles
    'gal.g-1': 'Flawless Bridal Eye Makeup & Base',
    'gal.g-2': 'Bridal Lehenga Draping & Styling',
    'gal.g-3': 'Glossy Silk-Smoothing Hair Transformation',
    'gal.g-4': 'Intricate Wedding Bun with Fresh Flowers',
    'gal.g-5': 'Deep Hydration Aroma Therapy Facial',
    'gal.g-6': 'Premium Jade-Roller Skin Infusion',
    'gal.g-7': 'Precision Gel Polish & Shaping',
    'gal.g-8': 'Detox Rose-Petal Foot Spa & Scrub',
    'gal.g-9': 'Exquisite Intricate Bridal Henna',

    'gal.cat.Bridal Couture': 'Bridal Couture',
    'gal.cat.Hair Styling': 'Hair Styling',
    'gal.cat.Skin Rituals': 'Skin Rituals',
    'gal.cat.Nails & Spa': 'Nails & Spa',
    'gal.cat.All': 'All'
  },
  hi: {
    // Navbar
    'nav.home': 'होम',
    'nav.about': 'हमारे बारे में',
    'nav.services': 'सेवाएँ',
    'nav.gallery': 'गैलरी',
    'nav.contact': 'संपर्क',
    'nav.bookNow': 'अभी बुक करें',
    'nav.bookAppointment': 'अपॉइंटमेंट बुक करें',

    // Hero
    'hero.luxuryExperience': 'लक्ज़री सैलून अनुभव',
    'hero.mainHeading': 'अपनी असली चमक को निखारें',
    'hero.subtext': 'आलिया शेख द्वारा विशेष रूप से आपके लिए तैयार किए गए लक्ज़री ब्राइडल स्टाइलिंग, त्वचा उपचार और प्रीमियम सौंदर्य सेवाओं का आनंद लें।',
    'hero.exploreServices': 'सेवाएं देखें',
    'hero.bookNow': 'अपॉइंटमेंट बुक करें',
    'hero.premiumProducts': 'प्रीमियम उत्पाद',
    'hero.yearsPractice': 'वर्षों का अनुभव',
    'hero.happyGuests': 'खुश ग्राहक',

    // HomeFeatures (HomeSections.tsx)
    'features.title': 'हमारी मुख्य विशेषताएं',
    'features.satisfactionTitle': '100% ग्राहक संतुष्टि',
    'features.satisfactionDesc': 'हम आपकी प्राकृतिक सुंदरता को निखारने के लिए हर हेयरकट, ब्राइडल ग्लो और ब्यूटी थेरेपी को कस्टमाइज़ करते हैं।',
    'features.hygieneTitle': 'साफ और स्वच्छ वातावरण',
    'features.hygieneDesc': 'पूर्ण स्वच्छता के लिए कीटाणुरहित सीटें, जीवाणुरहित उपकरण और सिंगल-यूज़ किट।',
    'features.productsTitle': 'टॉप ब्रांड उत्पाद',
    'features.productsDesc': 'सुरक्षित और लंबे समय तक चमक के लिए केवल 100% प्रामाणिक लक्ज़री उत्पाद आपकी त्वचा को छूते हैं।',

    // HomeFeaturedServices
    'featured.title': 'हमारे विशेष उपचार',
    'featured.subtext': 'हमारे वफादार ग्राहकों द्वारा पसंद किए गए चुनिंदा प्रीमियम उपचार।',
    'featured.viewAll': 'सभी सेवाएँ देखें',

    // HomeTestimonials
    'testimonials.title': 'ग्राहकों के विचार',
    'testimonials.subtext': 'उन महिलाओं से ईमानदार समीक्षाएं पढ़ें जिन्होंने आलिया शेख के परिवर्तनकारी स्पर्श का अनुभव किया है।',

    // HomeLocation
    'location.title': 'हमारे सैलून पर आएं',
    'location.address': 'स्थान / पता',
    'location.addressVal': 'जमील कॉलोनी, अमरावती, महाराष्ट्र',
    'location.hours': 'कार्य का समय',
    'location.hoursVal': 'सोमवार - रविवार: सुबह 10:00 - रात 8:00',
    'location.interactiveNote': 'इंटरैक्टिव हाई-फिडेलिटी मैप। अपने डिवाइस पर लाइव दिशा-निर्देश प्राप्त करने के लिए टच करें।',
    'location.getDirections': 'दिशा-निर्देश प्राप्त करें',

    // About
    'about.meetFounder': 'संस्थापक से मिलें',
    'about.title': 'आलिया शेख और एआर ब्यूटी पार्लर',
    'about.desc1': 'एआर ब्यूटी पार्लर में, हमारा मानना है कि सुंदरता आत्म-प्रेम और कायाकल्प की एक यात्रा है। अमरावती के केंद्र में स्थित, हमारे सैलून ने वर्षों से असाधारण, ग्राहक-केंद्रित सेवा के माध्यम से लक्ज़री सैलून देखभाल को परिभाषित किया है।',
    'about.desc2': 'विशेषज्ञ मास्टर-स्टाइलिस्ट आलिया शेख द्वारा स्थापित, हम हाई-एंड ब्राइडल मेकअप, सिग्नेचर फेशियल और कस्टमाइज़्ड हेयर थेरेपी में विशेषज्ञता रखते हैं जो आपके प्राकृतिक सौंदर्य को और बेहतर बनाते हैं।',
    'about.quote': '"हमारा सिद्धांत सरल है: हम आपके नैन-नक्श को छुपाते नहीं हैं; हम आपकी असली चमक को अंदर से निखारते हैं।"',
    'about.luxurySanctuary': 'लक्ज़री स्थल',
    'about.qualityAmbiance': 'सर्वोत्तम गुणवत्ता और शांत वातावरण',
    'about.badge1Title': 'विशेषज्ञ कलात्मकता',
    'about.badge1Desc': 'आलिया शेख के नेतृत्व में, जो लक्ज़री ब्राइडल मेकओवर और स्किन रेस्टोरेशन में विशेषज्ञ हैं।',
    'about.badge2Title': 'उत्कृष्ट स्वच्छता',
    'about.badge2Desc': 'सभी ब्यूटी बेड, टूल्स और कस्टम ट्रीटमेंट्स में मेडिकल-ग्रेड सैनिटाइजेशन मानक।',
    'about.badge3Title': 'कस्टमाइज़्ड लक्ज़री',
    'about.badge3Desc': 'हम आपकी त्वचा और बालों के प्रकार का विश्लेषण करके आपके लिए विशेष ब्यूटी ट्रीटमेंट तैयार करते हैं।',

    // Services
    'services.title': 'विशेष ब्यूटी मेनू',
    'services.subtext': 'हमारे द्वारा चुनिंदा हाई-एंड सैलून थेरेपी देखें। हर उपचार आपकी आंतरिक चमक को बाहर लाने के लिए कस्टमाइज़ किया गया है।',
    'services.selectHelp': 'बुकिंग शुरू करने के लिए किसी भी सेवा के सामने तीर के निशान पर क्लिक करें।',
    'services.filterAll': 'सभी सेवाएँ',
    'services.filterHair': 'बालों की देखभाल',
    'services.filterSkin': 'त्वचा और चेहरा',
    'services.filterBody': 'शरीर की देखभाल',
    'services.filterBridal': 'दुल्हन शृंगार',

    // Gallery
    'gallery.title': 'हमारा काम',
    'gallery.subtitle': 'सुंदर मेकओवर',
    'gallery.desc': 'हमारे लक्ज़री मेकअप, हेयर स्टाइलिंग, कस्टम फेशियल और नेल थेरेपी के वास्तविक परिणाम देखें।',

    // Booking
    'booking.title': 'बुकिंग डेस्क',
    'booking.subtitle': 'अपॉइंटमेंट बुक करें',
    'booking.desc': 'कस्टमाइज़्ड ब्यूटी ट्रीटमेंट का आनंद लें। अपनी मनपसंद सर्विस चुनें, समय सुरक्षित करें और आलिया शेख की बेजोड़ कलात्मकता का अनुभव करें।',
    'booking.selectLabel': 'प्रीमियम ट्रीटमेंट चुनें',
    'booking.nameLabel': 'पूरा नाम',
    'booking.phoneLabel': 'फ़ोन नंबर',
    'booking.dateLabel': 'तारीख चुनें',
    'booking.timeLabel': 'समय का स्लॉट चुनें',
    'booking.notesLabel': 'विशेष अनुरोध / नोट्स',
    'booking.submitBtn': 'अपॉइंटमेंट स्लॉट सुरक्षित करें',
    'booking.successTitle': 'अपॉइंटमेंट सुरक्षित हो गया!',
    'booking.successDesc': 'आपका लक्ज़री ट्रीटमेंट स्लॉट सुरक्षित है। हम विवरण फाइनल करने के लिए जल्द ही आपसे संपर्क करेंगे।',
    'booking.successDetails': 'बुकिंग का विवरण:',
    'booking.successService': 'सर्विस:',
    'booking.successDate': 'तारीख:',
    'booking.successTime': 'समय:',
    'booking.successClient': 'ग्राहक का नाम:',
    'booking.closeBtn': 'वापस सेवाओं पर जाएं',
    'booking.formHelp': 'क्या आपको विशेष ब्राइडल परामर्श चाहिए? विशेष अनुरोध बॉक्स में लिख दें।',

    // Contact
    'contact.title': 'सैलून से संपर्क करें',
    'contact.subtitle': 'आलिया से जुड़ें',
    'contact.desc': 'चाहे कस्टमाइज़्ड ब्राइडल परामर्श बुक करना हो, सौंदर्य कार्यक्रमों के बारे में पूछना हो, या हमारे स्टूडियो का पता जानना हो, हम आपका स्वागत करने के लिए यहाँ हैं।',
    'contact.callTitle': 'फ़ोन सपोर्ट',
    'contact.callDesc': 'त्वरित बुकिंग पूछताछ और विशेषज्ञ परामर्श।',
    'contact.ownerLabel': 'संचालक',
    'contact.instagram': 'इंस्टाग्राम',
    'contact.igDesc': 'नए मेकओवर और ब्राइडल लुक की झलक देखें।',
    'contact.emailTitle': 'ईमेल स्टूडियो',
    'contact.emailDesc': 'व्यावसायिक पूछताछ या ब्राइडल प्रस्तावों के लिए।',
    'contact.locationTitle': 'सैलून स्थल',
    'contact.locationDesc': 'जमील कॉलोनी, अमरावती में स्थित। विशेष ब्राइडल परामर्श या प्री-विज़िट निर्देशों के लिए कॉल करें या बुकिंग करें।',

    // Dynamic service categories
    'cat.brow-lip': 'भौंहें और होंठ शेपिंग',
    'cat.waxing': 'वैक्सिंग अनुष्ठान',
    'cat.bleach-glow': 'ब्लीच और चमक',
    'cat.signature-facials': 'विशेष फेशियल',
    'cat.deep-cleanups': 'डीप क्लीनअप',
    'cat.body-treatments': 'बॉडी ट्रीटमेंट',
    'cat.hair-cuts': 'विशेष हेयर कट',
    'cat.hair-therapy': 'हेयर थेरेपी और केयर',
    'cat.hair-colour': 'हेयर कलर स्टूडियो',
    'cat.bridal-makeup': 'ब्राइडल मेकअप कॉउचर',

    // Dynamic service taglines
    'tag.brow-lip': 'पूरी तरह से परिभाषित और बेहद आकर्षक',
    'tag.waxing': 'रेशमी चिकनी त्वचा का खूबसूरत अहसास',
    'tag.bleach-glow': 'त्वरित चमक और बेदाग़ निखार',
    'tag.signature-facials': 'पोषण। बहाली। अंदर से लाएं निखार।',
    'tag.deep-cleanups': 'मिनटों में ताज़ा, साफ और चमकदार त्वचा',
    'tag.body-treatments': 'सिर से पैर तक पूरा लाड़-प्यार',
    'tag.hair-cuts': 'ऐसी शैली जो आपके व्यक्तित्व को दर्शाए',
    'tag.hair-therapy': 'पुनर्जीवित करें, मरम्मत करें, अपने बालों को चमकाएं।',
    'tag.hair-colour': 'शानदार शेड्स, टिकाऊ चमक',
    'tag.bridal-makeup': 'आपका विशेष दिन, त्रुटिहीन रूप से सजाया गया',

    // Dynamic service names
    'svc.Eyebrow Shaping': 'आइब्रो शेपिंग',
    'svc.Upper Lip Threading': 'अपर लिप थ्रेडिंग',
    'svc.Full Arms': 'फुल आर्म्स वैक्स',
    'svc.Half Leg': 'हाफ लेग वैक्स',
    'svc.Underarms': 'अंडरआर्म्स वैक्स',
    'svc.Full Body Waxing': 'फुल बॉडी वैक्सिंग',
    'svc.VLCC Bleach': 'VLCC ब्लीच',
    'svc.FYC Bleach': 'FYC ब्लीच',
    'svc.Oxy Bleach': 'ऑक्सी ब्लीच',
    'svc.Golden Glow Bleach': 'गोल्डन ग्लो ब्लीच',
    'svc.Fruit Facial': 'फ्रूट फेशियल',
    'svc.Gold Facial': 'गोल्ड फेशियल',
    'svc.Diamond Facial': 'डायमंड फेशियल',
    'svc.Ozone Therapy Facial': 'ओजोन थेरेपी फेशियल',
    'svc.Corian Facial': 'कोरियन फेशियल',
    'svc.Aroma Therapy Facial': 'अरोमा थेरेपी फेशियल',
    'svc.Bridal Glow Facial': 'ब्राइडल ग्लो फेशियल',
    'svc.Dr. Russian Cleanup': 'डॉ. रशियन क्लीनअप',
    'svc.Fruit Cleanup': 'फ्रूट क्लीनअप',
    'svc.Manicure & Pedicure': 'मेनीक्योर और पेडीक्योर',
    'svc.Full Body Spa': 'फुल बॉडी स्पा',
    'svc.Body Polishing': 'बॉडी पॉलिशिंग',
    'svc.Straight Cut': 'स्ट्रेट कट',
    'svc.U-Shape Cut': 'यू-शेप कट',
    'svc.V-Shape Cut': 'वी-शेप कट',
    'svc.Layer Cut': 'लेयर कट',
    'svc.Luxury Hair Spa': 'लक्ज़री हेयर स्पा',
    'svc.Hair Oiling Therapy': 'हेयर ऑयलिंग थेरेपी',
    'svc.Dandruff Control Spa': 'डैंड्रफ कंट्रोल स्पा',
    'svc.Hair Straightening': 'हेयर स्ट्रेटनिंग (बाल सीधे करना)',
    'svc.Hair Curling': 'हेयर कर्लिंग (बाल घुंघराले करना)',
    'svc.Black': 'ब्लैक (काला)',
    'svc.Brown': 'ब्राउन (भूरा)',
    'svc.Golden': 'गोल्डन (सुनहरा)',
    'svc.Bridal Makeup': 'ब्राइडल मेकअप',
    'svc.Reception Look': 'रिसेप्शन लुक',
    'svc.Engagement Glam': 'एंगेजमेंट ग्लैम',
    'svc.Side Sister Makeup': 'साइड सिस्टर मेकअप',

    // Gallery item titles
    'gal.g-1': 'त्रुटिहीन ब्राइडल आई मेकअप और बेस',
    'gal.g-2': 'ब्राइडल लहंगा ड्रेपिंग और स्टाइलिंग',
    'gal.g-3': 'चमकदार सिल्क-स्मूथिंग हेयर मेकओवर',
    'gal.g-4': 'ताजे फूलों के साथ सुंदर ब्राइडल बन',
    'gal.g-5': 'डीप हाइड्रेशन अरोमा थेरेपी फेशियल',
    'gal.g-6': 'प्रीमियम जेड-रोलर स्किन इन्फ्यूजन',
    'gal.g-7': 'सटीक जेल पॉलिश और शेपिंग',
    'gal.g-8': 'डिटॉक्स रोज़-पेटल फुट स्पा और स्क्रब',
    'gal.g-9': 'उत्कृष्ट और बारीक ब्राइडल मेहंदी',

    'gal.cat.Bridal Couture': 'ब्राइडल',
    'gal.cat.Hair Styling': 'हेयर स्टाइलिंग',
    'gal.cat.Skin Rituals': 'त्वचा उपचार',
    'gal.cat.Nails & Spa': 'नेल्स और स्पा',
    'gal.cat.All': 'सभी'
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('ar_beauty_lang');
    return (saved === 'hi' || saved === 'en') ? saved : 'en';
  });

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('ar_beauty_lang', lang);
  };

  const t = (key: string): string => {
    const section = translations[language];
    if (section && section[key]) {
      return section[key];
    }
    // Fallback to English translation
    const enSection = translations['en'];
    if (enSection && enSection[key]) {
      return enSection[key];
    }
    // Final fallback is key itself or stripping prefix
    if (key.startsWith('svc.') || key.startsWith('cat.') || key.startsWith('tag.') || key.startsWith('gal.')) {
      return key.substring(4);
    }
    return key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
