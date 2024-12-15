
document.addEventListener("DOMContentLoaded", function() {
    
    const products = document.querySelectorAll('.product');
    
  
    products.forEach(product => {
        product.addEventListener('click', function() {
            // Toggle the 'expanded' class to show or hide the paragraph
            this.classList.toggle('expanded');
        });
    });

   
    const productsContainer = document.querySelector('.products');
    
    
    setTimeout(() => {
        productsContainer.classList.add('loaded');
    }, 200); // Delay to ensure page content is ready
});
