//variable to display value on the calculator display screen
var displayvalue="";
//function
//append or add values to the display screen
function appendvalue(value){
  //concatenate or join
  displayvalue +=value;
  //update the value shown on the screen
  document.getElementById('display').value=displayvalue;
}

//function
//to clear display or reset values on the display
function cleardisplay(){
  displayvalue="";
  document.getElementById('display').value=displayvalue;
}

//function
//clear entry 12345
function cleardisplayentry(){
  displayvalue=displayvalue.slice(0,-1);
  document.getElementById('display').value=displayvalue;
}
//function
//calculate
//evaluation
function calculate(){
  //eval - evaluate expression
  
  try{
    //perform the actual calculation
    displayvalue=eval(displayvalue); //5+5
    //display the final calculation results
  document.getElementById('display').value=displayvalue;
  }
  //(+*/78/%5) -- error
  catch(error){
    alert("Invalid values/error in calculation.");
    clear
  }
}