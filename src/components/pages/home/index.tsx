
import React from "react";
import './styles/index.css'

import Header from "../../reusable/header/Header";
import Banner from './Banner'
import HomeNews from './HomeNews'
import Content from './Content'


//Initial props
const staticProps = {
    headerProps: {
        menuName: 'About Us',
        to: 'about'
    },
    contentProps: {
        caseTitle: 'The new Mobile Workforce',
        caseDescription: 'Race Day requires optimal performance. Take a look at how the Citrix team uses data to analyze, model, & design the car.',
        poster: 'https://immersive-g.com/admin_a09ce8cf/storage/uploads/2018/02/23/5a905583ad08aCitrix-Thumb.jpg',
        title: 'Immersive Garden - The new Mobile Workforce',
        source: 'https://immersive-g.com/admin_a09ce8cf/storage/uploads/2018/02/23/5a905587b47d9Citrix-Thumb.mp4'
    }
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
                    mainTransform: !move.mainTransform
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

    //convert title
    const { caseTitle } = staticProps.contentProps
    const url = caseTitle.toLowerCase().replace(/ +/g, "-");

    //Act when user scroll
    const handleScroll = ({ type }) => {
        if (type === 'FIRST' && windowHeight) {
            accessiblityHandler({ type: 'FIRST' })
        } else if (type === 'SECOND' && windowHeight) {
            accessiblityHandler({ type: 'SECOND' })
        }
    }

    let newTransformStyle = 
        move.transform ? (move.transform = '-100%') : (move.newTransform ?
        (move.newTransform = 'translateY(-100%)') : (move.mainTransform = 'translateY(-200%)'))
        

    return (
        <section className="c-home">
            <Header {...staticProps.headerProps} />

            <div className="home-landing-section">
                <Banner onClick={() =>
                    accessiblityHandler({ type: 'FIRST' })}
                    transformStyle={{ transform: newTransformStyle }}
                />
                <HomeNews onClick={() =>
                    accessiblityHandler({ type: 'SECOND' })}
                    transformStyle={{ transform: newTransformStyle }}
                />
                <div className="section-scrolled" style={{ transform: newTransformStyle }} >
                    <div className="p-home__section">
                        <Content pathTo={url} {...staticProps.contentProps} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Index