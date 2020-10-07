var thanksPage = document.querySelector(".thanksSubscribe");
var phoneForm = document.querySelector(".fullForm");

thanksPage.addEventListener('click', event =>{
  thanksPage.classList.remove("noDisplay");
});

phoneForm.addEventListener('click', event =>{
  phoneForm.classList.add('noDisplay');
});
