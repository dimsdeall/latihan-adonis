'use strict'

class LoginController {

    async index ({ auth, response, view }) {
        try {
            await auth.check()
        } catch (error) {
            return view.render('login')
        }

        return response.redirect('/home')
    }

    async login ({ auth, request, response }) {
        const { username, password } = request.all()
        await auth.attempt(username, password)
    
        return response.redirect('/home')
    }

    async logout({auth, response}){
        await auth.logout()

        return response.redirect('/login')
    }

}

module.exports = LoginController
