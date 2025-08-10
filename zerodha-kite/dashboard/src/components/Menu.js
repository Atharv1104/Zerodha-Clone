import React,{useState} from "react";
import { Link } from "react-router-dom";
import styles from '../css/menu.module.css'

const Menu = () => {
  const [selectedMenu, setSelectedMenu]=useState(0); //Dashboard is default selected
  //0-Dashboard, 1-Orders, 2-Holdings, 3-Positions, 4-Funds, 5-Apps
  //Profile dropdown is not implemented yet, so using a dummy state
  const [isProfileDropdownOpen, setIsProfileDropdownOpen]=useState(0);  

const handleMenuClick= (index)=>{
  setSelectedMenu(index);
}
const handleProfileClick= (index)=>{
  setIsProfileDropdownOpen(!isProfileDropdownOpen);
}
const menuClass= "menu";
const activeMenuClass= "menu selected"

  return (
    <div className="menu-container">
      <img src="logo.png" className={styles.logoimg} />
      <div className="menus">
        <ul>
          <li>
            <Link className={styles.nodecoration} to='/' onClick={()=>handleMenuClick(0)}>
            <p className={selectedMenu===0 ? activeMenuClass : menuClass}>Dashboard</p>

            </Link>
          </li>
          <li>
          <Link className={styles.nodecoration} to='/orders' onClick={()=>handleMenuClick(1)}>
            <p className={selectedMenu===1 ? activeMenuClass : menuClass}>Orders</p>

            </Link>
            
          </li>
          <li>
          <Link className={styles.nodecoration} to='/holdings' onClick={()=>handleMenuClick(2)}>
            <p className={selectedMenu===2 ? activeMenuClass : menuClass}>Holdings</p>

            </Link>
          </li>
          <li>
          <Link className={styles.nodecoration} to='/positions' onClick={()=>handleMenuClick(3)}>
            <p className={selectedMenu===3 ? activeMenuClass : menuClass}>Positions</p>

            </Link>
          </li>
          <li>
          <Link className={styles.nodecoration} to='/funds' onClick={()=>handleMenuClick(4)}>
            <p className={selectedMenu===4 ? activeMenuClass : menuClass}>Funds</p>

            </Link>
          </li>
          <li>
          <Link className={styles.nodecoration} to='/apps' onClick={()=>handleMenuClick(5)}>
            <p className={selectedMenu===5 ? activeMenuClass : menuClass}>Apps</p>

            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile" >
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
