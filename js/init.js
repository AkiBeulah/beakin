var headerPos = document.querySelector(".header").offsetTop;
var init = function () {
   var bars = document.querySelector(".bars"),
      times = document.querySelector(".times"),
      linksMenu = document.querySelector(".menu"),
      radios = document.getElementsByName('filter'),
      projects = document.getElementsByClassName('port-entry'),
      projectDisplay = document.querySelector(".port-group"),
      value,
      portfolio = document.querySelector(".port"),
      portInfo = document.querySelector(".port-info"),
      portClose = document.getElementById("port-cancel");

   $.getJSON("https://api.jsonbin.io/b/5ec044d88284f36af7bc424f", function (json) {
      for (let i = 0; i < json.projects.length; i++) {
         let portEntry = document.createElement("div"),
            portTextHeader = document.createElement("div"),
            portImage = document.createElement("img"),
            portButton = document.createElement("button"),
            portTitle = document.createElement("div"),
            portTech = document.createElement("div");

         portTitle.className = "port-title";
         portTech.className = "port-tech";
         portButton.className = "port-button btn btn-4"
         portButton.id = `${i}`;
         portImage.className = "port-image";
         portEntry.className = "port-entry";
         portTextHeader.className = "port-text-header";

         portfolio.appendChild(portEntry);
         portEntry.appendChild(portTextHeader);
         portEntry.appendChild(portImage);
         portEntry.appendChild(portButton);
         portTextHeader.appendChild(portTitle);
         portTextHeader.appendChild(portTech);

         portImage.src = json.projects[i].images[0];
         portTitle.textContent = json.projects[i].title;
         portTech.textContent = json.projects[i].tech;
         portButton.textContent = "Learn More";
      }

      var portButton = document.querySelectorAll(".port-button");

      for (let i = 0; i < portButton.length; i++) {
         portButton[i].addEventListener("click", function () {
            let portInfoTitle = document.querySelector(".port-info-title"),
               portInfoSubtitle = document.querySelector(".port-info-subtitle"),
               portVisit = document.querySelector(".port-visit"),
               portInfoDesc = document.querySelector(".port-info-desc");

            for (let j = 0; j < json.projects[j].images.length; j++) {
               let portImage = document.createElement("img"),
                  portInfoImage = document.querySelector(".port-info-image");

               portImage.className = "port-car-image";
               portImage.src = json.projects[i].images[j];


               portInfoImage.appendChild(portImage);
            }

            portInfoTitle.textContent = json.projects[i].title;
            portInfoSubtitle.textContent = json.projects[i].subtitle;
            portInfoDesc.textContent = json.projects[i].desc;
            portVisit.href = json.projects[i].site;

            portInfo.style.zIndex = 5;
            portInfo.style.opacity = 1;
         });
      }
      //    portVisit = document.querySelectorAll(".port-button");
      //    for (let i = 0; i < portVisit.length; i++) {
      //       portVisit[i].addEventListener("click", function () {
      //          // window.location.replace(json.projects[i].site);
      //          console.log(json.projects[i]);
      //          console.log(i);
      //       });
      //    }
   });

   portClose.addEventListener("click", function () {
      portInfoImage = document.querySelector(".port-info-image");

      portInfo.style.opacity = 0;
      setTimeout(function () {
         portInfo.style.zIndex = -5
      }, 400);

      for (let k = (portInfoImage.childElementCount - 1); k > 1; k--) {
         setTimeout(function () {
            portInfoImage.removeChild(portInfoImage.children[k]);
         }, 500);
      }
   });

   bars.addEventListener("click", function () {
      if (linksMenu.classList.contains("menu-translate")) {
         linksMenu.classList.remove("menu-translate");
         document.querySelector(".header").style.height = "100vh";
      } else {
         linksMenu.classList.add("menu-translate");
         document.querySelector(".header").style.height = "75px";
      }

   });

   for (let k = 0; k < radios.length; k++) {
      radios[k].addEventListener("click", function () {
         for (let i = 0, length = radios.length; i < length; i++) {
            if (radios[i].checked) {
               value = radios[i].value;
            }
         }

         switch (value) {
            case '1':
               for (let i = 0, length = projects.length; i < length; i++) {
                  projects[i].style.display = "flex";
               }
               projectDisplay.textContent = "ALL"
               break;

            case '2':
               for (let i = 0, length = projects.length; i < length; i++) {
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

               projectDisplay.textContent = "FRONTEND"
               break;

            case '3':
               for (let i = 0, length = projects.length; i < length; i++) {
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

               projectDisplay.textContent = "BACKEND"
               break;

            case '4':
               projectDisplay.textContent = "OTHER"
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
