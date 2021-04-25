// import React from 'react';
// import {Bar} from 'react-chartjs-2';

// const Chart = () => {
//     return (
//         <div>
//             <Bar
//             data ={{
//                 labels: ['Red' , 'Blue' , 'Yellow' , 'Green' , 'Purple' , 'Orange' ],
//             }}
//             height ={400}
//             width={600}
//             options={{
//                 maintainAspectRation : false
//             }}
//             />
//         </div>
//     )
// }

// export default Chart;

import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";

const Chart = () => {
  const [chartData, setChartData] = useState({});
  const [Crimetype, setCrimetype] = useState([]);
  const [Province, setProvince] = useState([]);

  const chart = () => {
    let crimetype = [];
    let province = [];
    let chart = [];

    axios
      .get("http://localhost:5000/api/addcrime/viewcrimes")
      .then(res => {
        var data = res.data;
        // const chart = data.crime;
        for (const dataObj of data.crime) {
          crimetype.push(dataObj.Crime_type);
          province.push(dataObj.Province);
        }
        console.log(crimetype);
        console.log(province);
        
        // const yLabels = {
        //     0 : crimetype[0],
        //     2 : crimetype[1],
        //     4 : crimetype[2],
        //     6 : crimetype[3],
        //     8 : crimetype[4],
        //     10 : crimetype[5],
        //     12 : crimetype[6],
        //     14 : crimetype[7],
        // }

        console.log(crimetype[0].length);
        console.log(crimetype[1].length);
        console.log(crimetype[3].length);
        setChartData({
          labels: province,
          datasets: [
            {
              label: "Crime ",
              data: [crimetype[0].length,
              res.data.data.Crime_type[1].count(),
              res.data.data.Crime_type[2].count(),
              res.data.data.Crime_type[3].count(),
              res.data.data.Crime_type[4].count(),
              res.data.data.Crime_type[5].count(),
              res.data.data.Crime_type[6].count(),
              res.data.data.Crime_type[7].count()],
              backgroundColor: ["rgba(75, 192, 192, 0.6)"],
              borderWidth: 4
            }
          ]
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    chart();
  }, []);

  return (
    <div className="App">
      {/* <h1>Dankmemes</h1> */}     
      <div>
        <Line
          data={chartData}
          options={{
            responsive: true,
            title: { text: "CRIME RATIO", display: true },
            scales: {
              yAxes: [
                {
                  ticks: {
                    autoSkip: true,
                    // maxTicksLimit: 10,
                    beginAtZero: true,
                    stepSize: 1.3,
                    // callback: function(value, index, values) {
                    //     return this.state.data.yLabels[value];
                    // }
                    callback:function(value) { 
                      var x = [this.state.crimetype[0],this.state.crimetype[1]];
                      return x[value | 0];
                      
                  },
                  gridLines: {
                    display: false
                  }
                }
                }
              ],
              xAxes: [
                {
                  gridLines: {
                    display: false
                  }
                }
              ]
            }
          }}
        />
      </div>
    </div>
  );
};

export default Chart;