function CustomerLogout() {
    console.log("Logging out...");
    if (localStorage.getItem('customer_login')) {
        localStorage.removeItem('customer_login');
        console.log("customer_login removed from localStorage");
    }
    if (localStorage.getItem('customer_username')) {
        localStorage.removeItem('customer_username');
        console.log("customer_username removed from localStorage");
    }
    window.location.href = 'login/';
}

export default CustomerLogout