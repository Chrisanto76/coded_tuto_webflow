const majorButton = document.querySelector(".major-button");

majorButton.onclick = function() {
    alert('Welcome on board!!');
}

function toggleMenu() {
    var navbarCollapse = document.getElementById("navbarCollapse");
    navbarCollapse.classList.toggle("show");
  }
  