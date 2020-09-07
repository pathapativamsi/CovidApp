const request = require('request')




const getData = (options,callback)=>{
    request(options, (error,response,body)=>{
        if(error){
            callback('unable to connect to covid service',undefined,undefined)
        }
        else{
            callback(undefined,undefined,body)
        }
    })
}

module.exports = getData