import axios from "axios";

export default class CallService {
    getAllCalls(){
        return axios.get("http://localhost:8080/api/calls/getall");
    }
    getByCallId(callId){

        return axios.get("http://localhost:8080/api/calls/" + callId);
    }
    addCall(calls) {
        return axios.post("http://localhost:8080/api/calls/add", calls);
    }

}   