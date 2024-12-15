// Script to handle the show/hide animation of paragraphs
document.querySelectorAll('.cv-topic').forEach(topic => {
    topic.addEventListener('click', () => {
        topic.classList.toggle('open');
    });
});
