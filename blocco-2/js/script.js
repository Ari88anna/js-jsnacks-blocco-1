// Crea 10 oggetti che rappresentano una zucchina.
// Dividi in due array separati le zucchine che misurano meno o più di 15cm. 
//Infine stampa separatamente quanto pesano i due gruppi di zucchine.

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

var arrayZucchineMenoQuindici = [];

var arrayZucchinePiuQuindici = [];



for ( var i = 0; i < varietaZucchine.length; i++ )  {

    var thisZucchina = varietaZucchine[i]
    // console.log(thisZucchina)

    if (thisZucchina.lunghezza < 15 ) {

        arrayZucchineMenoQuindici.push(thisZucchina);
        

    }else if (thisZucchina.lunghezza > 15 ) {
        arrayZucchinePiuQuindici.push(thisZucchina)
        
}
console.log( 'zucchine lunghe', arrayZucchinePiuQuindici)
    }
console.log('zucchine corte',arrayZucchineMenoQuindici)