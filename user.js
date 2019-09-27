const db = require("./db");
const geoJsonParse = require("./geoJsonHelper")

/**Model for users */
class User {
  /**find all users */
  static async findAll(){
    
    const result = await db.query(
      `SELECT  
          user_id AS id, 
          user_name AS name, 
          user_age AS age,
          user_gender as gender, 
          last_location AS city, 
          lat, 
          long
      FROM users
       `);

       let users = geoJsonParse(result.rows)
       
       return users;
  }
}
module.exports = User;

