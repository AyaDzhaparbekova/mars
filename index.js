// Footer

const footer = document.createElement("footer");
document.body.appendChild(footer);

// current date

const today = new Date();

// current year

const thisYear = today.getFullYear();

const copyright = document.createElement("p");

copyright.innerText = `©Aya Dzhaparbekova ${thisYear}`;

footer.appendChild(copyright);


// Skills

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "DOM",
  "API"
];


const skillsGrid = document.querySelector(".skills-grid");

for (let i = 0; i < skills.length; i++) {
  
  
  const skillCard = document.createElement("div");
  

  skillCard.classList.add("skills-card");

  skillCard.innerText = skills[i];
  
  
  skillsGrid.appendChild(skillCard);
}








