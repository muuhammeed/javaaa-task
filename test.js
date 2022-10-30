arr=[]

var addUser = document.getElementById("add-user");

addUser.addEventListener("click" ,()=>{

    userData = {
        id : document.getElementById("id").value,
        balance : document.getElementById("balance").value,
        name : document.getElementById("name").value
    } 
   arr.push(userData)
   newUser()
})


function newUser(){ 

	document.getElementById("table-data").innerText = ""
	arr.forEach(function (data) {
		var newRow = document.createElement("tr");
		var firstindex = document.createElement('td');
        var secondIndex = document.createElement('td');
        var thIndex = document.createElement('td');

        var btn1 = document.createElement('button');
        var btn2 = document.createElement('button');

        btn1.innerHTML = "Edite balance"
        btn1.classList.add("btn" , "btn-primary"  , "btn-sm" , "text-dark")
        btn2.innerHTML = "Remove user"

        firstindex.innerText= data.id;
        secondIndex.innerText= data.name;
        thIndex.innerText= data.balance;


        newRow.appendChild(firstindex);
        newRow.appendChild(secondIndex);
        newRow.appendChild(thIndex);
		newRow.appendChild(btn1)
		newRow.appendChild(btn2)
		document.getElementById("table-data").appendChild(newRow);
    });
}