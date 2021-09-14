import preencherTabela from './modules/preencherTabela.js';
import preencherContadores from './modules/preencherContadores.js';

window.addEventListener("load", start);

function start() {
    preencherContadores();
    preencherTabela();
}
