// script.js

// Liste des lettres à afficher
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

// Mot caché à intégrer
const hiddenWord = 'Juan-Les-Pins';

// Élément contenant les lettres aléatoires
const lettersContainer = document.querySelector('.random-letters');

// Fonction pour générer des lettres aléatoires
function generateRandomLetters() {
  // Nombre total de lettres à afficher
  const totalLetters = 1000;

  // Remplir le conteneur avec des lettres aléatoires
  for (let i = 0; i < totalLetters; i++) {
    const letter = letters.charAt(Math.floor(Math.random() * letters.length));
    const span = document.createElement('span');
    span.textContent = letter;
    // Appliquer une couleur rouge
    span.style.color = 'rgb(255, 0, 0)';
    span.style.fontSize = '8rem';
    // Positionner les lettres de manière aléatoire
    span.style.position = 'absolute';
    span.style.top = `${Math.random() * 100}%`;
    span.style.left = `${Math.random() * 100}%`;
    lettersContainer.appendChild(span);
  }

  // Placer le mot caché "SECRET" à un endroit spécifique pour qu'il soit visible
  const wordSpanContainer = document.createElement('div'); // Conteneur pour le mot SECRET
  wordSpanContainer.style.position = 'absolute';
  wordSpanContainer.style.top = '50%';
  wordSpanContainer.style.left = '50%';
  wordSpanContainer.style.transform = 'translate(-50%, -50%)';
  wordSpanContainer.style.display = 'flex'; // Utilisation de flexbox pour espacer les lettres
  wordSpanContainer.style.fontSize = '3rem';
  wordSpanContainer.style.fontWeight = 'bold';
  
  // Ajouter chaque lettre du mot "SECRET" avec un espace
  hiddenWord.split('').forEach(letter => {
    const letterSpan = document.createElement('span');
    letterSpan.textContent = letter;
    letterSpan.style.color = 'rgb(209, 0, 0)'; // Couleur rouge foncé
    letterSpan.style.marginRight = '1rem'; // Espacement entre les lettres
    wordSpanContainer.appendChild(letterSpan);
  });

  // Ajouter le conteneur du mot caché à l'élément contenant
  lettersContainer.appendChild(wordSpanContainer);
}

// Appeler la fonction pour générer les lettres
generateRandomLetters();
