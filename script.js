document.addEventListener('DOMContentLoaded', (event) => {
    const parent = document.getElementById('parent');
    let draggedItem = null;

    parent.addEventListener('dragstart', (e) => {
        draggedItem = e.target;
        e.target.classList.add('dragging');
        e.dataTransfer.setData('text/plain', e.target.id);
    });

    parent.addEventListener('dragend', (e) => {
        e.target.classList.remove('dragging');
    });

    parent.addEventListener('dragover', (e) => {
        e.preventDefault();
        if (e.target.classList.contains('image') && e.target !== draggedItem) {
            e.target.classList.add('over');
        }
    });

    parent.addEventListener('dragleave', (e) => {
        if (e.target.classList.contains('image')) {
            e.target.classList.remove('over');
        }
    });

    parent.addEventListener('drop', (e) => {
        e.preventDefault();
        if (e.target.classList.contains('image') && e.target !== draggedItem) {
            const draggedId = e.dataTransfer.getData('text/plain');
            const draggedEl = document.getElementById(draggedId);
            swapImages(draggedEl, e.target);
        }
        if (e.target.classList.contains('image')) {
            e.target.classList.remove('over');
        }
    });

    function swapImages(img1, img2) {
        const tempBackground = window.getComputedStyle(img1).backgroundImage;
        const tempId = img1.id;

        img1.style.backgroundImage = window.getComputedStyle(img2).backgroundImage;
        img1.id = img2.id;

        img2.style.backgroundImage = tempBackground;
        img2.id = tempId;
    }
});