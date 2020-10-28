
// for sticky nav header
$(document).scroll(function() {
    var y = $(document).scrollTop(), //get page y value
        header = $("#header-box"); // your div id
    if(y >= 10)  {
        header.css({
          "background-color" : "rgba(255, 255, 255, 0.98)",
          "transition" : "background-color 0.3s ease"
          });
    } else {
        header.css({
          "background-color" : "rgba(255, 255, 255, 0)"
        });
    }
});

// nav smooth scrolling
function scrollSetup(element) {
  const tagName = element.innerHTML;

  switch (tagName) {
    case 'About':
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    // document.querySelector('.header').scrollIntoView({ behavior: 'smooth' });
    break;

    case 'Projects':
    document.querySelector('.projects').scrollIntoView({ behavior: 'smooth' });
    break;

    case 'Content':
    document.querySelector('.content').scrollIntoView({ behavior: 'smooth' });
    break;

    case 'Contact':
    document.querySelector('.contact').scrollIntoView({ behavior: 'smooth' });
    break;

    default: document.querySelector('.about').scrollIntoView({ behavior: 'smooth' });

  }
}

// handle highlighting nav buttons when user scrolls down
let mainNavLinks = document.querySelectorAll("nav ul li a");
let mainSections = document.querySelectorAll("main section");

// console.dir(mainNavLinks, {depth: null});
// console.dir(mainSections, {depth: null});

window.addEventListener("scroll", event => {
  let fromTop = window.scrollY;

  mainNavLinks.forEach(link => {
    let section = document.querySelector(link.hash);

    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add("current");
      link.classList.add("noHover");
    } else {
      link.classList.remove("current");
      link.classList.remove("noHover");
    }
  });
});

// left, right contentlist scroll implementation for different sized screens
window.onload = function() {

  content = document.getElementById('content-list');
  contentListWidth = content.offsetWidth; // 960px, 800px, 600px, 375px

  leftButton = document.getElementById('left-button');
  rightButton = document.getElementById('right-button');

  // if all the way to left, disable left scroll content button
  if (content.scrollLeft == 0) {
    // hide left button
    leftButton.style.zIndex = "0";
  }
  else {
    // show left button
    leftButton.style.zIndex = "10";
  }

}

// handle when user clicks left or right buttons
function contentScroll(element) {

  var button = element.id;

  // user pressed left button
  if (button == "left-button") {
    content.scrollBy({ left: -330, top: 0, behavior: 'smooth' }); // was 360
    console.log(`left: ${content.scrollLeft}`);

    // show right button
    rightButton.style.zIndex = "10";

    // disable left button once reached the end
    // contentListWidth: 960px, 800px, 600px, 335px
    switch (contentListWidth) {
      case 960:
      // disable left button
      leftButton.style.zIndex = "0";
      break;

      case 800:
      // disable left button
      leftButton.style.zIndex = "0";
      break;

      case 600:
      // disable left button once scrollLeft is less equal to 360
        if (content.scrollLeft <= 360) {
          leftButton.style.zIndex = "0";
        }
      break;

      case 330:
      // disable right button once scrollLeft is greater equal to 360
        if(content.scrollLeft <= 330) {
          leftButton.style.zIndex = "0";
        }
      break;

      default:
      leftButton.style.zIndex = "10";
      rightButton.style.zIndex = "10";
    }

  }

  // user pressed scroll right button
  else {
    content.scrollBy({ left: 330, top: 0, behavior: 'smooth' }); // was 360
    console.log(`right: ${content.scrollLeft}`);

    // show left button
    leftButton.style.zIndex = "10";

    // disable right button once reached the end
    // contentListWidth: 960px, 800px, 600px, 335px
    switch (contentListWidth) {
      case 960:
      // disable right button
        rightButton.style.zIndex = "0";
      break;

      case 800:
      // disable right button
        rightButton.style.zIndex = "0";
      break;

      case 600:
      // disable right button once scrollLeft is greater equal to 360
        if (content.scrollLeft >= 90) {
          rightButton.style.zIndex = "0";
        }
      break;

      case 330:
      // disable right button once scrollLeft is greater equal to 335
        if (content.scrollLeft >= 330) {
          rightButton.style.zIndex = "0";
        }
      break;

      default:
        leftButton.style.zIndex = "10";
        rightButton.style.zIndex = "10";
    }

  }

}
