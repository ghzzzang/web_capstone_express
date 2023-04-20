//  main.js


//  변수 설정(포트,패키지)

const port = 3000,
    // 라우트에 해당하는 함수가 있는 모듈
    homeController = require("./controller/homeController"),
    // 에러 발생시 호출되는 함수가 있는 모듈
    errorController = require("./controller/errorController"),
    express = require("express"),
    app = express(),
    layouts = require("express-ejs-layouts");


// 정적 파일 설정 
// 정적 파일이 있는 폴더를 설정해줌으로써 ejs 파일이 이를 확인해 적용할 수 있다. 
app.use(express.static('public'));


// 포트 설정 
app.set("port", process.env.PORT || port);

// body-parser 추가 
app.use(
    express.urlencoded({
        extended: false
    })
);
app.use(express.json());



// *********** ejs와 layouts를 사용하기 위한 세팅 ******* 

// 뷰 엔진을 ejs로 설정 
app.set("view engine", "ejs");

// layout.ejs 내용이 기본 템플릿이 된다.(웹사이트의 기본 형태)
app.use(layouts);


// 페이지에 대한 라우트 생성 
// 홈페이지 라우트 생성 
app.get("/", homeController.showHomePage);
app.get("/courses", homeController.showCourses);
app.get("/contact", homeController.showSignUp);
app.post("/contact", homeController.postedContactForm);

// 에러처리 라우트  생성 (기존 라우트 아래에 생성)

app.use(errorController.pageNotFoundError);
app.use(errorController.internalServerError);


// 웹서버 시작 
app.listen(app.get("port"), () => {
    console.log(`Server is running on http://localhost:${app.get("port")}`);
});