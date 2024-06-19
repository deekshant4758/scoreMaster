chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'fetchScores') {
      const apiKey = ''; // Replace with your API key
      const apiUrl = 'https://api.football-data.org/v2/matches';
  
      fetch(apiUrl, {
        headers: {
          'X-Auth-Token': ''
        }
      })
        .then(response => response.json())
        .then(data => {
          sendResponse({ success: true, matches: data.matches });
        })
        .catch(error => {
          console.error('Error fetching live scores:', error);
          sendResponse({ success: false, error: error.message });
        });
      return true; 
    }
  });
  

  