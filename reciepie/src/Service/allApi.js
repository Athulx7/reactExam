import { baseUrl } from "./baseurl"
import { commonAPi } from "./commonAPi"

export const addReceipieAPi = async(reqbody)=>{
    return await commonAPi("POST",`${baseUrl}/addReciepie`,reqbody,'')
}

export const gettingRecipieAPI = async()=>{
    return await commonAPi("GET",`${baseUrl}/getRecipies`,'','')
}

export const deletREcepieAPi = async(id)=>{
    return await commonAPi('DELETE',`${baseUrl}/deletere/${id}`,{},'')
}

export const addReviewAPI = async(reqbody)=>{
    return await commonAPi('POST',`${baseUrl}/addreview`,reqbody,'')
}

export const getReviewAPi = async(id)=>{
    return await commonAPi('GET',`${baseUrl}/getReview/${id}`,'','')
}


export const getSelectedApi = async(id)=>{
    return await commonAPi('GET',`${baseUrl}/getselected/${id}`,'','')
}


export const addtoFavtoritesAPI = async(reqbody)=>{
    return await commonAPi('POST',`${baseUrl}/addtofav`,reqbody,'','')
}


export const getFavAPI = async()=>{
    return await commonAPi('GET',`${baseUrl}/getfav`,'','')
}


export const deletFAVREcepieAPi = async(id)=>{
    return await commonAPi('DELETE',`${baseUrl}/deletefav/${id}`,{},'')
}

export const getSelectedFAVApi = async(id)=>{
    return await commonAPi('GET',`${baseUrl}/getselectedfromFav/${id}`,'','')
}


