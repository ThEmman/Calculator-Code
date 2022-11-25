//! Model
//gives all operator and number btns onclick func
function addsEventToNumBtns(){
   let btn = document.getElementsByClassName('numBtn');
   for(let num = 0;num < btn.length;num++){
      let currentBtn = btn[num];
      currentBtn.onclick = takeNumber;
   }
}
function addsEventToOpBtns(){
   let btn = document.getElementsByClassName('opBtn');
   for(let num = 0;num < btn.length;num++){
      let currentBtn = btn[num];
      currentBtn.onclick = takeOp;
   }
}
addsEventToNumBtns();
addsEventToOpBtns();

// takes button and adds to totalinputs
let totalInputs = '';
function takeNumber(event){
   operator = false;
   let button = event.target;
   let digit = button.innerText;
   totalInputs += digit
   renderDigit(totalInputs);
};
// takes operator and changes opPresses var 
let operator = false;
function takeOp(event){
   let button = event.target;
   let EqualsIcon;
   if (button.innerText == '='){
      EqualsIcon = button.innerText;
      basicCalc(totalInputs);
   }
   else{
      if (operator != true){
         operator = !(operator);
         OpIcon = button.innerText;
         totalInputs += OpIcon;
         renderDigit(totalInputs);
      }
   }
}
//renders digts or operator onto screen
function renderDigit(Inputs){
   document.getElementsByTagName('span')[0].innerHTML = '';
   let span = document.getElementsByTagName('span')[0];
   span.innerText = Inputs;
}
// clearButton
function clearButton(){
   document.getElementsByTagName('span')[0].innerHTML = '';
   totalInputs = '';
   operator = false;
}
// calculator function
function basicCalc(expression){
   console.log('in func');
   let result = eval(expression);
   renderDigit(Number(result).toFixed(2));
   totalInputs = '';
   totalInputs += result;
   // just incase to reload page.
   /*let reloads = () => window.location.reload()
   setTimeout(reloads,30000);*/ 
}