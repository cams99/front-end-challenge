import { Router, Switch, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import AppLayout from '@components/AppLayout'
import AppRouter from './Router'

const history = createBrowserHistory()

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
