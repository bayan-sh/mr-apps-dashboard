import { configureStore } from '@reduxjs/toolkit';
import AuthReducer from './reducers/AuthReducer';
import AboutUsReducer from './reducers/AboutUsReducer';
import RegisterReducer from './reducers/RegisterReducer';
import ContactReducer from './reducers/ContactReducer';
import ServicesReducer from './reducers/ServicesReducer';
import ProjectsReducer from './reducers/ProjectsReducer'



const store = configureStore({
    reducer: {
        auth: AuthReducer,
        aboutUs: AboutUsReducer,
        login: RegisterReducer,
        contact: ContactReducer,
        service: ServicesReducer,
        project:ProjectsReducer,

    }
});
export default store