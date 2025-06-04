const mainNavButton_ID = document.getElementById("mainNavButtonforMobile-id")
const mainButtonToggler = document.getElementById("show-all-button-navigation-id")


document.querySelector(".show-all-button").addEventListener("click",()=>{

    if (mainButtonToggler.style.display == "none" || mainButtonToggler.style.display === "") {
        mainButtonToggler.style.display = "flex";
        // Force reflow to ensure transition
        void mainNavButton_ID.offsetWidth;
        mainNavButton_ID.style.marginBottom = "40px";
    }
    else{
        mainNavButton_ID.style.marginBottom = "-400px";
        // Wait for the transition to finish before hiding
        mainNavButton_ID.addEventListener('transitionend', function handler() {
            mainButtonToggler.style.display = "none";
            mainNavButton_ID.removeEventListener('transitionend', handler);
        });
    }
    
}

    


)




async function main(){
    try {
        fetchAPISERVER = await fetch("https://evovadu-backend.onrender.com/profile",{
            credentials : "include"
        }).then(res => res.json()).then(data => {
            refData = data['user'] // More refined 
            if (data == null){
                // window.location.href = "../login/index.html"
            }
            else{
                document.getElementById("username-button-dashbord").innerHTML = `<img src="${data['user'].profilePicture}" class="user-profile-image" id="main-user-profile" alt="user profile picture" >`;
                document.getElementById("username-button-dashbord-mobile").innerHTML = `<img src="${data['user'].profilePicture}" class="user-profile-image" id="main-user-profile-tablet" alt="user profile picture" >${refData.name}`;
            }
            
        })
    } catch (error) {
        console.log(`Fetch Failed ${error}`)
        // window.location.href = "../login/index.html"
        
    }


}


main()