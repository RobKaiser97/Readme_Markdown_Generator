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
  switch (license) {
    case 'MIT' :
      return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
      break;
    case 'GPL v3' :
      return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
      break;
    case 'Apache 2.0' :
      return '![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
      break;
    case 'BSD 3-Clause' :
      return '![License: BSD 3-Clause](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)';
      break;
    default :
      return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT' :
      return '(https://opensource.org/licenses/MIT)';
      break;
    case 'GPL v3' :
      return '(https://www.gnu.org/licenses/gpl-3.0)';
      break;
    case 'Apache 2.0' :
      return '(https://opensource.org/licenses/Apache-2.0)';
      break;
    case 'BSD 3-Clause' :
      return '(https://opensource.org/licenses/BSD-3-Clause)';
      break;
    default :
      return '';
  }
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

  ${renderLicenseBadge(data.license)} For more information, navigate to: ${renderLicenseLink(data.license)}

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

  - [Return to Top](#description)
  `;
}

module.exports = {
  generateMarkdown,
  license
};