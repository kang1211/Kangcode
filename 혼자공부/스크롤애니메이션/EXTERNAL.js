document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", revealOnScroll);

  function revealOnScroll() {
    var elements = document.querySelectorAll(".scroll-animation");
    for (var i = 0; i < elements.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = elements[i].getBoundingClientRect().top;
      var elementHeight = elements[i].offsetHeight;

      if (elementTop < windowHeight - elementHeight / 2) {
        elements[i].style.opacity = "1";
      }
    }
  }
});
