let myChart = document.getElementById('myChart').getContext('2d');
let bowlingData = [1, 1, 1];
let totalsChart = new Chart(myChart, {
    type: 'bar', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
    data: {
        labels: ['Strike', 'Spare', 'Open'],
        datasets:[{
            label: 'Count',
            data: bowlingData,
            backgroundColor: [
                '#FF3E0D',
                '#CC741F',
                '#996E45'
            ],
            borderWidth: 1,
            borderColor: '#777',
            hoverBorderWidth: 3,
            hoverBorderColor: '#000'
        }],
    },
    options: {}
});

function addData(chart, label, data) {
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    });
    chart.update();
}

function removeData(chart) {
    chart.data.labels.pop();
    chart.data.datasets.forEach((dataset) => {
        dataset.data.pop();
    });
    chart.update();
}

function incrementBy(chart, label, amount){
    if(label == 'Strike'){
        chart.data.datasets[0].data[0] += amount;
    }
    if(label == 'Spare'){
        chart.data.datasets[0].data[1] += amount;
    }
    if(label == 'Open'){
        chart.data.datasets[0].data[2] += amount;
    }
    chart.update();
}

function playGame(){
    incrementBy(totalsChart, 'Strike', updateData[0]);
    incrementBy(totalsChart, 'Spare', updateData[1]);
    incrementBy(totalsChart, 'Open', updateData[2]);
    updateData = [0, 0, 0];
}