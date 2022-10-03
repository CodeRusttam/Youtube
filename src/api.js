import axios from 'axios'
const request = axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3/",
    params: {
       key: 'AIzaSyBHr0WQOjAbT66G1YTcew-LDpExk_vpOws'
    }
})
export default request