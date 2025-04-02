import { useState } from 'react'
import reactLogo from '../src/assets/react.svg'
import viteLogo from '/vite.svg'
import '../src/App.css'

function Home() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div>
                <h1>home</h1>
            </div>
        </>
    )
}

export default Home
