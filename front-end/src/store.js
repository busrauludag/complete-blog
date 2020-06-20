import { createStore } from 'redux';
import reducer from './reducers/index';

const initialState = {
  posts: [
    {
      title: 'title',
      description: 'description',
      postedBy: 'Ilkin',
      category: {
        categoryName: 'coding',
      },
    },
    {
      title: 'title2',
      description: 'description2',
      postedBy: 'Ilkin',
      category: {
        categoryName: 'coding',
      },
    },
    {
      title: 'title3',
      description: 'description3',
      postedBy: 'Ilkin',
      category: {
        categoryName: 'coding',
      },
    },
  ],
};

export const store = createStore(
  reducer,
  initialState,
  window.devToolsExtension && window.devToolsExtension() // it is for redux devtool 
);
