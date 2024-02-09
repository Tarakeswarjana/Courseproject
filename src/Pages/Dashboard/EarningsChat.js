import React  from "react";
import ReactApexChart from "react-apexcharts";





export default function EarningsChat(){

    let colors=['#00B670','#FFC700']
    let series = [
      {
        data: [2000,4000, 5000, 1000, 4000, 8000, 2000,5000,5000,5000,7000,4000],
      },
    ];
  
    let options = {
      chart: {
        height: 350,
        type: "bar",
        events: {
          click: function (chart, w, e) {
            // console.log(chart, w, e)
          },
        },
      },
      colors: colors, 
      plotOptions: {
        bar: {
          columnWidth: "20%",
          
          distributed: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      xaxis: {
        categories: [
          ["Jan"],
          ["Feb"],
          ["Mar"],
          ["Apr"],
          ["May"],
          ["Jun"],
          ["Jul"],
          ["Aug"],
          ["Sep"],
          ["Oct"],
          ["Nov"],
          ["Dec"],
          

        ],
        labels: {
          style: {
          
          //   colors: colors,
            fontSize: "12px",
          },
        },
      },
    };

  


    return(
        <>
        <div className="table-responsive">
                <div className="table-wrapper">
                    <div className="table-wrap">
                        <div className="table-studenttext">
                            <p className="table-header">Earnings From Coaching Call</p>
                        </div>
                    </div>
                </div>
                <div id="chart">
              <ReactApexChart
                options={options}
                series={series}
                type="bar"
                height={350}
              />
            </div>

            
            </div>
        </>
    )
}