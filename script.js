const notepad = document.getElementById('notepad');


if (localStorage.getItem('notepadText')) {
    notepad.value = localStorage.getItem('notepadText');
}

function saveText() {
    localStorage.setItem('notepadText', notepad.value);
    alert('✿ Saved ur scribbles! ✿');
    addSparkle();
}


function clearText() {
    notepad.value = '';
    localStorage.removeItem('notepadText');
    alert('✰ Poof! All gone! ✰');
    addSparkle();
}


function addSparkle() {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.innerHTML = '✰';
    sparkle.style.left = Math.random() * 380 + 'px';
    sparkle.style.top = Math.random() * 280 + 'px';
    document.querySelector('.notepad-container').appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 800);
}
