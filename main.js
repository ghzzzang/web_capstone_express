//  main.js


//  변수 설정(포트,패키지)

const port = 3000,
    homeController = require("./controller/homeController"),
    express = require("express"),
    app = express(),
    layouts = require("express-ejs-layouts");


// 포트 설정 
app.set("port", process.env.PORT || 3000);

// body-parser 추가 
app.use(
    express.urlencoded({
        extended: false
    })
);
app.use(express.json());


// 홈페이지 라우트 생성 
app.get("/", (req, res) => {
    res.send("Welcome to Confetti Cuisine!");
});


// *********** ejs와 layouts를 사용하기 위한 세팅 ******* 

app.set("view engine", "ejs");
app.use(layouts);


// 페이지에 대한 라우트 생성 
app.get("/courses", homeController.showCourses);
app.get("/contact", homeController.showSignUp);
app.get("/contact", homeController.postedContactForm);

// 웹서버 시작 

app.listen(app.get(port), () => {
    console.log(`Server is running on http://localhost:${app.get("port")}`);
});