function somar(x,y) {
    return x + y;
}

let somar0 = function(x, y) {
    return x + y;
}

let somar1 = (x, y) => {
    return x + y;
}

let somar2 = (x, y) => x + y;

let somar3 = x => x + 3;

let bye =  () => 'tchau';

console.log(somar(5 ,3));
console.log(somar0(5 ,3));
console.log(somar1(5 ,3));
console.log(somar2(5 ,3));
console.log(somar3(5));
console.log(bye());