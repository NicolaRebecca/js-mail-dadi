// verificare in un database la presenza della mail digitata dall'utente


var emailUtente = prompt("dammi la tua email ") 
var iscritti = ['nicola@live.it','roberto@gmail.com','pippo@gmail.com','augusto@demarinis.it']


var check = false; 

for (var i = 0; i < iscritti.length; i++) {
    if (iscritti[i] === emailUtente) {
        check = true;
        break; 
    }
}

if (check) {
    document.getElementById('risultato').innerHTML += 'sei già iscritto';
} else {
    document.getElementById('risultato').innerHTML += 'Non ti trovo';
}



// gioco dei dadi

var numeroUtente = Math.floor((Math.random() * 6) + 1);
var numeroCpu = Math.floor((Math.random() * 6) + 1);

if (numeroUtente > numeroCpu) {
    document.getElementById('dadi').innerHTML += 'il tuo numero è ' + numeroUtente + ' il numero del computer è ' + numeroCpu + ' complimenti hai vinto';
} else if (numeroUtente = numeroCpu) {
    document.getElementById('dadi').innerHTML +=  'il tuo numero è ' + numeroUtente + ' il numero del computer è ' + numeroCpu + ' siete pari';
}
else{
    document.getElementById('dadi').innerHTML +=  'il tuo numero è ' + numeroUtente + ' il numero del computer è ' + numeroCpu + ' sei stato battuto dal pc';
}
