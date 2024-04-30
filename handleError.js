// const headers = require('./headers.js');
function handleError(res, message="發生錯誤"){
  // res.writeHead(400,headers);
  res.status(400).send({
    status:false,
    message
  });
  res.end();
}

module.exports = handleError