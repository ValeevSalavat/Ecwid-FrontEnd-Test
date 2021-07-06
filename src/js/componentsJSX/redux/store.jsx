import { createStore } from 'redux'
import rootReducer from './componentsJSX/redux/rootReducer'

export default initStore = ()=> {
    const initialStore = {};
    return createStore(
        rootReducer,
        initialStore,
    );
}

