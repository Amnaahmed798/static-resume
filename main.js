function setupToggleButtons() {
    var toggleButtons = document.querySelectorAll('button');
    toggleButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            // Find the previous sibling element of the button, which should be the content
            var content = button.previousElementSibling;
            if (content && content.tagName === 'P') {
                // Toggle the visibility of the content
                if (content.style.display === 'none' || content.style.display === '') {
                    content.style.display = 'block';
                    button.textContent = 'Hide content';
                }
                else {
                    content.style.display = 'none';
                    button.textContent = 'Show content';
                }
            }
        });
    });
}
// Call the function to set up the toggle buttons
setupToggleButtons();
