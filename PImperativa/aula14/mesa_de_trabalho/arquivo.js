module.exports = {
    textoMaluco: function name(texto) {
        let upper = true;
        let newText = '';

        for (i in texto) {
            if (texto[i] !== ' ') {
                if (upper) {
                    newText += texto[i].toUpperCase();
                } else {
                    newText += texto[i].toLowerCase();
                }
                upper = !upper;
            } else {
                newText += texto[i];
            }
        }
        return newText;
    },
    textoCaixa: function (texto) {
        let newText = '';

        for (i in texto) {
            newText += '[' + texto[i] + ']';
        }
        return newText;        
    }
};

