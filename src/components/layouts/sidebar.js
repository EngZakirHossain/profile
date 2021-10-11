import React, {Component} from 'react';

class Sidebar extends Component {
    render() {
        return (
            <div className="col-lg-4 profileColumn">
                <div className="profileSidebar">
                    <div className="psHeader">
                        <svg preserveAspectRatio="none" viewBox="0 0 100 100">
                            <polygon points="0 20, 100 20, 0 100" opacity=".65"></polygon>
                        </svg>
                        <svg className="svg2" preserveAspectRatio="none" viewBox="0 0 100 120">
                            <polygon points="0 20, 100 20, 15 120" opacity=".8"></polygon>
                        </svg>
                        <div className="psContent">
                            <h3>Linda M. Bellamy</h3>
                            <span>Sr. Developer</span>
                        </div>
                    </div>
                    <div className="psPhoto">
                        <img src="assets/images/home_01/1.jpg" alt=""/>
                        <div className="psSocial">
                            <a href="https://facebook.com" target="_blank" className="fac"><i className="icofont-facebook"></i></a>
                            <a href="https://twitter.com" target="_blank" className="twi"><i className="icofont-twitter"></i></a>
                            <a href="https://dribbble.com/" target="_blank" className="dri"><i className="icofont-dribbble"></i></a>
                            <a href="https://www.instagram.com/" target="_blank" className="ins"><i className="icofont-instagram"></i></a>
                        </div>
                    </div>
                    <div className="psSkills">
                        <div className="pssBox" data-count="85">
                            <div className="pssbCount">85.</div>
                            <h5>Backend Development</h5>
                            <div className="pssbBars">
                                <div className="pssbBar" style={{width:"85%"}}></div>
                            </div>
                        </div>
                        <div className="pssBox" data-count="92">
                            <div className="pssbCount">92.</div>
                            <h5>Frontend Development</h5>
                            <div className="pssbBars">
                                <div className="pssbBar gr2" style={{width:"92%"}}></div>
                            </div>
                        </div>
                        <div className="pssBox" data-count="71">
                            <div className="pssbCount">71.</div>
                            <h5>Illustration</h5>
                            <div className="pssbBars">
                                <div className="pssbBar gr3" style={{width:'71%'}}></div>
                            </div>
                        </div>
                    </div>
                    <div className="psFooter">
                        <a href="javascript:void(0);" className="btt_btn only_icon btt_reverse"><span><i className="icon icon-DownloadCloud"></i></span></a>
                        <a href="contact.html" className="btt_btn"><span><i
                            className="icon icon-Bag"></i> Hire Me</span></a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Sidebar;