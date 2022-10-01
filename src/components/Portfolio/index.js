import React, {useState, useEffect} from 'react'
import Loader from 'react-loaders';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import portfolioData from '../../data/portfolio.json'

const Portfolio = () => {

    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(()=>{
        const timer= setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);
        return () =>{
            clearTimeout(timer);
        }
    }, [])

    const renderPortfolio = (portfolio) =>{
        return (
            <div className='images-container'>
                {
                portfolio.map((portfolio, idx) => {
                    return (
                        <div className='image-box' key={idx}>
                            <img src={portfolio.cover} alt='project' className='portfolio-image' />
                            <div className='content' >
                                <p className='title'>{portfolio.title}</p>
                                <h4 className='description'>{portfolio.description}</h4>
                                <button 
                                className='btn' 
                                onClick={() => window.open(portfolio.url)} 
                                >
                                    View
                                </button>
                            </div>
                        </div>
                    )
                })
            }
            </div>
        );
    }
    return (
        <>
        <div className='container portfolio-page' >
            <h1 className='page-title' >
            <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={'Portfolio'.split("")}
                        idx={15}
                    />
                 </h1>
                 <div>{renderPortfolio(portfolioData.portfolio)}</div> 
        </div>
        <Loader type="pacman" />
        </>
    );
}

export default Portfolio;