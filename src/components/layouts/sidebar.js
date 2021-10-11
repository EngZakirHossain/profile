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
                            <h3>Zakir Hossain</h3>
                            <span>Sr. Developer</span>
                        </div>
                    </div>
                    <div className="psPhoto">
                        <img src="assets/images/home_01/zakir.jpg" alt=""/>
                        <div className="psSocial">
                            <a href="https://www.facebook.com/zakir.hossain.4969" target="_blank" className="fac"><i className="icofont-facebook"></i></a>
                            <a href="https://www.linkedin.com/in/zakir-hossain-693723192" target="_blank" className="dri"><i className="icofont-linkedin"></i></a>
                            <a href="https://github.com/EngZakirHossain" target="_blank" className="twi"><i className="icofont-github"></i></a>
                            <a href="https://gitlab.com/Zakir_trimatric" target="_blank" className="dri"><i className="icofont-github"></i></a>
                        </div>
                    </div>
                    <div className="psSkills">
                        <div className="pssBox" data-count="85">
                            <div className="pssbCount">80.</div>
                            <h5>Backend Development</h5>
                            <div className="pssbBars">
                                <div className="pssbBar" style={{width:"85%"}}></div>
                            </div>
                        </div>
                        <div className="pssBox" data-count="92">
                            <div className="pssbCount">70.</div>
                            <h5>Frontend Development</h5>
                            <div className="pssbBars">
                                <div className="pssbBar gr2" style={{width:"70%"}}></div>
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