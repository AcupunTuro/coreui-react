import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { tagPropType, mapToCssModules } from './Shared/helper.js'

//component - CoreUI / CNavItem

const CNavItem = props => {

  const {
    tag: Tag,
    className,
    cssModule,
    //
    innerRef,
    ...attributes
  } = props

  //render

  const classes = mapToCssModules(classNames(
    'nav-item',
    className
  ), cssModule)


  return (
    <Tag className={classes} {...attributes} ref={innerRef}/>
  )
}

CNavItem.propTypes = {
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
};

CNavItem.defaultProps = {
  tag: 'li'
};

export default CNavItem