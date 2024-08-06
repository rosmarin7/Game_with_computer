const inputField = document.querySelector('#guess');
const button = document.querySelector('#btn');

button.addEventListener('click', play);

function play() {
    const userNumber = inputField.value;

    if (userNumber>20 || userNumber<1) {
      
      inputField.value = ''
      return numberAllowed()
      
    }
    
    else if (isNaN(userNumber)) {
      inputField.value = ''
      return letterNotAllowed()
    }
    
    else if (userNumber.startsWith('0') && userNumber.length > 1) {
      inputField.value = ''
      return numberAllowed()
    }
    
    
    const randomNumber = Math.floor(Math.random()*20)+1;
    if (userNumber == randomNumber) {
        
        greetingUser();
        alert('Computerzahl: ' + randomNumber);
        inputField.value = ''
    } else {
        
        sadUser();
        alert('Computerzahl: ' + randomNumber);
        inputField.value = ''
    }
}



function greetingUser() {
    
    Swal.fire({
        title: 'Sie haben Glück!!!',
        text: 'Sie haben den Computer besiegt!!!',
        icon: 'success',
        width: '300px',
        height: '50px',
        customClass: {
          popup: 'custom-swal-popup', // Добавляем пользовательский класс для окна
          title: 'custom-swal-title', // Добавляем пользовательский класс для заголовка
          content: 'custom-swal-content' // Добавляем пользовательский класс для контента
      }
        
    });
    
}

function sadUser() {
    
    Swal.fire({
        title: 'Sie dachten, Sie hätten Glück?',
        text: 'Sie haben leider verloren!!!',
        icon: 'error',
        width: '300px',
        height: '50px',
        customClass: {
          popup: 'custom-swal-popup', // Добавляем пользовательский класс для окна
          title: 'custom-swal-title', // Добавляем пользовательский класс для заголовка
          content: 'custom-swal-content' // Добавляем пользовательский класс для контента
      }
    });
    
}


function numberAllowed() {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Geben Sie eine Zahl von 1 bis 20 ein",
    width: '300px',
        height: '50px',
        customClass: {
          popup: 'custom-swal-popup', // Добавляем пользовательский класс для окна
          title: 'custom-swal-title', // Добавляем пользовательский класс для заголовка
          content: 'custom-swal-content' // Добавляем пользовательский класс для контента
      }
  });
  
}
function letterNotAllowed() {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Sie müssen eine Zahl eingeben!",
    width: '300px',
        height: '50px',
        customClass: {
          popup: 'custom-swal-popup', // Добавляем пользовательский класс для окна
          title: 'custom-swal-title', // Добавляем пользовательский класс для заголовка
          content: 'custom-swal-content' // Добавляем пользовательский класс для контента
      }
  });
  
}



gsap.from('#container', {
  scale: -2, 
  duration: 3.5, 
  delay: 0.5, 
  rotation: 360, 
  opacity: 0,
      
})



particlesJS('particles-js', {
  particles: {
      number: { value: 400, density: { enable: true, value_area: 800 } },
      color: { value: '#FF76CE' },
      shape: {
          type: 'circle',
          stroke: { width: 0, color: '#FF76CE' },
          polygon: { nb_sides: 5 },
          image: { src: 'img/github.svg', width: 100, height: 100 },
      },
      opacity: {
          value: 0.5,
          random: true,
          anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
      },
      size: {
          value: 10,
          random: true,
          anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
      },
      line_linked: {
          enable: false,
          distance: 500,
          color: '#ffffff',
          opacity: 0.4,
          width: 2,
      },
      move: {
          enable: true,
          speed: 3,
          direction: 'bottom',
          random: false,
          straight: false,
          out_mode: 'out',
          bounce: false,
          attract: { enable: false, rotateX: 600, rotateY: 1200 },
      },
  },
  interactivity: {
      detect_on: 'canvas',
      events: {
          onhover: { enable: true, mode: 'bubble' },
          onclick: { enable: true, mode: 'repulse' },
          resize: true,
      },
      modes: {
          grab: { distance: 400, line_linked: { opacity: 0.5 } },
          bubble: {
              distance: 400,
              size: 4,
              duration: 0.3,
              opacity: 1,
              speed: 3,
          },
          repulse: { distance: 200, duration: 0.4 },
          push: { particles_nb: 4 },
          remove: { particles_nb: 2 },
      },
  },
  retina_detect: true,
});
var count_particles, stats, update;
stats = new Stats();
stats.setMode(0);
stats.domElement.style.position = 'absolute';
stats.domElement.style.left = '0px';
stats.domElement.style.top = '0px';
document.body.appendChild(stats.domElement);
count_particles = document.querySelector('.js-count-particles');
update = function () {
  stats.begin();
  stats.end();
  if (
      window.pJSDom[0].pJS.particles &&
      window.pJSDom[0].pJS.particles.array
  ) {
      count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
  }
  requestAnimationFrame(update);
};
requestAnimationFrame(update);






