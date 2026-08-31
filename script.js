// 1. توليد القلوب الخلفية بشكل عشوائي
const heartsContainer = document.getElementById('heartsContainer');
const heartIcons = ['❤️', '💖', '💕', '💗', '✨'];

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart-particle');
    heart.innerText = heartIcons[Math.floor(Math.random() * heartIcons.length)];
    
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 3 + 3) + 's';
    heart.style.fontSize = (Math.random() * 15 + 15) + 'px';
    
    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}

setInterval(createHeart, 300);

// 2. تأثير كتابة النص التدريجي كأنه مشهد
const message = "كل ثانية وأنتي معايا هي أجمل وقت في حياتي... أردت فقط أن أقول لكِ:";
const typedTextElement = document.getElementById('typedText');
const loveYouText = document.getElementById('loveYouText');

let index = 0;

function typeWriter() {
    if (index < message.length) {
        typedTextElement.innerHTML += message.charAt(index);
        index++;
        setTimeout(typeWriter, 70); // سرعة كتابة كل حرف
    } else {
        // بعد انتهاء النص، تظهر كلمة I Love You
        setTimeout(() => {
            loveYouText.classList.add('show');
        }, 500);
    }
}

// بدء تأثير الكتابة بعد فتح الصفحة بثانية
window.onload = () => {
    setTimeout(typeWriter, 1000);
};
