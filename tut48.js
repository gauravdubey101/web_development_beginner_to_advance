//node server
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
 /*  res.end('Hello World'); */
 res.end(`<!DOCTYPE html>
 <html lang="en">
 <head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
 
     <title>Alignment</title>
     <link href="https://fonts.googleapis.com/css?family=Ubuntu&display=swap" rel="stylesheet">
     <style>
         *{
             box-sizing: border-box;
         }
         body{
             font-family: 'Ubuntu';
         }
         .container{
             width: 900px;
             border: 3px solid red;
             background-color: rgb(131, 241, 116);
             margin: 33px auto;
         }
         .item{
             border: 2px solid gray;
             margin: 12px 3px ;
             padding: 12px 3px;
             background: rgb(172, 238, 49);
         }
         #fruit{
             float: left ;
             width: 48%;
         }
         #computer{
             float: left ;
             width: 48%;
 
         }
         #stationary{
             /* float: left ; */
             clear: both;
             width: 100%;
         }
         p,h1{
             text-align: right;
             text-align: left;
             text-align: center;
             margin: 23px auto;
            
 
         }
 
     </style>
 </head>
 <body>
     <div class="container">
         <h1>welcome to box</h1>
         <div id="fruit" class="item">
             <h3>Fruits</h3>
             <p id="fruitspara" class="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam doloribus eveniet porro sed, sequi velit ipsam numquam quia eaque illo rem repellat quae! Modi tenetur porro quia ducimus in Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam possimus maxime, voluptate expedita temporibus eum animi eligendi ex? Quasi, animi.</p>
         </div>
 
         <div id="computer" class="item">
             <h3>Computer</h3>
             <p id="computerpara" class="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam doloribus eveniet porro sed, sequi velit ipsam numquam quia eaque illo rem repellat quae! Modi tenetur porro quia ducimus in hic Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
             m praesentium doloremque omnis tempore quae nisi qui quaerat ea fugiat accusamus, sapiente, laborum nulla blanditiis in!
             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui quia repudiandae ducimus nostrum tempora, quae voluptates aperiam voluptate earum, reprehenderit dolorem culpa tenetur, harum cumque laudantium sequi fugiat eligendi velit?
 
             </p>
         </div>
 
         <div id="stationary" class="item">
             <h3>Stationary</h3>
             <p id="stationarypara" class="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam doloribus eveniet porro sed, sequi velit ipsam numquam quia eaque illo rem repellat quae! Modi tenetur porro quia ducimus in hic.</p>
         </div>
     </div>
     
 </body>
 </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

