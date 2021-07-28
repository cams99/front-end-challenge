import { withRouter } from 'react-router'
import { Switch, Route, Redirect } from 'react-router-dom'
import { MenuRoutes } from '@components/MenuRoutes'
import NotFound from '@components/NotFound'

const Router = () => (
  <Switch>
    {MenuRoutes.map(r => (
      <Route exact key={r.key} path={r.route} component={r.component} />
    ))}
    <Redirect to={`${MenuRoutes.find(route => route.route).route}`} />
    <Route component={NotFound} />
  </Switch>
)

export default withRouter(Router)
