export default {
    async login(context, payload) {
        const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBzJodbDRZzTpkmCRWOUHCDShxnFUpHXuM', {
            method: 'POST',
            body: JSON.stringify({
                email: payload.email,
                password: payload.password,
                returnSecureToken: true,
            })
        });
        const responseData = await response.json();

        if (!response.ok) {
            console.log(responseData);
            const error = new Error(responseData.message || 'Failed sign in');
            throw error;
        }

        console.log(responseData.idToken);

        context.commit('setUser', {
            token: responseData.idToken,
            userId: responseData.localId,
            tokenExpiration: responseData.expiresIn,
        });
    },
    async signup(context, payload) {
        const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBzJodbDRZzTpkmCRWOUHCDShxnFUpHXuM', {
            method: 'POST',
            body: JSON.stringify({
                email: payload.email,
                password: payload.password,
                returnSecureToken: true
            })
        });
        const responseData = await response.json();

        if (!response.ok) {
            console.log(responseData);
            const error = new Error(responseData.message || 'Failed sign up');
            throw error;
        }

        console.log(responseData);

        context.commit('setUser', {
            token: responseData.idToken,
            userId: responseData.localId,
            tokenExpiration: responseData.expiresIn,
        });
    },
    logout(context) {
        context.commit('setUser', {
            tokem: null,
            userId: null,
            tokenExpiration: null,
        })
    }

}