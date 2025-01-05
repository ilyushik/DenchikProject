import axios from "axios"
import https from "https"

const instance = axios.create({
    baseURL: "https://localhost:44337/api",
    headers: {
        "Content-Type": "application/json",
    },
    httpsAgent: new https.Agent({ rejectUnauthorized: false })
})

export default instance;