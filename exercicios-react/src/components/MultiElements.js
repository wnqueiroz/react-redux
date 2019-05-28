import React from 'react'

// Não recomendado: adiciona a tag <div> ao markup
// export default () => (
//   <div>
//     <h1>Title</h1>
//     <h2>Subtitle</h2>
//   </div>
// )

/** Usando short syntax de React.Fragment @see https://reactjs.org/docs/fragments.html#short-syntax */
export default () => (
  <>
    <h1>Title</h1>
    <h2>Subtitle</h2>
  </>
)
