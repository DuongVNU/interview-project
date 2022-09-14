import './record-item.scss';
import {ReactComponent as RecordImg1} from "../../assets/record-1.svg";

const RecordItem = (props) =>{
  const {title, content} = props;
  return (
    <div className='record-item-container'>
      <RecordImg1/>
      <div className='text-area'>
        <div className='title'>{title.toUpperCase()}</div>
        <div className='content'>{content}</div>
      </div>
    </div>
  )
}

export default RecordItem;
