import Routers from '../../Routes/Routers';
import ReduxContext from '../../Redux/reduxContext';
import ReduxStore from '../../Redux/store';

import {
    useEffect,
    useState
} from 'react';

function App() {
    const [ store, setStoreState ] = useState(ReduxStore)

    useEffect(() => {
        store.subscribe(() => setStoreState(store))
    }, [])

    return (
        <ReduxContext.Provider value={store}>
            <main>
                <Routers/>        
            </main>
        </ReduxContext.Provider>
    );
}

export default App;