import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { tagPropType, mapToCssModules } from './Shared/helper.js'
import { sharedPropTypes } from './CCard.js'

//component - CoreUI / CCardFooter

const CCardFooter = props => {

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
    'card-footer',
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

CCardFooter.propTypes = {
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  ...sharedPropTypes
}

CCardFooter.defaultProps = {
  tag: 'footer'
}

export default CCardFooter