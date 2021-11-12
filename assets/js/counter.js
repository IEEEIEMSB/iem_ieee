const counters = document.querySelectorAll('.count');
const speed = 200;

counters.forEach((counter) => {
  const updateCount = () => {
    const target = parseInt(counter.getAttribute('data-target'));
    let count = (+counter.innerText || 0);
    const increment = Math.trunc(target / speed);
    console.log(`${target} ${count} ${increment}`);

    if (count < target) {
      console.log('entered');
      count += increment;
      counter.innerText = count
      console.log(`${target} ${count} ${increment}`);
      setTimeout(updateCount, 1);
    } else {
      counter.innerText = target;
    }
  };
  updateCount();
});