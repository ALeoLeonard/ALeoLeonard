import styled from 'styled-components'
import rotate360 from '../../helpers/keyframes/rotate360'

const ThirteenBillion = styled.div`
  background-image: url(public/images/13_billion.png);
  position:relative; 
  top:-2303px; 
  z-index: 4;
  width:689px; 
  height:688px;
  margin: 0 auto; 
  animation: ${rotate360} 200s linear infinite;

  @media (max-width: 808px) {
    transform: scale(.25,.25);
  }
`

export default ThirteenBillion
