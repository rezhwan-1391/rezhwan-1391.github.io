const form = document.getElementById('contactForm');
const successMessage = document.getElementById('successMessage');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    successMessage.textContent = "پیام شما با موفقیت ارسال شد! 🎉";
    form.reset();
});
