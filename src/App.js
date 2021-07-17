import { Switch, Route } from "react-router-dom";
import TextEditContainer from "./containers/editor/TextEditContainer";
import IndexContainer from "./containers/IndexContainer";

function App() {
  return (
    <Switch>
      <Route path="/" component={IndexContainer} exact/>
      <Route path="/:editorId" component={TextEditContainer} exact/>
    </Switch>
  );
}

export default App;
