import React, {Component} from 'react';

export default class Resume extends Component {
    render() {
        let resumeData = this.props.resumeData;
        return (
            <section id="resume">
                <div className="row education">
                    <div className="three columns header-col">
                        <h1><span>Education</span></h1>
                    </div>
                    <div className="nine columns main-col">
                        {
                            resumeData.education && resumeData.education.map((item) => {
                                return (
                                    <div className="row item">
                                        <div className="twelve columns">
                                            <h3>{item.UniversityName}</h3>
                                            <p className="info">
                                                {item.specialization}
                                                <span>&bull;</span> <em
                                                className="date">{item.MonthOfPassing} {item.YearOfPassing}</em></p>
                                            <p>
                                                {item.Achievements}
                                            </p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="row work">
                    <div className="three columns header-col">
                        <h1><span>Work</span></h1>
                    </div>
                    <div className="nine columns main-col">
                        {
                            resumeData.work && resumeData.work.map((item) => {
                                return (
                                    <div className="row item">
                                        <div className="twelve columns">
                                            <h3>{item.CompanyName}</h3>
                                            <p className="info">
                                                {item.specialization}
                                                <span>&bull;</span> <em
                                                className="date">{item.MonthOfJoining} - {item.MonthOfLeaving}</em></p>
                                            <p>
                                                {item.Achievements}
                                            </p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="row skill">
                    <div className="three columns header-col">
                        <h1><span>Skills</span></h1>
                    </div>
                    <div className="nine columns main-col">
                        <p>
                            {resumeData.skillsDescription}
                        </p>
                        <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf" alt="">
                            {
                                resumeData.skills && resumeData.skills.map((item) => {
                                    return (
                                        <div className="columns ">
                                                        <div className="portfolio-item-meta">
                                                            <h5 className="skills">{item.skillname}</h5>
                                                        </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>
        );
    }
};