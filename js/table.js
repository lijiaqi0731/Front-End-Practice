function addRow() {
    var table = document.getElementById('table');
    
    var length = table.rows.length;

    var newRow = table.insertRow(length);
    // newRow.innerHTML = '123456'
    console.log(newRow);

    var nameCol = newRow.insertCell(0);
    var phoneCol = newRow.insertCell(1);
    var actionCol = newRow.insertCell(2);

    nameCol.innerHTML = '未命名';
    phoneCol.innerHTML = '无联系方式';
    actionCol.innerHTML = '<button onclick="editRow(this)">编辑</button><button onclick="deleteRow(this)">删除</button>';

    console.log(newRow);
}

function deleteRow(button) {
    var row = button.parentNode.parentNode;
    console.log(row);
    row.parentNode.removeChild(row);
}

function editRow(button) {
    var row = button.parentNode.parentNode;
    var name = row.cells[0];
    var phone = row.cells[1];

    var inputName = prompt("请输入名字：");
    var inputPhone = prompt("请输入联系方式：");

    name.innerHTML = inputName;
    phone.innerHTML = inputPhone;
}