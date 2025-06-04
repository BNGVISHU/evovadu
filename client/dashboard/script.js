async function main(){
    try {
        fetchAPISERVER = await fetch("https://evovadu-backend.onrender.com/profile",{
            credentials : "include"
        }).then(res => res.json()).then(data => {
            refData = data['user'] // More refined 
            if (data == null){
                window.location.href = "../login/index.html"
            }
            else{
                document.getElementById("username-button-dashbord").innerHTML = `<img src="${data['user'].profilePicture}" class="user-profile-image" id="main-user-profile" alt="user profile picture" >`;
                document.getElementById("username-button-dashbord-mobile").innerHTML = `<img src="${data['user'].profilePicture}" class="user-profile-image" id="main-user-profile-tablet" alt="user profile picture" >${refData.name}`;
            }
            
        })
    } catch (error) {
        console.log(`Fetch Failed ${error}`)
        window.location.href = "../login/index.html"
        
    }


}


main()