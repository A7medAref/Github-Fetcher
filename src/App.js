import {  Route, Switch } from "react-router-dom";
import ErrorPage from "./components/error/error";
import { Home } from "./components/home/Home";
import Reception from "./components/login/reception";
import Wrapper from "./components/login/wrapper";
import Protector from "./RouterProtector";
function App() {
  

  return (
<Wrapper>
    <Switch>
      <Protector path='/'exact>
        <Home/>
      </Protector>
      <Route path="/login">
        <Reception/>
      </Route>
      <Route path='*'>
        <ErrorPage/>
      </Route>
    </Switch>
</Wrapper>
  );
}

export default App;
