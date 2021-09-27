// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "Apache":
      return "https://img.shields.io/badge/License-Apache%202.0-blue.svg";
    case "GNU-General-Public":
      return "https://img.shields.io/badge/License-GPLv3-blue.svg";
    case "MIT":
      return "https://img.shields.io/badge/License-MIT-yellow.svg";
    default:
      return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "Apache":
      return "http://www.apache.org/licenses/";
    case "GNU-General-Public-v3":
      return "https://www.gnu.org/licenses/";
    case "MIT":
      return "https://spdx.org/licenses/MIT.html";
    default:
      return "";

  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license) {
    case "Apache":
      return "./apacheLicense"
    case "GNU-General-Public":

      break;
    case "MIT":
      break;
    default:
      return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  <img src="${renderLicenseBadge(data.license)}" alt="license badge">
  ${renderLicenseLink(data.license)}
  ## Description
  ${data.description}
  Provide a short description explaining the what, why, and how of your project.
  ## Table of Contents (Optional)
  If your README is long, add a table of contents to make it easy for users to find what they need.
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  ## Installation
  ${data.installation}
  What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.
  ## Usage
  ${data.usage}
  Provide instructions and examples for use. Include screenshots as needed.
  ## Credits
  List your collaborators, if any, with links to their GitHub profiles.
  If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.
  If you followed tutorials, include links to those here as well.
  ## License
  ${renderLicenseSection(data.license)}
  The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).
  ---
  🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.
  ## Badges
  ![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)
  Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.
  ## Features
  If your project has a lot of features, list them here.
  ## How to Contribute
  ${data.contribution}
  If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.
  ## Tests
  ${data.tests}
  Go the extra mile and write tests for your application. Then provide examples on how to run them here.

`;
}

module.exports = generateMarkdown;
