// جوه دالة handleYes()، هنعدل الكود الخاص بالقطة ليكون كده:
function handleYes() {
    const questionText = document.getElementById('questionText');
    const buttonsContainer = document.getElementById('buttonsContainer');
    const catIcon = document.getElementById('catIcon'); // استدعاء الأيقونة

    // تغيير النص
    questionText.innerText = "I LOVE YOU TOO! <3";
    questionText.style.color = "#ff0000";
    
    // القطة تفرح وتغير شكلها وعينيها تتغير قلوب (أيقونة تانية من المكتبة)
    catIcon.classList.remove('fa-cat');
    catIcon.classList.add('fa-face-grin-hearts');
    catIcon.style.color = "#ff4d6d";
    catIcon.style.animation = "pulse 0.5s infinite alternate"; // تسرع الحركة من الفرحة

    // إخفاء الزراير
    buttonsContainer.style.display = 'none';

    // تأثير الفلاش
    document.body.style.backgroundColor = "#ff4d6d";
    setTimeout(() => {
        document.body.style.backgroundColor = "#8b0000";
    }, 200);
}
