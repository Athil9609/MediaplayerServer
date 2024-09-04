// importing json server 
const jsonserver=require('json-server')

// creating server
const mpserver=jsonserver.create()

// initializing middleware
const middleware=jsonserver.defaults()
// creating router instance for resources
const router=jsonserver.router('db.json')

// configuring middleware and router to server
mpserver.use(middleware)
mpserver.use(router)
// setting port number
const PORT=3000 || process.env.PORT
// calling listen method with server to activate server
mpserver.listen(PORT,()=>{
    console.log("Server running at port"+PORT);
    
})

