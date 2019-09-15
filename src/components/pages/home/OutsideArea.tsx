import React from 'react'
import './styles/outsidearea.css'

type Props = {
    onClick(): void,
}

const OutsideArea = ({ onClick }:Props) => <div className="c_click_area" onClick={onClick}></div>;

export default OutsideArea