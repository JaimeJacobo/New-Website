

// PRUEBAS TIMELINE


if($(window).width() >= 768) {
  $(".s3div").removeClass("slide");
};



//CREATING FULLPAGE LANDING
new fullpage('#fullPage', {
  autoScrolling: true,
  navigation: false,
  navigationTooltips: ['Home', 'About Me', 'Projects', 'Skills', 'Media'],
  showActiveTooltip: false,
  controlArrows: false,
  slidesNavigation: true,
  normalScrollElements: '.description'
});


// AUTO WRITTER


//Change the text from 'Welcome to my Website' to 'Jaime Jacobo' and make the autotyper appear
document.onload = setTimeout(() =>{
  $('#introductionText').addClass('fadeOut');
},3000)

document.onload = setTimeout(() =>{
  $('#introductionText').removeClass('fadeOut');
  $('#introductionText').html('Jaime Jacobo'); 
  $('#introductionText').addClass('fadeIn');
  $('#typeWriterDiv').addClass('fadeIn2');
},4000)

let TxtType = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

//Make the autotyper work
TxtType.prototype.tick = function() {
  let i = this.loopNum % this.toRotate.length;
  let fullTxt = this.toRotate[i];

  if (this.isDeleting) {
  this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
  this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  let that = this;
  let delta = 200 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
  delta = this.period;
  this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
  this.isDeleting = false;
  this.loopNum++;
  delta = 500;
  }

  setTimeout(function() {
  that.tick();
  }, delta);
};

window.onload = setTimeout(() => {
  let elements = document.getElementsByClassName('typewrite');
  for (let i=0; i<elements.length; i++) {
    let toRotate = elements[i].getAttribute('data-type');
    let period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    };
  };

  // This avoids the 'Jaime Jacobo' title to go down every time the typewritter types something.
  let css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
  document.body.appendChild(css);
},4000);



//AVOID SCROLLING WHEN MODALS/CARDS ARE OPEN

let avoidScrolling = ()=>{
    fullpage_api.setAllowScrolling(false);
    fullpage_api.setKeyboardScrolling(false);
};

let allowScrolling = ()=>{
  fullpage_api.setAllowScrolling(true);
  fullpage_api.setKeyboardScrolling(true);
};



$('#contactModal').on('hidden.bs.modal', function () {
  allowScrolling();
})

$('#contactModal').on('shown.bs.modal', function () {
  avoidScrolling();
})





