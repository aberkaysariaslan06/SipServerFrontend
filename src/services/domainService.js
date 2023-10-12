import axios from "axios";

export default class DomainService {
    getAllDomains(){
        return axios.get("http://localhost:8080/api/domains/getall");
    }
    getByDomainId(domainId){

        return axios.get("http://localhost:8080/api/domains/" + domainId);
    }
}