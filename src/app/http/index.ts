import Axios, { AxiosInstance} from 'axios'

export const httClient: AxiosInstance = Axios.create({
    baseURL: "http://localhost:8080/"
})