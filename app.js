document.addEventListener('DOMContentLoaded',()=>{
const form=document.getElementById('participation-form');
if(!form)return;
const completion=document.getElementById('completion');
form.addEventListener('submit',(event)=>{
 event.preventDefault();
 if(!form.reportValidity())return;
 // DEMO ONLY: no network request, no storage of answers.
 completion.hidden=false;
 completion.scrollIntoView({behavior:'smooth',block:'center'});
});
});
