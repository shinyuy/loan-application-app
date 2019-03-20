import React from 'react'
import Carrousel from './Carrousel';

function Home() {
    return (
        <div style={{
            display: 'flex',
            minHeight: '100vh',
            flexDirection: 'column',
            flex: '1 0 auto',
            position: 'relative'
        }}>
            <Carrousel />
            <div className="artist_name">
                <div className="wrapper">
                    Welcome 
                    
                    <button style={{
                        backgroundColor : 'blueviolet',
                        color: 'white',
                        cursor: 'pointer',
                        borderRadius: '20%'
                    }}>Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default Home
