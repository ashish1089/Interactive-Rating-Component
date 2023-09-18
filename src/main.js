const rate = document.querySelectorAll('.rate');
const submitBtn = document.querySelector('.btn');
const ratingState = document.querySelector('.rating__state');
const thankyouState = document.querySelector('.thankyou__state');
const selectedRate = document.querySelector('.selected-rating');

rate.forEach(btn => {
    btn.addEventListener('click', () => {
        rate.forEach(btn => {
            btn.classList.remove('nohover');
            btn.classList.remove('bg-c');
        })

        btn.classList.add('nohover');
        btn.classList.add('bg-c');
        selectedRate.textContent = btn.textContent;

        submitBtn.addEventListener('click', () => {
            submitBtn.style.backgroundColor = 'hsl(0, 0%, 100%)';
            submitBtn.style.color = 'hsl(25, 97%, 53%)';
            ratingState.style.display = 'none';
            thankyouState.style.display = 'flex';
        })
    })
})
