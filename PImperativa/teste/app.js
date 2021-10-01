const foo = function () {
    this.bar = 'teste'
}

const fii = () => this.bar = 'rrr';


console.log(new fii());
