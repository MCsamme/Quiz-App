const form = document.querySelector('form');
const submitButton = document.querySelector('.submit');

submitButton.addEventListener('click', (e) => {
	e.preventDefault();

	let score = 0;

	//ANSWER
	const q1Answer = form.q1.value;
	if (q1Answer === 'a') {
		score++;
	}
    const q2Answer = form.q2.value;
	if (q2Answer === 'a') {
		score++;
	}
    const q3Answer = form.q3.value;
	if (q3Answer === 'a') {
		score++;
	}
    const q4Answer = form.q4.value;
	if (q4Answer === 'a') {
		score++;
	}
    const q5Answer = form.q5.value;
	if (q5Answer === 'b') {
		score++;
	}
    const q6Answer = form.q6.value;
	if (q6Answer === 'a') {
		score++;
	}
    const q7Answer = form.q7.value;
	if (q7Answer === 'a') {
		score++;
	}
    const q8Answer = form.q8.value;
	if (q8Answer === 'c') {
		score++;
	}
    


	// repeat for all the questions

	// display the score to the user
	alert('Your score is ' + score + '/8');
});
