window.onscroll = function(){
    var B = document.body;
    var D = document.documentElement;
    D = (D.clientHeight)? D: B;
    document.querySelector('#nav').className = `fixed z-10 navbar ${D.scrollTop <= 280 ? "bg-base-200" : "bg-primary text-white"} shadow-xl transition duration-500`;
};
function changeTheme(check) {
    document.body.dataset.theme = check.checked ? "light" : "dark";
}