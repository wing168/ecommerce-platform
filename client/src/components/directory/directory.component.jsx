import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { directorySelector } from '../../redux/directory/directory.selectors';

import MenuItem from '../menu-items/menu-items.component';

import '../directory/directory.styles.scss';


const Directory = ( {sections} ) => (

  <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
  </div>
);
    
            
const mapStateToProps = createStructuredSelector({
  sections: directorySelector
})  
  

/* as we are calling most of the props as the same name, can use the ES6 shorthand to pass through all props using the spread operator */

export default connect(mapStateToProps)(Directory);