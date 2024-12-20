//Dear Me
//I'm so sorry about my code
// It's Terrible, i know beacause i have a headache, so i have been still learning, i love tech
//Tomorrow, i will improve it !
// And my english, it's terrible too

//Button Submit Main
const buttonSubmit = document.querySelector('.button__submit');
//Text area
const getText = document.querySelector('input[type="text"]');
//Button Submit
buttonSubmit.addEventListener('click', runButtonSubmit);
buttonSubmit.addEventListener('mouseenter', checkText);
//Button Submit Function
function runButtonSubmit(e){
    e.preventDefault();
    if(getText.value.trim() === ''){
        buttonSubmit.style.cursor = 'not-allowed';
        return;
    }
    const textInput = getText.value.trim(); // resolve space left and right
    createItem(textInput);
    getText.addEventListener('focus',resetTextAdded); //Reset Item added
}
//Reset text after add
function resetTextAdded(){
  getText.value = '';
}
//Check Type text
function checkText(){
    if(getText.value === '' || getText.value.trim().length === 0){ 
        buttonSubmit.style.cursor = 'not-allowed';
        getText.addEventListener('focus',resetTextAdded); //Reset Item added
        return;
    }else{
        buttonSubmit.style.cursor = 'pointer';
    }
}
// Take ul 
const itemList = document.querySelector('.itemList');
//Create Task
function createItem(textInput){
    const template = `
       <li class="itemAdded">
          
          <div class="container__button_done">
          <button type="button" class="button__general button__done" title="Done">
          </button>
        </div>

        <div class="container__text">
          <p class="textItem">${textInput}</p>
        </div>

          <div class="container__button__rm-im">
          <button
          type="button"
          class=" button__important button__general" title="Set as important">  
    </button>

          <button type="button" class="button__remove button__general remove__task" title="Delete">
          </button>
        </div>

        </li>
    `;
    itemList.insertAdjacentHTML('afterbegin', template);
}
//Delete Item, Using Delegation
itemList.addEventListener('click', deleteFunction);
// Enable Delete Function
function deleteFunction(event){ // take event object , listen event from child
    if(event.target.matches('.button__remove')){
      const parent = event.target.closest('li');
      confirmRemove(parent);
    }
}
//Done Task
//Completed alert
const completed = document.querySelector('.completed');
//Get List Done
const doneList = document.querySelector('.itemListDone');
// Done Task Function
itemList.addEventListener('click', doneFunction);
function doneFunction(event){ // take event object , listen event from child
  if(event.target.matches('.button__done')){
      event.target.classList.add('done__task');
      const parent = event.target.closest('li');
    

      addIntoListDone(parent);
    }
  } 
//Add into done list
function addIntoListDone(item){
    doneList.appendChild(item);
}
//check completed
function completedSide(lengthList){
  if(lengthList < 1){
    completed.style.opacity = 1;
  }
}
//Delete Done, Using Delegation
doneList.addEventListener('click', deleteFunction);
// Enable Delete Function
function deleteFunction(event){ // take event object , listen event from child
    if(event.target.matches('.remove__task')){
      const parent = event.target.closest('li');
      confirmRemove(parent);
    }
}
//Check
function confirmRemove(item){
  if(confirm('Are you sure ?')){
      item.remove();
  }
}
