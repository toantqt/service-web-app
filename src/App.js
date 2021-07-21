import { Route, Redirect, BrowserRouter } from "react-router-dom";
import LadingPage from "./features/Home/pages/Landing/LandingPage";
import AppPage from "./features/App/pages/App Page/AppPage";
import WebPage from "./features/Web/pages/WebPage";
import ContactPage from "./features/Contact/pages/ContactPage";
function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={LadingPage}></Route>
      <Route exact path="/app" component={AppPage}></Route>
      <Route exact path="/web" component={WebPage}></Route>
      <Route exact path="/contact" component={ContactPage}></Route>
    </BrowserRouter>
  );
}

export default App;
