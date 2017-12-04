const moment = require("moment")



const User = (user = {}) => {
    return {
        createdAt: moment().toISOString(),
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        email: user.email || "",
        phone: user.phone || "",
        businessUnit: user.businessUnit || ""
    }
}

module.exports = {
    User
}

/*
{
    id: String,
    createdAt: ISODateString,
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    businessUnit: enum['sales', 'integrations', 'technology', 'marketing']
}
*/
