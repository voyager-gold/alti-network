import React from 'react'
import BaseIcon from './BaseIcon'

class GoogleLoginIcon extends BaseIcon {
  public render() {
    return (
      <svg
        className={this.props.className}
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 48 48'
        version='1.1'
        width='48px'
        height='48px'>
        <path
          fill='#FFC107'
          d='M43.61 20.082H42V20H24v8h11.305c-1.653 4.656-6.082 8-11.305 8-6.629 0-12-5.371-12-12s5.371-12 12-12c3.059 0 5.844 1.152 7.96 3.04l5.657-5.657C34.047 6.055 29.27 4 24 4 12.953 4 4 12.953 4 24s8.953 20 20 20 20-8.953 20-20c0-1.34-.137-2.648-.39-3.918z'
        />
        <path
          fill='#FF3D00'
          d='M6.305 14.691l6.574 4.82C14.656 15.11 18.96 12 24 12c3.059 0 5.844 1.152 7.96 3.04l5.657-5.657C34.047 6.055 29.27 4 24 4 16.316 4 9.656 8.336 6.305 14.691z'
        />
        <path
          fill='#4CAF50'
          d='M24 44c5.164 0 9.86-1.977 13.41-5.191L31.22 33.57A11.918 11.918 0 0 1 24 36c-5.203 0-9.617-3.316-11.281-7.945l-6.524 5.023C9.504 39.555 16.227 44 24 44z'
        />
        <path
          fill='#1976D2'
          d='M43.61 20.082H42V20H24v8h11.305a12.054 12.054 0 0 1-4.09 5.57h.004l6.191 5.239C36.973 39.203 44 34 44 24c0-1.34-.137-2.648-.39-3.918z'
        />
      </svg>
    )
  }
}

export default GoogleLoginIcon
