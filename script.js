document.addEventListener('DOMContentLoaded', () => {
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            question.classList.toggle('active');
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const diseaseInput = document.getElementById('disease-input');
    const searchButton = document.getElementById('search-button');
    const formulationResult = document.getElementById('formulation-result');

    searchButton.addEventListener('click', function() {
        const diseaseName = diseaseInput.value.trim();

        // Simulated function to get formulation data (replace with actual data retrieval logic).
        const formulationData = getFormulationData(diseaseName);

        if (formulationData) {
            formulationResult.innerHTML = `Formulation for "${diseaseName}": ${formulationData}`;
        } else {
            formulationResult.innerHTML = `No formulation found for "${diseaseName}". Please try another search.`;
        }

        // Clear the input field.
        diseaseInput.value = '';
    });

    // Simulated function to get formulation data (replace with actual data retrieval code).
    function getFormulationData(diseaseName) {
        // Simulated data for demonstration purposes.
        // Replace this with your actual data retrieval code.
        const formulations = {
            'Common Cold': 'Ayurvedic formulation XYZ',
            'Arthritis': 'Ayurvedic formulation ABC',
            // Add more disease-formulation pairs as needed.
        };

        return formulations[diseaseName] || null;
    }
});
