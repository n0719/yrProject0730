

let regRule1 = {};
// let defaultScreenWidth=""
try {
    if (localStorage.regRule) {
        regRule1 = localStorage.regRule
    }
} catch (e) {

}
export default {
    urlName: "我的账户",
    lmodelShow: false,
    umodelShow: false,
    userImg: "",
    token: "",
    regRule: regRule1,
    dict: {}
}