const { educationHistory, skills, projects } = require('../backend/data');

module.exports = (req, res) => {
  const { url, method } = req;

  if (url === '/api/education') {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).end(JSON.stringify(educationHistory));
  } else if (url === '/api/skills') {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).end(JSON.stringify(skills));
  } else if (url === '/api/projects') {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).end(JSON.stringify(projects));
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
};
