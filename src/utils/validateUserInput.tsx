export const isUserInputValid =(inputs: string[]) => {
    for(const val of inputs){
        if(!val){
            return false
        }
    }
    return true
}
export const validateEmail = (email: string): boolean => {
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};
