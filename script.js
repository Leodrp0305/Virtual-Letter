//java script completely made out of chatgpt once I had no classes yet

const corpo = document.getElementById('corpo');
const btn = document.getElementById('toggle');

function toggleCarta() {
  const opened = corpo.classList.toggle('show');
  btn.textContent = opened ? 'Fechar cartinha' : 'O que é isso?';
  corpo.setAttribute('aria-hidden', opened ? 'false' : 'true');
}

btn.addEventListener('click', toggleCarta);
