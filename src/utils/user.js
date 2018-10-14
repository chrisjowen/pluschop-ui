export const isLoggedIn = () => {

    const user = localStorage.getObject('userData') || {}

    return user.token || null

}