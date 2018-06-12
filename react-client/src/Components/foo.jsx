import {Router, Route, browserHistory} from 'react-router'
import Layout from './Layout'

render(
    <Layout>
        <Router>
            <Route path="/" component = {Header}/>
        </Router>
    </Layout>
)
