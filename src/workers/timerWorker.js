self.onmessage = function (event) {
    console.log('Worker recebeu: ', event.data);

    switch (event.data) {
        case 'FAVOR': {
            self.postMessage('Sim, posso fazer um favor');
            break;
        }
        case 'FALA_OI': {
            self.postMessage('Ok: Oi!');
            break;
        }
        case 'FECHAR': {
            self.postMessage('Tá bom, vou fechar');
            self.close();
            break;
        }
        default:
            self.postMessage('Não entendi.');
    }
}