var express=require('express');
var app=express();
var server=require('http').Server(app);
var io=require('socket.io')(server);
var bodyParser=require('body-parser');
var path=require('path')
const port = process.env.PORT || 3001

server.listen(port,function(){
    trace('connected on port '+port);
});

// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json 
app.use(bodyParser.json())

// serve static assets normally
app.use(express.static(__dirname + '/public'))

// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

var public_rooms=[];
var current_room="";
            
io.on('connection',function(socket){
    
    trace("connected");
    
    socket.on('join_private' ,function(room){
        socket.join(room);
        trace("joined private room "+room);
        current_room=room;
        socket.emit('joined');
    })
    
    socket.on('join_public',function(room){
          console.log("public Room");
          public_rooms.push(room);
        
    })
    
    socket.on('chat message',function(msg){
        trace(msg);
        trace(current_room);
        socket.emit('chat message',msg);
    })
    
})

function trace(text){
    console.log(text);
    console.log('\n');
}

