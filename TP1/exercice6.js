class Etudiant{
    constructor(nom , note) {
        this.nom = nom;
        this.note = note;
    }
    getMention(params) {
        if (this.note >= 16) return "Très bien";
        if (this.note >= 14) return "Bien";
        if (this.note >= 10) return "Passable";
        return "Échec";
    }
}
var e1 = new Etudiant("anas" , 18);
var e2 = new Etudiant("mouhamed" , 10);
var e3 = new Etudiant("samir" , 15);

console.log(e1.getMention());
console.log(e2.getMention());
console.log(e3.getMention());