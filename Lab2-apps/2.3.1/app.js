var app = new Vue({
    el: '#app',
    data: {
        message: ''
    },
    methods: {
        process: function(){
            if(this.message === '123'){
                console.log("The message is equal to 123")
            } else {
            console.log(this.message);
            }
        }
    }
})