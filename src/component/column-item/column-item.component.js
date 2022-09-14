import './column-item.styles.scss';

const ColumnItem = ({text, img, title}) => {
  return (
    <>
      <div className="column-item-container">
        <span className='column-item-block'>
            <img src={img} alt=""/>
            <span className='column-item-text'>{text}</span>
        </span>
        <div className='title'>魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…</div>
        <div className='tag'>#魚料理  #和食  #DHA</div>
      </div>
      
    </>
  )
}

export default ColumnItem;
