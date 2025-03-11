let initialColor ="#7FFFD4";

function getRandomColor(){
    let letters='0123456789ABCDEF';
    let colors='#';
    for(let i=0;i<6;i++){
        colors += letters[Math.floor(Math.random() * 16)];
    }

    return colors;
}

function setInitialBackground(){
    document.body.style.backgroundColor = initialColor;
    document.getElementById('color-text').textContent = `BackGround Color: ${initialColor}`;
}

function changeBackground(){
    let newColors = getRandomColor();
    document.body.style.backgroundColor = newColors;
    document.getElementById('color-text').textContent = `BackGround Color: ${newColors}`;
}