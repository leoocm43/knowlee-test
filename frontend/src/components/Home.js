import React, {useState, useEffect} from 'react';
import { getAllPaths } from '../services/paths.js'

function Home() {
  const [pathsy, setPaths] = useState(null)

  useEffect(() => {
      async function getPaths() {
          const {data} = await getAllPaths()
          setPaths(data)

      }
      getPaths()
      }, [])
  

  return (
    <div>
<div style={{ padding: '1rem 3rem'}}>
<h1>Learning paths</h1> 
    {pathsy?.map(path => (
    <div style={{border:' 1px black solid', margin:'10px'}}>    
    <h1>{path.title}</h1>
    {path.topics?.map(({title}) => (
        <p>{title}</p> ))}
    </div>          
    ))}
    
</div>
    </div>
  )
}

export default Home;
