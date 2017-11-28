import styled from 'styled-components'
import rotate360 from '../../helpers/keyframes/rotate360'

const FourteenBillion = styled.div`
  background-image: url(public/images/14_billion.png);
  position:relative; 
  top:-3038px; 
  z-index: 5;
  width:785px; 
  height:784px;
  margin: 0 auto;
  animation: ${rotate360} 150s linear infinite;

  @media (max-width: 808px) {
    transform: scale(.25,.25);
  }
`

export default FourteenBillion
