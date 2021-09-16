export default function preencherTabela() {
    const request = param => axios.get(`https://swapi.dev/api/${param}`);

    async function preencherDados() {
        try {
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
        } catch (error) {
            console.error(error);
        };
    };
    preencherDados();
}