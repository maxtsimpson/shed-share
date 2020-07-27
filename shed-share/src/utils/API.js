import axios from "axios";

// Gets my github repos and returns them as "projects"
export default {
    getProjectsForUser: (user) => {
        axios.get('/api/projects')
        .then(results => results)
    },

    saveProject: (project) => {

    },

    getUser: () => {

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
