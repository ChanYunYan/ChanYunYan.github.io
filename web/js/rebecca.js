const dogElements = document.querySelectorAll('.dog');
dogElements.forEach(element => {
    // mouse over
    element.addEventListener('mouseover', () => {
        element.style.transform = 'scale(1.1)';
        element.style.cursor = 'pointer';
        element.style.transition = '0.3s ease-in-out';
    });

    // mouse out 
    element.addEventListener('mouseout', () => {
        element.style.transform = 'scale(1)';
    });
});

const dog2Elements = document.querySelectorAll('.dog2');
dog2Elements.forEach(element => {
    // mouse over
    element.addEventListener('mouseover', () => {
        element.style.transform = 'scale(1.1)';
        element.style.cursor = 'pointer';
        element.style.transition = '0.3s ease-in-out';
    });

    // mouse out 
    element.addEventListener('mouseout', () => {
        element.style.transform = 'scale(1)';
    });
});

const dog3Elements = document.querySelectorAll('.dog3');
dog3Elements.forEach(element => {
    // mouse over
    element.addEventListener('mouseover', () => {
        element.style.transform = 'scale(1.1)';
        element.style.cursor = 'pointer';
        element.style.transition = '0.3s ease-in-out';
    });

    // mouse out 
    element.addEventListener('mouseout', () => {
        element.style.transform = 'scale(1)';
    });
});

const catElements = document.querySelectorAll('.cat');
catElements.forEach(element => {
    // mouse over
    element.addEventListener('mouseover', () => {
        element.style.transform = 'scale(1.1)';
        element.style.cursor = 'pointer';
        element.style.transition = '0.3s ease-in-out';
    });

    // mouse out 
    element.addEventListener('mouseout', () => {
        element.style.transform = 'scale(1)';
    });
});

const othersElements = document.querySelectorAll('.others');
othersElements.forEach(element => {
    // mouse over
    element.addEventListener('mouseover', () => {
        element.style.transform = 'scale(1.1)';
        element.style.cursor = 'pointer';
        element.style.transition = '0.3s ease-in-out';
    });

    // mouse out 
    element.addEventListener('mouseout', () => {
        element.style.transform = 'scale(1)';
    });
});

const joinbuttons = document.querySelectorAll('.popup');
const joinmodals = document.querySelectorAll('.popuppg');
const closebuttons = document.querySelectorAll('.close');

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