import React from 'react';
import '../menu-items/menu-item.styles.scss';
import { withRouter }from 'react-router-dom'; /*HOC - trying to power up our menu item component so it has access to history props */


const MenuItem = ({title, imageUrl, size, history, linkUrl, match}) => (
    <div 
    className={`${size} menu-item` }
    >
        <div 
        className='background-image'
        style={{backgroundImage: `url(${imageUrl})`}}/>
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
)

export default withRouter(MenuItem);