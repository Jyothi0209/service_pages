document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.grid-item');

    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            alert('Button clicked: ' + button.textContent);
        });
    });
});