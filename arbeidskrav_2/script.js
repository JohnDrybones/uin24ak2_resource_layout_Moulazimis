function showContent(category) {
    const selectedCategory = resources.find(item => item.category === category);
    
    if (selectedCategory) {
        const contentBox = document.querySelector('.content-box');
        const contentHTML = `
            <h2>${selectedCategory.category}</h2>
            <p>${selectedCategory.text}</p>
            <ul>
                ${selectedCategory.sources.map(source => `<li><a href="${source.url}" target="_blank">${source.title}</a></li>`).join('')}
            </ul>
        `;
        contentBox.innerHTML = contentHTML;
    }
}
