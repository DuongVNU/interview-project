import './footer.styles.scss';

const Footer = () =>{
  return(
    <div className='footer-container'>
      <div className='navs-link'>
        <div className='nav-link'>
          <div className='link-text'>会員登録</div>
        </div>
        <div className='nav-link'>
          <div className='link-text'>運営会社</div>
        </div>
        <div className='nav-link'>
          <div className='link-text'>利用規約</div>
        </div>
        <div className='nav-link'>
          <div className='link-text'>個人情報の取扱について</div>
        </div>
        <div className='nav-link'>
          <div className='link-text'>特定商取引法に基づく表記</div>
        </div>
        <div className='nav-link'>
          <div className='link-text'>お問い合わせ</div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
