'use strict'

/*
|--------------------------------------------------------------------------
| DatabaseSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

const User = use('App/Models/User')

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class DatabaseSeeder {
  async run () {

    const user = new User()

    user.username = 'admin'
    user.email    = 'admin@gmail.com'
    user.password = 'admin'

    await user.save()
  }
}

module.exports = DatabaseSeeder
