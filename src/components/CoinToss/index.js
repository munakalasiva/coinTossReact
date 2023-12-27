import {Component} from 'react'

import './index.css'

const headsImg = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'

const tailsImg = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {tossResultImage: headsImg, Heads: 0, Tails: 0}

  onClickTossButton = () => {
    const {Heads, Tails} = this.state
    const randomThrow = Math.floor(Math.random() * 2)
    let tossImage = ''
    let headsCount = Heads
    let tailsCount = Tails

    if (randomThrow === 0) {
      tossImage = headsImg
      headsCount += 1
    } else {
      tossImage = tailsImg
      tailsCount += 1
    }

    this.setState({
      tossResultImage: tossImage,
      Heads: headsCount,
      Tails: tailsCount,
    })
  }

  render() {
    const {Heads, Tails, tossResultImage} = this.state
    const Total = Heads + Tails
    return (
      <div className="bg-con">
        <div className="card">
          <h1 className="head">Coin Toss Game</h1>
          <p>Heads (or) Tails</p>
          <div>
            <img src={tossResultImage} alt="toss result" className="img" />
          </div>

          <button
            onClick={this.onClickTossButton}
            type="button"
            className="btn"
          >
            Toss Coin
          </button>
          <div className="set-items">
            <p className="sty1">Total:{Total}</p>
            <p className="sty2">Heads:{Heads}</p>
            <p>Tails:{Tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
