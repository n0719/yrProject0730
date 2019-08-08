import state from "./state"; 
export default {
    changeUname(state, urlName) {
        state.urlName = urlName;
    },
    lmodelShow(state, lmodelShow) {
        state.lmodelShow = lmodelShow;
    },
    umodelShow(state, umodelShow) {
        state.umodelShow = umodelShow;
    },
    regRule(state, regRule) {
        state.regRule = regRule;
    },
<<<<<<< HEAD
    token(state,token){
        state.token = token;
=======
    getRules(state, getRules) {
        state.getRules = getRules;
        try {
            localStorage.getRules=getRules;
        } catch (e) {}
    },
    publicData(state,publicData){
        state.publicData = publicData
    },
    currUserData(state,currUserData){
        state.currUserData = currUserData
    },
    moneyData(state,moneyData){
        state.moneyData = moneyData
    },
    moneyOutData(state,moneyOutData){
        state.moneyOutData = moneyOutData
    },
    moneyInData(state,moneyInData){
        state.moneyInData = moneyInData
    },
    teamData(state,teamData){
        state.teamData = teamData
    },
    gameData(state,gameData){
        state.gameData = gameData
    },
    testData(state,testData){
        state.testData = testData
>>>>>>> ade30c4fa9f0ba8cfeaee75b4017eb9d010ce5bb
    }
  
  
}