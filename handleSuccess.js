// const headers = require('./headers.js');
function handleSuccess(res, message="成功", data){
  res.send({
    status: true,
    message: message,
    data
  })
  res.end();
}

module.exports = handleSuccess