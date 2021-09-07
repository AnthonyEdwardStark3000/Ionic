const reasongiven=document.querySelector('#reason');
const amount=document.querySelector('#amount');
const cancel=document.querySelector('#cancel');
const cnfrm=document.querySelector('#cnfrm');
const expensesList=document.querySelector('#expenses-list');
const totalExpensesOutput= document.querySelector('#total-expense');

let totalexpenses=0;
function clear()
{
reasongiven.value='';
amount.value='';
}
cnfrm.addEventListener('click',()=>{
   const enteredreason=reasongiven.value;
   const enteredamount=amount.value;
   if(
       enteredreason.trim().length<=0||
       enteredamount <=0||
       enteredamount.trim().length<=0
   )
   {
       return;
   }
   const newItem= document.createElement('ion-item');
   newItem.textContent = enteredreason+': $' + enteredamount; 
    expensesList.appendChild(newItem);
    totalexpenses += +enteredamount;
    totalExpensesOutput.textContent = totalexpenses;
    clear();

    // cancel.addEventListener('click', clear);
     
});