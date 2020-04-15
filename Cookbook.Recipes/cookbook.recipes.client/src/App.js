import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Header from "./sharedComponents/Header/HeaderContainer";
import Footer from "./sharedComponents/Footer/Footer";
import Recipes from "./pages/Recipes/RecipesPageContainer";
import Index from "./pages/Index/IndexPageContainer";
import PrivateRoute from "./sharedComponents/PrivateRoute/PrivateRouteContainer";
import AboutPage from "./pages/About/AboutPageContainer";
import ContactPage from "./pages/Contact/ContactPageContainer";
import store from "./redux/store";
import EditRecipePage from "./pages/EditRecipe/EditRecipePageContainer";
import { history } from "@/helpers/history";

const App = () => (
  <Provider store={store}>
    <Router history={history}>
      <Header />
      <div className="container body-content mt-3">
        <Switch>
          <Route path="/" exact component={Index} />
          <PrivateRoute path="/recipes" exact component={Recipes} />
          <Route path="/about" exact component={AboutPage} />
          <Route path="/contact" exact component={ContactPage} />
          <Route path="/editRecipe/" exact component={EditRecipePage} />
          <Route path="/editRecipe/:id" component={EditRecipePage} />
        </Switch>
        <hr />
        <Footer />
      </div>
    </Router>
  </Provider>
);

export default App;
