(function(){

  var a = document.querySelector( '#todoList' ),
      form = document.querySelector( 'form' ),
      field = document.querySelector( '#addTodoItem' );
    
  form.addEventListener( 'submit', function( ev ) {
    a.innerHTML += '<li>' + field.value + '</li>';
    field.value = '';
    field.focus();
    storage();
    ev.preventDefault();
  }, false);

  a.addEventListener( 'click', function( ev ) {
    var x = ev.target;
    if ( x.tagName === 'LI' ) {
      if ( x.classList.contains( 'done' ) ) {
        x.parentNode.removeChild( x );
      } else {  
        x.classList.add( 'done' );
      }
      storage();
    };
    ev.preventDefault();
  }, false);

  document.addEventListener( 'DOMContentLoaded', fetch, false);
  
  function storage() {
    localStorage.todoList = a.innerHTML;
  };

  function fetch() {
    if ( localStorage.todoList ) {
      a.innerHTML = localStorage.todoList;
    }
  };

})();