/**
*
* @param {number} montantInitial
* @param {string} typeRemise
* @returns {number}
*/

function calculerMontantTotal(montantInitial, typeRemise) {
    const etudiant = 15;
    const soldes = 20;
    const fidélité = 10;

    if(montantInitial < 0) { 
        alert("Le montant initial ne peut pas être négatif.");

    }else if(typeRemise == "soldes") {
        typeRemise = soldes;
        let formule = typeRemise * montantInitial  / 100;
        let result = montantInitial - formule;
        console.log(result);

    }else if(typeRemise == "fidélité") {
        typeRemise = fidélité;
        let formule = typeRemise * montantInitial  / 100;
        let result = montantInitial - formule;
        console.log(result);

        console.log();0.
    }else if(typeRemise == "aucune") {
        console.log(montantInitial);

    }else if(typeRemise == "etudiant") {
        typeRemise = etudiant;
        let formule = typeRemise * montantInitial  / 100;
        let result = montantInitial - formule;
        console.log(result);

    }else if (typeRemise != "etudiant" && typeRemise != "soldes" && typeRemise != "fidélité" && typeRemise != "aucune") {
        alert("Type de remise inconnu.")
    }
}

calculerMontantTotal(100, "etudiant");
calculerMontantTotal(200, "soldes");
calculerMontantTotal(150, "fidélité");
calculerMontantTotal(50, "aucune");
calculerMontantTotal(100, "inconnu");
calculerMontantTotal(-100, "etudiant");