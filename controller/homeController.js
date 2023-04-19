// homeController.js

// 라우트에 해당하는 ejs 파일을 렌더링 해준다. 

// courses.ejs 
exports.showCourses = (req, res) => {
    res.render("courses");
};

// contact.ejs
exports.showSignUp = (req, res) => {
    res.render("contact");
};

// postedContactForm.ejs
exports.postedContactForm = (req, res) => {
    res.render("thanks");
};