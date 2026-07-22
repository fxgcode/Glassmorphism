const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Sirve todos los archivos estáticos (html, css, js) desde la carpeta /public
app.use(express.static(path.join(__dirname, 'public')));

// "Base de datos" en memoria (podrías conectarla a MongoDB, Postgres, etc.)
const profile = {
  name: 'Fabian Guerrero',
  quote: 'Diseñador que crea experiencias encantadoras',
  avatar: '/mejor_logo_fxgcode.png',
  stats: [
    { label: 'Proyectos', value: 144 },
    { label: 'Me gusta', value: 604 },
    { label: 'Comentarios', value: 44 }
  ],
  social: [
    { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'linkedin' },
    { name: 'Behance', url: 'https://behance.net', icon: 'behance' }
  ]
};

// Endpoint que devuelve los datos del perfil en JSON
app.get('/api/profile', (req, res) => {
  res.json(profile);
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
