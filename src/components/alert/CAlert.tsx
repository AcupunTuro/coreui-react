import React, { forwardRef, HTMLAttributes, useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Transition } from 'react-transition-group'

import { Colors } from '../Types'
import { CButtonClose } from '../button/CButtonClose'

export interface CAlertProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * A string of all className you want applied to the component. [docs]
   */
  className?: string
  /**
   * Sets the color context of the component to one of CoreUI’s themed colors. [docs]
   *
   * @type {'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light' | string }
   * @default 'primary'
   */
  color: Colors
  /**
   * Optionally add a close button to alert and allow it to self dismiss. [docs]
   */
  dismissible?: boolean
  /**
   * Method called before the dissmiss animation has started. [docs]
   */
  onDismiss?: () => void
  /**
   * Method called after the dissmiss animation has completed and the component is removed from the dom. [docs]
   */
  onDismissed?: () => void
  /**
   * Set the alert variant to a solid. [docs]
   */
  variant?: 'solid' | string
  /**
   * Toggle the visibility of component. [docs]
   *
   * @default true
   */
  visible?: boolean
}

export const CAlert = forwardRef<HTMLDivElement, CAlertProps>(
  (
    {
      children,
      className,
      color = 'primary',
      dismissible,
      variant,
      visible = true,
      onDismiss,
      onDismissed,
      ...rest
    },
    ref,
  ) => {
    const _className = classNames(
      'alert',
      variant === 'solid' ? `bg-${color} text-white` : `alert-${color}`,
      { 'alert-dismissible fade': dismissible },
      className,
    )
    const [_visible, setVisible] = useState(visible)

    const duration = 150

    const defaultStyle = {
      opacity: 0,
    }

    const transitionStyles = {
      entering: { opacity: 1 },
      entered: { opacity: 1 },
      exiting: { opacity: 0 },
      exited: { opacity: 0 },
    }

    return (
      <Transition
        in={_visible}
        timeout={duration}
        onExit={onDismiss}
        onExited={onDismissed}
        unmountOnExit
      >
        {(state) => {
          return (
            <div
              className={_className}
              role="alert"
              style={{
                ...defaultStyle,
                ...transitionStyles[state],
              }}
              {...rest}
              ref={ref}
            >
              {children}
              {dismissible && <CButtonClose onClick={() => setVisible(false)} />}
            </div>
          )
        }}
      </Transition>
    )
  },
)

CAlert.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.string.isRequired,
  dismissible: PropTypes.bool,
  onDismiss: PropTypes.func,
  onDismissed: PropTypes.func,
  variant: PropTypes.string,
  visible: PropTypes.bool,
}

CAlert.displayName = 'CAlert'