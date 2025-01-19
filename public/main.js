
// Change language
const dropdownButton = document.getElementById('dropdownButton');
const dropdownMenu = document.getElementById('dropdownMenu');

// Toggle dropdown menu
dropdownButton.addEventListener('click', () => {
    dropdownMenu.classList.toggle('hidden');
});

// Change language function
function changeLanguage(language, countryCode) {
    alert(`Language changed to: ${language}`);
    // Change the button label and flag
    dropdownButton.innerHTML = `
        <img src="https://flagcdn.com/${countryCode}.svg" alt="${language}" class="w-5 h-5">
        <span>${language}</span>
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
    `;
    // Hide dropdown after selection
    dropdownMenu.classList.add('hidden');
}

// Close the dropdown when clicking outside
window.addEventListener('click', (e) => {
    if (!dropdownButton.contains(e.target) && !dropdownMenu.contains(e.target)) {
        dropdownMenu.classList.add('hidden');
    }
});
