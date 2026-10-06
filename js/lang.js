const TRANSLATIONS = {
  "English": { "Home": "Home", "Dashboard": "Dashboard", "Profile": "Profile", "Login": "Login", "Register": "Register", "Logout": "Logout" },
  "Hindi": { "Home": "होम", "Dashboard": "डैशबोर्ड", "Profile": "प्रोफाइल", "Login": "लॉगिन", "Register": "रजिस्टर", "Logout": "लॉगआउट" },
  "Hinglish": { "Home": "Home", "Dashboard": "Dashboard", "Profile": "Profile", "Login": "Login", "Register": "Register", "Logout": "Logout" }
};
let currentLang = localStorage.getItem('rekavo_lang') || 'English';
function setLang(code){ localStorage.setItem('rekavo_lang', code); location.reload(); }
function applyLanguage(){
  // data-translate wala
  document.querySelectorAll('[data-translate]').forEach(el=>{
    let key = el.getAttribute('data-translate');
    if(TRANSLATIONS[currentLang][key]) el.innerText = TRANSLATIONS[currentLang][key];
  });
  // auto wala - jisme data-translate nahi bhi hai usko bhi pakad lega
  document.querySelectorAll('a, button, span, div').forEach(el=>{
    let txt = el.innerText.trim();
    if(TRANSLATIONS[currentLang][txt]) el.innerText = TRANSLATIONS[currentLang][txt];
  });
  let s = document.getElementById('langSelector'); if(s) s.value = currentLang;
}
document.addEventListener('DOMContentLoaded', applyLanguage);
