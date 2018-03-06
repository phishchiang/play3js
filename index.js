let express = require("express");
let parser=require("body-parser");
let app = express();


/*
// 建立中介函式
app.use(parser.urlencoded({extended:true}));
*/
app.use(express.static("www"));

app.get("index.html", function(req, res){
  res.send("works!!");
});

app.listen(3000, function () {
  console.log("伺服次啟動成功");
  });

/*
app.post("/save", function(req, res){
    // console.log(req.body.data); // 存進資料庫；會在 Command Prompt 顯示出資料
    // console.log(req.query.data); // 如果這樣寫會是undefined，因為是post的關係
    let database=admin.database();
    let ref=database.ref("/messages/message"); // 取得參考的路徑
    ref.set({"users":"test","data":req.body.data}, function(error){ // 儲存資料，不只可以放字串，也可陣列
        if(error){
            res.send("Failed");
        }else{
            res.send("Saved");
        }
    });
});
*/

