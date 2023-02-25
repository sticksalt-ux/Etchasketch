// prompt for number

// 600 / number = width/height property

// number x number = number of squares

function gridSetup() {
    const userInput  = prompt('How many rows/columns do you want?');

    let container = document.querySelector('#container');
    container.classList.toggle('container');
    const wh = 600 / userInput;
    const boxCount = userInput * userInput;

    container.style.gridTemplateColumns = `repeat(auto-fill, minmax(${wh}px, 1fr))`;
    container.style.gridTemplateRows = `repeat(auto-fill, minmax(${wh}px, 1fr))`;

    for (let i = 0; i < boxCount; i++) {
        const gridBox = document.createElement('div');
        gridBox.setAttribute('style', `width: ${wh}; height: ${wh}`);
        gridBox.setAttribute('id', `box${i}`);
        container.appendChild(gridBox);
    }
    
    let preGrid = document.querySelectorAll('.preGrid');
    preGrid.forEach((item) => {
        item.style.display = 'none'
    });
}
