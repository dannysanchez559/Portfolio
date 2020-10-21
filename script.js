// for sticky nav
$(document).scroll(function() {
    var y = $(document).scrollTop(), //get page y value
        header = $("#header-box"); // your div id
    if(y >= 100)  {
        header.css({
          "background-color" : "rgba(255, 255, 255, 0.98)",
          "transition" : "background-color 0.5s ease 0.3s"
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

function contentScroll(element) {
  var button = element.id;
  var content = document.querySelector('.content-list');

  // scroll left
  if (button == "left-button") {
    // console.log(button.id)
    content.scrollBy({ left: -360, top: 0, behavior: 'smooth' });
  }
  // scroll right
  else {
    content.scrollBy({ left: 360, top: 0, behavior: 'smooth' });
    // console.log(button.id)
  }

}
