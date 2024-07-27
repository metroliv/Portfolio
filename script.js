document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

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
                        'rgba(153, 102, 255, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)'
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
    