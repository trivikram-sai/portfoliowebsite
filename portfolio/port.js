let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains_behind = document.getElementById('mountains_behind');
let text = document.getElementById('text');
let btn = document.getElementById('btn');
let mountains_front = document.getElementById('mountains_front');
let header = document.querySelector('header');

window.addEventListener('scroll', function() {
    let value = window.scrollY;
    stars.style.left = value * 0.25 + 'px';
    moon.style.top = value * 0.50+ 'px';
    mountains_behind.style.top = value * 0.25 + 'px';
    mountains_front.style.top = value * 0 + 'px';
    text.style.marginRight = value * 4 + 'px';
    btn.style.marginRight = value * 1.5 + 'px';
    // header.style.top = value * 0.5 + 'px';
});

// Add your JavaScript code here
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const formData = new FormData(form);
  
      const name = formData.get("name");
      const email = formData.get("email");
      const message = formData.get("message");
  
      // Example: You can use this data to send an email or perform other actions
      console.log("Name:", name);
      console.log("Email:", email);
      console.log("Message:", message);
  
      // Reset the form after submission
      form.reset();
    });
  });
  