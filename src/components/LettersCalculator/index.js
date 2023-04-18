// Write your code here.
import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {input: ''}

  onChangeLetter = event => {
    const result = event.target.value

    this.setState({input: result})
  }

  render() {
    const {input} = this.state
    return (
      <div className="container">
        <div className="bg-container">
          <div>
            <h1 className="heading">
              Calculate the
              <br /> Letters you <br />
              enter
            </h1>

            <label htmlFor="letter" className="label">
              Enter the phrase
            </label>

            <input
              type="text"
              id="letter"
              className="input"
              placeholder="Enter the phrase"
              value={input}
              onChange={this.onChangeLetter}
            />
            <p className="counter">No.of letters: {input.length}</p>
          </div>

          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="image"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
