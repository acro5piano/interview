import * as React from 'react'
import { render } from 'react-dom'

interface State {
  message: string
}

class App extends React.Component<{}, State> {
  state = {
    message: 'hello react',
  }

  render() {
    const { message } = this.state
    return <div>{message}</div>
  }
}

render(<App />, document.getElementById('app'))
