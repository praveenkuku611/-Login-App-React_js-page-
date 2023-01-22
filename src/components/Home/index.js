import './index.css'

import {Component} from 'react'

class Home extends Component {
  state = {Login: false}

  statusChanged = () => {
    this.setState(prevState => ({
      Login: !prevState.Login,
    }))
  }

  render() {
    const {Login} = this.state
    let heading1
    let text1
    if (Login === true) {
      heading1 = 'Welcome User'
      text1 = 'Logout'
    } else {
      heading1 = 'Please Login'
      text1 = 'Login'
    }

    return (
      <div className="bg-container">
        <h1 className="heading">{heading1}</h1>
        <button type="button" onClick={this.statusChanged}>
          {text1}
        </button>
      </div>
    )
  }
}
export default Home
