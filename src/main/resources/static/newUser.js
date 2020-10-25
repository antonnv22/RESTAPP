function newUser() {
    let form = window.formNewUser.newRoles;
    let new_Roles = "";
    let rolesList = document.createElement('ul');

    for (var i = 0; i < form.length; i++) {
        var option = form.options[i];
        let role = document.createElement('li');
        if (option.selected) {
            new_Roles = new_Roles.concat(option.value + (i != (form.length - 1) ? "," : ""));

            role.textContent = option.value + " ";
            rolesList.appendChild(role);
        }
    }

    fetch('http://localhost:8080/create', {
        method: 'POST',
        body: JSON.stringify({
            name: window.formNewUser.newName.value,
            lastName: window.formNewUser.newLastName.value,
            age: window.formNewUser.newAge.value,
            email: window.formNewUser.newEmail.value,
            password: window.formNewUser.newPassword.value,
            roles: new_Roles
        }),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })
        .then(response => response.json())
        .then(user => {
//        .then(response => {

            var tableBody = document.getElementById("tBody");
            var row = tableBody.insertRow();
            //let id = tableBody.rows.length;
            //let id = userCount;
            var cell0 = row.insertCell();
            cell0.innerHTML = user.id;
            var cell1 = row.insertCell();
            cell1.innerHTML = window.formNewUser.newName.value;
            var cell2 = row.insertCell();
            cell2.innerHTML = window.formNewUser.newLastName.value;
            var cell3 = row.insertCell();
            cell3.innerHTML = window.formNewUser.newAge.value;
            var cell4 = row.insertCell();
            cell4.innerHTML = window.formNewUser.newEmail.value;
            var cell5 = row.insertCell();
            cell5.innerHTML = rolesList.textContent;
            var cell6 = row.insertCell();
            cell6.innerHTML =
                '<button type="button" onclick="getModalEdit(' + user.id + ')" class="btn btn-primary btn-sm">Edit</button>';

            var cell7 = row.insertCell();
            cell7.innerHTML =
                '<button type="button" onclick="getModalDelete(' + user.id + ')" class="btn btn-danger btn-sm">Delete</button>';

            window.formNewUser.newName.value = "";
            window.formNewUser.newLastName.value = "";
            window.formNewUser.newAge.value = "";
            window.formNewUser.newEmail.value = "";
            window.formNewUser.newPassword.value = "";
            window.formNewUser.newRoles.value = "";


//            showAllUsers();
            $('#NewUserCreated').modal();
        });
}