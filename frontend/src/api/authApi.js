import { iaxios } from "./iaxios";

export function sendLoginData(username, password){
    return iaxios.post('user/customer-login/', {username, password})
}

export function sendRegisterData(username, first_name, last_name, email, password){
    return iaxios.post('user/customer-register/', {username, first_name, last_name, email, password})
}
