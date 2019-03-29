const stringSimilarity = require('string-similarity');

module.exports = function (mentor, student) {
  let score = 0;
  var bioScore = 100 * stringSimilarity.compareTwoStrings(mentor.bio.toLowerCase(), student.bio.toLowerCase());
  score = score + bioScore;
  //Add 150 if same city
  if (mentor.location.city === student.location.city) {
    score = score + 150;
  }
  //Add 50 if same postal beginning
  if (mentor.location.postal.substring(0, 3).toLowerCase() ===
    student.location.postal.substring(0, 3).toLowerCase()) {
    score = score + 50;
  }
  //Add 300 if same industry
  if (mentor.industry === student.location.industry) {
    score = score + 500;
  }
  //Add 50 if same school
  if (mentor.school.toLowerCase() === student.school.toLowerCase()) {
    score = score + 50;
  }
  //Add 20 if same company
  if (mentor.company.toLowerCase() === student.company.toLowerCase()) {
    score = score + 20;
  }
  //Add points for education level
  if (student.education === "None") {
    score = score + 50;
  } else if (student.education === "Highschool") {
    score = score + 40;
  } else if (student.education === "Diploma") {
    score = score + 20;
  } else if (student.education === "Bachelor") {
    score = score + 10;
  }
  //Add points for dateCreated
  let dateScore = 100 - ((new Date - student.dateCreated) / 1000 / 60 / 60 / 24);
  score = score + dateScore;
  if (student.connections.length === 0) {
    score = score + 100;
  } else if (student.connections.length === 1) {
    score = score + 60
  } else if (student.connections.length === 2) {
    score = score + 20
  }
  //Add points for yearsExperience
  if (student.yearsExperience === 0) {
    score = score + 50;
  } else if (student.yearsExperience === 1) {
    score = score + 30
  } else if (student.yearsExperience === 2) {
    score = score + 10
  }
  //Add points for common skills
  let skillScore = 0;
  let skillSet = new Set(student.skills);
  for (let item of mentor.skills) {
    skillSet.has(item) ? skillScore = skillScore + 25 : null;
  }
  score = score + skillScore;
  //Add points for common interests
  let interestsScore = 0;
  let interestsSet = new Set(student.interests);
  for (let item of mentor.interests) {
    interestsSet.has(item) ? interestsScore = interestsScore + 45 : null;
  }
  score = score + interestsScore;

  return score;
}