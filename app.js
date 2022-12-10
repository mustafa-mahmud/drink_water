const cupsEl = document.querySelector('.cups');
const cupsSmallEle = document.querySelectorAll('.cup-small');
const litersEl = document.getElementById('liters');
const percentageEl = document.getElementById('percentage');
const remainedEl = document.getElementById('remained');

const calcRemind = () => {
  const drinked = Array.from(cupsSmallEle).filter((item) =>
    item.classList.contains('full')
  ).length;

  litersEl.textContent = `${2 - (drinked * 25) / 100}L`;
  glassHeight(drinked);
};

const glassHeight = (length) => {
  if (length > 0) percentageEl.style.visibility = 'visible';
  else percentageEl.style.visibility = 'hidden';

  percentageEl.style.height = `${41.25 * length}px`;
  percentageEl.textContent = `${12.5 * length}%`;

  if (12.5 * length === 100) {
    remainedEl.style.visibility = 'hidden';
    remainedEl.style.height = '0';
  } else {
    remainedEl.style.visibility = 'visible';
  }
};

const dailyDrinks = (cup, ind) => {
  if (!cup.classList.contains('full')) {
    cupsSmallEle.forEach((item) => item.classList.remove('full'));

    for (let i = 0; i <= ind; i++) {
      cupsSmallEle[i].classList.add('full');
    }
  } else {
    cupsSmallEle.forEach((item) => item.classList.remove('full'));

    for (let i = 0; i <= ind - 1; i++) {
      cupsSmallEle[i].classList.add('full');
    }
  }

  calcRemind();
};

cupsSmallEle.forEach((cup, ind) =>
  cup.addEventListener('click', () => dailyDrinks(cup, ind))
);
