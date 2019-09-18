
import React from "react";
import './styles/index.css'
import Context from '../../../context'

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
}


const Index: React.SFC = () => {
    const STATE = React.useContext(Context);

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


    //state conditions
    let newTransformStyle =
        move.transform ? (move.transform = '-100%') : (move.newTransform ?
            (move.newTransform = 'translateY(-100%)') : (move.mainTransform = 'translateY(-200%)'));

    let pushClassEl = move.mainTransform ? 'home-bg-active' : 'home-bg-normal',
        changeColorEl = move.mainTransform ? 'color-active' : 'color-default'

    return (
        <section className="c-home">
            <Header {...staticProps.headerProps} passingClass={changeColorEl} />

            <div className={`home-landing-section ${pushClassEl}`}>
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
                        {
                            STATE.contentProps.map((item, id) => {
                                let url = item.caseTitle.toLowerCase().replace(/ +/g, "-");
                                return <Content key={id} pathTo={url} {...item} />
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Index