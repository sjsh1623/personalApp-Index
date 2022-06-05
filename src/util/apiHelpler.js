const axios = require("axios");
const ApiHelper = async (method = 'get', url = '', data = {}) => {
    axios({
        url: url,
        method: method,
        data: data
    }).then((response) => {
        return response
    }).catch((err) => {
        return {
            'code': err.code,
            'message': err.message
        }
    })
}

export default ApiHelper;
