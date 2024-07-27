// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });

        // Hide menu after clicking a link
        document.querySelector('.nav-links').classList.remove('open');
    });
});

// Dark mode toggle
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

// Skills Chart
var ctx = document.getElementById('skillsChart').getContext('2d');
var skillsChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Python', 'Django', 'JavaScript', 'HTML/CSS', 'SQL','C','C++','PASCAL','VISUAL BASIC'],
        datasets: [{
            label: 'Skill Level',
            data: [85, 95, 75, 98, 90, 90, 90, 70, 80],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(199, 199, 199, 0.2)',
                'rgba(233, 30, 99, 0.2)',
                'rgba(0, 150, 136, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(199, 199, 199, 1)',
                'rgba(233, 30, 99, 1)',
                'rgba(0, 150, 136, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Hamburger menu toggle
document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('open');
});

// Toggle dark mode
document.querySelector('.toggle-dark-mode').addEventListener('click', toggleDarkMode);
