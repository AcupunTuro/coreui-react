import React, { HTMLAttributes, forwardRef } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export interface CTabContentProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * A string of all className you want applied to the base component. [docs]
   */
  className?: string
}

export const CTabContent = forwardRef<HTMLDivElement, CTabContentProps>(
  ({ children, className, ...rest }, ref) => {
    const _className = classNames('tab-content', className)
    return (
      <div className={_className} {...rest} ref={ref}>
        {children}
      </div>
    )
  },
)

CTabContent.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

CTabContent.displayName = 'CTabContent'
