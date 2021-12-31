import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {InputElement: ''}

  onCountChange = event => {
    this.setState({InputElement: event.target.value})
  }

  render() {
    const {InputElement} = this.state

    return (
      <div className="back">
        <div className="sec">
          <h1>calculate the letter you entered</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="imge"
          />
        </div>
        <label htmlFor="PharseText">enter the phrase</label>
        <input
          id="PharseText"
          placeholder="enter the phrase"
          type="text"
          onChange={this.onCountChange}
          value={InputElement}
        />
        <div className="para">
          <p>no of letters...{InputElement.length}</p>
        </div>
      </div>
    )
  }
}
export default LettersCalculator
