import preencherTabela from './modules/preencherTabela.js';
import preencherContadores from './modules/preencherContadores.js';
import initChart from './modules/chart.js';

window.addEventListener("load", start);

function start() {
    preencherContadores();
    preencherTabela();
    initChart();
}
