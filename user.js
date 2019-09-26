const db = require("./db");

/**Model for users */
class User {
  /**find all users */
  static async findAll(){
    
    const result = await db.query(
      `SELECT  user_id, user_name, user_age, user_gender, last_location, lat, long
      FROM users
       `);

       let users = result.rows;
       return users;
  }
}
module.exports = User;

