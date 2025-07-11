const express = require('express');
const { educationHistory, skills, projects } = require('../backend/data');
const app = express();

app.get('/api/education', (req, res) => res.json(educationHistory));
app.get('/api/skills', (req, res) => res.json(skills));
app.get('/api/projects', (req, res) => res.json(projects));

// HARUS: export sebagai handler untuk Vercel!
module.exports = app;
