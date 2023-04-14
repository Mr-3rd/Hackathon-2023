var axios = require('axios');

let allMCCData;

let allTransInfo;

let basicAuth = {username: 'uXK5uhtGqOxcdsJBzWW2z0HYUGpsUlse',
    password: 'yYxzZL68jIGFa4OE'}

function fetchMCCData () {
    var config = {
        method: 'get',
        url: 'https://alpha-api.usbank.com/innovation/bank-node/reference/v1/products',
        headers: {
            'Accept': 'application/json',
        },
        auth: basicAuth
    }


    axios(config).then(function (response) {
        console.log(JSON.stringify(response.data));
    }).catch(function (error) {
        console.log(error);
    })
}



function getCCTransactions() {

    var accountID = 935121592917;

    var config = {
        method: 'get',
        url: 'https://alpha-api.usbank.com/innovation/bank-node/customer-accounts/v1/account/' + accountID + '/trans/full',
        headers: {
            'Accept': 'application/json',
        },
        auth: basicAuth
    }

    axios(config).then(function (response) {
        console.log(JSON.stringify(response.data));
    }).catch(function (error) {
        console.log(error);
    })
}



