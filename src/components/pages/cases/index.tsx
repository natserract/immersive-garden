
import React from 'react'
import { Redirect } from 'react-router'
import Context from '../../../context/index'


const Index = ({ match }) => {
    const DATA = React.useContext(Context);

    let GETURL = match.url.replace('/cases/', '')
    let URLFILTER = DATA.contentProps.some(URL =>
        URL.caseTitle.toLowerCase().replace(/ +/g, "-") === GETURL
    )

    return (
        // <!--Redirect if parameter values not correctly-->
        !URLFILTER ? ( <Redirect to='/' /> ) : (
            <section className="p-case">
                <div className="pc_container">
                    <div className="pc__label">
                        <span>Experience</span>
                    </div>
                    <div className="pc_container__wrapper">
                        <div className="pc_wrap_column">
                            <h1>{JSON.stringify(match.params.caseId)}</h1>
                        </div>
                        <div className="pc_wrap_column">

                        </div>
                    </div>
                </div>
            </section>)
    )

}

export default Index