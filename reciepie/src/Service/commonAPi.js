import axios from 'axios'

export const commonAPi = async(httpreq,url,reqbody,reqheader)=>{
    const config = {
        method:httpreq,
        url:url,
        data:reqbody,
        headers:reqheader?reqheader:{'Content-Type':'application/json'}
    }
    return await axios(config).then((result)=>{
        return result
    }).catch((err)=>{
        return err
    })
}