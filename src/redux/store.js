import { createStore } from 'redux';
import initialState from './initialState';
import { shortid } from 'shortid';
import strContains from "../Utils/strContains";


export const getFilteredCards = ({ cards, searchString }, columnId) =>
  cards.filter(
    (card) =>
      card.columnId === columnId && strContains(card.title, searchString)
  );

  
  export const searchInputValue = (state) => state.searchString;



export const getAllColumns = (state) => state.columns;

//Powinien on przyjąć w argumencie informację, jakiej listy (o jakim id)
export const getListById = ({ lists }, listId) => lists.find(list => list.id === listId);

export const getColumnsByList = ({ columns }, listId) => columns.filter((column) => column.listId === listId);

export const getAllLists = (state) => state.lists;  


// actions

export const addColumn = (payload) => ({ type: 'ADD_COLUMN', payload });

export const addCard = (payload) => ({ type: 'ADD_CARD', payload });
//export const searchCards = (payload) => ({ type: 'SEARCH', payload });
export const updateSearchString = (payload) => ({  type: "UPDATE_SEARCHSTRING", 
payload 
});// payload = data  type= name
export const addList = (payload) => ({ type: "ADD_LIST", payload });

export const toggleFavouriteCard = (payload) => ({ type: "TOGGLE_CARD_FAVOURITE", payload });

const reducer = (state, action) => {
	switch (action.type) {
		case 'ADD_COLUMN':
			return { ...state, columns: [...state.columns, { ...action.payload, id: shortid }] };
			
		case 'ADD_CARD':
			return { ...state, cards: [...state.cards, { ...action.payload, id: shortid }] };
			case "ADD_LIST":
				return {
				  ...state, lists: [...state.lists, { ...action.payload, id: shortid() }], };
		case "UPDATE_SEARCHSTRING":
			return { ...state, searchString: action.payload };
			case "TOGGLE_CARD_FAVOURITE":
				return { ...state, cards: state.cards.map(card => (card.id === action.payload) ? { ...card, isFavorite: !card.isFavorite } : card) };

				
		default:
			return state;
	}
};

const store = createStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;