const url = 'https://elb.hilokal.com/ad/reward-ad-bean';
const tokens = [
    'yourBearerToken',
    'yourBearerToken',
    'yourBearerToken',
    'yourBearerToken'
];
const payload = {
    "type": "earn-bean-reward-ad"
  };

function makeRequests() {
    tokens.forEach(token => {
        fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(payload)
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
}

// Call the function 10 times
for (let i = 0; i < 10; i++) {
    makeRequests();
}