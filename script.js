document.addEventListener('DOMContentLoaded', (event) => {
    const parent = document.getElementById('parent');
    let draggedItem = null;

    parent.addEventListener('dragstart', (e) => {
        draggedItem = e.target;
        e.target.classList.add('selected');
    });

    parent.addEventListener('dragend', (e) => {
        e.target.classList.remove('selected');
    });

    parent.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    parent.addEventListener('drop', (e) => {
        e.preventDefault();
        if (e.target.classList.contains('image') && e.target !== draggedItem) {
            swapImages(draggedItem, e.target);
        }
    });

    function swapImages(img1, img2) {
        const tempBackground = img1.style.backgroundImage;
        const tempId = img1.id;

        img1.style.backgroundImage = img2.style.backgroundImage;
        img1.id = img2.id;

        img2.style.backgroundImage = tempBackground;
        img2.id = tempId;
    }
});