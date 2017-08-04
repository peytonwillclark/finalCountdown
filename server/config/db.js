var mysql=require ('mysql');
var pool=mysql.createPool({
    connectionLimit: 10,
    host: "finalexamdb.crybll5rojww.us-east-1.rds.amazonaws.com",
    user: "students",
    password: "covalence",
    database: "CovalenceLibrary"
});

exports.pool=pool;

//no return values
exports.empty=function (procedure, values){
    return sendQuery(procedure, values).then(function (){
        return;
    })
};

//one row
exports.row=function (procedure, values){
    return sendQuery(procedure, values).then(function (resultSets){
        return resultSets[0][0];
    })
};

//multiple rowz
exports.rows=function (procedure, values){
    return sendQuery(procedure, values).then(function (resultSets){
        return resultSets[0];
    })
};

function sendQuery(procedure, values){
    return new Promise(function (fulfill, reject){
        pool.getConnection(function (err, connection){
            if (err){
                reject(err);
            }else{
                var queryString = "CALL " + procedure + parseParams(values.length);
                connection.query(queryString, values, function (err, resultSets){
                    connection.release();
                    if (err){
                        reject(err);
                    }else{
                        fulfill(resultSets);
                    }
                })
            }
        })
    })
}


function parseParams(amount){
    var output = "";
    for (var i = 1; i <= amount; i++){
        output += (i == amount ? "?" : "?, ");
    }
    return "(" + output + ")"
}
