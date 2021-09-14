window.addEventListener("load", start);

const personagensContador = document.querySelector("#personagens");
const luasContador = document.querySelector("#luas");
const planetasContador = document.querySelector("#planetas");
const navesContador = document.querySelector("#naves");

function request(param) {
    return axios.get(`https://swapi.dev/api/${param}`);
};

function preencherContadores() {
    Promise.all([
        request("people/"),
        request("vehicles/"),
        request("planets/"),
        request("starships/")])
        .then(function (results) {
            personagensContador.innerHTML = results[0].data.count;
            luasContador.innerHTML = results[1].data.count;
            planetasContador.innerHTML = results[2].data.count;
            navesContador.innerHTML = results[3].data.count;
        })
        .catch(function (error) {
            console.log(error);
        });
};

async function preencherTabela() {
    const response = await request("films/");
    const tableData = response.data.results;

    tableData.forEach(film => {
        $('#filmsTable').append(`
        <tr>
            <td>${film.title}</td>
            <td>${moment(film.release_date).format('DD/MM/YYYY')}</td>
            <td>${film.director}</td>
            <td>${film.episode_id}</td>
        </tr>
        `);
    });

    console.log(tableData)

}
function start() {
    preencherContadores();
    preencherTabela();
}
