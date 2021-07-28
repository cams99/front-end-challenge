import { Router, Switch, Route } from 'react-router-dom'
import { createHashHistory } from 'history'
import AppLayout from '@components/AppLayout'
import AppRouter from './Router'

const history = createHashHistory()

const App = () => (
  <Router history={history}>
    <Switch>
      <Route
        render={props => <AppLayout router={<AppRouter />} {...props} />}
      />
    </Switch>
  </Router>
)

export default App
