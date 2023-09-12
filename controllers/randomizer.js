function shuffleFlexItems(containerSelector, data) {
    const container = document.querySelector(containerSelector);

    // Use the data to shuffle the items
    const items = Array.from(container.children);

    for (let i = items.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [items[i], items[j]] = [items[j], items[i]];
    }

    container.innerHTML = ''; // Clear the container
    items.forEach(item => container.appendChild(item)); // Re-append shuffled items
}

// Call the function with JSON data
fetch('db.json')
    .then(response => response.json())
    .then(data => {
        shuffleFlexItems('.az-items-container', data);
    })
    .catch(error => console.error('Error loading JSON:', error));
