const user = JSON.parse(localStorage.getItem("user"));
if(!user || user.role !== "ADMIN"){
    window.location.href = "/index.html";
}