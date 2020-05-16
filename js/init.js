var headerPos = document.querySelector(".header").offsetTop;
var init = function () {
   var bars = document.querySelector(".bars"),
      times = document.querySelector(".times"),
      linksMenu = document.querySelector(".menu");
   var radios = document.getElementsByName('filter');
   var projects = document.getElementsByClassName('port-entry');
   var value;

   bars.addEventListener("click", function () {
      if (linksMenu.classList.contains("menu-translate")) {
         linksMenu.classList.remove("menu-translate");
         document.querySelector(".header").style.height = "100vh";
      } else {
         linksMenu.classList.add("menu-translate");
         document.querySelector(".header").style.height = "75px";
      }

   });

   for (var k = 0; k < radios.length; k++) {
      radios[k].addEventListener("click", function () {
         for (var i = 0, length = radios.length; i < length; i++) {
            if (radios[i].checked) {
               value = radios[i].value;
            }
         }

         switch (value) {
            case '1':
               for (var i = 0, length = projects.length; i < length; i++) {
                  projects[i].style.display = "flex";
               }
               break;

            case '2':
               for (var i = 0, length = projects.length; i < length; i++) {
                  if (projects[i].querySelector(".port-tech")) {
                     if (!projects[i].querySelector(".port-tech").textContent.includes("HTML") &&
                        !projects[i].querySelector(".port-tech").textContent.includes("CSS") &&
                        !projects[i].querySelector(".port-tech").textContent.includes("Vanilla JS")) {
                        projects[i].style.display = "none"
                     } else {
                        projects[i].style.display = "flex"
                     }
                  }
               }
               break;

            case '3':
               for (var i = 0, length = projects.length; i < length; i++) {
                  if (projects[i].querySelector(".port-tech")) {
                     if (!projects[i].querySelector(".port-tech").textContent.includes("RUBY") &&
                        !projects[i].querySelector(".port-tech").textContent.includes("Ruby on Rails") &&
                        !projects[i].querySelector(".port-tech").textContent.includes("PHP") &&
                        !projects[i].querySelector(".port-tech").textContent.includes("React") &&
                        !projects[i].querySelector(".port-tech").textContent.includes("JSX")) {
                        projects[i].style.display = "none"
                     } else {
                        projects[i].style.display = "flex"
                     }
                  }
               }
               break;
         }
      });
   }

}



var scrollFunction = function () {
   if (window.pageYOffset > 300) {
      document.querySelector(".header").classList.add("stick");
   } else {
      document.querySelector(".header").classList.remove("stick");
   }
}

window.addEventListener("scroll", scrollFunction);
window.addEventListener("load", init)
