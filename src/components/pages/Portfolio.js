import React, {Component} from 'react';

class Portfolio extends Component {
    render() {
        return (
            <div className="pageCointainer">
                <section className="comonSection portfolioSection">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12">
                                <h2 className="sectionTitle">Latest Projects</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <ul className="filterUL">
                                    <li className="active filter" data-filter="all">All</li>
                                    <li className="filter" data-filter="dev">Development</li>
                                    <li className="filter" data-filter="graphic">Graphic</li>
                                    <li className="filter" data-filter="app">App</li>
                                    <li className="filter" data-filter="illustrtopm">Illustration</li>
                                </ul>
                            </div>
                        </div>
                        <div className="row" id="Grid">
                            <div className="col-lg-4 folio_effect mix graphic">
                                <div className="folio_item">
                                    <a href="single_folio.html" className="folio_item_thumbs">
                                        <div className="folio_stack">
                                            <div className="folio_decoration"></div>
                                            <div className="folio_decoration"></div>
                                            <div className="folio_decoration"></div>
                                            <div className="folio_decoration"></div>
                                            <div className="folio_img_holder">
                                                <img className="folio_img" src="assets/images/folio/1.jpg" alt="Image"></img>
                                            </div>
                                        </div>
                                    </a>
                                    <div className="folio_content">
                                        <h3 className="folio_title"><a href="single_folio.html">Artwork Design</a></h3>
                                        <p className="folio_cat"><a href="portfolio.html">Graphic</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 folio_effect mix dev">
                                <div className="folio_item">
                                    <a href="single_folio.html" className="folio_item_thumbs">
                                        <div className="folio_stack">
                                            <div className="folio_decoration"></div>
                                            <div className="folio_decoration"></div>
                                            <div className="folio_decoration"></div>
                                            <div className="folio_decoration"></div>
                                            <div className="folio_img_holder">
                                                <img className="folio_img" src="assets/images/folio/2.jpg" alt="Image"></img>
                                            </div>
                                        </div>
                                    </a>
                                    <div className="folio_content">
                                        <h3 className="folio_title"><a href="single_folio.html">Web App</a></h3>
                                        <p className="folio_cat"><a href="portfolio.html">Development</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 folio_effect mix illustrtopm">
                                <div className="folio_item">
                                    <a href="single_folio.html" className="folio_item_thumbs">
                                        <div className="folio_stack">
                                            <div className="folio_decoration"></div>
                                            <div className="folio_decoration"></div>
                                            <div className="folio_decoration"></div>
                                            <div className="folio_decoration"></div>
                                            <div className="folio_img_holder">
                                                <img className="folio_img" src="assets/images/folio/3.jpg" alt="Image"></img>
                                            </div>
                                        </div>
                                    </a>
                                    <div className="folio_content">
                                        <h3 className="folio_title"><a href="single_folio.html">Pencil Drawing</a></h3>
                                        <p className="folio_cat"><a href="portfolio.html">Illustration</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 folio_effect mix app">
                                <div className="folio_item">
                                    <a href="single_folio.html" className="folio_item_thumbs">
                                        <div className="folio_stack">
                                            <div className="folio_decoration"></div>
                                            <div className="folio_decoration"></div>
                                            <div className="folio_decoration"></div>
                                            <div className="folio_decoration"></div>
                                            <div className="folio_img_holder">
                                                <img className="folio_img" src="assets/images/folio/4.jpg" alt="Image"></img>
                                            </div>
                                        </div>
                                    </a>
                                    <div className="folio_content">
                                        <h3 className="folio_title"><a href="single_folio.html">Graphic App</a></h3>
                                        <p className="folio_cat"><a href="portfolio.html">App</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 folio_effect mix graphic">
                                <div className="folio_item">
                                    <a href="single_folio.html" className="folio_item_thumbs">
                                        <div className="folio_stack">
                                            <div className="folio_decoration"></div>
                                            <div className="folio_decoration"></div>
                                            <div className="folio_decoration"></div>
                                            <div className="folio_decoration"></div>
                                            <div className="folio_img_holder">
                                                <img className="folio_img" src="assets/images/folio/5.jpg" alt="Image"></img>
                                            </div>
                                        </div>
                                    </a>
                                    <div className="folio_content">
                                        <h3 className="folio_title"><a href="single_folio.html">Awesome Illustration</a>
                                        </h3>
                                        <p className="folio_cat"><a href="portfolio.html">UI/UX</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 folio_effect mix dev">
                                <div className="folio_item">
                                    <a href="single_folio.html" className="folio_item_thumbs">
                                        <div className="folio_stack">
                                            <div className="folio_decoration"></div>
                                            <div className="folio_decoration"></div>
                                            <div className="folio_decoration"></div>
                                            <div className="folio_decoration"></div>
                                            <div className="folio_img_holder">
                                                <img className="folio_img" src="assets/images/folio/6.jpg" alt="Image"></img>
                                            </div>
                                        </div>
                                    </a>
                                    <div className="folio_content">
                                        <h3 className="folio_title"><a href="single_folio.html">Frontend Development</a>
                                        </h3>
                                        <p className="folio_cat"><a href="portfolio.html">Development</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Portfolio;