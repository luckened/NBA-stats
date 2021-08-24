import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import Navbar from 'components/Navbar';
import Layout from 'components/common/Layout';

import { generalRoutes } from 'routes';

import './App.css';

const queryClient = new QueryClient();

function App() {
    return (
        <Router>
            <QueryClientProvider client={queryClient}>
                <Navbar />
                <Layout>
                    <Switch>
                        {Object.values(generalRoutes).map(
                            ({ path, component }) => (
                                <Route
                                    key={path}
                                    exact
                                    path={path}
                                    component={component}
                                />
                            )
                        )}
                    </Switch>
                </Layout>
            </QueryClientProvider>
        </Router>
    );
}

export default App;
