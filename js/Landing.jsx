import React from 'react'
import styled from 'styled-components'
import CosmicCalendar from './CosmicCalendar'
import CalabiYau from './components/worm-hole/CalabiYau'

const RecordNeedle = styled.div`
  position: absolute;
  transform: scale(1.25,1.25) rotate(-10deg);
  top: 80px;
  right: 360px;
  z-index: 100;
  transition: display 2s ease;
  cursor: url(/public/images/cursor_white.svg) 6 6, auto;
`

const Button = styled.button`
  mask-image: url(/public/images/record_hand.svg);
  -webkit-mask-image: url(/public/images/record_hand.svg);
  margin: 2em 6em 2em 2em;
  height: 102px;
  width: 82px;
  cursor: url(/public/images/cursor_white.svg) 6 6, auto;
  background: #f9f9f9;
  transition: transform .75s ease;
  &:hover {
    background-color: #5991B2;
    transform: rotate(20deg);
  }
`

class Landing extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isHidden: true,
      isRecordPlaying: false
    }
  }

  toggleHidden (event) {
    this.setState({isHidden: !this.state.isHidden})
    const audio = document.getElementById('audio')
    audio.pause()
    audio.currentTime = 0
  }

  playRecord (event) {
    this.setState({isRecordPlaying: !this.state.isRecordPlaying})
    event.currentTarget.style.transform = 'scale(1.25,1.25) rotate(6deg)'
    const audio = document.getElementById('audio')
    audio.play()
  }

  stopRecord (event) {
    this.setState({isRecordPlaying: !this.state.isRecordPlaying})
    event.currentTarget.style.transform = 'scale(1.25,1.25) rotate(-6deg)'
    const audio = document.getElementById('audio')
    audio.pause()
    audio.currentTime = 0
  }

  render () {
    return (
      <div className='landing'>
        <CosmicCalendar />
        <CalabiYau />
        <audio id='audio' src='public/sounds/BonVoyage.mp3' />
        <Button onClick={this.toggleHidden.bind(this)} />
        {!this.state.isHidden &&
          <RecordNeedle
            onClick={!this.state.isRecordPlaying ? this.playRecord.bind(this) : this.stopRecord.bind(this)}
          >
            <img className='record_needle'src='public/images/record_needle.png' alt='record needle' />
          </RecordNeedle>
        }
      </div>
    )
  }
}

export default Landing
