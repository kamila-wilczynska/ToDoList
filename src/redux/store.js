import { createStore } from 'redux';
import initialState from './initialState';

const reducer = (state, action) => {
  return state;
};


const store = createStore(
  reducer,  //W pierwszym argumencie przekazujemy referencję do funkcji, która będzie odpowiadała za modyfikację danych z magazynu.
  initialState, // <- informacje o danych startowych magazynu, czyli jakie dane magazyn powinien posiadać na początku
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //np. ustalić, jakie middleware (czyli pluginy) należy wykorzystać.
);

export default store;