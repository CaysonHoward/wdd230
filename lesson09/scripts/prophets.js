const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

async function getProphetData() {
  const response = await fetch(url);
  const data = await response.json();
  console.table(data.prophets);
  displayProphets(data.prophets);
}

getProphetData();

const displayProphets = (prophets) => {
    const cards = document.querySelector('div.cards');
  
    cards.innerHTML = ''; // clear previous content
  
    prophets.forEach((prophet) => {
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let birth = document.createElement('p');
      let deathdate = document.createElement('p');
      let placeofbirth = document.createElement('p');
      let portrait = document.createElement('img');
  
      h2.textContent = `${prophet.name} ${prophet.lastname}`;

      birth.textContent = `Born: ${prophet.birthdate} `

      deathdate.textContent = `Died: ${prophet.death} `

      placeofbirth.textContent = `Place of Birth: ${prophet.birthplace}`
  
      portrait.setAttribute('src', prophet.imageurl);
      portrait.setAttribute('alt', `Portait of ${prophet.name} ${prophet.lastname}`);
  
      card.appendChild(h2);
      card.appendChild(birth)
      card.appendChild(deathdate)
      card.appendChild(placeofbirth)
      card.appendChild(portrait);
  
      cards.appendChild(card);
    });
  };