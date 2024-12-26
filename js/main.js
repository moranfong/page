// Google Analytics
window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());
gtag('config', 'G-9N96R6LQHQ');

// Background lines
function createLines() {
    const container = document.querySelector('.background-lines');
    for (let i = 0; i < 15; i++) {
        const line = document.createElement('div');
        line.classList.add('line');
        line.style.height = '1px';
        line.style.width = '100%';
        line.style.top = `${Math.random() * 100}%`;
        line.style.animationDelay = `${Math.random() * 10}s`;
        container.appendChild(line);
    }
}

document.addEventListener('DOMContentLoaded', createLines);