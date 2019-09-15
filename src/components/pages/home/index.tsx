
import React from "react";
import './styles/index.css'

import Header from "../../reusable/header/Header";
import Banner from './Banner'
import HomeNews from './HomeNews'


const headerProps = {
    menuName: 'About Us',
    to: 'about'
}

const Index: React.SFC = () => {
    const [move, setMove] = React.useState({
        color: 'red',
        transform: true,
        newTransform: false,
        mainTransform: false
    });

    //accessiblityHandler
    const accessiblityHandler = (action) => {
        switch (action.type) {
            case 'FIRST': {
                setMove({
                    transform: !move.transform,
                    newTransform: !move.newTransform,
                });
                break
            }
            case 'SECOND': {
                setMove({
                    newTransform: 'translateY(-200%)',
                    mainTransform: !move.mainTransform,
                })
                break
            }
            default: {
                return false
            }
        }
    }


    // Check when page scrolled
    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    })


    //Check window
    const windowHeight = () => window.scrollBy(0, window.innerHeight);

    //Act when user scroll
    const handleScroll = ({ type }) => {
        if (type === 'FIRST' && windowHeight) {
            accessiblityHandler({ type: 'FIRST' })
        } else if (type === 'SECOND' && windowHeight) {
            accessiblityHandler({ type: 'SECOND' })
        }
    }

    const initalTransform = move.transform ? 'translateY(0px)' : 'translateY(-100%)',
        newTransform = move.newTransform ? 'translateY(-100%)' : 'translateY(0px)',
        mainTransform = move.mainTransform ? 'translateY(-200%)' : 'translateY(0px)';

    return (
        <section className="c-home">
            <Header {...headerProps} />

            <div className="section-fixed">
                <Banner onClick={() => 
                    accessiblityHandler({ type: 'FIRST' })} 
                    transformStyle={{ transform: initalTransform }} 
                />
                <HomeNews onClick={() => 
                    accessiblityHandler({ type: 'SECOND' })} 
                    transformStyle={{ transform: newTransform }} 
                />
                <div className="section-scrolled" style={{ transform: mainTransform }} >
                    <h3 style={{ fontSize: 190, color: '#000' }}>Hello</h3>
                </div>
            </div>
        </section>
    )
}

export default Index