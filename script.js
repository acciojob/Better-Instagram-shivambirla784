const divs = document.querySelectorAll('.image');
let draggedDiv = null; // The div being dragged

divs.forEach(function (div) {
  // When drag starts
  div.addEventListener('dragstart', function (e) {
    draggedDiv = this; // Store reference to the dragged div
    e.dataTransfer.effectAllowed = 'move';
    this.classList.add('selected'); // Optional: Highlight the selected div
  });

  // Allow dropping
  div.addEventListener('dragover', function (e) {
    e.preventDefault(); // This is necessary to allow a drop
  });

  // Handle drop
  div.addEventListener('drop', function (e) {
    e.preventDefault();

    if (draggedDiv !== this) {
      // Swap the background images of the dragged div and the drop target
      const tempBg = draggedDiv.style.backgroundImage;
      draggedDiv.style.backgroundImage = this.style.backgroundImage;
      this.style.backgroundImage = tempBg;
    }
  });

  // Cleanup after drag ends
  div.addEventListener('dragend', function () {
    divs.forEach(div => {
      div.classList.remove('selected'); // Remove visual highlight
    });
  });
});
