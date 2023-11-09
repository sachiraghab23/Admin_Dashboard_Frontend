import React from 'react'
import './../../stylesheets/dashboard styles/Dashboard.css';
import Welcome from '../dashboard/Welcome';
import ChartCard from '../dashboard/ChartCard';
import LineChartComp from '../dashboard/LineChartComp';
import PieChartComp from '../dashboard/PieChartComp';
import Histogram from '../dashboard/Histogram';

const Dashboard = () => {
  let arr = [1, 2, 3];
  return (
    <>      
      {/* display section */}
      <div className="dashboard-container">
        <div className="welcome-info">
          <Welcome />
          <ChartCard />
        </div>
        <div className="line-charts">
          {arr.map((ele, i) => <div><LineChartComp /></div>)}
        </div>
        <div className="more-charts">
          <Histogram />
          <PieChartComp />
        </div>
      </div>
    </>
  )
}

export default Dashboard