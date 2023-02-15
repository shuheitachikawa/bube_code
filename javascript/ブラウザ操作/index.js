
const logo = document.querySelector(".lnXdpd");

let deg = 0;

const rotate = () => {
  logo.style.transform = `rotate(${deg}deg)`;
  deg++;
}

setInterval(rotate, 10);


