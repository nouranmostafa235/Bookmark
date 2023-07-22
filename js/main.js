
var siteArray = []
var siteName = document.getElementById("siteName")
var siteUrl = document.getElementById("siteUrl")
if (localStorage.getItem("sites") != null) {
    siteArray = JSON.parse(localStorage.getItem("sites"))
    display()
}


function display() {
    var box = ``;
    for (var i = 0; i < siteArray.length; i++) {
        box += `
       <tr>
       <td>
           ${i+1}
       </td>
       <td>${siteArray[i].name}</td>
       <th><a href="${siteArray[i].url}" class="btn visitbtn text-white px-3"><i class="fa-solid fa-eye" style="color: white;"></i> Visit</a></th>
       <th><button onclick="deleteItem(${i})" class="btn btn-danger deletbtn"><i class="fa-regular fa-trash-can"></i> Delete</button></th>
   </tr>
       `
    }
    document.getElementById("tableBody").innerHTML = box
}
function bookMark() {
    var obj = {
        name: siteName.value,
        url: siteUrl.value,
    }
    var different = true
    if (siteArray.length == 0) {
        different = true
    }
    else {
        for (var i = 0; i < siteArray.length; i++) {
            if (siteName.value == siteArray[i].name) {
                different = false
            }
        }
    }

    if (different == true &&check(siteUrl.value)==true &&  checkName(siteName.value)==true ) {
        siteArray.push(obj)
    }
    else{
        alert("1-Please Don't enter Repeted Bookmark Name   2-Bookmark Name must be at least 3 charcters  3-Valid URL ex:https://www.url.com")
    }

        clear()
        localStorage.setItem('sites', JSON.stringify(siteArray))
        display()  
}

function deleteItem(index) {
    siteArray.splice(index, 1)
    localStorage.setItem('sites', JSON.stringify(siteArray))
    display()
}
function clear() {
    siteName.value = ""
    siteUrl.value = ""
}
function check(str){
    var valid =/^https:\/\/www.[a-z.0-9]{1,}.com$/
    return valid.test(str)
}
function checkName(str){
    var valid = /[A-Za-z0-9]{3,}/
    return valid.test(str)
}