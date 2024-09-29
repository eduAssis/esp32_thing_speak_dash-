let channelId = "2673053";
let bgcolorTemp = '%23e6f7ff';
let colorTemp = '%23FF4500';
let bgcolorHumidity = '%23e6f7ff';
let colorHumidity = '%23007BFF';
let dynamic = true;
let update = 20;

function updateChart1() {
    let results = document.getElementById('results1').value;
    let type = document.getElementById('type1').value;
    let apiUrl1 = "https://thingspeak.com/channels/" + channelId + "/charts/1?title=Temperatura" +
        "&bgcolor=" + bgcolorTemp +
        "&color=" + colorTemp +
        "&dynamic=" + dynamic +
        "&results=" + results +
        "&type=" + type +
        "&update=" + update +
        "&yaxismin=0" +
        "&yaxismax=100";
    document.getElementById('iframe1').src = apiUrl1;
    updateTemperatureData(results);
}
function updateTemperatureData(results) {
    fetch(`https://api.thingspeak.com/channels/${channelId}/feeds.json?results=${results}`)
        .then(response => response.json())
        .then(data => {
            const feeds = data.feeds.reverse();
            let dataContainer1 = document.getElementById("dataContainer1");
            let htmlContent = ``;

            feeds.forEach(feed => {
                const createdAt = new Date(feed.created_at);
                const date = createdAt.toLocaleDateString();
                const time = createdAt.toLocaleTimeString();

                htmlContent += `<p>Temperatura: ${feed.field1}°C (${date}, Hora: ${time})</p>`;
            });

            dataContainer1.innerHTML = htmlContent;
        })
        .catch(error => console.error("Erro ao buscar dados da API:", error));
}

function updateChart2() {
    let results = document.getElementById('results2').value;
    let type = document.getElementById('type2').value;
    let apiUrl2 = "https://thingspeak.com/channels/" + channelId + "/charts/2?title=Umidade" +
        "&bgcolor=" + bgcolorHumidity +
        "&color=" + colorHumidity +
        "&dynamic=" + dynamic +
        "&results=" + results +
        "&type=" + type +
        "&update=" + update +
        "&yaxismin=0" +
        "&yaxismax=100";
    document.getElementById('iframe2').src = apiUrl2;
    updateUmidadeData(results);
}
function updateUmidadeData(results) {
    fetch(`https://api.thingspeak.com/channels/${channelId}/feeds.json?results=${results}`)
        .then(response => response.json())
        .then(data => {
            const feeds = data.feeds.reverse();
            let dataContainer2 = document.getElementById("dataContainer2");
            let htmlContent = ``;

            feeds.forEach(feed => {
                const createdAt = new Date(feed.created_at);
                const date = createdAt.toLocaleDateString();
                const time = createdAt.toLocaleTimeString();

                htmlContent += `<p>Umidade: ${feed.field2}% (${date}, Hora: ${time})</p>`;
            });

            dataContainer2.innerHTML = htmlContent;
        })
        .catch(error => console.error("Erro ao buscar dados da API:", error));
}

let apiUrl3 = "https://thingspeak.com/channels/" + channelId + "/charts/3?title=Relé" +
        "&bgcolor=" + bgcolorHumidity +
        "&color=" + colorHumidity +
        "&dynamic=" + dynamic +
        "&type=step" +
        "&update=" + update +
        "&yaxismin=0" +
        "&yaxismax=1";
document.getElementById('iframe3').src = apiUrl3;

fetch(`https://api.thingspeak.com/channels/${channelId}/feeds.json?results=120`)
    .then(response => response.json())
    .then(data => {
        const feeds = data.feeds.reverse();
        let dataContainer3 = document.getElementById("dataContainer3");
        let htmlContent = ``;

        feeds.forEach(feed => {
            const relayStatus = feed.field3 === "1" ? 'Ligado' : 'Desligado';
            // Obtenha a data e a hora
            const createdAt = new Date(feed.created_at);
            const date = createdAt.toLocaleDateString();
            const time = createdAt.toLocaleTimeString();

            // Adicione a data e a hora ao conteúdo HTML
            htmlContent += `<p>Relé: ${relayStatus} (${date}, Hora: ${time})</p>`;
        });

        dataContainer3.innerHTML = htmlContent;
    })
    .catch(error => console.error("Erro ao buscar dados da API:", error));

updateChart1();
updateChart2();