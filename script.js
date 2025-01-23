// Données pour chaque mot
const wordData = {
    "amour": {
      definition: "L'amour est un sentiment d'affection profonde.",
      synonymes: "affection, tendresse, passion",
      exemple: "L'amour est essentiel dans toutes les relations humaines."
    },
    "paix": {
      definition: "La paix est l'absence de guerre et de conflit.",
      synonymes: "harmonie, tranquillité, sérénité",
      exemple: "Les négociations ont permis d'instaurer la paix dans la région."
    },
    "liberté": {
      definition: "La liberté est le droit d'agir selon sa propre volonté.",
      synonymes: "autonomie, indépendance, émancipation",
      exemple: "La liberté d'expression est un droit fondamental."
    },
    "technologie": {
      definition: "La technologie est l'application des connaissances scientifiques pour créer des outils et des machines.",
      synonymes: "innovation, science, développement",
      exemple: "Les avancées technologiques ont changé la façon dont nous vivons."
    }
  };
  
  // Fonction pour afficher les informations sur le mot cliqué
  function showWordInfo(word) {
    const wordInfo = wordData[word];
    if (wordInfo) {
      document.getElementById("wordTitle").textContent = word;
      document.getElementById("definition").textContent = "Définition: " + wordInfo.definition;
      document.getElementById("synonymes").textContent = "Synonymes: " + wordInfo.synonymes;
      document.getElementById("exemple").textContent = "Exemple: " + wordInfo.exemple;
    }
  }
  
  // Ajouter l'événement de clic à chaque mot du nuage
  document.querySelectorAll(".word").forEach(wordElement => {
    wordElement.addEventListener("click", () => {
      const word = wordElement.getAttribute("data-word");
      showWordInfo(word);
    });
  });
  