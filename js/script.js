const isMobile = {
  Android: function(){
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function(){
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function(){
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function(){
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function(){
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function(){
    return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.iOS() ||
      isMobile.Opera() ||
      isMobile.Windows());
  }
};

// opening and closing sublists on mobile devices

let arrowButton = document.querySelector('#arrow');
arrowButton.onclick = function(){
  arrowButton.classList.toggle('_clicked');
}

// opening and closing the menu on mobile devices

let menuBurgerOpen = document.querySelector('.menuburger-open');
menuBurgerOpen.onclick = function(){
  document.querySelector('.header-row__nav-mobile').classList.add('_opened');
}

let menuBurgerClose = document.querySelector('.menuburger-close');
menuBurgerClose.onclick = function(){
  document.querySelector('.header-row__nav-mobile').classList.remove('_opened');
}

// creating animations when a button is clicked on mobile devices

var buttons = document.getElementsByClassName('list-link-mobile'),
forEach = Array.prototype.forEach;

forEach.call(buttons, function (b) {
  b.addEventListener('click', addElement);
});

function addElement() {
  var addDiv = document.createElement('div');

  addDiv.classList.add('pulse');
  this.appendChild(addDiv);

  console.log(addDiv);

  addDiv.addEventListener('animationend', removeDiv);
  function removeDiv () {
  this.remove();
  };
}

