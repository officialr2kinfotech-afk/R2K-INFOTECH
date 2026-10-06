const LANGUAGES=[
{code:'English',native:'English'},
{code:'Hindi',native:'हिंदी'},
{code:'Bengali',native:'বাংলা'},
{code:'Telugu',native:'తెలుగు'},
{code:'Marathi',native:'मराठी'},
{code:'Tamil',native:'தமிழ்'},
{code:'Gujarati',native:'ગુજરાતી'},
{code:'Urdu',native:'اردو'},
{code:'Kannada',native:'ಕನ್ನಡ'},
{code:'Odia',native:'ଓଡ଼ିଆ'},
{code:'Punjabi',native:'ਪੰਜਾਬੀ'},
{code:'Malayalam',native:'മലയാളം'}
];

const TRANSLATIONS={
English:{myOrders:'My orders',myCart:'My Cart',coupons:'coupons',wishlist:'wishlist',emailLabel:'📧 Email',savedAddresses:'📍 Saved Addresses',editProfile:'👤 Edit profile',selectLanguage:'A/अ Select Language',helpCenter:'💬 help center',logout:'🚪 Logout',myOrdersTitle:'My Orders',myWishlistTitle:'My Wishlist',myAddressesTitle:'My Addresses',selectLanguageTitle:'A/अ Select Language',editProfileTitle:'Edit Profile',changePhoto:'Change Photo',deletePhoto:'Delete Photo',fullName:'Full Name',mobile:'Mobile',email:'Email',saveProfile:'Save Profile',helpTitle:'Help Center',contactUs:'📞 Contact Us',home:'Home',account:'Account',cart:'Cart',addNewAddr:'Add New Address',saveAddr:'Save Address',updateAddr:'Update Address'},
Hindi:{myOrders:'मेरे ऑर्डर',myCart:'मेरी कार्ट',coupons:'कूपन',wishlist:'विशलिस्ट',emailLabel:'📧 ईमेल',savedAddresses:'📍 सेव्ड एड्रेस',editProfile:'👤 प्रोफाइल एडिट',selectLanguage:'A/अ भाषा चुनें',helpCenter:'💬 हेल्प सेंटर',logout:'🚪 लॉगआउट',myOrdersTitle:'मेरे ऑर्डर',myWishlistTitle:'मेरी विशलिस्ट',myAddressesTitle:'मेरे एड्रेस',selectLanguageTitle:'A/अ भाषा चुनें',editProfileTitle:'प्रोफाइल एडिट',changePhoto:'फोटो बदलें',deletePhoto:'फोटो हटाएं',fullName:'पूरा नाम',mobile:'मोबाइल',email:'ईमेल',saveProfile:'प्रोफाइल सेव करें',helpTitle:'हेल्प सेंटर',contactUs:'📞 हमसे संपर्क करें',home:'होम',account:'अकाउंट',cart:'कार्ट',addNewAddr:'नया एड्रेस जोड़ें',saveAddr:'एड्रेस सेव करें',updateAddr:'एड्रेस अपडेट करें'},
Marathi:{myOrders:'माझे ऑर्डर',myCart:'माझी कार्ट',coupons:'कूपन',wishlist:'विशलिस्ट',emailLabel:'📧 ईमेल',savedAddresses:'📍 जतन केलेले पत्ते',editProfile:'👤 प्रोफाइल संपादित करा',selectLanguage:'A/अ भाषा निवडा',helpCenter:'💬 मदत केंद्र',logout:'🚪 लॉगआउट',myOrdersTitle:'माझे ऑर्डर',myWishlistTitle:'माझी विशलिस्ट',myAddressesTitle:'माझे पत्ते',selectLanguageTitle:'A/अ भाषा निवडा',editProfileTitle:'प्रोफाइल',changePhoto:'फोटो बदला',deletePhoto:'फोटो हटवा',fullName:'पूर्ण नाव',mobile:'मोबाइल',email:'ईमेल',saveProfile:'प्रोफाइल सेव करा',helpTitle:'मदत केंद्र',contactUs:'📞 संपर्क',home:'होम',account:'अकाउंट',cart:'कार्ट',addNewAddr:'नवीन पत्ता जोडा',saveAddr:'सेव करा',updateAddr:'अपडेट करा'},
Bengali:{myOrders:'আমার অর্ডার',myCart:'আমার কার্ট',coupons:'কুপন',wishlist:'উইশলিস্ট',emailLabel:'📧 ইমেইল',savedAddresses:'📍 সেভ করা ঠিকানা',editProfile:'👤 প্রোফাইল এডিট',selectLanguage:'A/অ ভাষা নির্বাচন',helpCenter:'💬 হেল্প সেন্টার',logout:'🚪 লগআউট',myOrdersTitle:'আমার অর্ডার',myWishlistTitle:'উইশলিস্ট',myAddressesTitle:'আমার ঠিকানা',selectLanguageTitle:'A/অ ভাষা নির্বাচন',editProfileTitle:'প্রোফাইল',changePhoto:'ছবি বদলান',deletePhoto:'মুছুন',fullName:'পুরো নাম',mobile:'মোবাইল',email:'ইমেইল',saveProfile:'সেভ করুন',helpTitle:'হেল্প',contactUs:'📞 যোগাযোগ',home:'হোম',account:'অ্যাকাউন্ট',cart:'কার্ট',addNewAddr:'নতুন ঠিকানা',saveAddr:'সেভ করুন',updateAddr:'আপডেট করুন'},
Telugu:{myOrders:'నా ఆర్డర్లు',myCart:'నా కార్ట్',coupons:'కూపన్లు',wishlist:'విష్‌లిస్ట్',emailLabel:'📧 ఈమెయిల్',savedAddresses:'📍 సేవ్ చేసిన చిరునామాలు',editProfile:'👤 ప్రొఫైల్',selectLanguage:'A/అ భాష ఎంచుకోండి',helpCenter:'💬 సహాయ కేంద్రం',logout:'🚪 లాగ్ అవుట్',myOrdersTitle:'నా ఆర్డర్లు',myWishlistTitle:'విష్‌లిస్ట్',myAddressesTitle:'నా చిరునామాలు',selectLanguageTitle:'A/అ భాష',editProfileTitle:'ప్రొఫైల్',changePhoto:'ఫోటో మార్చండి',deletePhoto:'తొలగించు',fullName:'పూర్తి పేరు',mobile:'మొబైల్',email:'ఈమెయిల్',saveProfile:'సేవ్ చేయండి',helpTitle:'సహాయం',contactUs:'📞 సంప్రదించండి',home:'హోమ్',account:'ఖాతా',cart:'కార్ట్',addNewAddr:'కొత్త చిరునామా',saveAddr:'సేవ్ చేయండి',updateAddr:'అప్‌డేట్ చేయండి'},
Tamil:{myOrders:'என் ஆர்டர்கள்',myCart:'என் கார்ட்',coupons:'கூப்பன்கள்',wishlist:'விருப்பப்பட்டியல்',emailLabel:'📧 மின்னஞ்சல்',savedAddresses:'📍 சேமித்த முகவரிகள்',editProfile:'👤 சுயவிவரம்',selectLanguage:'A/அ மொழி',helpCenter:'💬 உதவி மையம்',logout:'🚪 வெளியேறு',myOrdersTitle:'என் ஆர்டர்கள்',myWishlistTitle:'விருப்பப்பட்டியல்',myAddressesTitle:'முகவரிகள்',selectLanguageTitle:'A/அ மொழி',editProfileTitle:'சுயவிவரம்',changePhoto:'புகைப்படம்',deletePhoto:'நீக்கு',fullName:'முழு பெயர்',mobile:'மொபைல்',email:'மின்னஞ்சல்',saveProfile:'சேமி',helpTitle:'உதவி',contactUs:'📞 தொடர்பு',home:'முகப்பு',account:'கணக்கு',cart:'கார்ட்',addNewAddr:'புதிய முகவரி',saveAddr:'சேமி',updateAddr:'புதுப்பி'},
Gujarati:{myOrders:'મારા ઓર્ડર',myCart:'મારી કાર્ટ',coupons:'કૂપન',wishlist:'વિશલિસ્ટ',emailLabel:'📧 ઇમેઇલ',savedAddresses:'📍 સાચવેલા સરનામા',editProfile:'👤 પ્રોફાઇલ',selectLanguage:'A/અ ભાષા',helpCenter:'💬 મદદ',logout:'🚪 લોગઆઉટ',myOrdersTitle:'મારા ઓર્ડર',myWishlistTitle:'વિશલિસ્ટ',myAddressesTitle:'સરનામા',selectLanguageTitle:'A/અ ભાષા',editProfileTitle:'પ્રોફાઇલ',changePhoto:'ફોટો બદલો',deletePhoto:'કાઢો',fullName:'પૂરું નામ',mobile:'મોબાઇલ',email:'ઇમેઇલ',saveProfile:'સેવ કરો',helpTitle:'મદદ',contactUs:'📞 સંપર્ક',home:'હોમ',account:'એકાઉન્ટ',cart:'કાર્ટ',addNewAddr:'નવું સરનામું',saveAddr:'સેવ',updateAddr:'અપડેટ'},
Kannada:{myOrders:'ನನ್ನ ಆರ್ಡರ್',myCart:'ನನ್ನ ಕಾರ್ಟ್',coupons:'ಕೂಪನ್',wishlist:'ವಿಷ್‌ಲಿಸ್ಟ್',emailLabel:'📧 ಇಮೇಲ್',savedAddresses:'📍 ಉಳಿಸಿದ ವಿಳಾಸ',editProfile:'👤 ಪ್ರೊಫೈಲ್',selectLanguage:'A/ಅ ಭಾಷೆ',helpCenter:'💬 ಸಹಾಯ',logout:'🚪 ಲಾಗ್ಔಟ್',myOrdersTitle:'ಆರ್ಡರ್',myWishlistTitle:'ವಿಷ್‌ಲಿಸ್ಟ್',myAddressesTitle:'ವಿಳಾಸ',selectLanguageTitle:'A/ಅ ಭಾಷೆ',editProfileTitle:'ಪ್ರೊಫೈಲ್',changePhoto:'ಫೋಟೋ',deletePhoto:'ಅಳಿಸಿ',fullName:'ಹೆಸರು',mobile:'ಮೊಬೈಲ್',email:'ಇಮೇಲ್',saveProfile:'ಸೇವ್',helpTitle:'ಸಹಾಯ',contactUs:'📞 ಸಂಪರ್ಕ',home:'ಹೋಮ್',account:'ಖಾತೆ',cart:'ಕಾರ್ಟ್',addNewAddr:'ಹೊಸ ವಿಳಾಸ',saveAddr:'ಸೇವ್',updateAddr:'ಅಪ್ಡೇಟ್'},
Odia:{myOrders:'ମୋ ଅର୍ଡର',myCart:'ମୋ କାର୍ଟ',coupons:'କୁପନ',wishlist:'ୱିଶ',emailLabel:'📧 ଇମେଲ',savedAddresses:'📍 ଠିକଣା',editProfile:'👤 ପ୍ରୋଫାଇଲ',selectLanguage:'A/ଅ ଭାଷା',helpCenter:'💬 ସାହାଯ୍ୟ',logout:'🚪 ଲଗଆଉଟ',myOrdersTitle:'ଅର୍ଡର',myWishlistTitle:'ୱିଶ',myAddressesTitle:'ଠିକଣା',selectLanguageTitle:'A/ଅ ଭାଷା',editProfileTitle:'ପ୍ରୋଫାଇଲ',changePhoto:'ଫଟୋ',deletePhoto:'ଡିଲିଟ',fullName:'ନାମ',mobile:'ମୋବାଇଲ',email:'ଇମେଲ',saveProfile:'ସେଭ',helpTitle:'ସାହାଯ୍ୟ',contactUs:'📞 ଯୋଗାଯୋଗ',home:'ହୋମ',account:'ଖାତା',cart:'କାର୍ଟ',addNewAddr:'ନୂଆ',saveAddr:'ସେଭ',updateAddr:'ଅପଡେଟ'},
Punjabi:{myOrders:'ਮੇਰੇ ਆਰਡਰ',myCart:'ਮੇਰੀ ਕਾਰਟ',coupons:'ਕੂਪਨ',wishlist:'ਵਿਸ਼',emailLabel:'📧 ਈਮੇਲ',savedAddresses:'📍 ਪਤੇ',editProfile:'👤 ਪ੍ਰੋਫਾਈਲ',selectLanguage:'A/ਅ ਭਾਸ਼ਾ',helpCenter:'💬 ਮਦਦ',logout:'🚪 ਲਾਗਆਉਟ',myOrdersTitle:'ਆਰਡਰ',myWishlistTitle:'ਵਿਸ਼',myAddressesTitle:'ਪਤੇ',selectLanguageTitle:'A/ਅ ਭਾਸ਼ਾ',editProfileTitle:'ਪ੍ਰੋਫਾਈਲ',changePhoto:'ਫੋਟੋ',deletePhoto:'ਹਟਾਓ',fullName:'ਨਾਮ',mobile:'ਮੋਬਾਈਲ',email:'ਈਮੇਲ',saveProfile:'ਸੇਵ',helpTitle:'ਮਦਦ',contactUs:'📞 ਸੰਪਰਕ',home:'ਹੋਮ',account:'ਅਕਾਉਂਟ',cart:'ਕਾਰਟ',addNewAddr:'ਨਵਾਂ',saveAddr:'ਸੇਵ',updateAddr:'ਅਪਡੇਟ'},
Malayalam:{myOrders:'എന്റെ ഓർഡർ',myCart:'എന്റെ കാർട്ട്',coupons:'കൂപ്പൺ',wishlist:'വിഷ്',emailLabel:'📧 ഇമെയിൽ',savedAddresses:'📍 വിലാസം',editProfile:'👤 പ്രൊഫൈൽ',selectLanguage:'A/അ ഭാഷ',helpCenter:'💬 സഹായം',logout:'🚪 ലോഗൗട്ട്',myOrdersTitle:'ഓർഡർ',myWishlistTitle:'വിഷ്',myAddressesTitle:'വിലാസം',selectLanguageTitle:'A/അ ഭാഷ',editProfileTitle:'പ്രൊഫൈൽ',changePhoto:'ഫോട്ടോ',deletePhoto:'നീക്കം',fullName:'പേര്',mobile:'മൊബൈൽ',email:'ഇമെയിൽ',saveProfile:'സേവ്',helpTitle:'സഹായം',contactUs:'📞 ബന്ധപ്പെടുക',home:'ഹോം',account:'അക്കൗണ്ട്',cart:'കാർട്ട്',addNewAddr:'പുതിയ',saveAddr:'സേവ്',updateAddr:'അപ്ഡേറ്റ്'},
Urdu:{myOrders:'میرے آرڈر',myCart:'میری کارٹ',coupons:'کوپن',wishlist:'وش',emailLabel:'📧 ایمیل',savedAddresses:'📍 پتے',editProfile:'👤 پروفائل',selectLanguage:'A/ا زبان',helpCenter:'💬 مدد',logout:'🚪 لاگ آؤٹ',myOrdersTitle:'آرڈر',myWishlistTitle:'وش',myAddressesTitle:'پتے',selectLanguageTitle:'A/ا زبان',editProfileTitle:'پروفائل',changePhoto:'فوٹو',deletePhoto:'ہٹاؤ',fullName:'نام',mobile:'موبائل',email:'ایمیل',saveProfile:'سیو',helpTitle:'مدد',contactUs:'📞 رابطہ',home:'ہوم',account:'اکاؤنٹ',cart:'کارٹ',addNewAddr:'نیا',saveAddr:'سیو',updateAddr:'اپڈیٹ'}
};

let selectedLang = localStorage.getItem('rekavo_lang') || 'English';

function getTrans(k){
  let t = TRANSLATIONS[selectedLang] || TRANSLATIONS['English'];
  return t[k] || TRANSLATIONS['English'][k] || k;
}

function applyTranslations(){
  let t = TRANSLATIONS[selectedLang] || TRANSLATIONS['English'];
  let savedCart = localStorage.getItem('rekavo_last_cart') || '0';

  document.querySelectorAll('[data-i18n]').forEach(el=>{
    let k = el.getAttribute('data-i18n');
    if(el.id==='pGridCart' || el.id==='cartCount') return;
    if(t[k]){
      if(k==='myCart'){
        el.innerHTML = `${t[k]} (<span id="pGridCart">${savedCart}</span>)`;
      } else if(!el.closest('.bottom-nav')){
        el.innerText = t[k];
      }
    }
  });
  document.querySelectorAll('.bottom-nav [data-i18n="home"]').forEach(e=>e.innerText=getTrans('home'));
  document.querySelectorAll('.bottom-nav [data-i18n="account"]').forEach(e=>e.innerText=getTrans('account'));
  document.querySelectorAll('.bottom-nav [data-i18n="cart"]').forEach(e=>e.innerText=getTrans('cart'));
}

document.addEventListener('DOMContentLoaded', applyTranslations);
