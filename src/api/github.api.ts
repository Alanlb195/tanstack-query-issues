
import axios from 'axios';


export const githubApi = axios.create({
    baseURL: 'https://api.github.com/repos/facebook/react',
    headers: {
        //todo: api key (github)
    }
})


