/**Helper function to get metadata from request */

function getMetaData(request){
    let metadata = {
        'path': request.originalUrl.split("?")[0],
        'query': request.query
    };
    return metadata;
}

module.exports = getMetaData;