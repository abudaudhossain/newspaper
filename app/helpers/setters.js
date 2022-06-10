const accountObj = (accObj) => {
    console.log("setters l:2 ", accObj)
    return {
        AccountNo: accObj.token,
        name: accObj.name,
        email: accObj.email,
        image: accObj.image,
        status: accObj.status
    }
}

module.exports = {
    accountSetter: (list) => {
        const accountList = [];
        for (let i = 0; i < list.length; i++) {
            accountList.push(accountObj(list[i]))
        }

        return accountList;
    }
}