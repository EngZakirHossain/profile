import {BrowserRouter} from "react-router-dom";
import MyRouter from "./components/myRouter";
import Sidebar from "./components/layouts/sidebar";
import Navbar from "./components/layouts/navbar";
import React from "react";
import Footer from "./components/layouts/footer";
function App() {
  return(
        <BrowserRouter>
            <div className="container">
                <div className="row">
                    <Sidebar/>
                    <div className="col-lg-8 contentColumn">
                        <Navbar/>
                        <div className="sidebarOverlay"></div>
                        <div className="bodyContent">
                            <MyRouter/>
                            <Footer/>
                        </div>
                    </div>
                </div>

            </div>

        </BrowserRouter>
  );
}

export default App;
