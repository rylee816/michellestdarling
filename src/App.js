import Header from "./Header";
import Title from "./Title";
import Gallery from "./Gallery";
import About from "./About";
import Pets from "./Pets";
import Portraits from "./Portraits";
import Contact from "./Contact"
import Antiques from "./Antiques";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import {FormspreeProvider} from "@formspree/react";
import "./App.css";
import PopArt from "./PopArt";

function App() {
  return (
    <div className="App">
      <FormspreeProvider project="1588315754573331501">
      <BrowserRouter>
      <Header />
      <ScrollToTop>
        <Switch>
        <Route exact path="/michellestdarling" component={Title} />
        <Route exact path="/gallery" component={Gallery} />
        <Route exact path="/about" component={About}/>
        <Route exact path="/pets" component={Pets} />
        <Route exact path="/portraits" component={Portraits} />
        <Route exact path="/pop-art" component={PopArt}/>
        <Route exact path="/contact" render={(props)=> <Contact {...props}/>} />
        <Route exact path="/antiques" component={Antiques} />
        <Route><h1 style={{color: "white"}}>Error 404: Not Found</h1></Route>
        </Switch>
        </ScrollToTop>
      </BrowserRouter>
      </FormspreeProvider>
    </div>
  );
}

export default App;
