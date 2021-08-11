import { React } from 'react';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import { MoneyForJam } from './components/MoneyForJam';
import DailyRecord from './components/DailyRecord';

function App() {

  return (
    <Router>
      <Route exact path="/" component={MoneyForJam} />
      <Route exact path="/dailyrecord" component={DailyRecord} />
    </Router>
  );
}

export default App;