// animate skill bars on the skills page
var bars = document.querySelectorAll('.skill-fill');
bars.forEach(function(bar) {
    var width = bar.getAttribute('data-width');
    bar.style.width = width + '%';
});

// contact form submit
var form = document.getElementById('contactForm');
if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        document.getElementById('successMsg').style.display = 'block';
        form.reset();
    });
}
