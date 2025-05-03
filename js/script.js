window.onload = function() {
  var main = document.getElementById("main");
  if (main) {
      main.style.animation = "img 1s ease-in-out";
  }
  var navbar = document.getElementById("navbar");
  if (navbar) {
      navbar.style.animation = "none";
      navbar.offsetHeight; 
      navbar.style.animation = "navbar 1s ease-in-out";
  }
  var header = document.getElementById("header");
  if (header) {
      header.style.animation = "header 1s ease-in-out";
  } 
  var img = document.getElementById("img");
  if (img) {
      img.style.animation = "img 1s ease-in-out";
  }
};

function toggleNavbar(collapseID) {
  const element = document.getElementById(collapseID);
  if (element) {
    element.classList.toggle("hidden");
    element.classList.toggle("flex");
  }
}

document.addEventListener("DOMContentLoaded", function() {
  switchTab('klima'); 
});

function switchTab(selected) {
  const tabs = ["klima", "pompy", "piece", "pelet", "fotowoltaika", "rekuperacja"];
  tabs.forEach(tab => {
      const section = document.getElementById(tab);
      const button = document.getElementById("button-" + tab);

      if (tab === selected) {
          section.style.display = "flex";
          section.style.animation = "uslugi 1s ease-in-out";
          button.style.background = "#2cbf53";
          button.style.color = "white";
      } else {
          section.style.display = "none";
          button.style.background = "#E5E7EB";
          button.style.color = "black";
      }
  });
}
document.addEventListener("DOMContentLoaded", function () {
  const revealElements = document.querySelectorAll(".reveal");

  function revealOnScroll() {
    const windowHeight = window.innerHeight;
    revealElements.forEach((el) => {
      const elementTop = el.getBoundingClientRect().top;
      const revealPoint = 350;

      if (elementTop < windowHeight - revealPoint) {
        el.classList.add("active");
      } else {
        el.classList.remove("none"); 
      }
    });
  }

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();
});

