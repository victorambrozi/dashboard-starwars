export default function initChart() {
    google.charts.load('current', { 'packages': ['corechart'] });
    google.charts.setOnLoadCallback(desenharGrafico);

    async function desenharGrafico() {
        const request = param => axios.get(`https://swapi.dev/api/${param}`);
        const response = await request('vehicles/');
        const vehiclesArray = response.data.results;

        const dataArray = [];

        dataArray.push(["Veiculos", "Passageiros"]);
        vehiclesArray.forEach(vehicle => {
            dataArray.push([vehicle.name, Number(vehicle.passengers)]);
        });

        var data = google.visualization.arrayToDataTable(dataArray);

        var options = {
            title: 'Maiores veículos',
            legend: 'none'
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
    }
}