const express = require('express');
const cors = require('cors');

// Data langsung ditaruh di sini (atau kamu bisa require dari file lain jika perlu)
const educationHistory = [
  {
    id: 1,
    period: '2023 - Sekarang',
    institution: 'Universitas Amikom Yogyakarta',
    major: 'S1 - Teknik Informatika',
    logo: '/images/amikom.png',
  },
  {
    id: 2,
    period: '2019 - 2022',
    institution: 'SMKN 1 Padaherang',
    major: 'Rekayasa Perangkat Lunak',
    logo: '/images/smk.jpg',
  },
];

const skills = [
  { name: 'Vue.js', level: 'Mahir' },
  { name: 'JavaScript', level: 'Mahir' },
  { name: 'Tailwind CSS', level: 'Mahir' },
  { name: 'Node.js', level: 'Menengah' },
  { name: 'Express.js', level: 'Menengah' },
  { name: 'PostgreSQL', level: 'Menengah' },
  { name: 'Git & GitHub', level: 'Mahir' },
  { name: 'HTML5 & CSS3', level: 'Mahir' },
];

const projects = [
  {
    title: 'Website Penjualan Tiket',
    image: '/images/demontix.png',
    description: 'Platform penjualan tiket event berbasis website.',
    tech: ['Vue.js', 'Laravel', 'MySQL'],
    link: '#',
  },
  {
    title: 'Aplikasi Penjualan Peralatan Billiard',
    image: '/images/gearnine.png',
    description: 'Aplikasi e-commerce untuk membeli segala peralatan billiard.',
    tech: ['Java', 'Dart'],
    link: '#',
  },
];

const app = express();
app.use(cors());
app.use(express.json());

// API endpoints
app.get('/api/education', (req, res) => res.json(educationHistory));
app.get('/api/skills', (req, res) => res.json(skills));
app.get('/api/projects', (req, res) => res.json(projects));

// Export agar bisa digunakan Vercel
module.exports = app;
