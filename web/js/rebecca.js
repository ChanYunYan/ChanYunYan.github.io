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

// modal
const popupButton = document.querySelector('.popup');
const modal = document.querySelector('.modal');
const closeButton = document.querySelector('.close');

popupButton.addEventListener('click', (event) => {
    event.preventDefault();
    modal.style.display = 'block';
});

closeButton.addEventListener('click', (event) => {
    event.preventDefault();
    modal.style.display = 'none';
});