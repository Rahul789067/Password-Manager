const deletePassword=(website)=>{
    let data=localStorage.getItem("passwords")
    let arr=JSON.parse(data)
    arrUpdated=arr.filter((e)=>{
          return e.website!=website
    })
    localStorage.setItem("passwords", JSON.stringify(arrUpdated))

    alert("Please Refresh ")
}

function maskPassword(pass) {
    let str=""
    for (let index = 0; index < pass.length; index++) {
        str+= "*";
        }
        return str;
}


const showpasswords = () => {
    let tb = document.querySelector("table")
    let data = localStorage.getItem("passwords")
    if (data == null || JSON.parse(data).length==0) {
        tb.innerHTML = "No Passwords Saved Here"
    }

    else {
         tb.innerHTML= `<tr>
         <th>website</th>
         <th>username</th>
         <th>password</th>
         <th>${"Delete"}</t>
     </tr>`
        let arr = JSON.parse(data);
        let str = ""
        for (let index = 0; index < arr.length; index++) {
            const element = arr[index];

            str += `<tr>
    <td>${element.website}</td>
    <td>${element.username}</td>
    <td>${maskPassword(element.password)}</td>
    <td><button class="btnms" onclick="deletePassword('${element.website}')"> Delete</button></td>
</tr>`
        }
        tb.innerHTML = tb.innerHTML + str
    }
    website.value=""
    username.value=""
    password.value=""
}
showpasswords()
document.querySelector(".Add").addEventListener("click", (e) => {
    e.preventDefault()
    //console.log("clicked.. ");
    console.log(password.value)
    let passwords = localStorage.getItem("passwords")
    console.log(passwords)
    if (passwords == null) {
        let json = []
        json.push({ website: website.value, username: username.value, password: password.value })
        alert("Details Added")
        localStorage.setItem("passwords", JSON.stringify(json))
    }
    else {
        let json = JSON.parse(localStorage.getItem("passwords"))
        json.push({ website: website.value, username: username.value, password: password.value })
        alert("Credentials Saved")
        localStorage.setItem("passwords", JSON.stringify(json))
    }
    showpasswords()
})