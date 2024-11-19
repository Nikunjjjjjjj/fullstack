import express from 'express';
const app=express();

// app.get('/',(req,res)=>{
//     res.send("server ready")
// })

app.get('/api/jokes',(req,res) =>{
    const jokes=[{
        id:1,
        title:"1st joke",
        content:"content of 1st"
    },{
        id:2,
        title:"2nd joke",
        content:"content of 2st"
    },{
        id:3,
        title:"3rd joke",
        content:"content of 3st"
    },{
        id:1,
        title:"4th joke",
        content:"content of 4st"
    },{
        id:1,
        title:"5th joke",
        content:"content of 5th"
    }];
    res.send(jokes)
})

const port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`serving at http://localhost:${port}`);
    
})