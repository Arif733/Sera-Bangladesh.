

// Toggle ber start here 

    document.addEventListener('DOMContentLoaded', function() {
        const toggleBtn = document.querySelector('.toggle-btn');
        const navMenu = document.querySelector('.navber-menu ul');

        function handleResize() {
            if (window.innerWidth > 992) {
                navMenu.style.display = 'flex';
            } else {
                navMenu.style.display = 'none';
            }
        }

        toggleBtn.addEventListener('click', function() {
            if (navMenu.style.display === 'block' || navMenu.style.display === 'flex') {
                navMenu.style.display = 'none';
            } else {
                navMenu.style.display = 'block';
            }
        });

        window.addEventListener('resize', handleResize);

        // Initial check
        handleResize();
    });
// Toggle ber ends here 







//Image slider start here 
document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll('.img-slider .slide');
    const buttons = document.querySelectorAll('.img-slider .navigation .btn');
    let currentIndex = 0;
    const slideInterval = 10000; // 6 seconds

    // Initially hide all slides except the first one
    for (let i = 1; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    // Load the active button index from localStorage
    const activeButtonIndex = localStorage.getItem('activeButtonIndex');
    if (activeButtonIndex !== null) {
        currentIndex = parseInt(activeButtonIndex, 10);
        showSlide(currentIndex);
    } else {
        showSlide(currentIndex);
    }

    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            currentIndex = index;
            showSlide(currentIndex);
            // Save the active button index to localStorage
            localStorage.setItem('activeButtonIndex', currentIndex);
        });
    });

    // Automatically switch to the next slide after a few seconds
    setInterval(() => {
        currentIndex = (currentIndex +1) % slides.length;
        showSlide(currentIndex);
        // Save the active button index to localStorag
        localStorage.setItem('activeButtonIndex', currentIndex);
    }, slideInterval);

    function showSlide(index) {
        slides.forEach(slide => slide.style.display = 'none');
        slides[index].style.display = 'block';
        buttons.forEach(btn => btn.classList.remove('active'));
        buttons[index].classList.add('active');
    }
});

document.addEventListener("DOMContentLoaded", function() {
    var demoButton = document.querySelector(".protfolio-end .btn");
    if (demoButton) {
        demoButton.addEventListener("click", function() {
            alert("Demo request initiated!");
            // You can add more functionality here, like opening a form or sending a request
        });
    }
});
// Image slider ends here 


// document.addEventListener('DOMContentLoaded', function() {
//     const slides = document.querySelectorAll('#slider input[type="radio"]');
//     let currentIndex = 0;
//     const slideInterval = 5000; // Slide interval in milliseconds (5 seconds)

//     function nextSlide() {
//         slides[currentIndex].checked = false;
//         currentIndex = (currentIndex + 1) % slides.length;
//         slides[currentIndex].checked = true;
//     }

//     // Set the auto-slide interval
//     setInterval(nextSlide, slideInterval);
// });



// Disable copying text
// document.addEventListener('copy', function(e) {
//     e.preventDefault();
//     alert('Copying text is not allowed on this website.');
// }, false);

// // Disable right-click context menu
// document.addEventListener('contextmenu', function(e) {
//     e.preventDefault();
// }, false);

// // Disable key combinations commonly used for copying text
// document.addEventListener('keydown', function(e) {
//     if (e.ctrlKey && (e.key === 'c' || e.key === 'u' || e.key === 'a')) {
//         e.preventDefault();
//     }
//     if (e.key === 'PrintScreen') {
//         e.preventDefault();
//     }
// }, false);
