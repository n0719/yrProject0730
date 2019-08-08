

let getRules1 = {};
// let defaultScreenWidth=""
try {
    if (localStorage.getRules) {
        getRules1 = localStorage.getRules
    }
} catch (e) {

}
export default {
    urlName: "我的账户",
    lmodelShow: false,
    umodelShow: false,
    userImg: "",
    token: "",
    regRule:{},
    dict: {},
    getRules:getRules1,
    publicData:"",//验证数据
    currUserData:"",
    moneyData:"",
    moneyOutData:"",
    moneyInData:"",
    teamData:"",
    gameData:"",
    testData:""
}