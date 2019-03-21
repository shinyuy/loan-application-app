import React from 'react'
import Carrousel from './Carrousel';
import Features from './Features';

function Home() {
    return (
        <div>
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
                        backgroundColor : '#303075',
                        color: 'white',
                        cursor: 'pointer',
                        borderRadius: '20%'
                    }}>Get Started</button>
                </div>
            </div>
        </div>
            
             <Features />   
            
            
        </div>
    )
}

export default Home
