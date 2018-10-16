import React from 'react'

import ReduxToastr from 'react-redux-toastr'

import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'

export default () => (
  <ReduxToastr
    timeOut={4000}
    progressBar
    newestOnTop={false}
    preventDuplicates={true}
    position="top-right"
    transitionIn="fadeIn"
    transitionOut="fadeOut"
  />
)
