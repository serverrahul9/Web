function calculateScore() {
    const correctAnswers = {
        q1: "c",
        q2: "b",
        q3: "b",
        q4: "b",
        q5: "b",
        q6: "b",
        q7: "b",
        q8: "b",
        q9: "b",
        q10: "b",
        q11: "b",
        q12: "b",
        q13: "b",
        q14: "b",
        q15: "b",
        q16: "b",
        q17: "b",
        q18: "b",
        q19: "b",
        q20: "b",
        q21: "b",
        q22: "b",
        q23: "b",
        q24: "b",
        q25: "b",
        q26: "b",
        q27: "b",
        q28: "b",
        q29: "b",
        q30: "b",
        q31: "b",
        q32: "b",
        q33: "b",
        q34: "b",
        q35: "b",
        q36: "b",
        q37: "b",
        q38: "b",
        q39: "b",
        q40: "b",
        q41: "b",
        q42: "b",
        q43: "b",
        q44: "b",
        q45: "b",
        q46: "b",
        q47: "b",
        q48: "b",
        q49: "b",
        q50: "b",
    };

    let score = 0;
    const totalQuestions = Object.keys(correctAnswers).length;

    for (let i = 1; i <= totalQuestions; i++) {
        const selectedAnswer = document.querySelector(`input[name="q${i}"]:checked`);
        if (selectedAnswer && selectedAnswer.value === correctAnswers[`q${i}`]) {
            score++;
        }
    }

    // Display result
    const resultText = `You scored ${score} out of ${totalQuestions}`;
    alert(resultText); // Show the score to the user

    // Redirect based on score
    if (score === totalQuestions) {
        window.location.href = "perfect-score.html"; // Redirect to a page for perfect score
    } else if (score >= totalQuestions * 0.8) {
        window.location.href = "good-score.html"; // Redirect to a page for a good score
    } else {
        window.location.href = "try-again.html"; // Redirect to a page for a low score
    }
}
