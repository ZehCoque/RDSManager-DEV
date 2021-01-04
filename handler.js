const db = require('./db-connect');
const query_builder = require('./query_builder')

module.exports.rdsmanager = async (event, context, callback) => {

    const req_body = JSON.parse(event.body);

    context.callbackWaitsForEmptyEventLoop = false;
    const mysql_query = await db.query(query_builder(req_body.selector, req_body.params));
    await db.end();

    if (mysql_query) {
        callback(null, {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true,
            },
            body: JSON.stringify(mysql_query)
        })
    } else {
        callback('error', {
            statusCode: 400,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true,
            },
            body: {
                message: 'No mysql_query found.'
            },
        })
    }

  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };