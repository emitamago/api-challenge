const VALIDSEARCHTERMS = ['gender','dist', 'origin','min_age', 'max_age']
// GET /users?gender=f&dist=100&origin=37.774929,-122.419416&min_age=21&max_age=29
function sqlQueryHelper(query) {
    let searchTerms = [];
    let searchValues = [];
    for(let key in query){
        if(VALIDSEARCHTERMS.indexOf(key) !== -1){
            searchTerms.push(key)
            searchValues.push(query[key])
        }
    }
    // let idx = 1;
    // let columns = [];
  
    // // filter out keys that start with "_" -- we don't want these in DB
    // for (let key in items) {
    //   if (key.startsWith("_")) {
    //     delete items[key];
    //   }
    // }
  
    // for (let column in items) {
    //   columns.push(`${column}=$${idx}`);
    //   idx += 1;
    // }
  
    // // build query
    // let cols = columns.join(", ");
    // let query = `UPDATE ${table} SET ${cols} WHERE ${key}=$${idx} RETURNING *`;
  
    // let values = Object.values(items);
    // values.push(id);
  
    return [searchTerms, searchValues];
  }
  
  
  
  module.exports = sqlQueryHelper;
  