import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './home.styles.scss';
import {ReactComponent as Morning} from "./../../assets/morning.svg";
import {ReactComponent as FoodImage} from "./../../assets/rice.svg";
import {ReactComponent as Lunch} from "./../../assets/lunch.svg";
import {ReactComponent as Dinner} from "./../../assets/dinner.svg";
import {ReactComponent as Snack} from "./../../assets/snack.svg";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import {Line} from 'react-chartjs-2';
import FoodItem from "../../component/food-item/food-item.component";
import Button from "../../component/button/button.component";
import FoodImg from "./../../assets/food.svg";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Home = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
  };
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: [100, 200, 300, 400, 300, 200, 100],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Dataset 2',
        data: [-721, 1256, 300, 200, 2000, 500, 700],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
  const fakeDataFood = [1,2,3,4,5,6,7,8]
  
  return (
    <div className='home-page-container'>
      <div className='progress-block'>
        <div className='progress-container'>
          <FoodImage/>
          <CircularProgressbar className="progress-bar-circle" value={66} text={`${66}%`} strokeWidth={2}  color='black' />;
        </div>
        <div className='chart-container'>
          <Line options={options} data={data}/>;
        </div>
      </div>
      
      <div className='meal-block'>
        <Morning/>
        <Lunch/>
        <Dinner/>
        <Snack/>
      </div>
      
      <div className='food-block'>
        {fakeDataFood.map((data,index)=>{
          return <FoodItem key={index} text='05.21 Morning' img={FoodImg}/>
        })}
      </div>
      
      <Button/>
      
      
    </div>
  )
}

export default Home;
