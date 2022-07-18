export const removeAlerts = () =>{
    let alert = document.getElementsByClassName("alert");
    if (alert[0]!= undefined){
         alert[0].remove()
     }
}

export const addAlerts = (error : string) =>{
    let message = document.createElement("div")
        message.className = "alert"
        message.innerHTML = `<strong>${error}`
        let parentDiv = document.body
        console.log(parentDiv)
        let childDiv = parentDiv.firstChild
        console.log(childDiv)
        document.body.insertBefore(message, document.body.firstChild);

}