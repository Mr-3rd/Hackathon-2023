var axios = require('axios');

function getAllMCCData () {
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
        return JSON.stringify(response.data);
    }).catch(function (error) {
        console.log(error);
    })
}


function getCCTransactionHistory() {

    var accountID = 935121592917;

    var config = {
        method: 'get',
        url: 'https://alpha-api.usbank.com/innovation/bank-node/customer-accounts/v1/account/' + accountID + '/trans/full',
        headers: {
            'Accept': 'application/json',
        },
        auth: {
            username: 'uXK5uhtGqOxcdsJBzWW2z0HYUGpsUlse',
            password: 'yYxzZL68jIGFa4OE'
        }
    }

    axios(config).then(function (response) {
        return JSON.stringify(response.data);
    }).catch(function (error) {
        console.log(error);
    })
}

function addMCCData() {
    let allMCCData = getAllMCCData();
    let allTransData = getCCTransactionHistory();

    console.log(allMCCData)
}

addMCCData()