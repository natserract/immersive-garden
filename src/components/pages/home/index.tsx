
import React from "react";
import './index.css'
import Header from "../../reusable/header/Header";


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
    }, [])


    //Check window
    const windowHeight = () => window.scrollBy(0, window.innerHeight);

    //Act when user scroll
    const handleScroll = ({ type }) => {
        if (type == 'FIRST' && windowHeight) {
            accessiblityHandler({ type: 'FIRST' })
        } else if (type == 'SECOND' && windowHeight) {
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
                <div className="c-banner" style={{ transform: initalTransform }}>
                    <div className="c_click_area" onClick={() => accessiblityHandler({ type: 'FIRST' })} ></div>
                    <div className="c-banner-container">
                        <div className="c-brand">
                            <img src={require('../../../assets/img/logotype.png')} alt="Immersive Garden - Logotype" />
                        </div>
                    </div>
                </div>
                <div className="c-home-news" style={{ transform: newTransform }}>
                    <div className="c_click_area" onClick={() => accessiblityHandler({ type: 'SECOND' })}></div>
                    <div className="chn__column">
                        <div className="chn__column_left">
                            <div className="c-home__news__subtitle">
                                <span style={{ color: move.color }}>Latest news</span>
                            </div>
                        </div>
                        <div className="chn__column_right">
                            <a href="https://www.facebook.com/immersive.g/photos/a.850906044922470.1073741828.843690335644041/1884925721520492/?type=3&theater" className="chn_title" target="_blank">
                                <h2 className="font_weight_light"><span>Studio Of The Year 2017 by both Awwwards <br /> and CSS Design Awards</span></h2>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="section-scrolled" style={{ transform: mainTransform }} >
                    <h3 style={{ fontSize: 190, color: '#000' }}>Hello</h3>
                </div>
            </div>
        </section>
    )
}

export default Index