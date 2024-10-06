const divs = document.querySelectorAll('.image');
let draggedDiv = null;

divs.forEach(function(div) {
  // When drag starts
  div.addEventListener('dragstart', function(e) {
    draggedDiv = this;  // Store reference to the dragged element
    e.dataTransfer.effectAllowed = 'move';
    this.classList.add('selected');  // Add visual cue for selected item
  });

  // Allow the drop action by preventing the default handling of dragover
  div.addEventListener('dragover', function(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  });

  // Add visual cue when drag enters a droppable element
  div.addEventListener('dragenter', function(e) {
    this.classList.add('over');
  });

  // Remove visual cue when drag leaves a droppable element
  div.addEventListener('dragleave', function(e) {
    this.classList.remove('over');
  });

  // Handle the drop event
  div.addEventListener('drop', function(e) {
    e.preventDefault();

    // Ensure the dragged element is not dropped on itself
    if (draggedDiv !== this) {
      // Swap the background image of the dragged element and the drop target
      const draggedImage = draggedDiv.style.backgroundImage;
      const targetImage = this.style.backgroundImage;

      // Swap the background images between the two divs
      draggedDiv.style.backgroundImage = targetImage;
      this.style.backgroundImage = draggedImage;
    }

    return false;
  });

  // Cleanup after drag ends
  div.addEventListener('dragend', function(e) {
    divs.forEach(div => {
      div.classList.remove('selected', 'over');  // Remove all visual cues
    });
  });
});
