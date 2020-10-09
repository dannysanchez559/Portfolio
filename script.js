function scrollSetup(element) {
  const tagName = element.innerHTML;

  switch (tagName) {
    case 'About':
    document.querySelector('.about-me').scrollIntoView({ behavior: 'smooth' });
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

function scrollToTopSetup() {

}
