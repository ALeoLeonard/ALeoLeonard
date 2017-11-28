import styled from 'styled-components'
import rotate360 from '../../helpers/keyframes/rotate360'

const SixBillion = styled.div`
  background-image: url(public/images/6_billion.png);
  position:relative; 
  top:-1026px; 
  z-index: 2;
  width:602px; 
  height:602px;
  margin: 0 auto;
  animation: ${rotate360} 150s linear infinite;

  @media (max-width: 808px) {
    transform: scale(.25,.25);
  }
`

export default SixBillion
