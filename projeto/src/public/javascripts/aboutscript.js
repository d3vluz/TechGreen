/* NavBar button */ 
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
}
function closeNav() {
    document.getElementById("mySidebar").style.width = "0px";
}
window.addEventListener('resize', function() {
    let sideBar = document.getElementById("mySidebar");
    if ((this.window.innerWidth <= 1300 || this.window.innerWidth > 1300) && sideBar.style.width !== '0px') {
        sideBar.style.width = "0px";
    }
});