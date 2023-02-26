// script pour render les charts
placement = new Placement(6000, 1.01);
solaire = new Solaire(6000, 3, 0.206, 0.5, 0.1);
window.graphique = {}

function afficher(element, donnees) {
    let c = new Chart(document.getElementById(element), donnees);
    console.log(c);
    return c;
}

function mettreAJour(_graphique, _labels, _donnees) {
    _graphique.data.labels = _labels;
    for (let n=0; n < _donnees.length; n++) {
        _graphique.data.datasets[n].data = _donnees[n];
    }
    _graphique.update();
}


function wrapNombres(dates, valeursFinance, valeursPanneaux) {
    return {
        type: "line",
        data: {
            labels: dates,
            datasets: [
                {
                    label: "Finance",
                    data: valeursFinance,
                    borderWidth: 1
                },
                {
                    label: "Panneaux",
                    data: valeursPanneaux
                }
            ],
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    }
}

function formatDates(stepping, nDates) {
    let d = [];
    for (let n = 0; n < nDates; n++) {
        d.push(n*stepping);
    }
    return d;
}

function sliderUpdate() {
    document.getElementById("pourcentageAutoConso").innerHTML = String(document.getElementById("sliderTauxAutoconso").value) + "%/an";
    document.getElementById("dureeSimulation").innerHTML = String(document.getElementById("sliderDuree").value) + "ans";
}

function refresh() {
    let _temps = document.getElementById("sliderDuree").value;
    solaire.cout = placement.argentInitial = document.getElementById("input_investissement").value;
    solaire.prixEnergie = document.getElementById("input_prixKWH").value;
    solaire.prixRevente = document.getElementById("input_prixRevente").value;
    solaire.puissanceInstallee = document.getElementById("input_puissanceInstallee").value;
    placement.taux = 1 + (document.getElementById("input_tauxInterets").value / 100);
    solaire.tauxAutoconsommation = document.getElementById("sliderTauxAutoconso").value / 100;
    mettreAJour(window.graphique, formatDates(1, _temps), [placement.evolution(1, _temps), solaire.evolution(1, _temps)]);
}

function refreshOnEdit() {
    doitRafraichir = document.getElementById("chk_rafraichir").checked;
    console.log(doitRafraichir);
    if (doitRafraichir) {
        refresh();
    }
}

window.graphique = afficher("graphique", wrapNombres(formatDates(1, 15), placement.evolution(1, 15), solaire.evolution(1, 15)));