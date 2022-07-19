import React, {Component} from 'react';
export default class Portfolio extends Component {
    render() {
        let resumeData = this.props.resumeData;
        return (
            <section id="portfolio">
                <div className="row">
                    <div className="twelve columns collapsed">
                        <h1>Check Out Some of My Works.</h1>
                      
                        <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf" alt="">
                            {
                                resumeData.portfolio && resumeData.portfolio.map((item) => {
                                    return (
                                        <div className="columns portfolio-item">
                                            <div className="item-wrap">
                                                <a href={`${item.url}`}>
                                             
                                                    <img src= {process.env.PUBLIC_URL + `/images/portfolio/${item.imgurl}`}
                                                     className="item-img"/>
                                                    <div className="overlay">
                                                        <div className="portfolio-item-meta">
                                                            <h5>{item.name}</h5>
                                                            <p>{item.description}</p>
                                                        </div>
                                                    </div>
                                                </a>
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
}