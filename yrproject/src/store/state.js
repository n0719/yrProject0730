

let getRules1 = {};
let toten1="";
// let defaultScreenWidth=""
try {
    if (localStorage.getRules) {
        getRules1 = localStorage.getRules
    }
} catch (e) {

}
try {
    if (localStorage.toten) {
        toten1 = localStorage.toten
    }
} catch (e) {

}
export default {
    isLogin:false,
    urlName: "我的账户",
    lmodelShow: false,
    umodelShow: false,
    userImg: "",
    token: toten1,
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
    testData:"",
    isLogin:false
}