import state from "./state";

export default {
    changeUname(stata,urlName){
        state.urlName=urlName ;
    },
    lmodelShow(state,lmodelShow){
    state.lmodelShow=lmodelShow;
    },
    umodelShow(state,umodelShow){
        state.umodelShow=umodelShow;
        }
}