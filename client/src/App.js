import React, {useState, useEffect} from 'react' 

function App() {
  
  const [data, setData] = useState([{}])

  useEffect(() => {
    fetch("/member").then(
      res => res.json()
    ).then(
      data => {
        setData(data)
        console.log(data)
      }
    )
  }, [])
  return (
    <div className="App">
      {(typeof data.members == 'undefined') ? (
        <p>Loading...</p>
      ) : (
        data.members.map((member, i) => (
          <p key = {i}>{member}</p>
        ))
      )}
    </div>
  );
}

export default App;
