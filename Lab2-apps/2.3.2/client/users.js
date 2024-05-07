function users() {

    get = function() {
        return axios.get("http://localhost:3000/users");
    }

    deleteUser = function(userId){
            return axios.delete('http://localhost:3000/users/${userId}');
    }
    addUser = function(newUser){
        return axios.post('http://localhost:3000/users', newUser);
    }

    return {
        get: get,
        deleteUser: deleteUser,
        addUser: addUser
    }
}