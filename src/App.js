import { Route, Redirect, HashRouter } from "react-router-dom";
import LadingPage from "./features/Home/pages/Landing/LandingPage";
import AppPage from "./features/App/pages/App Page/AppPage";
import WebPage from "./features/Web/pages/WebPage";
import ContactPage from "./features/Contact/pages/ContactPage";
import DetailsPage from "./features/App/pages/Details/DetailsPage";
function App() {
  return (
    <HashRouter>
      <Route exact path="/" component={LadingPage}></Route>
      <Route exact path="/app" component={AppPage}></Route>
      <Route exact path="/web" component={WebPage}></Route>
      <Route exact path="/contact" component={ContactPage}></Route>
      <Route exact path="/details" component={DetailsPage}></Route>
    </HashRouter>
  );
}

export default App;
