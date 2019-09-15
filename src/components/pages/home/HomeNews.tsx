import React from "react";
import './styles/homenews.css'

import OutsideArea from './OutsideArea'

type Props = {
    onClick(): void,
    transformStyle: any,
}

const HomeNews = ({ onClick, transformStyle }: Props) => (
    <div className="c-home-news" style={transformStyle}>
        <OutsideArea onClick={onClick} />
        
        <div className="chn__column">
            <div className="chn__column_left">
                <div className="c-home__news__subtitle">
                    <span>Latest news</span>
                </div>
            </div>
            <div className="chn__column_right">
                <a href="https://www.facebook.com/immersive.g/photos/a.850906044922470.1073741828.843690335644041/1884925721520492/?type=3&theater" className="chn_title" target="_blank" rel="noopener noreferrer">
                    <h2 className="font_weight_light"><span>Studio Of The Year 2017 by both Awwwards <br /> and CSS Design Awards</span></h2>
                </a>
            </div>
        </div>
    </div>
)

export default HomeNews