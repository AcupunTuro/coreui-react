import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { tagPropType, mapToCssModules } from './Shared/helper.js'

//component - CoreUI / CToggler

const CToggler = props => {

  const {
    tag: Tag,
    children,
    className,
    cssModule,
    //
    innerRef,
    inHeader,
    inNavbar,
    ...attributes
  } = props;

  const typeAttr = Tag === 'button' ? { type: 'button' } : null
  const type = inNavbar ? 'navbar' : inHeader ? 'c-header' : null 
  const togglerClass = type ? `${type}-toggler` : ''
  const iconClass = type ? `${togglerClass}-icon` : ''

  //render
  const classes = mapToCssModules(classNames(
    togglerClass, className,
  ), cssModule)

  return (
    <Tag className={classes} {...typeAttr} {...attributes} ref={innerRef}>
      {children || <span className={iconClass}/>}
    </Tag>
  )

}

CToggler.propTypes = {
  tag: tagPropType,
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  //
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string, PropTypes.object]),
  inHeader: PropTypes.bool,
  inNavbar: PropTypes.bool,
};

CToggler.defaultProps = {
  tag: 'button'
};

export default CToggler