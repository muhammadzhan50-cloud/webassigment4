document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. TASK 1: Form Validation (Форманы тексеру) ---
    const checkoutForm = document.querySelector('form');
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', (e) => {
            const inputs = checkoutForm.querySelectorAll('input[type="text"], input[type="email"], input[type="tel"]');
            let isValid = true;

            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.style.borderColor = '#d9534f'; // Қате болса қызыл рамка
                } else {
                    input.style.borderColor = '#ccc';
                }
            });

            if (!isValid) {
                e.preventDefault(); // Форманың жіберілуін тоқтатамыз
                alert('Назар аударыңыз: Барлық міндетті өрістерді толтыру қажет!');
            }
        });
    }

    // --- 2. TASK 2: Accordion (Аккордеон) ---
    const accordionButtons = document.querySelectorAll('.accordion-btn, .category-btn');
    accordionButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.classList.toggle('active');
            const content = button.nextElementSibling;
            if (content) {
                if (content.style.maxHeight) {
                    content.style.maxHeight = null;
                } else {
                    content.style.maxHeight = content.scrollHeight + 'px';
                }
            }
        });
    });

    // --- 3. TASK 3: Modal Popup (Модальді терезе) ---
    const modalTriggers = document.querySelectorAll('.modal-trigger, .card button, .explore-btn');
    const modal = document.getElementById('myModal') || document.querySelector('.modal');
    
    modalTriggers.forEach(btn => {
        btn.addEventListener('click', (e) => {
            if (modal) {
                modal.style.display = 'flex';
            }
        });
    });

    const closeModal = document.querySelector('.close-modal, .modal-close');
    if (closeModal && modal) {
        closeModal.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }

    // Task 4: Dark / Light Mode Toggle
const themeBtn = document.getElementById('themeToggle');
if (themeBtn) {
    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        
        if (document.body.classList.contains('dark-theme')) {
            themeBtn.textContent = '☀️ Light Mode';
        } else {
            themeBtn.textContent = '🌙 Dark Mode';
        }
    });
}

    // --- 5. TASK 5: Live Date & Time Clock (Динамикалық сағат) ---
    function updateClock() {
        const clockElement = document.getElementById('live-clock');
        if (clockElement) {
            const now = new Date();
            const timeString = now.toLocaleTimeString();
            const dateString = now.toLocaleDateString();
            clockElement.textContent = `📅 ${dateString} ⏰ ${timeString}`;
        }
    }
    
    // Әр секунд сайын уақытты жаңарту
    setInterval(updateClock, 1000);
    updateClock();
});