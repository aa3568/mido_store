// 1. توليد قلوب الخلفية بشكل عشوائي ومستمر
const bgHearts = document.getElementById('bgHearts');
const heartTypes = ['❤️', '💖', '💕', '💗', '🌸'];

function createBgHeart() {
    const heart = document.createElement('div');
    heart.classList.add('bg-heart');
    heart.innerText = heartTypes[Math.floor(Math.random() * heartTypes.length)];
    
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 3 + 3) + 's';
    heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
    
    bgHearts.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}

setInterval(createBgHeart, 200);

// 2. فتح كارت الرسالة
function openEnvelope() {
    document.getElementById('envelopeCard').classList.add('hidden');
    document.getElementById('mainCard').classList.remove('hidden');
}

// 3. جعل زر "No" يهرب في مكان عشوائي عند الاقتراب منه أو لمسه
const noBtn = document.getElementById('noBtn');

function moveNoButton() {
    // حساب أبعاد الشاشة لمنع الزر من الخروج بره الشاشة
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth - 40);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight - 40);
    
    noBtn.style.position = 'fixed';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
}

// يهرب في الكومبيوتر عند مرور الماوس، وفي الموبايل عند اللمس
noBtn.addEventListener('mouseover', moveNoButton);
noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault(); // يمنع الضغطة
    moveNoButton();
});

// 4. عند الضغط على "Yes"
function handleYes() {
    const catEmoji = document.getElementById('catEmoji');
    const questionText = document.getElementById('questionText');
    const buttonsContainer = document.getElementById('buttonsContainer');

    // تغيير القطة لتفرح
    catEmoji.innerText = '😻🎉';
    catEmoji.style.fontSize = '110px';

    // تغيير العنوان
    questionText.innerText = 'I Love You Too! ❤️🥰✨';
    questionText.style.fontSize = '2.2rem';

    // إخفاء الأزرار
    buttonsContainer.style.display = 'none';

    // إضافة احتفال بالقلوب بكثافة
    for (let i = 0; i < 40; i++) {
        setTimeout(createBgHeart, i * 50);
    }
}
