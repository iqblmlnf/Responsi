// api/index.js
const { educationHistory, skills, projects } = require('../backend/data');

module.exports = (req, res) => {
  const url = req.url.split('?')[0]; // hapus query params

  if (url === '/api/education') {
    return res.status(200).json(educationHistory);
  }
  if (url === '/api/skills') {
    return res.status(200).json(skills);
  }
  if (url === '/api/projects') {
    return res.status(200).json(projects);
  }

  res.status(404).json({ error: 'Endpoint not found' });
};
