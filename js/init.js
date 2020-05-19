var headerPos = document.querySelector(".header").offsetTop;
var init = function () {
  var bars = document.querySelector(".bars"),
    linksMenu = document.querySelector(".menu"),
    radios = document.getElementsByName('filter'),
    projects = document.getElementsByClassName('port-entry'),
    projectDisplay = document.querySelector(".port-group"),
    value,
    portfolio = document.querySelector(".port"),
    portInfo = document.querySelector(".port-info"),
    portClose = document.getElementById("port-cancel"),
    bar1 = document.querySelector(".bar-1"),
    bar2 = document.querySelector(".bar-2"),
    bar3 = document.querySelector(".bar-3"),
    navDots = document.querySelectorAll(".form-nav-dot"),
    formBoxes = document.querySelectorAll(".form-box"),
    contactBtn = document.getElementById("contactSub"),
    contactBtn1 = document.querySelector(".btn-6-1"),
    contactBtn2 = document.querySelector(".btn-6-2"),
    temp = 0;
  form = document.forms["theForm"];
  // var webL = document.querySelector(".web-l"),
  // jobL = document.querySelector(".job-l"),
  // web = document.querySelector("#web"),
  // job = document.querySelector("#job");

  // webL.addEventListener("mouseover", function () {
  //   if(job.checked) jobL.classList.add("shake");
  //  });

  //  webL.addEventListener("mouseout", function () {
  //   jobL.classList.remove("shake");
  //  });

  //  jobL.addEventListener("mouseover", function () {
  //   if(web.checked) webL.classList.add("shake");
  //  });

  //  jobL.addEventListener("mouseout", function () {
  //   webL.classList.remove("shake");
  //  });

  var cubePlane = document.querySelectorAll(".cube-face"),
    cubeZ = (document.querySelector(".cube").offsetHeight / 2),
    button = document.querySelector("#btnStart");

  cubePlane[1].style.width = `cubePlane[0].offsetWidthpx`;
  cubePlane[0].style.transform = `rotateX(90deg) translateZ(${cubeZ}px)`;
  cubePlane[1].style.transform = `rotateY(90deg) translateZ(${cubeZ}px)`;
  cubePlane[2].style.transform = `rotateY(0deg) translateZ(${cubeZ}px)`;

  button.addEventListener("click", function () {
    document.querySelector("#body").classList.add("body-switch");
    setTimeout(() => {

    }, 2000);
  });

  function lEmploy() {
    document.forms["theForm"].elements[1].click()
  }

  function lWeb() {
    document.forms["theForm"].elements[0].click()
  }

  canvas = document.getElementsByTagName('canvas')[0];
  canvas.height = canvas.parentElement.offsetHeight;
  canvas.width = canvas.parentElement.offsetWidth;

  var ctx = canvas.getContext('2d');

  var characterList1 = ['website', 'employee', 'click next'];
  var characterList2 = ['name'];
  var characterList3 = ['email'];
  var characterList4 = ['phone number'];
  var characterList5 = ['leave a message', 'say `hi` at least'];
  var characterList = characterList1;

  var layers = {
    n: 5,
    letters: [10, 5, 8, 5, 5],
    coef: [0.1, 0.2, 0.4, 0.6, 0.8],
    size: [16, 22, 36, 40, 46],
    color: ['#f13a018b', '#eeeee8b', '#cccccc8b', '#bbbbbb8b', '#aaaaaa8b'],
    font: 'Courier'
  };

  var characters = [];
  var mouseX = document.body.clientWidth / 2;
  var mouseY = document.body.clientHeight / 2;

  var rnd = {
    btwn: function (min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
    choose: function (list) {
      return list[rnd.btwn(0, list.length)];
    }
  };

  /*LETTER DRAWING*/
  function drawLetter(char) {
    ctx.font = char.size + 'px ' + char.font;
    ctx.fillStyle = char.color;

    var x = char.posX + (mouseX - canvas.width / 5) * char.coef * -1;
    var y = char.posY + (mouseY - canvas.height / 5) * char.coef * -1;

    ctx.fillText(char.char, x, y);
  }

  /*ANIMATION*/
  document.onmousemove = function (ev) {
    mouseX = (ev.pageX - canvas.offsetLeft) / 15;
    mouseY = (ev.pageY - canvas.offsetTop) / 15;

    if (window.requestAnimationFrame) {
      requestAnimationFrame(update);
    } else {
      update();
    }
  };

  function update() {
    clear();
    render();
  }

  var updateCanvas = function (o) {
    let j = 0;
    for (let i = 0; i < navDots.length; i++) {
      if (navDots[i].classList.contains("active-nav-dot")) {
        j = i;
      }
    }
    characters = [];
    switch (j) {
      case 0:
        characterList = characterList1;
        break;
      case 1:
        characterList = characterList2;
        break;
      case 2:
        characterList = characterList3;
        break;
      case 3:
        characterList = characterList4;
        break;
      case 4:
        characterList = characterList5;
        break;
    }

    createLetters();
    update();
  }

  function clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  function render() {
    for (let i = 0; i < characters.length; i++) {
      drawLetter(characters[i]);
    }
  }

  /*INITIALIZE*/

  function createLetters() {
    for (let i = 0; i < layers.n; i++) {
      for (let j = 0; j < layers.letters[i]; j++) {

        var character = rnd.choose(characterList);
        var x = rnd.btwn(0, canvas.width);
        var y = rnd.btwn(0, canvas.height);

        characters.push({
          char: character,
          font: layers.font,
          size: layers.size[i],
          color: layers.color[i],
          layer: i,
          coef: layers.coef[i],
          posX: x,
          posY: y
        });
      }
    }
  }

  createLetters();
  update();

  contactBtn1.addEventListener("click", function (event) {
    event.preventDefault();
    checkContactForm();
    updateCanvas(1);
    temp++;
    if (navDots[navDots.length - 2].classList.contains("active-nav-dot")) {
      contactBtn1.style.opacity = "0";
      navDots[4].click();
    } else {
      contactBtn2.style.opacity = "1";
      let i = 0;
      for (let j = 0; j < navDots.length; j++) {
        if (navDots[j].classList.contains("active-nav-dot")) {
          i = j;
        }
      }
      if (i != 4) {
        navDots[i + 1].click();
      }
    }
  });

  contactBtn2.addEventListener("click", function (event) {
    event.preventDefault();
    checkContactForm();
    updateCanvas(-1);
    temp--;
    if (navDots[1].classList.contains("active-nav-dot")) {
      contactBtn2.style.opacity = "0";
      navDots[0].click();
    } else {
      contactBtn1.style.opacity = "1";
      let i = 0;
      for (let j = 0; j < navDots.length; j++) {
        if (navDots[j].classList.contains("active-nav-dot")) {
          i = j;
        }
      }
      if (i != 0) {
        navDots[i - 1].click();
      }
    }

  });

  var checkContactForm = function () {
    if (form.elements[2].value == null || temp < 3 || form.elements[2].value == "" || form.elements[3].value == null || form.elements[3].value == "") {
      contactBtn.disabled = true;
    } else {
      contactBtn.disabled = false;

    }
  }

  for (let i = 0; i < navDots.length; i++) {
    navDots[i].addEventListener("click", function () {
      checkContactForm();
      updateCanvas();
      (i == 0) ? contactBtn2.style.opacity = "0" : contactBtn2.style.opacity = 1;
      (i == 4) ? contactBtn1.style.opacity = "0" : contactBtn1.style.opacity = 1;
      for (let j = 0; j < formBoxes.length; j++) {
        formBoxes[j].style.transform = `translateX(-${i}00%)`;
      }
      for (let j = 0; j < navDots.length; j++) {
        navDots[j].classList.remove("active-nav-dot");
        (j > i) ? updateCanvas(-1) : updateCanvas(1);
      }
      navDots[i].classList.add("active-nav-dot");
    });
  }

  $.getJSON("https://api.jsonbin.io/b/5ec053d847a2266b14799bb7", function (json) {
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
            div = document.createElement("div"),
            portInfoImage = document.querySelector(".port-info-carousel");

          portImage.className = "port-car-image";
          portImage.src = json.projects[i].images[j];


          div.appendChild(portImage);
          portInfoImage.appendChild(div);
        }


        portInfoTitle.textContent = json.projects[i].title;
        portInfoSubtitle.textContent = json.projects[i].subtitle;
        portInfoDesc.textContent = json.projects[i].desc;
        portVisit.href = json.projects[i].site;

        portInfo.style.zIndex = 5;
        portInfo.style.opacity = 1;

        $('.port-info-carousel').slick();
        setTimeout(() => {
          document.querySelector("#body > div > div.cube-face.cube__face--front.container > div > div.port-info > div > div.port-info-image > div > button.slick-prev.slick-arrow").style.left = "25px";
          document.querySelector("#body > div > div.cube-face.cube__face--front.container > div > div.port-info > div > div.port-info-image > div > button.slick-next.slick-arrow").style.right = "25px";
          document.querySelector("#body > div > div.cube-face.cube__face--front.container > div > div.port-info > div > div.port-info-image > div > button.slick-prev.slick-arrow").style.zIndex = "1";
          document.querySelector("#body > div > div.cube-face.cube__face--front.container > div > div.port-info > div > div.port-info-image > div > button.slick-next.slick-arrow").style.zIndex = "1";
        }, 1000);
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
    let portInfoImage = document.querySelector(".c");

    portInfo.style.opacity = 0;
    setTimeout(function () {
      portInfo.style.zIndex = -5
    }, 400);

    for (let k = 0; k > portInfoImage.childElementCount; k++) {
      setTimeout(function () {
        portInfoImage.removeChild(portInfoImage.children[k]);
      }, 500);
    }
  });

  bars.addEventListener("click", function () {
    if (linksMenu.classList.contains("menu-translate")) {
      linksMenu.classList.remove("menu-translate");
      // document.querySelector(".header").style.height = "100vh";
      bar1.classList.add("bar-1-r");
      bar2.classList.add("bar-2-r");
      bar3.classList.add("bar-3-r");
      setTimeout(function () {
        bar1.classList.add("bar-1-re");
        bar2.classList.add("bar-2-re");
        bar3.classList.add("bar-3-re");
        bar1.classList.remove("bar-1-r");
        bar2.classList.remove("bar-2-r");
        bar3.classList.remove("bar-3-r");
      }, 1100);
    } else {
      linksMenu.classList.add("menu-translate");
      bar1.classList.remove("bar-1-rr");
      bar2.classList.add("bar-2-rr");
      bar3.classList.add("bar-3-rr");
      setTimeout(function () {
        bar1.classList.remove("bar-1-re");
        bar2.classList.remove("bar-2-re");
        bar3.classList.remove("bar-3-re");
        bar1.classList.remove("bar-1-rr");
        bar2.classList.remove("bar-2-rr");
        bar3.classList.remove("bar-3-rr");
      }, 1000);
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
  if ($(".container").scrollTop() > 80) {
    document.querySelector(".header").classList.add("stick");
  } else {
    document.querySelector(".header").classList.remove("stick");
  }
}

document.querySelector(".container").addEventListener("scroll", scrollFunction);
window.addEventListener("load", init)