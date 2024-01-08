import { useState } from "react"

function App() {
  const [title, setTitle] = useState('Hello World');
  const [showContent, setShowContent] = useState(false)

  function handleTitle() {
    setTitle('YOOOOOOOOOO')
  }

  function handleContent(){
    setShowContent(!showContent)
  }

  return (
    <>
        <h1>{title}</h1>
        {showContent && <ExclusiveContent />}
        <button onClick={handleContent}>{showContent ? "Click to hide" : "Click to show a secret"}</button>
        &nbsp;
        <button onClick={handleTitle}>Click to change the title</button>

    </>
  )
}

function ExclusiveContent(){
  return <h2>There`s nothing to see here!</h2>
}

export default App
