
function jourTravaille(date) {
    var joursFeries = ["01/01", "01/05", "08/05", "14/07", "15/08", "01/11", "11/11", "25/12"];
    var dateJour = date.getDate();
    var dateMois = date.getMonth() + 1;
    var dateAnnee = date.getFullYear();

    var jourMoisAnnee = (dateJour < 10 ? '0' : '') + dateJour + '/' + (dateMois < 10 ? '0' : '') + dateMois;

    var jourSemaine = date.getDay();

    if (joursFeries.includes(jourMoisAnnee) && dateAnnee == 2024) {
        console.log(`Le ${jourMoisAnnee}/${dateAnnee} est un jour férié`);
    } else if (jourSemaine === 0 || jourSemaine === 6) {
        console.log(`Non, ${jourMoisAnnee}/${dateAnnee} est un week-end`);
    } else {
        console.log(`Oui, ${jourMoisAnnee}/${dateAnnee} est un jour travaillé`);
    }
}

jourTravaille(new Date("2024-05-01"));
// Expected output: weekend
jourTravaille(new Date("2024-07-15"));
// Expected output: jour travaillé
jourTravaille(new Date("2024-11-01"));
jourTravaille(new Date("2024-04-14"));  // Expected output: weekend