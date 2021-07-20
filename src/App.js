import { Route, Redirect, BrowserRouter } from "react-router-dom";
import LadingPage from "./features/Home/pages/Landing/LandingPage";
function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={LadingPage}></Route>
    </BrowserRouter>
  );
}

export default App;
