import MainScreen from "../components/MainScreen";
import StartScreen from "../components/StartScreen";
import {connect} from "react-redux";
import {push} from "react-router-redux";
import {authFail} from "../actions/actions";

export const PrivateRoute = connect(state => ({
    isAuthenticated: state.auth.isAuthenticated
}))(StartScreen)



export const Home = connect(null, dispatch => ({
    logout: () => {
        dispatch(authFail())
        dispatch(push('/login'))
    }
}))(MainScreen)