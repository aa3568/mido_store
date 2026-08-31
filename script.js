// مصفوفة تعبر عن شكل القلب كشبكة (1 يعني مكان قلبي، 0 يعني فراغ)
const heartPattern = [
    [0,1,1,0,0,1,1,0],
    [1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1],
    [0,1,1,1,1,1,1,0],
    [0,0,1,1,1,1,0,0],
    [0,0,0,1,1,0,0,0]
];

const container = document.getElementById('heartContainer');
const loveText = document.getElementById('loveText');
const size = 25; // حجم كل مربع بالقواطع

let delay = 0;

// رسم القلوب بالتدريج
heartPattern.forEach((row, rowIndex) => {
    row.forEach((cell, colIndex) => {
        if (cell === 1) {
            const heart = document.createElement('div');
            heart.classList.add('heart-piece');
            
            // تحديد مكان كل قطعة على الشاشة
            heart.style.left = `${colIndex * size}px`;
            heart.style.top = `${rowIndex * size}px`;
            
            container.appendChild(heart);

            // إظهار قطع القلب واحدة تلو الأخرى مع تأثير زمني
            setTimeout(() => {
                heart.style.opacity = '1';
            }, delay);

            delay += 60; // وقت التخير بين ظهور كل قلب
        }
    });
});

// إظهار نص I Love You بعد اكتمال ورسم جميع القلوب
setTimeout(() => {
    loveText.classList.add('show');
}, delay + 300);
