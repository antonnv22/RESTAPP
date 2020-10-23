function editUser() {

    let form = window.formEditUser.editRoles;
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

    fetch('http://localhost:8080/update', {
        method: 'PUT',
        body: JSON.stringify({
            id: window.formEditUser.editID.value,
            name: window.formEditUser.editName.value,
            lastName: window.formEditUser.editLastName.value,
            age: window.formEditUser.editAge.value,
            email: window.formEditUser.editEmail.value,
            password: window.formEditUser.editPassword.value,
            roles: new_Roles
        }),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })
        .then(response => {
//            showAllUsers();
            let row = document.getElementById("tBody").rows[window.formEditUser.editID.value - 1];
            row.cells[0].innerHTML = window.formEditUser.editID.value;
            row.cells[1].innerHTML = window.formEditUser.editName.value;
            row.cells[2].innerHTML = window.formEditUser.editLastName.value;
            row.cells[3].innerHTML = window.formEditUser.editAge.value;
            row.cells[4].innerHTML = window.formEditUser.editEmail.value;
            row.cells[5].innerHTML = rolesList.textContent;

        });
}