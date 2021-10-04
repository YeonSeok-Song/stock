export const loginCheck = () => {

    const storage = window.sessionStorage;
    if(storage.getItem('sessionId') !== null) {
        return true
    }
    else { return false }

}