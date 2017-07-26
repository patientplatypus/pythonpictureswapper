import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { font, palette } from 'styled-theme'

const PaddingBottom = ({ percent }) => `${percent}%`

const styles = css`
    width: 80vw;
    padding-bottom: ${PaddingBottom};
    position: relative;
    margin: 0 auto;
    -webkit-align-items: center;
    align-items: center;
    -webkit-justify-content: center;
    justify-content: center;
    margin: 0 auto;
    display: flex;
    flex-direction:column;
`

const ImageResizeContainer = styled(({ percent, children, ...props }) =>
  React.createElement(`h${percent}`, props, children)
)`${styles}`

ImageResizeContainer.propTypes = {
  percent: PropTypes.number,
  children: PropTypes.node,
}

ImageResizeContainer.defaultProps = {
  percent: 30,
}

export default ImageResizeContainer
