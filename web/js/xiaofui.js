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

/*adoptionpage*/
/*hover dog*/
const dogElements = document.querySelectorAll ('.dog');
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
