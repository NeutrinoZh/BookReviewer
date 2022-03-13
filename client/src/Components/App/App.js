import { Provider } from 'react-redux';
import Routers from '../../Routes/Routers';
import store from '../../Redux/store';

function App() {
    return (   
        <Provider store={store}>
            <main>
                <Routers/>        
            </main>
        </Provider> 
    );
}

export default App;