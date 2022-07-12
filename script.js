function createBoard(container, boardSize){
    container.innerHTML = '';
    let size = 600/boardSize;
    for(i=0; i< boardSize*boardSize; i++){
        let field = document.createElement('div')
        field.style.width = size + 'px';
        field.style.height = size + 'px';
        field.classList.add('field');
        container.appendChild(field);
    }
    let fields = document.querySelectorAll('.field');
    for (const field of fields){
        field.addEventListener('mouseenter', () => {
            field.style.backgroundColor = color.value;
        })    
    }
}

let container = document.querySelector('.container');

createBoard(container, 16);

set.addEventListener('click', () => {
    let boardSize = Number(document.getElementById('sizeValue').value);
    createBoard(container, boardSize);
    }
)

clear.addEventListener('click', () => {
    let fields = document.querySelectorAll('.field');
    for (const field of fields){
        field.style.backgroundColor = '#FDF0D5';
    }
})
