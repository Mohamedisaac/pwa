// register the Service Worker

// Dictionary code
let dictionaryData = [];

// Load JSON data
window.addEventListener('load', async () => {
    try {
        const response = await fetch('dictionary.json');
        dictionaryData = await response.json();
    } catch (error) {
        console.error('Error loading dictionary data:', error);
        results.innerHTML = '<div class="no-results">Failed to load dictionary data</div>';
    }
});

function searchWord() {
    const searchTerm = document.getElementById('searchInput').value
        .trim()
        .toLowerCase();
    
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    if (!searchTerm) {
        resultsDiv.innerHTML = '<div class="no-results">Please enter a word to search</div>';
        return;
    }

    const matches = dictionaryData.filter(entry => 
        entry.english.toLowerCase() === searchTerm
    );

    if (matches.length === 0) {
        resultsDiv.innerHTML = '<div class="no-results">No results found</div>';
        return;
    }

    matches.forEach(entry => {
        const resultDiv = document.createElement('div');
        resultDiv.className = 'result';
        resultDiv.innerHTML = `
            <h3>${entry.english}</h3>
            <p><strong>Maaddada:</strong> ${entry.maaddada}</p>
            <p><strong>Soomaali:</strong> ${entry.soomaali}</p>
        `;
        resultsDiv.appendChild(resultDiv);
    });
}

// Event listeners
document.getElementById('searchButton').addEventListener('click', searchWord);
document.getElementById('searchInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchWord();
    }
});


