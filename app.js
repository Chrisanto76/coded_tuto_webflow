const majorButton = document.querySelector(".major-button");

majorButton.onclick = function() {
    alert('Welcome on board!!');
}

function toggleMenu() {
    var navbarCollapse = document.getElementById("navbarCollapse");
    navbarCollapse.classList.toggle("show");
  }
  
function fadeIn(element) {
    let opacity = 0;
    let interval = setInterval(function() {
        if (opacity < 1) {
            opacity += 0.3;
            element.style.opacity = opacity;
        } else {
            clearInterval(interval);
        }
    }, 200);
}

let image = document.getElementById("myImage");
fadeIn(image);