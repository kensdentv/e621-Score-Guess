import { useState } from 'react'
import e621 from './assets/e621.png'
import './App.css'
import { getYiffData } from './e621'

interface Post {
  id: number; // or string, depending on your data structure
  artists: string[];
  thumb: string;
  score: number;
  url: string;
  // add other properties as needed
}

function App() {


  return (
    <>
      <Logo />
      <h1>e621 Score Guesser</h1>
      <ButtonLayout />
      <Credits />
    </>
  )
}

function Logo() {
  return (
    <div>
        <a href="https://vite.dev" target="_blank">
          <img src={e621} className="logo" alt="e621 logo" style={{height: '10em'}} />
        </a>
    </div>
  )
}

function ButtonLayout() {

    const [data, setData] = useState<any[]>([]);

  // Run handleClick only once on mount
  useState(() => {
    handleClick();
  });

   async function handleClick() {
    console.log("Guess button clicked")
    const data = await getYiffData()
    setData(data)
  }

  return (
    <div className="card" style={{ display: 'inline-flex', flexDirection: 'row', alignItems: 'center' }}>

      {data.map((post: Post) => post).map((post: Post) => (
        <GuessButton onClick={handleClick} key={post.id} post={post} />
      ))}

    </div>
  )
}

function GuessButton({ post, onClick }: { post: Post; onClick: () => void }) {
  return (
    <button onClick={onClick} style={{ margin: '1em', padding: '1em' }}>
      
      <img src={post.url} alt={`Post ${post.id}`} style={{ maxHeight: '320px' }} /><br />
      {post.artists.join(', ')}<br />
      Score: {post.score}<br />
    
    </button>
  )
}

function Credits() {
  return (
    <div className="credits">
      Created by KensDenTV
    </div>
  )
}


export default App
