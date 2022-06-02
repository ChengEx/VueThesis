export const jwtExpired = () => {
    localStorage.clear();
    this.$router.push('/signin');  
}