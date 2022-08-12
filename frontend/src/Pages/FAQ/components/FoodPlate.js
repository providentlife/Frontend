import React from "react";
import { Line, Bar } from "react-chartjs-2";
import { useState, useEffect } from "react";
import { UserData } from "../../../Data/Data";
import { Chart as ChartJS } from "chart.js/auto";
import ToggleSwitch from "../../../global-components/LinkButton/ToggleSwitch";

export default function FoodPlate() {
  const [user2WeightEntries, setUser2WeightEntries] = useState([]);

  useEffect(() => {
      fetch(`http://localhost:8000/weight-entries/2`)
        .then(res => res.json())
        .then(data => setUser2WeightEntries({
          labels: data.map(data => data.created_at),
          datasets: [
            {
              label: "Losing Weight",
              data: data.map(data => data.weight_lbs),
              backgroundColor:"#fff",
              borderColor: "red",
              borderWidth: 3,
              color: "red",
            },
          ],
        }))
  }, [])

  const options = {
    plugins : {
      title : {
        display : true,
        text : "User's Weight Entries"
      }
    }
  }

console.log(user2WeightEntries)



  const [userGainData, setUserGainData] = useState({
    labels: UserData.map((data) => data.id),
    datasets: [
      {
        label: `Week`,
        data: UserData.map((data) => data.weeks),
        backgroundColor: [
          "#fff"
        ],
        borderColor: "black",
        borderWidth: 3,
        color: "black",
      },
      // {
      //   label: "User Lost",
      //   data: UserData.map(data => data.userLost),
      //   backgroundColor: [
      //     "#000"
      //   ],
      //   borderColor: "white",
      //   borderWidth: 3,
      // }
    ],
  });

  // console.log(userGainData)

  // const [userLostData, setUserLostData] = useState({
  //   labels: UserData.map(data => data.year),
  //   datasets: [
  //     {
  //       label: "User Lost",
  //       data: UserData.map(data => data.userLost),
  //       backgroundColor: [
  //         "#000"
  //       ],
  //       borderColor: "white",
  //       borderWidth: 2
  //     }
  //   ]
  // })

  return (
    <div className="ml-10 p-5 w-3/4">
      <Line data={user2WeightEntries} options={options}/>
      <br />
      <br />
      <br />
      <ToggleSwitch text="Losing Weight"/>
    </div>
  );
}
