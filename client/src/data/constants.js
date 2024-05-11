
export const baseUrl = "http://mern-todo.azurewebsites.net"
export const API_BASEURL_AUTH = `${baseUrl}/auth`
export const API_BASEURL_USER = `${baseUrl}/users`
export const API_BASEURL_TODO = `${baseUrl}/api`
// export const API_BASEURL_TODO = "http://localhost:3000/api"

export const setHeaders = () => {
    const headers = {
        headers: {
            "Bearer": localStorage.getItem("token"),
        },
    };

    return headers;
};
