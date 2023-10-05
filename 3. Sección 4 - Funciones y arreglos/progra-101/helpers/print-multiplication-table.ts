
export function printMultiplicationTable( base: number, limit: number = 10 ) {
    let res = 0;

    if(limit <= 0){
        throw new Error('El límite no es permitido. Debe ser mayor a cero');
    }

    for(let i = 0; i <= limit; i++){
        res = base * i;
        console.log(base , ' X ' , i, ' = ', res);
    }
}