/*homepage*/
/*hover categotries*/
const alignElements = document.querySelectorAll('.align');
alignElements.forEach(element => {
  // mouse over
  element.addEventListener('mouseover', () => {
    element.style.transform = 'scale(1.1)';
    element.style.cursor = 'pointer';
  });

  //mouse out 
  element.addEventListener('mouseout', () => {
    element.style.transform = 'scale(1)';
  });
});

/*moodal join*/
const joinbuttons = document.querySelectorAll('.joinbutton');
const joinmodals = document.querySelectorAll('.form');
const closebuttons = document.querySelectorAll('.close-modal');

// Add event listeners to each join button
joinbuttons.forEach((button, index) => {
  button.addEventListener('click', (event) => {
    event.preventDefault();
    joinmodals[index].style.display = 'block';
  });
});

closebuttons.forEach((closebutton, index) => {
  closebutton.addEventListener('click', (event) => {
    event.preventDefault();
    joinmodals[index].style.display = 'none';
  });
});


/*modal booking*/
const openmodal = document.getElementById('openModal');
const modal = document.getElementById('successmodal');
const closemodal = document.querySelector('.closemodal');

openmodal.addEventListener('click', (event) => {
  event.preventDefault();
  modal.style.display = 'block'; // Show modal
});

closemodal.addEventListener('click', (event) => {
  event.preventDefault();
  modal.style.display = 'none'; // Close modal
});

/*adoptionpage*/
/*hover dog*/
const dogElements = document.querySelectorAll('.dog');
dogElements.forEach(element => {
  // mouse over
  element.addEventListener('mouseover', () => {
    element.style.transform = 'scale(1.1)';
    element.style.cursor = 'pointer';
    element.style.transition = '0.3s ease-in-out';
  });

  //mouse out 
  element.addEventListener('mouseout', () => {
    element.style.transform = 'scale(1)';
  });
});
