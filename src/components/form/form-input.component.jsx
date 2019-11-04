import React from 'react';

import './form-input.styles.scss';


const FormInput = ({ label, handleChange, ...otherProps }) => (

    <div className='group'>
        <input className='form-input' onChange={handleChange} {...otherProps} />
        {/* Only render label if label prop has been passed */}
        {label ? (
            <label className={`form-input-label ${otherProps.value.length ? 'shrink' : ''}`}>
            
            {label}
            
            </label>
        ) : null}

    </div>

);

export default FormInput;


/************                       !!!!!!!!!!!!!!!            ************** */
/* Fix the label dropping back into the input field when moving to next field */