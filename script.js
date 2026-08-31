// فتح الرسالة
function openEnvelope() {
    document.getElementById('envelopeCard').classList.add('hidden');
    document.getElementById('mainCard').classList.remove('hidden');
}

// هروب زرار الـ NO
const noBtn = document.getElementById('noBtn');

function moveNoButton() {
    // تحديد أبعاد تتحرك فيها بشكل عشوائي
    const maxX = window.innerWidth - noBtn.offsetWidth - 20;
    const maxY = window.innerHeight - noBtn.offsetHeight - 20;
    
    const x = Math.max(0, Math.random() * maxX);
    const y = Math.max(0, Math.random() * maxY);
    
    noBtn.style.position = 'fixed';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
}

// يهرب لو الماوس لمسه أو على الموبايل
noBtn.addEventListener('mouseover', moveNoButton);
noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault();
    moveNoButton();
});

// لما تضغط YES
function handleYes() {
    const questionText = document.getElementById('questionText');
    const buttonsContainer = document.getElementById('buttonsContainer');
    const catImage = document.getElementById('catImage');

    // تغيير النص
    questionText.innerText = "I LOVE YOU TOO! <3";
    questionText.style.color = "#ff0000";
    
    // تغيير القطة لقطة تانية بتفرح (تقدر تحط لينك قطة بيكسل تانية)
    catImage.src = "https://media.tenor.com/tHqgK6b2E6UAAAAi/cat-dance.gif";

    // إخفاء الزراير
    buttonsContainer.style.display = 'none';

    // عمل تأثير الفلاش السريع (زي ما بيحصل في الألعاب لما تكسب)
    document.body.style.backgroundColor = "#ff4d6d";
    setTimeout(() => {
        document.body.style.backgroundColor = "#8b0000";
    }, 200);
}
