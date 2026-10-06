const TRANSLATIONS = {
  "English": {
    "Home": "Home",
    "Dashboard": "Dashboard",
    "Profile": "Profile",
    "Login": "Login",
    "Register": "Register",
    "Logout": "Logout"
  },
  "Hindi": {
    "Home": "होम",
    "Dashboard": "डैशबोर्ड",
    "Profile": "प्रोफाइल",
    "Login": "लॉगिन",
    "Register": "रजिस्टर",
    "Logout": "लॉगआउट"
  },
  "Hinglish": {
    "Home": "Home",
    "Dashboard": "Dashboard",
    "Profile": "Profile",
    "Login": "Login",
    "Register": "Register",
    "Logout": "Logout"
  }
};

let currentLang = localStorage.getItem('rekavo_lang') || 'English';

function setLang(code){
  localStorage.setItem('rekavo_lang', code);
  location.reload();
}

function applyLanguage(){
  document.querySelectorAll('[data-translate]').forEach(el=>{
    let key = el.getAttribute('data-translate');
    if(TRANSLATIONS[currentLang] && TRANSLATIONS[currentLang][key]){
      el.innerText = TRANSLATIONS[currentLang][key];
    }
  });
  let sel = document.getElementById('langSelector');
  if(sel) sel.value = currentLang;
}

document.addEventListener('DOMContentLoaded', applyLanguage);
