import React from 'react'
import CBrand from './CBrand'

//component - CoreUI / CHeaderBrand

const CHeaderBrand = props => {
  return (
    <CBrand {...props} className={['c-header-brand', props.className]}/>
  )
}

export default CHeaderBrand