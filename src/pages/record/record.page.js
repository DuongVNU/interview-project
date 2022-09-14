import './record.styles.scss';
import RecordItem from "../../component/record-item/record-item.component";
import {Line} from "react-chartjs-2";
import Button from "../../component/button/button.component";

const Record = () => {
  const fakeDataRecord = [
    {
      title: 'BODY RECORD',
      content: '自分のカラダの記録'
    },
    {
      title: 'MY EXERCISE',
      content: '自分の運動の記録'
    },
    {
      title: 'MY DIARY',
      content: '自分の日記'
    },
  
  ]
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
  const fakeDataExcrise = [
    {
      title: '家事全般（立位・軽い）',
      calo: '26kcal',
      time: '10m'
    },
    {
      title: '家事全般（立位・軽い）',
      calo: '26kcal',
      time: '10m'
    },
    {
      title: '家事全般（立位・軽い）',
      calo: '26kcal',
      time: '10m'
    },
    {
      title: '家事全般（立位・軽い）',
      calo: '26kcal',
      time: '10m'
    },
    {
      title: '家事全般（立位・軽い）',
      calo: '26kcal',
      time: '10m'
    },
    {
      title: '家事全般（立位・軽い）',
      calo: '26kcal',
      time: '10m'
    },
    {
      title: '家事全般（立位・軽い）',
      calo: '26kcal',
      time: '10m'
    },
    {
      title: '家事全般（立位・軽い）',
      calo: '26kcal',
      time: '10m'
    }
  ]
  
  return (
    <div className='record-page-container'>
      <div className='list-record'>
        {fakeDataRecord.map((record, index) => {
          return <RecordItem key={index} title={record.title} content={record.content}/>
        })}
      </div>
      
      <div className='line-bar'>
        <Line options={options} data={data}/>;
      </div>
      
      <div className='my-exercise'>
        <div className='title'>
          MY
          <br/>
          EXCISE
          <span>2021.05.21</span>
        </div>
        
        <div className='exercise-list'>
          {fakeDataExcrise.map((value,index) => <div key={index} className='exercise-item'>
            <div>
              <div>&#8226;  家事全般（立位・軽い）</div>
              <div className='calo'>26kcal</div>
            </div>
            <div className='time'>
              10 min
            </div>
          </div>)}
        
        
        </div>
      </div>
      
      <div className='diary'>
        <div className='title'>MY DIARY</div>
      
        <div className='diary-list'>
          {fakeDataExcrise.map((val,index)=> <div key={index} className='diary-item'>
            <div className='date'>2021.05.21</div>
            <div className='hour'>23:25</div>
            <div className='content'>
              私の日記の記録が一部表示されます。
              テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…
            </div>
          </div>)}
        </div>
      </div>
  
      <Button/>
    </div>
  )
}

export default Record;
