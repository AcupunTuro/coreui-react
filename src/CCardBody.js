import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { tagPropType, mapToCssModules } from './Shared/helper.js'
import { sharedPropTypes } from './CCard'
//component - CoreUI / CCardBody

const CCardBody = props => {

  const {
    tag: Tag,
    className,
    cssModule,
    //
    innerRef,
    color,
    textColor,
    borderColor,
    align,
    ...attributes
  } = props


  //render

  const classes = mapToCssModules(classNames(
    className,
    'card-body',
    align ? `text-${align}` : false,
    textColor ? `text-${textColor}` : false,
    color ? `bg-${color}` : false,
    borderColor ? `border-${borderColor}` : false
  ), cssModule)

  return (
    <Tag 
      className={classes} 
      {...attributes}
      ref={innerRef}
    />
  )

}

CCardBody.propTypes = {
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  ...sharedPropTypes
}

CCardBody.defaultProps = {
  tag: 'div'
}

export default CCardBody