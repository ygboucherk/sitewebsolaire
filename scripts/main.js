class DonneeAvecUnite {
    constructor(valeur, unite) {
        this.valeur = valeur;
        this.unite = unite;
        this.formate = `${valeur} ${unite}`
    }
}

class Formattage {
    formatItem(ligne) {
        let d = "";
        for (let i = 0; i < ligne.length; i++) {
            d = d + `<td>${ligne[i]}</td>`;
        }
        return `<tr>${d}</tr>`;
    }

    _formatTable(donnees, titre) {
        let d = ""
        for (let i = 0; i < donnees.length; i++) {
            d = d + this.formatItem(donnees[i]);
        }
        return `<table>
            <caption>
                <h2>${titre}</h2>
            </caption>
            <tbody>
                ${d}
            </tbody>
        </table>`;
    }

    formatTable(donnees) {
        return this._formatTable(donnees, titre);
    }

    frmtNavBtn(titre, page) {
        return `<a class="navButton" href="${page}"><button>${titre}</button></nav></a>`;
    }

    formatNav(donnees) {
        let interieur = "";
        for (let i = 0; i < donnees.length; i++) {
            interieur = interieur + this.frmtNavBtn(donnees[i][0], donnees[i][1])
        }
        return interieur;
    }
}

format = new Formattage();

donnees = {
    "volt" : {
        "production": {
            "france": new DonneeAvecUnite(14, "TWh"),
            "monde": new DonneeAvecUnite(1035, "TWh")
        },
        "surface": {
            "france" : new DonneeAvecUnite(250, "ha"),
            "monde": new DonneeAvecUnite(18500, "ha")
        }
    }
}