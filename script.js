// View Navigation Functions
function switchView(fromViewId, toViewId) {
    const fromView = document.getElementById(fromViewId);
    const toView = document.getElementById(toViewId);
    
    // Fade out current view
    fromView.classList.add('fade-out');
    
    setTimeout(() => {
        fromView.classList.remove('active', 'fade-out');
        toView.classList.add('active');
    }, 600);
}

function goToView2() {
    triggerConfetti();
    switchView('view1', 'view2');
}

function goToView3() {
    switchView('view2', 'view3');
}

function goToView4() {
    switchView('view3', 'view4');
}

function handleNo() {
    const noBtn = event.target;
    const randomX = Math.random() * window.innerWidth * 0.6;
    const randomY = Math.random() * window.innerHeight * 0.6;
    
    noBtn.style.position = 'absolute';
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
}

// Confetti Effect
function triggerConfetti() {
    const colors = ['#FF69B4', '#FFB6C1', '#FFC0CB', '#FF1493', '#EF4444'];
    const confettiCount = 50;
    
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * window.innerWidth + 'px';
        confetti.style.top = '-10px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.setProperty('--tx', (Math.random() - 0.5) * 200 + 'px');
        
        document.body.appendChild(confetti);
        
        setTimeout(() => {
            confetti.classList.add('falling');
        }, 10);
        
        setTimeout(() => {
            confetti.remove();
        }, 3000);
    }
}

// Modal Functions
function openLetterModal() {
    document.getElementById('letterModal').style.display = 'block';
}

function closeLetterModal() {
    document.getElementById('letterModal').style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('letterModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// Gallery Toggle
function toggleGallery() {
    const gallery = document.getElementById('gallery-section');
    gallery.classList.toggle('hidden');
}

// Music Player
function toggleMusic() {
    const audio = document.getElementById('bgMusic');
    const btn = event.target;
    
    if (audio.paused) {
        audio.play();
        btn.textContent = '⏸';
    } else {
        audio.pause();
        btn.textContent = '▶';
    }
}

// Auto-play music (with reduced volume for better UX)
document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('bgMusic');
    audio.volume = 0.3;
});
