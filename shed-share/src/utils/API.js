import axios from "axios";

// Gets my github repos and returns them as "projects"
const baseURL = process.env.ROOT_URL || "http://localhost:3001"

export default {
    // getProjectsForUser: (user) => {
    //     axios.get('/api/projects')
    //     .then(results => results)
    // },

    updateProject: (project) => {
        const url = baseURL + '/api/projects/' + project._id
        return axios.put(url,project)
        .then(results => results.data)
        .catch(error => console.error(error))
    },

    getProjectList: () => {
        const url = baseURL + '/api/projects'
        console.log(`getting projectList from ${url}`)
        return axios.get(url)
        .then(results => results)
        .catch(error => console.error(error))
    },

    saveProject: (project) => {

    },

    getUser: (user) => {
        const url = baseURL + '/api/users/id' + '?id=' + user._id
        return axios.get(url)
        .then(results => results)
    },

    saveUser: () => {

    },

    getNewsPosts: () => {
        const url = baseURL + '/api/posts'
        return axios.get(url)
        .then(results => results)
        .catch(error => console.error(error))
    },

    saveNewsPost: () => {

    },

    replyToNewsPost: () => {
        
    }

};
