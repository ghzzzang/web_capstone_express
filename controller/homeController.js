// homeController.js

// 라우트에 해당하는 ejs 파일을 렌더링 해준다. 


// index.ejs (홈페이지)
exports.showHomePage = (req, res) => {
    res.render("index");
}


// contact.ejs (입력사이트)
exports.showSignUp = (req, res) => {
    res.render("contact");
};

// postedContactForm.ejs (입력한 후 사이트)
exports.postedContactForm = (req, res) => {
    res.render("thanks");
};



// courses.ejs 
// 코스 페이지는 코스에 대한 데이터를 전달받아야 하는데 여기에는 그게 없으니 정의해줘야한다. 

// 코스를 위한 배열 

var courses = [
    {
        title: "Event Driven Cakes",
        cost: 50
    },
    {
        title: "Asynchromous Artichoke",
        cost: 25
    },
    {
        title: "Object Oriented Orange Juice",
        cost: 10
    }
];


// courses.ejs 
exports.showCourses = (req, res) => {
    res.render("courses", {
        offeredCourses: courses // 코스 배열 데이터를 뷰로 전달 
    });
};