export const login = data => 
    new Promise (
        (resolve, reject) => {

            if (!data.firstName) {
                reject({})
            }

            resolve ({
                "token": new Date().getTime(),
                "user": {
                    "id": new Date().getTime(),
                    "email": data.email || null,
                    "firstName": data.firstName || '',
                    "lastName": data.lastName || '',
                    "avatar": data.avatar || ''
                }
            })

        }
    )