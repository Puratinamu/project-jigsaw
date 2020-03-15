import cookieManager from '../cookieManager'

const axios = require('axios')

let userRequests = {

    signup: async function (new_user) {
        try {
            const response = await axios.post('/api/signup', new_user)
            return response
        }
        catch (error) {
            console.error(error);
            return error
        }
    },
    signin: async function (user) {
        try {
            const response = await axios.post('/api/signin', user)
            return response
        }
        catch (error) {
            console.error(error);
            return error.response;
        }
    },
    signout: async function () {
        try {
            const response = await axios.get('/api/signout')
            return response
        }
        catch (error) {
            console.error(error);
            return error
        }
    },
    getCurrUser: async function () {
        try {
            const response = await axios.get('/api/current_user')
            return response
        }
        catch (error) {
            console.error(error);
            return error
        }
    },
    loginUserRequest: async function (email, password) {
        try {
            const response = await axios.post('/api/v1/login', { "email": email, "password": password })

            let jwt = response.data.jwt;
            let oidUser = response.data.oidUser;
            cookieManager.setCookie("sessionToken", jwt, 1)
            cookieManager.setCookie("authenticatedUserEmail", email, 1)
            cookieManager.setCookie("authenticatedOidUser", oidUser, 1)
            return response
        }
        catch (error) {
            return error.response
        }
    },
    getUser: async function (oidUser) {
        try {
            const response = await axios.get('/api/v1/getProfile', {
                params: {
                    oidUser: oidUser
                }
            });

            return response
        } catch (error) {
            return error.response;
        }
    },
    putContact: async function (requestBody, sessionToken) {
        try {
            const response = await axios.put('/api/v1/addContact', requestBody, {
                headers: {
                    jwt: sessionToken
                }
            })

            return response
        }
        catch (error) {
            console.error(error);
            return error.response
        }
    },

    getContacts: async function (oidUser, sessionToken) {
        try {
            return await axios.get("/api/v1/getContacts", {
                params: {
                    oidUser: oidUser
                },
                headers: {
                    jwt: sessionToken,
                }
            });
        } catch (error) {
            console.error(error);
            return error.response;
        }
    }

}

export default userRequests;
