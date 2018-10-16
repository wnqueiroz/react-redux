import React from 'react'

import Grid from '../layout/grid'

export default ({ label, name, cols, input, placeholder, readOnly, type }) => (
    <Grid cols={cols}>
        <div className='form-group'>
            <label htmlFor={name}>{label}</label>
            <input
                {...input} className='form-control'
                placeholder={placeholder}
                readOnly={readOnly}
                type={type}
            />
        </div>
    </Grid>
)