import Vue from 'vue'


const actions = {

    login(context, user) {

        return new Promise((resolve, reject) => {

            let options = {
                url: "http://18.222.31.81:8080/api/v1.2/module/users/login",
                method: "GET",


                headers: {
                    Authorization:
                        "Basic " +
                        new Buffer(user.username + ":" + user.password).toString("base64")
                }
            }

            Vue.http(options).then(response => {
                context.commit("TOKEN", response.body.token)
                resolve(true)
            }, error => {
                reject(false)
            })

        })



    }


}


export default actions