import './food-item.styles.scss';

const FoodItem = ({text, img, title}) => {
  return (
    <>
      <div className="food-item-container">
        <span className='food-item-block'>
            <img src={img} alt=""/>
            <span className='food-item-text'>{text}</span>
        </span>
      </div>
      
    </>
  )
}

export default FoodItem;
