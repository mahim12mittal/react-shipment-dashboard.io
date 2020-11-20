import Home from './component/Home/Home'
import Navbar from './component/Navbar/Navbar'
import Table from './component/Table/Table'
import TableMom from './component/TableMom/TableMom'
import TableFinance from './component/TableFinance/TableFinance'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <Route path='/' component={Home} exact></Route>
        <Route path='/' component={Table} exact></Route>
        <Route path='/mom' component={Home}></Route>
        <Route path='/mom' component={TableMom}></Route>
        <Route path='/finance' component={Home}></Route>
        <Route path='/finance' component={TableFinance}></Route>
      </div>
    </Router>
  );
}

export default App;
