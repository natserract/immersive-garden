import React from 'react'
import { Link } from 'react-router-dom'
import './styles/content.css'

type Props = {
    caseTitle: string,
    caseDescription: string,
    poster: string,
    title: string,
    source: string,
    linkTo?: string,
    pathTo: any
}

const Content = ({ caseTitle, caseDescription, poster, title, source, pathTo }: Props) => (
    <div className="p-home_cases_case">
        <div className="phs_type_case phs_column_left">
            <span>Experience</span>
        </div>
        <div className="phs_main_case phs_column_center">
            <Link to={`/cases/${pathTo}`}>
                <div className="phs_case__media">
                    <video preload="auto" autoPlay={true} loop={true} poster={poster} title={title}>
                        <source src={source} type="video/mp4"></source>
                    </video>
                </div>
                <div className="phs_case_content">
                    <h3>{caseTitle}</h3>
                    <p>{caseDescription}</p>
                </div>
            </Link>
        </div>
    </div>
)

export default Content
