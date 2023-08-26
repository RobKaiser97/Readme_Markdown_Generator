const license = [
  {
    name: 'MIT',
    badge: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]',
    link: '(https://opensource.org/licenses/MIT)',
  },
  {
    name: 'GPL v3',
    badge: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]',
    link: '(https://www.gnu.org/licenses/gpl-3.0)',
  },
  {
    name: 'Apache 2.0',
    badge: '[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]',
    link: '(https://opensource.org/licenses/Apache-2.0)',
  },
  {
    name: 'BSD 3-Clause',
    badge: '[![License: BSD 3-Clause](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)]',
    link: '(https://opensource.org/licenses/BSD-3-Clause)',
  },
];

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }
  return license.badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return '';
  }
  return license.link
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }
  const badge = renderLicenseBadge(license);
  const link = renderLicenseLink(license);
  return `## License\n\n${badge}For more information about the license, click [here](${link}).`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description
  \`\`\`
  ${data.description}
  \`\`\`

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contribution](#contribution)
  - [Test](#test)
  - [Questions](#questions)
  
  ## Installation
  \`\`\`
  ${data.installation}
  \`\`\`

  ## Usage
  \`\`\`
  ${data.usage}
  \`\`\`

  ## License
  ${renderLicenseSection(data.license)}

  ## Contribution
  \`\`\`
  ${data.contribution}
  \`\`\`

  ## Test
  \`\`\`
  ${data.test}
  \`\`\`

  ## Questions
  If you have any questions, please contact me at:
  - [GitHub Repository](https://${data.github}.github.io/)
  - [Email](mailto:${data.email})

  ## Live Project
  - [Live Project](https://${data.liveLink})


  `;
}

module.exports = {
  generateMarkdown,
  license
};