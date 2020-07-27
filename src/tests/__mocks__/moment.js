// can't do imports in mock as it will call itself
// need to get the original
const moment = require.requireActual('moment');

export default (timeStamp = 0) => {
    return moment(timeStamp);
};