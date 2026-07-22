async function loadProfile() {
  try {
    const res = await fetch('/api/profile');
    const data = await res.json();
    renderProfile(data);
  } catch (err) {
    console.error('No se pudo cargar el perfil:', err);
    document.getElementById('name').textContent = 'Error al cargar el perfil';
  }
}

function renderProfile(data) {
  document.getElementById('avatar').src = '/mejor_logo_fxgcode.png';
  document.getElementById('name').textContent = data.name;
  document.getElementById('quote').textContent = `"${data.quote}"`;

  // Estadísticas
  const statsEl = document.getElementById('stats');
  statsEl.innerHTML = data.stats.map(stat => `
    <div class="stat-box">
      <div class="value">${stat.value}</div>
      <div class="label">${stat.label}</div>
    </div>
  `).join('');

  // Redes sociales
  const icons = {
    linkedin: 'in',
    behance: 'Be'
  };

  const socialEl = document.getElementById('social');
  socialEl.innerHTML = data.social.map(net => `
    <a class="social-btn" href="${net.url}" target="_blank" rel="noopener noreferrer">
      <span class="social-icon">${icons[net.icon] || '•'}</span>
      ${net.name}
    </a>
  `).join('');
}

// Botón "Contáctame"
document.getElementById('contactBtn').addEventListener('click', () => {
  window.location.href = 'mailto:hola@ejemplo.com';
});

loadProfile();
