import axios from "axios";
import { useSelector } from "react-redux";
import { API_BASEURL_AUTH, setHeaders } from "../data/constants";
import { toast } from "react-toastify";

export const getTodos = () => {
    return (dispatch) => {
        axios
            .get(`${API_BASEURL_AUTH}/todos`, setHeaders())
            .then((todos) => {
                dispatch({
                    type: "GET_TODOS",
                    todos,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    };
};

export const addTodo = (newTodo) => {
    return (dispatch, getState) => {
        const userInfo = useSelector((state) => state.authRequests.userInfo);
        const author = getState().auth.name;
        const uid = getState().auth._id;
        axios
            .post(
                `${API_BASEURL_AUTH}/todos`,
                { ...newTodo, author, uid },
                setHeaders()
            )
            .then((todo) => {
                dispatch({
                    type: "ADD_TODO",
                    todo,
                });
            })
            .catch((error) => {
                console.log(error.response);

                toast.error(error.response?.data, {
                    position: toast.POSITION.BOTTOM_RIGHT,
                });
            });
    };
};

export const updateTodo = (updatedTodo, id) => {
    return (dispatch) => {
        axios
            .put(`${API_BASEURL_AUTH}/todos/${id}`, updatedTodo, setHeaders())
            .then((todo) => {
                dispatch({
                    type: "UPDATE_TODO",
                    todo,
                });
            })
            .catch((error) => {
                console.log(error);
                toast.error(error.response?.data, {
                    position: toast.POSITION.BOTTOM_RIGHT,
                });
            });
    };
};

// export const deleteTodo = (id) => {
//     return (dispatch) => {
//         axios
//             .delete(`${API_BASEURL_AUTH}/todos/${id}`, setHeaders())
//             .then(() => {
//                 dispatch({
//                     type: "DELETE_TODO",
//                     id,
//                 });
//             })
//             .catch((error) => {
//                 console.log(error);
//                 toast.error(error.response?.data, {
//                     position: toast.POSITION.BOTTOM_RIGHT,
//                 });
//             });
//     };
// };

// export const checkTodo = (id) => {
//     return (dispatch) => {
//         axios
//             .patch(`${API_BASEURL_AUTH}/todos/${id}`, {}, setHeaders())
//             .then((todo) => {
//                 dispatch({
//                     type: "CHECK_TODO",
//                     todo,
//                 });
//             })
//             .catch((error) => {
//                 console.log(error);
//                 toast.error(error.response?.data, {
//                     position: toast.POSITION.BOTTOM_RIGHT,
//                 });
//             });
//     };
// };
