class Placement {
    constructor(argentInitial, taux) {
        this.argentInitial = argentInitial;
        this.taux = taux;
    }

    sommeApres(temps) {
        return this.argentInitial * (this.taux ** temps);
    }

    evolution(tempsEntrePoints, nombrePoints) {
        let donnees = [];
        for (let n = 0; n<nombrePoints; n++) {
            donnees.push(this.sommeApres(tempsEntrePoints * n));
        }
        return donnees;
    }
}

class Solaire {
    constructor(cout, puissanceInstallee, prixEnergie, tauxAutoconsommation, prixRevente) {
        this.cout = cout;
        this.prixEnergie = prixEnergie;
        this.puissanceInstallee = puissanceInstallee;
        this.tauxAutoconsommation = tauxAutoconsommation;
        this.prixRevente = prixRevente;
    }

    productionPour(annees) {
        let production = (this.puissanceInstallee * 365*8) * annees;
        let autoconso = production * this.tauxAutoconsommation;
        let revente = production - autoconso;
        return {total: production, autoconsommation: autoconso, revente: revente};
    }

    gainPour(annees) {
        let produit = this.productionPour(annees);
        let economies = produit.autoconsommation * this.prixEnergie;
        let revente = produit.revente * this.prixRevente;
        return (economies + revente);
    }

    sommeApres(annees) {
        return this.gainPour(annees) - this.cout;
    }

    evolution(tempsEntrePoints, nombrePoints) {
        let donnees = [];
        for (let n = 0; n<nombrePoints; n++) {
            donnees.push(this.sommeApres(tempsEntrePoints * n));
        }
        return donnees;
    }
}