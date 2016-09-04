( function(d){

  function appendItem(i){
    var newLI = d.createElement('li');
    newLI.innerHTML = i;
    var list = d.querySelector('ul');
    list.appendChild(newLI);
    return newLI
  }

  function removeItem(i){
    i.innerHTML = i.innerHTML.strike();
    setTimeout(function(){ i.remove(); }, 1000);
  }

  d.querySelector('#vanillaButton').addEventListener("click", function(e){
    var newI = d.querySelector("#vanillaField").value;
    appendItem(newI);
  });

  d.querySelector('ul').addEventListener('click', function(e){
    if(e.target.tagName === "LI"){
      removeItem(e.target);
    }
  });

  // d.getElementById("myField").addEventListener("keyup", function(e) {
  //   e.preventDefault();
  //   if (e.keyCode == 13) {
  //       d.getElementById("myButton").click();
  //   }
  // });

})(document);
