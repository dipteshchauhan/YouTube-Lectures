let http=require('http');
let fs=require('fs');

let server=http.createServer(function(req,res){

    fs.readFile('data.json','UTF-8', function(err,data){
        res.write(data);
        res.end();
    })
})

server.listen(8000);