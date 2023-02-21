import { toast } from "react-hot-toast";




export async function siginupValidation(values) {
    let error = {}

    if (!values.fullname) {
        return error.fullname = toast.error('UserName Required....🤔!');
    } else if (!values.email) {
        return error.email = toast.error('Email Required....😒!');
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i.test(values.email)) {
        return error.email = toast.error('Invalid email....!');
    } else if (!values.phone) {
        return error.phone = toast.error('phone Required....🙌!');
    } else if (values.phone.length < 9) {
        return error.phone = toast.error('phone number error...!📞')
    } else if (!values.password) {
        return error.password = toast.error('password Required....🙌!');
    } else if (values.password.length < 4) {
        return error.password = toast.error('password must be more than 4! characters')
    }


}

export  async function loginValidation(values){
    let error= {}
    if(!values.email){
        return error.email =toast.error('Email Required....😒!');
    }else if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i.test(values.email)){
        return  error.email =toast.error('Invalid email....!');
    }else if (!values.password) {
        return error.password = toast.error('password Required....🙌!');
    }
}


// ** validate full name**
function fullnameVerify(error = {}, values) {
    if (!values.fullname) {
        error.fullname = toast.error('UserName Required....🤔!');
    }
    return error;
}
//  emailvalidation 
function emailVerify(error = {}, values) {
    if (!values.email) {
        error.email = toast.error('Email Required....😒!');
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i.test(values.email)) {
        error.email = toast.error('Invalid email....!');

    }
    return error;
}
// passwordvalidation
function passwordVerify(error = {}, values) {
    if (!values.password) {
        error.password = toast.error('password Required....🙌!');
    } else if (values.password.length < 4) {
        error.password = toast.error('password must be more than 4! characters')
    }
    return error;
}

function phoneVerify(error = {}, values) {
    if (!values.phone) {
        error.phone = toast.error('phone Required....🙌!');
    } else if (values.phone.length < 9) {
        error.phone = toast.error('phone number error...!🤷‍♂️')
    }
    return error;
}