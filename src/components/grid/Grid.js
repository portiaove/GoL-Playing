import React from 'react';

class Grid extends React.Component {
  state = {
    cols: Number,
    rows: Number
  }

  mngSize = (e) => {
    const {name, value} = e.target;
    this.setState({...this.state, [name]: value})
  }

  createGrid = () => {
    this.makeGrid()
  }

  makeGrid = () => {
    // const [count] = this.props;
    for (let i = 0; i<10; i++) {
      for (let j = 0; j<30; j++) {

      }
    }
  }
  
  render() {
    console.log(this.state)
    return(
      <div>
        <div>
          <h2>Cols</h2>
          <input name='cols' type='number' onChange={this.mngSize}></input>
        </div>
        <div>
          <h2>Rows</h2>
          <input name='rows' type='number' onChange={this.mngSize}></input>
        </div>
        <div>
          <h3>Let's go, sexy</h3>
          <button onClick={this.createGrid}></button>
        </div>
        <table></table>
      </div>
    )
  }
}

export default Grid;