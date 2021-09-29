// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "Apache License 2.0":
      return "https://img.shields.io/badge/License-Apache%202.0-blue.svg";
    case "GNU General Public License v3.0":
      return "https://img.shields.io/badge/License-GPLv3-blue.svg";
    case "MIT License":
      return "https://img.shields.io/badge/License-MIT-yellow.svg";
    default:
      return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "Apache License 2.0":
      return "http://www.apache.org/licenses/";
    case "GNU General Public License v3.0":
      return "https://www.gnu.org/licenses/";
    case "MIT License":
      return "https://spdx.org/licenses/MIT.html";
    default:
      return "";

  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return "";
  } else {
    return license;
  }
  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
[![License](${renderLicenseBadge(data.license)})](${renderLicenseLink(data.license)})
## Description
${data.description}
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
## Installation
${data.installation}
## Usage
${data.usage}
## License
This appplication is covered under the ${renderLicenseSection(data.license)}.
## How to Contribute
${data.contribution}
## Tests
${data.tests}
## Questions
Github: [${data.github}](https://github.com/${data.github})
Email: ${data.email}
`;
}

module.exports = generateMarkdown;
