
import React from "react";
import './index.css'
import Header from "../../reusable/header/Header";


const Index: React.SFC = () => {
    return (
        <section className="c-home" >
            <Header/>
            <section className="c-banner">
                <div className="c-banner-container">
                    <div className="c-brand">
                        <img src={require('../../../assets/img/logotype.png')} alt="Immersive Garden - Logotype" />
                    </div>
                </div>
            </section> 
        </section>
    )
}

export default Index