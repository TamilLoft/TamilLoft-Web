document.addEventListener('DOMContentLoaded', () => {
    console.log("hello users!!!");
     const referrer = document.referrer;
     const Success  = localStorage.getItem('success_url')
     //const currentUrl = window.location.href;
    if ( Success === referrer) {
        const navButton = document.getElementById('chBtn')
        if (navButton) {
            navButton.href = '#';
            navButton.innerHTML = '<img src="../../images/success.png" alt="Success" style="height: 30px; width: 30px;">';
        }
    }

}); 