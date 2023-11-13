const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector('footer');
const copyright = document.createElement ('p');
const skills = ["excellent problem solving skills", "communication skills", "organizational skills", "HTML", "CSS", "JavaScript"];

copyright.innerHTML = `&copy; Kimberly Heilig ${thisYear}`;
footer.appendChild(copyright);

const skillsSection = document.getElementById("skills");

const skillsList = skillsSection.querySelector('ul');

for(let i = 0; i < skills.length; i++){
  let skill = document.createElement('li');
  skill.innerText = skills[i];
  skillsList.appendChild(skill);
}