document.addEventListener('DOMContentLoaded', function() {
    fetchLiveScores();
  });
  
  function fetchLiveScores() {
    chrome.runtime.sendMessage({ action: 'fetchScores' }, (response) => {
      if (response.success) {
        displayScores(response.matches);
      } else {
        console.error('Error fetching live scores:', response.error);
      }
    });
  }
  
  function displayScores(matches) {
    const scoresDiv = document.getElementById('scores');
    scoresDiv.innerHTML = '';
  
    if (matches.length === 0) {
      scoresDiv.innerHTML = '<p>No live matches at the moment.</p>';
      return;
    }
  
    matches.forEach(match => {
      const matchDiv = document.createElement('div');
      matchDiv.classList.add('match');
      matchDiv.innerHTML = `
        <p><strong>${match.homeTeam.name}</strong> vs <strong>${match.awayTeam.name}</strong></p>
        <p>Score: ${match.score.fullTime.homeTeam} - ${match.score.fullTime.awayTeam}</p>
        <p>Status: ${match.status}</p>
      `;
      scoresDiv.appendChild(matchDiv);
    });
  }
  