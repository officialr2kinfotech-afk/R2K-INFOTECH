const TRANSLATIONS = { /* tera sara translation object */ };

let currentLang = localStorage.getItem('rekavo_lang') || 'English';
function setLang(code){
  localStorage.setItem('rekavo_lang', code);
  location.reload();
}
function applyLanguage(){
  document.querySelectorAll('[data-translate]').forEach(el=>{
    el.innerText = TRANSLATIONS[currentLang][el.getAttribute('data-translate')] || el.innerText;
  });
  document.getElementById('currentLang').innerText = currentLang;
}
document.addEventListener('DOMContentLoaded', applyLanguage);
