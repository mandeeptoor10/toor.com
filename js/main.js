const hero = document.querySelector('.hero');
const heroContainer = document.querySelector('.hero-container');
const heroTitle = document.querySelector('.hero-container h1');
const heroDescription = document.querySelector('.hero-container p');

window.addEventListener('scroll', function() {
  let scrollPosition = window.pageYOffset;
  hero.style.backgroundPositionY = scrollPosition * 0.7 + 'px';
  heroTitle.style.transform = 'translateY(' + scrollPosition * 0.5 + 'px)';
  heroDescription.style.transform = 'translateY(' + scrollPosition * 0.2 + 'px)';
});
const teamMembers = document.querySelectorAll('.team-member img, .team-member2 img');

teamMembers.forEach(member => {
  member.addEventListener('click', () => {
    alert(member.nextElementSibling.textContent);
  });
});
const form = document.getElementById("contact-form");
const confirmationMessage = document.getElementById("confirmation-message");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "/send-email");
  xhr.onload = () => {
    if (xhr.status === 200) {
      confirmationMessage.textContent = "Thank you for your message!";
      form.reset();
    } else {
      confirmationMessage.textContent = "There was an error sending your message. Please try again later.";
    }
  };
  xhr.send(formData);
});