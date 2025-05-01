const audio = document.getElementById('audio');

// Спочатку вимикаємо звук
audio.muted = true;

// Функція для поступового збільшення гучності
function fadeInAudio() {
    let volume = 0;
    // Включаємо звук, коли аудіо починає відтворюватись
    audio.muted = false;

    const fadeInInterval = setInterval(function () {
        if (volume < 0.2) {  // Наприклад, гучність до 0.2
            volume += 0.05;
            audio.volume = volume; // Змінюємо гучність
        } else {
            clearInterval(fadeInInterval); // Завершуємо інтервал після досягнення гучності
        }
    }, 100); // Гучність збільшується кожні 100 мс
}

// Викликаємо fadeInAudio при початку відтворення аудіо
audio.onplay = fadeInAudio;

