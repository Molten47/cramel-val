function myFunction(x) {
    x.classList.toggle("change");
  }
const favoriteBtn = document.getElementById('favorite');
let isFilled = false;

favoriteBtn.addEventListener('click', () => {
    isFilled = !isFilled;
    
    if (isFilled) {
        favoriteBtn.style.fontVariationSettings = "'FILL' 1";
        favoriteBtn.classList.add('text-red-500');
    } else {
        favoriteBtn.style.fontVariationSettings = "'FILL' 0";
        favoriteBtn.classList.remove('text-red-500');
    }
    
    // Add pulse animation
    favoriteBtn.classList.add('animate-pulse');
    setTimeout(() => {
        favoriteBtn.classList.remove('animate-pulse');
    }, 500);
});

function downloadFile() {
    // Create a temporary anchor element
    const link = document.createElement('a');
    
    // Set the file URL - replace this with your actual file path when you add it
    link.href = 'https://docs.google.com/document/d/1QD3b0LkQ9LgiVQldGGdXyCub6lBY7Nif-wrRmYL9QIw/edit?usp=sharing';  // You'll replace this with your file path
    
    // Set suggested filename for the download
    link.download = 'request.pdf';  // You'll replace this with your desired filename
    
    // Append to document
    document.body.appendChild(link);
    
    // Trigger the download
    link.click();
    
    // Clean up
    document.body.removeChild(link);
}
document.addEventListener('DOMContentLoaded', function() {
    const dropdownBtn = document.querySelector('.dropbtn');
    const dropdownContent = document.querySelector('.dropdown-content');
    const aboutContent = document.querySelector('.about-content');
    const reasonsContent = document.querySelector('.reasons-content');
    const closeButtons = document.querySelectorAll('.close-btn');
    const aboutLink = document.querySelector('.about-link');
    const reasonsLink = document.querySelector('.reasons-link');

    dropdownBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        dropdownContent.classList.toggle('show');
    });

    // About Us link functionality
    aboutLink.addEventListener('click', function(e) {
        e.preventDefault();
        dropdownContent.classList.remove('show');
        aboutContent.classList.add('show');
    });

    // Reasons link functionality
    reasonsLink.addEventListener('click', function(e) {
        e.preventDefault();
        dropdownContent.classList.remove('show');
        reasonsContent.classList.add('show');
    });

    // Close button functionality for all sections
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            dropdownContent.classList.remove('show');
            aboutContent.classList.remove('show');
            reasonsContent.classList.remove('show');
        });
    });

    // Close when clicking outside
    document.addEventListener('click', function(e) {
        if (!dropdownContent.contains(e.target) && !dropdownBtn.contains(e.target) && 
            !aboutContent.contains(e.target) && !reasonsContent.contains(e.target)) {
            dropdownContent.classList.remove('show');
            aboutContent.classList.remove('show');
            reasonsContent.classList.remove('show');
        }
    });
});
