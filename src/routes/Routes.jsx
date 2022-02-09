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
      </Switch>
    </>
  );
}
