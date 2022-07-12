function createBoard(container, boardSize){
    for(i=0; i< boardSize*boardSize; i++){
        let field = document.createElement('div')
        field.classList.add('field');
        container.appendChild(field);
    }
}

let container = document.querySelector('.container');

createBoard(container, 16);

let fields = document.querySelectorAll('.field')

for (const field of fields){
    field.addEventListener('mouseenter', () => {
        field.style.backgroundColor = 'black';
    })    
}