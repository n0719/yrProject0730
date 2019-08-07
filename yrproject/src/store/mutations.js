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
        try {
            localStorage.regRule=regRule;
        } catch (e) {}
    }
  
}