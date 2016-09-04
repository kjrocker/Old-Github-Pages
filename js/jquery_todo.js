$( document ).ready(function() { // Only loads when the DOM is ready

  function appendItem(i){
    var liString = "<li>" + i + "</li>"
    $('.jquery-todo ul').append(liString);  // Appends the literal HTML `liString` to `ul`
  }

  // JQuery seems to lack a convenient strikethrough method,
  // so I've left this code alone. It's not particuarly verbose anyway.
  function removeItem(i){
    i.innerHTML = i.innerHTML.strike();
    setTimeout(function(){ i.remove(); }, 1000);
  }

  $('#jqueryButton').on("click", function(e){ // Set EventListener on myButton
    var newI = $("#jqueryField").val();   // Get value of input box `#myField`
    appendItem(newI);
  });

  $('.jquery-todo ul').on('click', function(e){ // Set EventListener on the whole list
    if(e.target.tagName === "LI"){
      removeItem(e.target);
    }
  });

});
