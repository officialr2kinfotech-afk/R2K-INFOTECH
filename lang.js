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
English:{home:'Home',account:'Account',cart:'Cart',search:'Search',myOrders:'My orders',myCart:'My Cart',coupons:'coupons',wishlist:'wishlist',emailLabel:'📧 Email',savedAddresses:'📍 Saved Addresses',editProfile:'👤 Edit profile',selectLanguage:'A/अ Select Language',helpCenter:'💬 help center',logout:'🚪 Logout',myOrdersTitle:'My Orders',myWishlistTitle:'My Wishlist',myAddressesTitle:'My Addresses',selectLanguageTitle:'A/अ Select Language',editProfileTitle:'Edit Profile',changePhoto:'Change Photo',deletePhoto:'Delete Photo',fullName:'Full Name',mobile:'Mobile',email:'Email',saveProfile:'Save Profile',helpTitle:'Help Center',contactUs:'📞 Contact Us',addNewAddr:'Add New Address',saveAddr:'Save Address',updateAddr:'Update Address'},
Hindi:{home:'होम',account:'अकाउंट',cart:'कार्ट',search:'सर्च',myOrders:'मेरे ऑर्डर',myCart:'मेरी कार्ट',coupons:'कूपन',wishlist:'विशलिस्ट',emailLabel:'📧 ईमेल',savedAddresses:'📍 सेव्ड एड्रेस',editProfile:'👤 प्रोफाइल एडिट',selectLanguage:'A/अ भाषा चुनें',helpCenter:'💬 हेल्प सेंटर',logout:'🚪 लॉगआउट',myOrdersTitle:'मेरे ऑर्डर',myWishlistTitle:'मेरी विशलिस्ट',myAddressesTitle:'मेरे एड्रेस',selectLanguageTitle:'A/अ भाषा चुनें',editProfileTitle:'प्रोफाइल एडिट',changePhoto:'फोटो बदलें',deletePhoto:'फोटो हटाएं',fullName:'पूरा नाम',mobile:'मोबाइल',email:'ईमेल',saveProfile:'प्रोफाइल सेव करें',helpTitle:'हेल्प सेंटर',contactUs:'📞 हमसे संपर्क करें',addNewAddr:'नया एड्रेस जोड़ें',saveAddr:'एड्रेस सेव करें',updateAddr:'एड्रेस अपडेट करें'},
Marathi:{home:'होम',account:'अकाउंट',cart:'कार्ट',search:'सर्च',myOrders:'माझे ऑर्डर',myCart:'माझी कार्ट',coupons:'कूपन',wishlist:'विशलिस्ट',emailLabel:'📧 ईमेल',savedAddresses:'📍 जतन केलेले पत्ते',editProfile:'👤 प्रोफाइल संपादित करा',selectLanguage:'A/अ भाषा निवडा',helpCenter:'💬 मदत केंद्र',logout:'🚪 लॉगआउट',myOrdersTitle:'माझे ऑर्डर',myWishlistTitle:'माझी विशलिस्ट',myAddressesTitle:'माझे पत्ते',selectLanguageTitle:'A/अ भाषा निवडा',editProfileTitle:'प्रोफाइल',changePhoto:'फोटो बदला',deletePhoto:'फोटो हटवा',fullName:'पूर्ण नाव',mobile:'मोबाइल',email:'ईमेल',saveProfile:'प्रोफाइल सेव करा',helpTitle:'मदत केंद्र',contactUs:'📞 संपर्क',addNewAddr:'नवीन पत्ता जोडा',saveAddr:'सेव करा',updateAddr:'अपडेट करा'},
Bengali:{home:'হোম',account:'অ্যাকাউন্ট',cart:'কার্ট',search:'সার্চ',myOrders:'আমার অর্ডার',myCart:'আমার কার্ট',coupons:'কুপন',wishlist:'উইশলিস্ট',emailLabel:'📧 ইমেইল',savedAddresses:'📍 সেভ করা ঠিকানা',editProfile:'👤 প্রোফাইল এডিট',selectLanguage:'A/অ ভাষা নির্বাচন',helpCenter:'💬 হেল্প সেন্টার',logout:'🚪 লগআউট',myOrdersTitle:'আমার অর্ডার',myWishlistTitle:'উইশলিস্ট',myAddressesTitle:'আমার ঠিকানা',selectLanguageTitle:'A/অ ভাষা নির্বাচন',editProfileTitle:'প্রোফাইল',changePhoto:'ছবি বদলান',deletePhoto:'মুছুন',fullName:'পুরো নাম',mobile:'মোবাইল',email:'ইমেইল',saveProfile:'সেভ করুন',helpTitle:'হেল্প',contactUs:'📞 যোগাযোগ',addNewAddr:'নতুন ঠিকানা',saveAddr:'সেভ করুন',updateAddr:'আপডেট করুন'},
Telugu:{home:'హోమ్',account:'ఖాతా',cart:'కార్ట్',search:'వెతకండి',myOrders:'నా ఆర్డర్లు',myCart:'నా కార్ట్',coupons:'కూపన్లు',wishlist:'విష్‌లిస్ట్',emailLabel:'📧 ఈమెయిల్',savedAddresses:'📍 సేవ్ చేసిన చిరునామాలు',editProfile:'👤 ప్రొఫైల్',selectLanguage:'A/అ భాష ఎంచుకోండి',helpCenter:'💬 సహాయ కేంద్రం',logout:'🚪 లాగ్ అవుట్',myOrdersTitle:'నా ఆర్డర్లు',myWishlistTitle:'విష్‌లిస్ట్',myAddressesTitle:'నా చిరునామాలు',selectLanguageTitle:'A/అ భాష',editProfileTitle:'ప్రొఫైల్',changePhoto:'ఫోటో మార్చండి',deletePhoto:'తొలగించు',fullName:'పూర్తి పేరు',mobile:'మొబైల్',email:'ఈమెయిల్',saveProfile:'సేవ్ చేయండి',helpTitle:'సహాయం',contactUs:'📞 సంప్రదించండి',addNewAddr:'కొత్త చిరునామా',saveAddr:'సేవ్ చేయండి',updateAddr:'అప్‌డేట్ చేయండి'},
Tamil:{home:'முகப்பு',account:'கணக்கு',cart:'கார்ட்',search:'தேடு',myOrders:'என் ஆர்டர்கள்',myCart:'என் கார்ட்',coupons:'கூப்பன்கள்',wishlist:'விருப்பப்பட்டியல்',emailLabel:'📧 மின்னஞ்சல்',savedAddresses:'📍 சேமித்த முகவரிகள்',editProfile:'👤 சுயவிவரம்',selectLanguage:'A/அ மொழி',helpCenter:'💬 உதவி மையம்',logout:'🚪 வெளியேறு',myOrdersTitle:'என் ஆர்டர்கள்',myWishlistTitle:'விருப்பப்பட்டியல்',myAddressesTitle:'முகவரிகள்',selectLanguageTitle:'A/அ மொழி',editProfileTitle:'சுயவிவரம்',changePhoto:'புகைப்படம்',deletePhoto:'நீக்கு',fullName:'முழு பெயர்',mobile:'மொபைல்',email:'மின்னஞ்சல்',saveProfile:'சேமி',helpTitle:'உதவி',contactUs:'📞 தொடர்பு',addNewAddr:'புதிய முகவரி',saveAddr:'சேமி',updateAddr:'புதுப்பி'},
Gujarati:{home:'હોમ',account:'એકાઉન્ટ',cart:'કાર્ટ',search:'શોધો',myOrders:'મારા ઓર્ડર',myCart:'મારી કાર્ટ',coupons:'કૂપન',wishlist:'વિશલિસ્ટ',emailLabel:'📧 ઇમેઇલ',savedAddresses:'📍 સાચવેલા સરનામા',editProfile:'👤 પ્રોફાઇલ',selectLanguage:'A/અ ભાષા',helpCenter:'💬 મદદ',logout:'🚪 લોગઆઉટ',myOrdersTitle:'મારા ઓર્ડર',myWishlistTitle:'વિશલિસ્ટ',myAddressesTitle:'સરનામા',selectLanguageTitle:'A/અ ભાષા',editProfileTitle:'પ્રોફાઇલ',changePhoto:'ફોટો બદલો',deletePhoto:'કાઢો',fullName:'પૂરું નામ',mobile:'મોબાઇલ',email:'ઇમેઇલ',saveProfile:'સેવ કરો',helpTitle:'મદદ',contactUs:'📞 સંપર્ક',addNewAddr:'નવું સરનામું',saveAddr:'સેવ',updateAddr:'અપડેટ'},
Kannada:{home:'ಹೋಮ್',account:'ಖಾತೆ',cart:'ಕಾರ್ಟ್',search:'ಹುಡುಕು',myOrders:'ನನ್ನ ಆರ್ಡರ್',myCart:'ನನ್ನ ಕಾರ್ಟ್',coupons:'ಕೂಪನ್',wishlist:'ವಿಷ್‌ಲಿಸ್ಟ್',emailLabel:'📧 ಇಮೇಲ್',savedAddresses:'📍 ಉಳಿಸಿದ ವಿಳಾಸ',editProfile:'👤 ಪ್ರೊಫೈಲ್',selectLanguage:'A/ಅ ಭಾಷೆ',helpCenter:'💬 ಸಹಾಯ',logout:'🚪 ಲಾಗ್ಔಟ್'},
Gujarati:{home:'હોમ',account:'એકાઉન્ટ',cart:'કાર્ટ'},
Urdu:{home:'ہوم',account:'اکاؤنٹ',cart:'کارٹ',search:'تلاش',myOrders:'میرے آرڈر',myCart:'میری کارٹ',coupons:'کوپن',wishlist:'وش',emailLabel:'📧 ایمیل',savedAddresses:'📍 پتے',editProfile:'👤 پروفائل',selectLanguage:'A/ا زبان',helpCenter:'💬 مدد',logout:'🚪 لاگ آؤٹ'}
};
var selectedLang = localStorage.getItem('rekavo_lang')||'English';
var _lastCartCnt = localStorage.getItem('rekavo_last_cart') || '0';
window.LANGUAGES = LANGUAGES;
window.TRANSLATIONS = TRANSLATIONS;
window.selectedLang = selectedLang;
function getTrans(k){let t=TRANSLATIONS[window.selectedLang]||TRANSLATIONS['English'];return t[k]||TRANSLATIONS['English'][k]||k;}
window.getTrans = getTrans;
function applyTranslations(){
 let t=TRANSLATIONS[window.selectedLang]||TRANSLATIONS['English'];
 let gEl = document.getElementById('pGridCart');
 let cEl = document.getElementById('cartCount');
 if(gEl && gEl.innerText && gEl.innerText!== '0') { _lastCartCnt = gEl.innerText; window._lastCartCnt = gEl.innerText; }
 if(cEl && cEl.innerText && cEl.innerText!== '0') { _lastCartCnt = cEl.innerText; window._lastCartCnt = cEl.innerText; }
 let savedGridCart = _lastCartCnt;
 let savedCartCount = cEl? cEl.innerText : _lastCartCnt;
 if(savedCartCount === '0' && _lastCartCnt!== '0') savedCartCount = _lastCartCnt;
 document.querySelectorAll('[data-i18n]').forEach(el=>{
  let k=el.getAttribute('data-i18n');
  if(el.id==='pGridCart'||el.id==='cartCount')return;
  if(t[k]){
   if(k==='myCart'){
     el.innerHTML=`${t[k]} (<span id="pGridCart">${savedGridCart}</span>)`;
   } else if(el.closest && el.closest('.bottom-nav')){
   } else el.innerText=t[k];
  }
 });
 document.querySelectorAll('.bottom-nav [data-i18n="home"]').forEach(e=>e.innerText=getTrans('home'));
 document.querySelectorAll('.bottom-nav [data-i18n="account"]').forEach(e=>e.innerText=getTrans('account'));
 document.querySelectorAll('.bottom-nav [data-i18n="cart"]').forEach(e=>e.innerText=getTrans('cart'));
 if(document.getElementById('pGridCart')) document.getElementById('pGridCart').innerText = savedGridCart;
 if(document.getElementById('cartCount')) document.getElementById('cartCount').innerText = savedCartCount;
}
window.applyTranslations = applyTranslations;
document.addEventListener('DOMContentLoaded', ()=>{ applyTranslations(); });
