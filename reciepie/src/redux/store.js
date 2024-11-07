import {configureStore} from '@reduxjs/toolkit'

import favSlice from './fav'
const store = configureStore({
    reducer:{
        favReducer : favSlice

    }

})

export default store