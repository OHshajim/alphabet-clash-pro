// Element remover 
function removeElement(ID){
    const Element = document.getElementById(ID);
    Element.classList.add('hidden');
 
 };
 // Element add 
 function addElement(Id){
     const Element = document.getElementById(Id);
    Element.classList.remove('hidden');
 };
//  add hight color and  remove hight color

function AddHiLight(id){
    const Element = document.getElementById(id);
    Element.classList.add('bg-cyan-600')
}
function removeHiLight(id){
    const Element = document.getElementById(id);
    Element.classList.remove('bg-cyan-600')
}

//  gat a letter
 function getLetter(){
    const letterStr = "qwertyuiopasdfghjklzxcvbnm/";
    const letters = letterStr.split('');
    const number = Math.random()*26;
    const index =Math.round(number);
    return letters[index];
 };