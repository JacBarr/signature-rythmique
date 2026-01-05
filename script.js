// Fonction pour générer un entier aléatoire entre min et max inclus
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Fonction pour mettre à jour X et Y
function updateValues() {
  const x = getRandomInt(0, 124);
  const y = getRandomInt(1, 124);

  document.getElementById('x-value').textContent = x;
  document.getElementById('y-value').textContent = y;
}

// Mettre les valeurs initiales au chargement
updateValues();

// Ajouter l'événement click au bouton
document.getElementById('more-btn').addEventListener('click', updateValues);