import React from "react";
import './styles/banner.css'

import OutsideArea from './OutsideArea'
import imgSource from '../../../config/MediaSource'

type Props = {
    onClick(),
    transformStyle: any,
}

const Banner = ({ onClick, transformStyle }: Props) => (
    <div className="c-banner" style={transformStyle}>
        <OutsideArea onClick={onClick} />
        <div className="c-banner-container">
            <div className="c-brand">
                <img src={imgSource.global.logo} alt="Immersive Garden - Logotype" />
            </div>
        </div>
    </div>
)

export default Banner