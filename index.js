
// Function 1
function introduction(name) {
  return `Hi, my name is ${name}.`;
}

// Function 2
function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  }

 // Function 3
function introductionWithLanguageOptional(name, language = 'JavaScript') {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  }

  function introductionWithLanguageOptionalOverride(name, language = 'Python') {
    return `Hello, my name is ${name} and I am proficient in ${language}.`;
  }