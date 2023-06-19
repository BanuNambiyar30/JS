function fun1() {
    alert('Button clicked!');
  }

  function addEvent() {
    myButton.addEventListener('click', fun1);
    alert('Event listener added!');
  }

  function remEvent() {
    myButton.removeEventListener('click', fun1);
    alert('Event listener removed!');
  }