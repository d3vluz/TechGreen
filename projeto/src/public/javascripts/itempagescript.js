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


var MainImg = document.getElementById("MainImg")
        var smallimg = document.getElementsByClassName("small-img")

        smallimg[0].onclick = function(){
            MainImg.src = smallimg[0].src
        }
        smallimg[1].onclick = function(){
            MainImg.src = smallimg[1].src
        }
        smallimg[2].onclick = function(){
            MainImg.src = smallimg[2].src
        }
        smallimg[3].onclick = function(){
            MainImg.src = smallimg[3].src
        }

