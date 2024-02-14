// Element remover 
function removeElement(ID){
    const Element = document.getElementById(ID);
    Element.classList.add('hidden');
 
 };
 // Element add 
 function addElement(Id){
     const Element = document.getElementById(Id);
    Element.classList.remove('hidden');
 }