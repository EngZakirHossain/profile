import {BrowserRouter} from "react-router-dom";
import MyRouter from "./components/myRouter";
import Sidebar from "./components/layouts/sidebar";
import Navbar from "./components/layouts/navbar";
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
                        </div>
                    </div>
                </div>
            </div>

        </BrowserRouter>
  );
}

export default App;
