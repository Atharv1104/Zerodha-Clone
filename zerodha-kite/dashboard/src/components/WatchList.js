import React from "react";
import {Tooltip,Grow, colors} from '@mui/material'
import{BarChartOutlined, KeyboardArrowDown,KeyboardArrowUp, MoreHoriz} from '@mui/icons-material';
import {watchlist} from "../data/data.js";
const WatchList = () => {
  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {watchlist.length}/ 50</span>
      </div>

      <ul className="list">
        {watchlist.map((stock,index) => {
          return(<WatchListItem
            stock={stock}
            key={index}
            />)
        })}

      </ul>
    </div>
  );
};

export default WatchList;

const WatchListItem = ({ stock }) => {
  const [showWatchlist, setShowWatchlist] = React.useState(false);

  const handleMouseEnter = () => {
    setShowWatchlist(true);
   const element = document.querySelector('.ItemInfo');
    if (element) {
      element.style.display = 'none';
    }
  };
  const handleMouseLeave = () => {
    setShowWatchlist(false);
    
  };

  return(
    <li style={{backgroundColor:"white"}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="item">
        <p className={stock.isDown ?'down' :"up"}>{stock.name}</p>
        <div  className="itemInfo" style={{ display: showWatchlist ? "none" : "block" }}>
          <span className="percent">{stock.percent}</span>
          {stock.isDown ? (<KeyboardArrowDown className="down" />) 
          : (<KeyboardArrowUp className="up" />)}
          <span className="price">₹{stock.price}</span>
        </div>

      </div>
      {showWatchlist && <WatchListActions uid={stock.name} />}
    </li>
  );
};

const WatchListActions =({uid})=> {
    return(
      <span className="actions">
        <span className="align">
          <Tooltip title="Buy" placement="top" TransitionComponent={Grow} arrow >
            
              <button className="buy">Buy</button>
            
          </Tooltip>
          <Tooltip title="sell" placement="top" TransitionComponent={Grow} arrow >
            
              <button className="sell">Sell</button>
            
          </Tooltip>
          <Tooltip title="Analytics" placement="top" TransitionComponent={Grow} arrow >
            
              <button className="action">
                <BarChartOutlined className="icon" />
              </button>
            
          </Tooltip>
          <Tooltip title="More" placement="top" TransitionComponent={Grow} arrow >
            
              <button className="action">
                <MoreHoriz className="icon" />  
              </button>
            
          </Tooltip>
         
        </span>
      </span>
    )
}
