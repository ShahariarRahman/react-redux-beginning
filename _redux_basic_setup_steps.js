/* 
1. npm i redux react-redux;

2. src{
    redux{
        1. reducers{
            productReducer{
                1. const initialState = {};
                2. const productReducer = (state = initialState, action)=>{
                    return state;
                }
                3. export default productReducer;   //will be used in store.js at createStore(producerReducer);
            }
        }
        2. store.js{
            1. import {createStore} from 'redux';
            2. const store = createStore(productReducer);
            3. export default store;                //will be used in app.js as props of <Provider store={store}> <App> <Provider/> ;
        }
    }
    app.js{
        1. import {Provider} from "react-redux";
        2. <Provider store={store}><App/></Provider>
    }
    page{
        home{
            const state = useSelector((state=>state));
            console.log(state);
        }
    }
}
*/