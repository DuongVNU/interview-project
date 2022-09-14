import {ReactComponent as LogoImg} from './../../assets/logo.svg'
import {ReactComponent as DocumentLogo} from './../../assets/documentLogo.svg'
import {ReactComponent as InforLogo} from './../../assets/infor.svg'
import {ReactComponent as StarLogo} from './../../assets/star.svg'
import {ReactComponent as MenuLogo} from './../../assets/icon_menu.svg'

import './header.styles.scss';
import {useState} from "react";
import MenuDropdown from "../menu-dropdown/menu-dropdown.component";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const onClickMenu = () =>{
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <div className="header">
      <LogoImg className='logo'/>
      <div className='navs-link'>
        <div className='nav-link'>
          <DocumentLogo className='logo-link'/>
          <div className='link-text'>自分の記録</div>
        </div>
        <div className='nav-link'>
          <StarLogo className='logo-link'/>
          <div className='link-text'>チャレンジ</div>
        </div>
        <div className='nav-link'>
          <InforLogo className='logo-link'/>
          <div className='link-text'>お知らせ</div>
        </div>
        <div className='nav-link' onClick={onClickMenu}>
          <MenuLogo className='logo-link'/>
        </div>
        {isMenuOpen && <MenuDropdown/>}
      </div>
    </div>
  );
}

export default Header;
