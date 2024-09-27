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
}

let apiUrl3 = "https://thingspeak.com/channels/" + channelId + "/charts/3?title=Relê" +
        "&bgcolor=" + bgcolorHumidity +
        "&color=" + colorHumidity +
        "&dynamic=" + dynamic +
        "&type=step" +
        "&update=" + update +
        "&yaxismin=0" +
        "&yaxismax=1";
document.getElementById('iframe3').src = apiUrl3;

updateChart1();
updateChart2();