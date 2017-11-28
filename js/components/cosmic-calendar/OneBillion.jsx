import styled from 'styled-components'
import rotate360 from '../../helpers/keyframes/rotate360'

const OneBillion = styled.div`
  background-image: url(public/images/1_billion.png);
  position:relative; 
  top:-6px; 
  z-index: 1;
  width:402px; 
  height:402px; 
  margin: 0 auto;
  animation: ${rotate360} 45s linear infinite;

  @media (max-width: 808px) {
    transform: scale(.25,.25);
  }
`

export default OneBillion
