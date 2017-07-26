import PropTypes from 'prop-types'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

const fontSize = ({ level }) => `${0.75 + (1 * (1 / level))}rem`

const SubHeader = styled.p`
  font-family: ${font('pre')};
  color: #4C3957;
  font-weight: 500;
  font-size: ${fontSize};
  line-height: 1.3;
  margin: 1rem 0 0;
`

SubHeader.propTypes = {
  reverse: PropTypes.bool,
}

export default SubHeader
