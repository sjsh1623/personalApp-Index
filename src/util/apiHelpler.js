const axios = require("axios");
const apiHelper = (method = 'get', url = '', data = {}) => {
    axios({
        url : url,
        method : method,
        data : data
    }).then( (response) => {

    })
}
