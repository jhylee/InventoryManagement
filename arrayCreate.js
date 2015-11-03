var array = []; 

//var name = "";
//var isOrigin = false;
//array.push({name: "test1", isOrigin: true, next: false});
//array.push({name: "test2", isOrigin: false, next: false});
//document.getElementById("demo").innerHTML = array[1].name;
//document.getElementById("demo").innerHTML = array[1].isOrigin;

function createSupplyChain(){
  ' use strict';

  var processName = document.getElementById('name');
  var isOrigin = document.getElementById('isOrigin');
  var hasNext = document.getElementById('hasNext');

  // Reference to where the output goes:
  var output = document.getElementById('output');
  // Output message
  var message = '';

  if (processName.value && isOrigin.value && hasNext.value){
    array.push({name: processName.value, isOrigin: isOrigin.value, hasNext: hasNext.value});

  message = '<h1>Your current supply chain is: </h1>';
  for (var i = 0, count = array.length; i < count; i++) {
    message += '<li><span>' + array[i].processName + '</span></span> '
    + array[i].isOrigin + '</span><span>' + array[i].hasNext + '</span></li>';
  }

  message += '</ol>';
  output.innerHTML = message;
}
return false;

} // end of createSupplyChain() Function



// Initial setup:
function init() {
    'use strict';
    document.getElementById('formSubmit').onsubmit = createSupplyChain;
} // End of init() function.


window.onload = init;