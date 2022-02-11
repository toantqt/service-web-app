import { Redirect, Route, Switch } from "react-router-dom";
import BusinessAppComponent from "../components/Details/BusinessApp.component";
import DetailsComponent from "../components/Details/Details.component";
import EducationAppComponent from "../components/Details/EducationApp.component";
import FinanceAppComponent from "../components/Details/FinanceApp.component";
import MedicalAppComponent from "../components/Details/MedicalApp.component";
import SaleAppComponent from "../components/Details/SaleApp.component";
import TravelAppComponent from "../components/Details/TravelApp.component";
import FoodAppComponent from "../components/Details/FoodApp.component";
import ShippingAppComponent from "../components/Details/ShippingApp.component";
import DatingAppComponent from "../components/Details/DatingApp.component";

import slug from "../resources/slug";
import SaleWebComponent from "../components/Details/Web/SaleWeb.component";
import BusinessWebComponent from "../components/Details/Web/BusinessWeb.component";
import FinanceWebComponent from "../components/Details/Web/FinanceWeb.component";
import MedicalWebComponent from "../components/Details/Web/MedicalWeb.component";
import EducationWebComponent from "../components/Details/Web/EducationWeb.component";
import TravelWebComponent from "../components/Details/Web/TravelWeb.component";
import FoodWebComponent from "../components/Details/Web/FoodWeb.component";
import ShippingWebComponent from "../components/Details/Web/ShippingWeb.component";
import DatingWebComponent from "../components/Details/Web/DatingWeb.component";

export default function Routes(props) {
  return (
    <>
      <Switch>
        <Route
          path={slug.DETAILS_APP_1}
          render={() => <SaleAppComponent {...props} />}
        ></Route>
        <Route
          path={slug.DETAILS_APP_2}
          render={() => <BusinessAppComponent {...props} />}
        ></Route>
        <Route
          path={slug.DETAILS_APP_3}
          render={() => <FinanceAppComponent {...props} />}
        ></Route>
        <Route
          path={slug.DETAILS_APP_4}
          render={() => <MedicalAppComponent {...props} />}
        ></Route>
        <Route
          path={slug.DETAILS_APP_5}
          render={() => <EducationAppComponent {...props} />}
        ></Route>
        <Route
          path={slug.DETAILS_APP_6}
          render={() => <TravelAppComponent {...props} />}
        ></Route>
        <Route
          path={slug.DETAILS_APP_7}
          render={() => <FoodAppComponent {...props} />}
        ></Route>
        <Route
          path={slug.DETAILS_APP_8}
          render={() => <ShippingAppComponent {...props} />}
        ></Route>
        <Route
          path={slug.DETAILS_APP_9}
          render={() => <DatingAppComponent {...props} />}
        ></Route>
        <Route
          path={slug.DETAILS_WEB_1}
          render={() => <SaleWebComponent {...props} />}
        ></Route>
        <Route
          path={slug.DETAILS_WEB_2}
          render={() => <BusinessWebComponent {...props} />}
        ></Route>
        <Route
          path={slug.DETAILS_WEB_3}
          render={() => <FinanceWebComponent {...props} />}
        ></Route>
        <Route
          path={slug.DETAILS_WEB_4}
          render={() => <MedicalWebComponent {...props} />}
        ></Route>
        <Route
          path={slug.DETAILS_WEB_5}
          render={() => <EducationWebComponent {...props} />}
        ></Route>
        <Route
          path={slug.DETAILS_WEB_6}
          render={() => <TravelWebComponent {...props} />}
        ></Route>
        <Route
          path={slug.DETAILS_WEB_7}
          render={() => <FoodWebComponent {...props} />}
        ></Route>
        <Route
          path={slug.DETAILS_WEB_8}
          render={() => <ShippingWebComponent {...props} />}
        ></Route>

        <Route
          path={slug.DETAILS_WEB_9}
          render={() => <DatingWebComponent {...props} />}
        ></Route>
      </Switch>
    </>
  );
}
