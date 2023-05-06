
const squares = document.querySelectorAll('.square');

let isDragging = false;
let mouseX = 0;
let mouseY = 0;
let offsetX = 0;
let offsetY = 0;
let draggedSquare = null;

squares.forEach(square => {
  square.addEventListener('mousedown', handleMouseDown);
  square.addEventListener('mouseup', handleMouseUp);
  square.addEventListener('mousemove', handleMouseMove);
});


function handleMouseDown(event) {
 
  isDragging = true;
  mouseX = event.clientX;
  mouseY = event.clientY;
  offsetX = event.target.offsetLeft;
  offsetY = event.target.offsetTop;
  draggedSquare = event.target;

  
  draggedSquare.classList.add('dragging');
}

function handleMouseUp() {
  if (draggedSquare) {
    
    draggedSquare.classList.remove('dragging');

    
    isDragging = false;
    draggedSquare = null;
  }
}

function handleMouseMove(event) {
  if (isDragging && draggedSquare) {
    
    const deltaX = event.clientX - mouseX;
    const deltaY = event.clientY - mouseY;
    const newX = offsetX + deltaX;
    const newY = offsetY + deltaY;

   
    draggedSquare.style.left = newX + 'px';
    draggedSquare.style.top = newY + 'px';
  }
}


document.body.addEventListener('drop', handleDrop);


document.body.addEventListener('dragover', event => event.preventDefault());


function handleDrop(event) {

  const droppedSquare = document.querySelector('.dragging');


  if (droppedSquare) {
    droppedSquare.style.left = event.clientX + 'px';
    droppedSquare.style.top = event.clientY + 'px';
  }
}
