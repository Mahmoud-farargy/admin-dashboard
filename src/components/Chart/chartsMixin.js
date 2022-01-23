const chartMix = {
    data(){
        return {
           options: {
            responsive: true,
            maintainAspectRatio: false,
            legend: {
               fontColor: this.isDay ? "#636f83" :'#d6d6d6',
               labels: {
                      fontColor: this.isDay ? "#636f83" :'#fff'
                   }
                
            },
            title: {
                fontColor: this.isDay? "#2f2a34" : '#fff',
            },
            scales: {
              yAxes: [{
                ticks: {
                  fontColor: this.isDay? "#636f83" : '#d6d6d6'
                },
              }],
              xAxes: [{
                ticks: {
                  fontColor: this.isDay?  "#636f83" : '#d6d6d6'
                },
              }]
            }
          }
        }
      },
      props: ["chartData", "isDay"],
      methods: {
          updateChart(newDataObj) {
                this.renderChart({
                    labels: newDataObj?.labels,
                    datasets: newDataObj?.sets
                }, this.options);
          },
      },
      watch: {
        chartData(val) {
               this.updateChart(val);
        },
      },
      mounted(){
           this.updateChart(this.chartData);
      }
    
}
export default chartMix;