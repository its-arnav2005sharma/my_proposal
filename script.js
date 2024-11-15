document.addEventListener('DOMContentLoaded', function() {
    let currentPage = 0;  // Start at the first page
    const pages = document.querySelectorAll('.page');  // Get all the pages
    const next1 = document.getElementById('next1');
    const next2 = document.getElementById('next2');
    const next3 = document.getElementById('next3');
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const yesDate = document.getElementById('yesDate');
    const noDate = document.getElementById('noDate');

    // Function to show the current page
    function showPage(pageIndex) {
        pages.forEach((page, index) => {
            if (index === pageIndex) {
                page.classList.add('active');  // Show the page
            } else {
                page.classList.remove('active');  // Hide other pages
            }
        });
    }

    // Initially show the first page
    showPage(currentPage);

    // Show confession page (next button on homepage)
    next1.addEventListener('click', function() {
        currentPage = 1;  // Move to the next page (page 1)
        showPage(currentPage);
    });

    // Show proposal page (next button on confession page)
    next2.addEventListener('click', function() {
        currentPage = 2;  // Move to page 2
        showPage(currentPage);
    });

    // Handle Yes/No for proposal page
    noBtn.addEventListener('click', function() {
        noBtn.style.position = 'absolute';
        noBtn.style.top = `${Math.random() * 80}%`;
        noBtn.style.left = `${Math.random() * 80}%`;
        noBtn.style.transition = 'top 0.5s, left 0.5s';
    });

    yesBtn.addEventListener('click', function() {
        currentPage = 3;  // Move to page 3 (Yes response)
        showPage(currentPage);
    });

    // Handle Date Invitation Yes/No
    yesDate.addEventListener('click', function() {
        alert("YAY! Looking forward to the date! 💖");
        currentPage = 4;  // Move to the final page (page 4)
        showPage(currentPage);
    });

    noDate.addEventListener('click', function() {
        noDate.style.position = 'absolute';
        noDate.style.top = `${Math.random() * 80}%`;
        noDate.style.left = `${Math.random() * 80}%`;
        noDate.style.transition = 'top 0.5s, left 0.5s';
    });

    // Show final message after proposal response (when 'Next' is clicked on response page)
    next3.addEventListener('click', function() {
        currentPage = 4;  // Move to the final page after proposal response
        showPage(currentPage);
    });
});
