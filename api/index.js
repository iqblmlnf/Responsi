const { educationHistory, skills, projects } = require('../backend/data');

module.exports = (req, res) => {
  const { url } = req;

  if (url.endsWith('/education')) {
    res.status(200).json(educationHistory);
  } else if (url.endsWith('/skills')) {
    res.status(200).json(skills);
  } else if (url.endsWith('/projects')) {
    res.status(200).json(projects);
  } else {
    res.status(404).send('Not Found');
  }
};
