var box = document.getElementById('display');
// display is the ID for calculator screen.

function toDisplay(x){
  // Set the value buttons on the screen.
  box.value += x;
  if(x === 'c'){
    // Set the clear button.
    box.value = '';
  }
}

function answer(){
  x = box.value;
  x = eval(x);
  // Perform the calculation and set the result on the screen.
  box.value = x;
}

  function percent(){
    x = box.value;
    x = eval(x * 0.01);
    box.value = x;
  }
  
  function backspace(){
    var screenValue = box.value;
    var len = screenValue.length - 1;
    var CE = screenValue.substring(0, len);
    box.value = CE;
  }