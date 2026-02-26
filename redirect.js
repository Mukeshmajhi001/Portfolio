// redirect.js - यह फाइल online/offline detect करेगी

// Check if user is online or offline
function checkConnection() {
    if (navigator.onLine) {
        console.log("User is ONLINE - showing portfolio");
        // User is online, show index.html (portfolio)
        // अगर पहले से index.html पर नहीं हैं तो redirect करें
        if (!window.location.pathname.endsWith('index.html') && !window.location.pathname.endsWith('/')) {
            window.location.href = 'index.html';
        }
    } else {
        console.log("User is OFFLINE - showing game");
        // User is offline, show indexgame.html
        if (!window.location.pathname.endsWith('indexgame.html')) {
            window.location.href = 'indexgame.html';
        }
    }
}

// Run when page loads
window.addEventListener('load', checkConnection);

// Listen for online/offline events
window.addEventListener('online', function() {
    console.log("Connection restored - switching to portfolio");
    window.location.href = 'index.html';
});

window.addEventListener('offline', function() {
    console.log("Connection lost - switching to game");
    window.location.href = 'indexgame.html';
});

// Alternative method: Check connection status immediately
(function() {
    if (navigator.onLine) {
        console.log("Initial check: ONLINE");
    } else {
        console.log("Initial check: OFFLINE");
        if (!window.location.pathname.endsWith('indexgame.html')) {
            window.location.href = 'indexgame.html';
        }
    }
})();