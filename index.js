document.addEventListener("DOMContentLoaded", function() {
    const formulaireRecherche = document.getElementById("formulaire-recherche");
    const motCleInput = document.getElementById("mot-cle");
    const listeResultats = document.getElementById("resultats");

    formulaireRecherche.addEventListener("submit", function(e) {
        e.preventDefault();

        const motCle = motCleInput.value;

        // Exemple : Effectuer une recherche basée sur le mot-clé
        const fauxResultats = [
            "iPhone 13 Pro Max",
            "iPhone 13 Pro",
            "iPhone 13",
            "iPhone 12 Pro Max",
            "iPhone 12 Pro",
            "iPhone 12",
            "iPhone SE (2e génération)",
            "iPhone 11 Pro Max",
            "iPhone 11 Pro",
            "iPhone 11",
            "iPhone X",
            "iPhone 8 Plus",
            "iPhone 8",
            "iPhone 7 Plus",
            "iPhone 7",
            "iPhone 6s Plus",
            "iPhone 6s",
            "iPhone 6 Plus",
            "iPhone 6",
            "iPhone 5s",
        ];

        const resultatsFiltres = filtrerResultats(fauxResultats, motCle);

        afficherResultats(resultatsFiltres, listeResultats);
    });

    listeResultats.addEventListener("mouseover", function(e) {
        if (e.target && e.target.nodeName == "LI") {
            e.target.classList.add("resultat-survol");
        }
    });

    listeResultats.addEventListener("mouseout", function(e) {
        if (e.target && e.target.nodeName == "LI") {
            e.target.classList.remove("resultat-survol");
        }
    });

    // Ajouter un gestionnaire de clic pour les éléments de résultat
    listeResultats.addEventListener("click", function(e) {
        if (e.target && e.target.nodeName == "LI") {
            // Récupérer le texte de l'élément de résultat
            const texteResultat = e.target.textContent;
            // Rediriger vers la page "resultat.html" avec le texte en tant que paramètre
            window.location.href = `resultat.html?result=${encodeURIComponent(texteResultat)}`;
        }
    });

    function filtrerResultats(resultats, motCle) {
        // Filtrer les résultats en fonction du mot-clé
        return resultats.filter(function (resultat) {
            return resultat.toLowerCase().includes(motCle.toLowerCase());
        });
    }

    function afficherResultats(resultats, listeResultats) {
        // Réinitialiser la liste des résultats
        listeResultats.innerHTML = "";

        // Afficher les résultats
        resultats.forEach(function (resultat) {
            const li = document.createElement("li");
            li.textContent = resultat;
            listeResultats.appendChild(li);
        });
    }
});
