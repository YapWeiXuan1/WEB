document.addEventListener('DOMContentLoaded', function() {
    // Get all question elements
    const questions = document.querySelectorAll('.question');

    // Attach a click event listener to each question
    questions.forEach(question => {
        question.addEventListener('click', () => {
            // Find the associated answer element
            const answer = question.nextElementSibling;

            // Toggle the visibility of the answer
            if (answer.style.display === 'block' || answer.style.display === '') {
                answer.style.display = 'none';
            } else {
                answer.style.display = 'block';
            }
        });
    });
});
