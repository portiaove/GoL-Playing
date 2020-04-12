import React, {useState} from 'react';
import Grid from '../grid/Grid'

function Home() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <h1>Game of Life</h1>
      <Grid></Grid>
    </div>
  )
}

export default Home;