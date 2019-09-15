
import React from "react";
import './styles/index.css'

import Header from "../../reusable/header/Header";
import Banner from './Banner'
import HomeNews from './HomeNews'
import Content from './Content'


//Initial props
const headerProps = {
    menuName: 'About Us',
    to: 'about'
}

//Static props
const contentProps = {
    caseTitle: 'The new Mobile Workforce',
    caseDescription: 'Race Day requires optimal performance. Take a look at how the Citrix team uses data to analyze, model, & design the car.',
    poster: 'https://immersive-g.com/admin_a09ce8cf/storage/uploads/2018/02/23/5a905583ad08aCitrix-Thumb.jpg',
    title: 'Immersive Garden - The new Mobile Workforce',
    source: 'https://immersive-g.com/admin_a09ce8cf/storage/uploads/2018/02/23/5a905587b47d9Citrix-Thumb.mp4'
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

            <div className="home-landing-section">
                <Banner onClick={() =>
                    accessiblityHandler({ type: 'FIRST' })}
                    transformStyle={{ transform: initalTransform }}
                />
                <HomeNews onClick={() =>
                    accessiblityHandler({ type: 'SECOND' })}
                    transformStyle={{ transform: newTransform }}
                />
                <div className="section-scrolled" style={{ transform: mainTransform }} >
                    <div className="p-home__section">
                        <Content {...contentProps} />
                        <Content {...contentProps} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Index