import React from 'react'

export default ({ input, placeholder, readOnly, type }) => (
    <input {...input}
        className='form-control'
        placeholder={placeholder}
        readOnly={readOnly}
        type={type}
    />
)