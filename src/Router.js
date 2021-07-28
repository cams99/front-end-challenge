import { withRouter } from 'react-router'
import { Switch, Route } from 'react-router-dom'
import { MenuRoutes } from '@components/MenuRoutes'
import NotFound from '@components/NotFound'

const Router = () => (
  <Switch>
    {MenuRoutes.map(r => (
      <Route exact key={r.key} path={r.route} component={r.component} />
    ))}
    <Route component={NotFound} />
  </Switch>
)

export default withRouter(Router)
