// Crea 10 oggetti che rappresentano una zucchina.
var varietaZucchine = [
    {
        'varieta': 'lisce',
        'peso': 1,
        'lunghezza': 12 
    },
    {
        'varieta': 'tonde',
        'peso': 2,
        'lunghezza': 10
    },
    {
        'varieta': 'gialle',
        'peso': 4,
        'lunghezza': 12 
    },
    {
        'varieta': 'siciliana',
        'peso': 4,
        'lunghezza': 25 
    },
    {
        'varieta': 'romanesco',
        'peso': 1,
        'lunghezza': 9
    },
    {
        'varieta': 'ortolano',
        'peso': 1,
        'lunghezza': 5 
    },
    {
        'varieta': 'fiorentina',
        'peso': 2,
        'lunghezza': 15 
    },
    {
        'varieta': 'rugoso',
        'peso': 2,
        'lunghezza': 18 
    },
    {
        'varieta': 'rigate',
        'peso': 2,
        'lunghezza': 16 
    },
    {
        'varieta': 'striato',
        'peso': 1,
        'lunghezza': 12 
    }
]

// Dividi in due array separati le zucchine che misurano meno o più di 15cm.
var zucchineCorte = [];

var zucchineLunghe = [];

for ( var i = 0; i < varietaZucchine.length; i++ )  {

    var thisZucchina = varietaZucchine[i];
    // console.log(thisZucchina)

    if (thisZucchina.lunghezza <= 15 ) {

        zucchineCorte.push(thisZucchina);       

    } else if (thisZucchina.lunghezza > 15 ) {

        zucchineLunghe.push(thisZucchina);
        
    }    
}

console.log( 'zucchine lunghe', zucchineLunghe);
    
console.log('zucchine corte',zucchineCorte);


//Infine stampa separatamente quanto pesano i due gruppi di zucchine. 

var sommaZuccheCorte = getTotale (zucchineCorte);

console.log('somma zucche corte', sommaZuccheCorte);

var sommaZuccheLunghe = getTotale (zucchineLunghe);

console.log('somma zucche lunghe', sommaZuccheLunghe);

// var sommaZuccheCorte = 0;

// for ( var i = 0; i < zucchineCorte.length; i++ ) {

//     var thisZucchinaCorta = zucchineCorte[i];

//     sommaZuccheCorte += thisZucchinaCorta.peso;    
// }

// console.log('somma zucche corte', sommaZuccheCorte)



// var sommaZuccheLunghe = 0;

// for ( var i = 0; i < zucchineLunghe.length; i++ ) {

//     var thisZucchinaLunga = zucchineLunghe[i];

//     sommaZuccheLunghe += thisZucchinaLunga.peso;    
// }

// console.log('somma zucche lunghe', sommaZuccheLunghe)

// Funzione 
//
//getTotale: per calcolare la somma della proprietà peso degli oggetti contenuti nell'array;
//
//lista -> array che di oggetti che contengono la proprietà 'peso'

function getTotale (lista) {

    var somma = 0;

    for ( var i = 0; i < lista.length; i++ ) {

    var thisElement = lista[i];

    somma += thisElement.peso;

    }
    return somma;    
}
