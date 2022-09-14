import './menu-dropdown.style.scss'

const MenuDropdown = () => {
  return (
    <div className="dropdown-menu-container">
      <div className='dropdown-menu-item'>自分の記録</div>
      <div className='dropdown-menu-item'>体重グラフ</div>
      <div className='dropdown-menu-item'>目標</div>
      <div className='dropdown-menu-item'>選択中のコース</div>
      <div className='dropdown-menu-item'>コラム一覧</div>
      <div className='dropdown-menu-item'>設定</div>
    </div>
  )
}

export default MenuDropdown
