<<<<<<< HEAD
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducer';

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;
=======
import { configureStore } from '@reduxjs/toolkit';
import formReducer from './reducer';

const store = configureStore({
  reducer: {
    form: formReducer,
  },
});

export default store;
>>>>>>> 8f30ee90b351a4d5d388d83cef02cc77953d738d
