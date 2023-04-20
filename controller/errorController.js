// errorController.js

const httpStatus = require("http-status-codes");

// 앞에서 처리되지 못한 모든 요청을 처리 


// 없는 페이지를 탐색하였을때 
exports.pageNotFoundError = (req, res) => {
    let errorCode = httpStatus.NOT_FOUND;
    res.status(errorCode);
    res.render("error"); // error 페이지를 나타냄 

};

// 내부 서버에러를 처리 

exports.internalServerError = (req, res) => {
    let errorCode = httpStatus.INTERNAL_SERVER_ERROR;
    console.log(`ERROR occurde: ${error.stack}`);
    res.status(errorCode);
    res.send(`${errorCode} | Sorry, our application is talking a nap!`);
}