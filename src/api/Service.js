import axios from 'axios';

const Service = {
    getUsers: function () {
        return axios.get('https://jsonplaceholder.typicode.com/users')
    }
}

export default Service;

