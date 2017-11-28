import styled from 'styled-components'

const BigBang = styled.div`
  background-image: url(/public/images/big_bang.gif);
  position: relative;
  top: 300px;
  width:210px; 
  height:210px; 
  margin: 0 auto;
  z-index: 0;

  @media (max-width: 808px) {
    transform: scale(.25,.25);
    width:105px; 
    height:105px; 
  }
`

export default BigBang
