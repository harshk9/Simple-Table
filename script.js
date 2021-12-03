
var userData = [];
var formData = {};

    const myformNew = document.forms[0];
    var table = document.getElementById("table");
    var tbody = document.getElementById("tbody");

    const submit = document.getElementById('submit');
    submit.addEventListener('click', function (event){  
        });
    document.getElementById('ferr').style.display = 'none';
    document.getElementById('lerr').style.display = 'none';
    document.getElementById('moberr').style.display = 'none';
    document.getElementById('emlerr').style.display = 'none';




function ValidateForm(){
    const fname = myformNew.elements['fname'].value;
    const lname = myformNew.elements['lname'].value;
    const mob = myformNew.elements['mob'].value;
    const email = myformNew.elements['email'].value;
    if(!fname || !lname || !mob || !email){
        alert("Please fill all fields");
        return;
    }else{
        formData ={
            'fname':fname,
            'lname':lname,
            'mob':mob,
            'email':email
        }
        userData.push(formData);
        addToTable(formData);
        // console.log("userData",userData)
        sessionStorage.setItem('userDataArray',JSON.stringify(userData))
        // console.log(formData)
    }

}

function addToTable(formData){
    var row = document.createElement("tr");
    for (data in formData){
        var cell = document.createElement("td");
        cell.textContent = formData[data];
        console.log("prop",cell.textContent )
        row.appendChild(cell);
        console.log("cell",cell)
    }
    var btn = document.createElement("td");
    btn.innerHTML = '<button class="btn" id="delet" onclick="deletRow(this)" >Delete</button>';
    console.log("btn HTML",btn);
    row.appendChild(btn);
    tbody.appendChild(row);
    myformNew.reset();
    return;
    
    // userData.forEach((items) => {
    //     console.log("items",items)
    //   var row = document.createElement("tr");
    //   for(const prop in items){
    //       console.log("prop",prop)
    //       console.log("item prop",items[prop])
    //     var cell = document.createElement("td");
    //     cell.textContent = items[prop];
    //     console.log("prop",cell.textContent )
    //     row.appendChild(cell);
    //   }
    //   tbody.appendChild(row);
    // });
    
}

function deletRow(event){
    console.log("delete");
    var result = confirm("Are you sure you want to detelet row");
    if(result){
        var p=event.parentNode.parentNode;
    p.parentNode.removeChild(p);
    }else return;
    
}