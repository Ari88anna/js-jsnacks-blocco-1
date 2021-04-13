// Crea 10 oggetti che rappresentano una zucchina, indicandone per ognuno varietà, peso e lunghezza. 
// Calcola la somma del peso di tutte le zucchine.

var arrayZucchine = [
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
];

var somma = 0;

for ( var i = 0; i < arrayZucchine.length; i++ ) {

    var varietaZucchina = arrayZucchine[i];
    
    console.log(varietaZucchina)

    somma += varietaZucchina.peso;

}

console.log(somma)