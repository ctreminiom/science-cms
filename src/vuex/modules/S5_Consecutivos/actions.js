import Vue from 'vue'

const actions = {

    fetchConsecutive(context) {

        return new Promise((resolve, reject) => {

            let options = {
                url : "http://ec2-18-217-36-47.us-east-2.compute.amazonaws.com/api/v1/module/consecutives",
                method: "GET",

                headers: {
                    Authorization:
                    "Bearer " + localStorage.getItem("token")
                }
            }

            Vue.http(options).then(response => {
                context.commit("CONSECUTIVE", response.body)
                resolve(true)

            }, error => {
                reject(false)

            })



        })

    }

}

export default actions