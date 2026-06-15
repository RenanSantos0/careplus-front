document.addEventListener('DOMContentLoaded', () => {
  // 1. Inicializa os ícones do pacote Lucide
  lucide.createIcons();

  // 2. Coloca a data atual dinamicamente
  const dateElement = document.getElementById('data-atual');
  const today = new Date();
  const options = { weekday: 'long', day: 'numeric', month: 'long' };
  dateElement.textContent = today.toLocaleDateString('pt-BR', options);

  // 3. Sistema de partículas (Extraído do React DashboardLayout)
  const PARTICLES = [
    { id: 0,  left: '8%',  delay: '0s',    dur: '14s' },
    { id: 1,  left: '18%', delay: '2.1s',  dur: '11s' },
    { id: 2,  left: '29%', delay: '4.5s',  dur: '16s' },
    { id: 3,  left: '41%', delay: '1.3s',  dur: '13s' },
    { id: 4,  left: '53%', delay: '6.2s',  dur: '15s' },
    { id: 5,  left: '64%', delay: '3.7s',  dur: '12s' },
    { id: 6,  left: '75%', delay: '0.8s',  dur: '17s' },
    { id: 7,  left: '87%', delay: '5.0s',  dur: '10s' },
    { id: 8,  left: '13%', delay: '7.4s',  dur: '14s' },
    { id: 9,  left: '46%', delay: '9.1s',  dur: '11s' },
    { id: 10, left: '60%', delay: '2.8s',  dur: '16s' },
    { id: 11, left: '82%', delay: '8.3s',  dur: '13s' },
  ];

  const particlesContainer = document.getElementById('particles-container');

  // Adiciona as divs de partículas de forma dinâmica
  PARTICLES.forEach(p => {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = p.left;
    particle.style.bottom = '0';
    particle.style.setProperty('--delay', p.delay);
    particle.style.setProperty('--dur', p.dur);
    
    particlesContainer.appendChild(particle);
  });
});