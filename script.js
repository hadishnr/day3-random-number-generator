const num = document.querySelector('.number');
const btn = document.querySelector('.generate');

const generateNum = () => {
  const randomNum = Math.floor(Math.random() * 10 + 1);
  num.innerHTML = randomNum;
};

btn.addEventListener('click', generateNum);
