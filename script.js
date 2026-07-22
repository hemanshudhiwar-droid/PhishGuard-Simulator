function triggerSimulation() {
    const inputVal = document.getElementById('targetInput').value;
    if(!inputVal) {
        alert("Please enter a phone number first!");
        return;
    }

    document.getElementById('lure-screen').classList.add('hidden');
    document.getElementById('sim-screen').classList.remove('hidden');

    setTimeout(() => {
        document.getElementById('log-text').innerText = "[+] Extracting browser metadata & IP...";
    }, 1500);

    setTimeout(() => {
        document.getElementById('log-text').innerText = "[+] Syncing logs to remote server...";
    }, 3000);

    setTimeout(() => {
        document.getElementById('sim-screen').classList.add('hidden');
        document.getElementById('edu-screen').classList.remove('hidden');
    }, 4500);
}

function resetApp() {
    document.getElementById('targetInput').value = '';
    document.getElementById('edu-screen').classList.add('hidden');
    document.getElementById('lure-screen').classList.remove('hidden');
}
