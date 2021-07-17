import { Switch, Route } from "react-router-dom";
import TextEditContainer from "./containers/editor/TextEditContainer";

function App() {
  return (
    <Switch>
      <Route path="/" component={TextEditContainer} exact/>
    </Switch>
  );
}

export default App;
