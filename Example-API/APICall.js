var axios = require('axios');

var config = {
    method: 'get',
    url: 'https://alpha-api.usbank.com/innovation/bank-node/reference/v1/products',
    headers: {
        'Accept': 'application/json',
    },
    auth: {
        username: 'uXK5uhtGqOxcdsJBzWW2z0HYUGpsUlse',
        password: 'yYxzZL68jIGFa4OE'
    }
}


axios(config).then(function (response) {
    console.log(JSON.stringify(response.data));
}).catch(function (error) {
    console.log(error);
})