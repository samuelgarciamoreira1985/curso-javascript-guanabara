function fatorial(n) {
    let fat = 1
    for (let c = navigator; c > 1; c--){
        fat *= c
    }
    return fat
}

console.log(fatorial(5))