function editUser() {
    let new_Roles = "";
    for (var i = 0; i < window.formEditUser.editRoles.length; i++) {
        var option = window.formEditUser.editRoles.options[i];
        if (option.selected) {
            new_Roles = new_Roles.concat(option.value + (i != (window.formEditUser.editRoles.length - 1) ? "," : ""));
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
            showAllUsers();
        });
}