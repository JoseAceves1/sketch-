const container = document.getElementById('container');
const resetButton = document.getElementById('reset');

// Function to create the grid
function createGrid(size) {
  container.innerHTML = ''; // Clear existing grid
  const squareSize = 960 / size; // Calculate size of each square
  for (let i = 0; i < size * size; i++) {
    const square = document.createElement('div');
    square.classList.add('grid-square');
    square.style.width = `${squareSize}px`; // Use backticks for interpolation
    square.style.height = `${squareSize}px`;
    container.appendChild(square);
  }
}

// Function to generate a random color
function randomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

// Function to enable hover effect
function enableHoverEffect() {
  const squares = document.querySelectorAll('.grid-square');
  squares.forEach(square => {
    square.addEventListener('mouseenter', () => {
      square.style.backgroundColor = randomColor(); // Apply random color
    });
  });
}

// Reset button functionality
resetButton.addEventListener('click', () => {
  let size = parseInt(prompt('Enter new grid size (max 100):'));
  if (size > 100 || size < 1 || isNaN(size)) {
    alert('Please enter a number between 1 and 100.');
    return;
  }
  createGrid(size); // Create the grid with new size
  enableHoverEffect(); // Reapply hover effect
});

// Initial grid setup
createGrid(16);
enableHoverEffect();


