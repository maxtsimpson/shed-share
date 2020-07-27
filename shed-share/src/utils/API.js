import axios from "axios";

// Gets my github repos and returns them as "projects"
export default {
    // getProjectsForUser: (user) => {
    //     axios.get('/api/projects')
    //     .then(results => results)
    // },

    saveProject: (project) => {

    },

    getUser: (user) => {
        const url = '/api/users' + 'id=' + user._id
        return axios.get(url)
        .then(results => results)
    },

    saveUser: () => {

    },

    getNewsPosts: () => {

    },

    saveNewsPost: () => {

    },

    replyToNewsPost: () => {
        
    }

};
