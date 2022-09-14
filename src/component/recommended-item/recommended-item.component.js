import './recommended-item.styles.scss';

const RecommendedItem = ({type}) =>{
  return(
    <div className='recommended-item-container'>
       <div className='text'>RECOMMENDED</div>
      <div className='text'>{type.toUpperCase()}</div>
      <hr style={{width:32}}/>
      <div>オススメ</div>
    </div>
  )
}

export default RecommendedItem
