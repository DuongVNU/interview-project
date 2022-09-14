import './column.styles.scss';
import Button from "../../component/button/button.component";
import ImagePerson from "./../../assets/column-3 (image).svg"
import ColumnItem from "../../component/column-item/column-item.component";
import RecommendedItem from "../../component/recommended-item/recommended-item.component";

const Column = () => {
  const fakeData = [1,2,3,4,5,6,7,8]
  const fakeDataRecomended = [
    {type:'column'},
    {type:'diet'},
    {type: 'beauty'},
    {type: 'health'}
  ]
  return (
    <div className='column-page-container'>
      <div className='recommended-list'>
        {fakeDataRecomended.map((value,index)=><RecommendedItem key={index} type={value.type} />)}
      </div>
      
      <div className='column-list'>
        {fakeData.map((val, index)=><ColumnItem key={index} img={ImagePerson} text='202105.17 23:25'/>)}
      </div>
      <Button/>
    </div>
  )
}

export default Column;
