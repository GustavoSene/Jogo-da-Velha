document.addEventListener('DOMContentLoaded',() => {

    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
    
     square.addEventListener('click', handleClick);       


    })
})

   function handleClick(event) {

    let square = event.target;
    let position = square.id;

    if (handleMove(position)) {

     setTimeout(() => {

        alert("Você Venceu");

     },10);

    };

    updateSquares(); 

   } 

    function updateSquares() {

    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
    
    let position = square.id;
    let symbol = board[position];
        restart(state);

        if (symbol != "") {
            
            square.innerHTML = `<div class="${symbol}"></div>`

        }

})

}

function restart(state) {

    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
    
    let position = square.id;
    let symbol = board[position];

    if (state) {
        return playerTime = 0, 
         board = ["","","","","","","","",""],
         gameover = false,
         square.innerHTML = `<div></div>`;
} } )

} 