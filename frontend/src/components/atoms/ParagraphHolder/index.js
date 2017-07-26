import PropTypes from 'prop-types'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

const ParagraphHolder = styled.p`
    background-color: rgba(200,200,200,0.8);
    margin-top: 3px;
    margin-bottom: 3px;
    margin-left: 10px;
    margin-right: 10px;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 1px;
    padding-bottom: 15px;
    border-radius: 10px;
`

ParagraphHolder.propTypes = {
  reverse: PropTypes.bool,
}

export default ParagraphHolder
