var app = new Vue({
    el: '#app',
    data: {
        users: [],
        usersService: null,
        newUser: {
            name:'',
            city:''
        }
    },
    created: function () {
        this.usersService = users();
        this.usersService.get().then(response => (this.users = response.data));
    },
    methods: {
        deleteUser: function(index){
            var userId = this.users[index].id;
            this.usersService.deleteUser(userId).then(()=> {
                this.users.splice(index, 1);
            }).catch(error => {
                console.error("Error deleting user: ", error);
            });
        },
        addUser: function(){
            this.usersService.addUser(this.newUser)
            .then(response => {
                this.users.push(response.data);
                this.newUser = {name: '', city: ''};
            })
            .catch(error => {
                console.error("Error adding user: ", error);
            });
        }
    }
});
