/**
 * Impor HTTP Standar Library dari Node.js
 * */
 const http = require('http');
 const { PORT = 8000 } = process.env; // Set port
 
 const fs = require('fs');
 const path = require('path');
 const PUBLIC_DIRECTORY = path.join(__dirname, '../public');
 
 //  handle RenderHTML
 function renderHTML(htmlFileName){
   const htmlFilePath = path.join(PUBLIC_DIRECTORY, htmlFileName)
   return fs.readFileSync(htmlFilePath, 'utf-8')
 }
 

 function onRequest(req, res) {
   switch(req.url){
     case "/":
       res.writeHead(200, {'script': 'text/html'})
       res.end(renderHTML('index.html'))
       return;
     case "/cars.html":
       res.writeHead(200, {'script': 'text/html'})
       res.end(renderHTML('../public/cars.html'))
       return;
     default:
       
       if((req.url.indexOf('.css') != -1) || (req.url.indexOf('.svg')) !=-1 ||(req.url.indexOf('.png')) !=-1 || (req.url.indexOf('.jpg')) != -1 ||(req.url.indexOf('.jpg')) != -1 || (req.url.indexOf('.js') != -1) ){
        const cssFilePath = path.join(PUBLIC_DIRECTORY, `/${req.url}`)
        
        fs.readFile(cssFilePath,function(err,data){
            console.log("-->",req.url)
            res.writeHead(200,{'script': ['text/css','image/svg', 'image/png','image/jpg']})

            res.write(data);

            res.end()
        })
       }else{
        res.writeHead(404)
        res.end("File Not Found")
       }
       
       
   }
 }
  
 const server = http.createServer(onRequest);
 
 // Jalankan server
 server.listen(PORT, 'localhost', () => {
   console.log("Server sudah berjalan, silahkan buka http://localhost:%d", PORT);
 })
