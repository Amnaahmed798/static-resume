function setupToggleButtons() {
    const toggleButtons = document.querySelectorAll<HTMLButtonElement>('button');

    toggleButtons.forEach((button) => {
        button.addEventListener('click', () => {
            // Find the previous sibling element of the button, which should be the content
            const content = button.previousElementSibling as HTMLElement;

            if (content && content.tagName === 'P') {
                // Toggle the visibility of the content
                if (content.style.display === 'none' || content.style.display === '') {
                    content.style.display = 'block';
                    button.textContent = 'Hide content';
                } else {
                    content.style.display = 'none';
                    button.textContent = 'Show content';
                }
            }
        });
    });
}

// Call the function to set up the toggle buttons
setupToggleButtons();
