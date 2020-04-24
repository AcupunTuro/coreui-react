import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { mapToCssModules } from './Shared/helper.js'
import CLink from './CLink'

//component - CoreUI / CHeaderNavLink

const CHeaderNavLink = props => {

  const {
    className,
    cssModule,
    //
    innerRef,
    ...rest
  } = props

  //render

  const classes = mapToCssModules(classNames(
    className,
    'c-header-nav-link'
  ), cssModule)

  return (
    <CLink className={classes} {...rest} innerRef={innerRef} />
  )

}

CHeaderNavLink.propTypes = {
  className: PropTypes.string,
  cssModule: PropTypes.object,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string])
};


export default CHeaderNavLink