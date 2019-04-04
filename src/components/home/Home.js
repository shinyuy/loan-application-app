import React from 'react';
import Carrousel from './Carrousel';
import Features from './Features';
import Location from '../location/index';

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
            </div>
            <Features />
            <Location />
        </div>
    )
}

export default Home
