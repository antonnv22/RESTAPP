function deleteUser(id) {
    let row_num = 0;
    var table = document.getElementById("tBody");
    var regPhrase = new RegExp(id, 'i');
    for (var i = 0; i < table.rows.length; i++) {
        if (regPhrase.test(table.rows[i].cells[0].innerHTML)) {
            row_num = i;
            break;
        }
    }

    fetch('http://localhost:8080/delete/' + id, {
        method: 'DELETE',
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })
        .then(response => {
            // showAllUsers();
            document.getElementById("tBody").deleteRow(row_num);
        });
}
