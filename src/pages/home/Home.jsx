import React from 'react';
import fear from '../../assets/home-assets/fear.png';
import '../../styles/Home.css';

const Home = () => {
    return (
        <div className="home-div">
            <img src={fear} alt="img" />
            <h3>
                Fear or pain of a computer or laptop user
            </h3>
        </div>
    )
}

export default Home;