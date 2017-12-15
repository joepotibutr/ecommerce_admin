import axios from 'axios'

export default {
    admin : {
        login : credentials => axios.post('/api/admin', {credentials})
            .then(res => res.data.admin)
    }
}