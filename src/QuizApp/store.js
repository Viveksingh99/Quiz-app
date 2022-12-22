import { createStore } from "redux";
import reducers from "../QuizApp/reducer/RootReducer";

const store = createStore(reducers);
export default store;
