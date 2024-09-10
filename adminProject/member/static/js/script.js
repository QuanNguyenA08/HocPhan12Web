document.addEventListener('DOMContentLoaded', () => {
    fetch('employees.json')
        .then(response => response.json())
        .then(data => {
            employees.push(...data);
            displayEmployees();
        })
        .catch(error => console.error('Error loading the JSON data:', error));
});

const employeeTableBody = document.getElementById('employee-body');
const employeeForm = document.getElementById('employee-form');
const deleteBtn = document.getElementById('delete-btn');
const editBtn = document.getElementById('edit-btn');

let selectedRow = null;
const employees = [];

function addEmployee() {
    const employeeId = document.getElementById('employeeId').value;
    const name = document.getElementById('name').value;
    const dob = document.getElementById('dob').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const email = document.getElementById('email').value;
    const department = document.getElementById('department').value;
    const position = document.getElementById('position').value;
    const hireDate = document.getElementById('hireDate').value;
    const salary = document.getElementById('salary').value;
    const status = document.getElementById('status').value;
    const notes = document.getElementById('notes').value;

    if (!employeeId || !name || !dob || !phone || !address || !email || !department || !position || !hireDate || !salary || !status) {
        alert('All fields are required except notes.');
        return;
    }

    const employee = { employeeId, name, dob, phone, address, email, department, position, hireDate, salary, status, notes };
    employees.push(employee);
    displayEmployees();
    employeeForm.reset();
}

function displayEmployees() {
    employeeTableBody.innerHTML = '';
    employees.forEach((employee, index) => {
        const row = document.createElement('tr');
        row.dataset.index = index;
        
        row.innerHTML = `
            <td>${employee.employeeId}</td>
            <td>${employee.name}</td>
            <td>${employee.dob}</td>
            <td>${employee.phone}</td>
            <td>${employee.address}</td>
            <td>${employee.email}</td>
            <td>${employee.department}</td>
            <td>${employee.position}</td>
            <td>${employee.hireDate}</td>
            <td>${employee.salary}</td>
            <td>${employee.status}</td>
            <td>${employee.notes}</td>
        `;

        row.onclick = () => selectRow(row);
        employeeTableBody.appendChild(row);
    });
}

function selectRow(row) {
    if (selectedRow) {
        selectedRow.classList.remove('selected');
    }
    selectedRow = row;
    selectedRow.classList.add('selected');

    const index = row.dataset.index;
    const employee = employees[index];
    document.getElementById('employeeId').value = employee.employeeId;
    document.getElementById('name').value = employee.name;
    document.getElementById('dob').value = employee.dob;
    document.getElementById('phone').value = employee.phone;
    document.getElementById('address').value = employee.address;
    document.getElementById('email').value = employee.email;
    document.getElementById('department').value = employee.department;
    document.getElementById('position').value = employee.position;
    document.getElementById('hireDate').value = employee.hireDate;
    document.getElementById('salary').value = employee.salary;
    document.getElementById('status').value = employee.status;
    document.getElementById('notes').value = employee.notes;
}

deleteBtn.onclick = () => {
    if (!selectedRow) {
        alert('No employee selected.');
        return;
    }
    const index = selectedRow.dataset.index;
    employees.splice(index, 1);
    selectedRow = null;
    displayEmployees();
    employeeForm.reset();
};

editBtn.onclick = () => {
    if (!selectedRow) {
        alert('No employee selected.');
        return;
    }
    const index = selectedRow.dataset.index;
    const employeeId = document.getElementById('employeeId').value;
    const name = document.getElementById('name').value;
    const dob = document.getElementById('dob').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const email = document.getElementById('email').value;
    const department = document.getElementById('department').value;
    const position = document.getElementById('position').value;
    const hireDate = document.getElementById('hireDate').value;
    const salary = document.getElementById('salary').value;
    const status = document.getElementById('status').value;
    const notes = document.getElementById('notes').value;

    if (!employeeId || !name || !dob || !phone || !address || !email || !department || !position || !hireDate || !salary || !status) {
        alert('All fields are required except notes.');
        return;
    }

    employees[index] = { employeeId, name, dob, phone, address, email, department, position, hireDate, salary, status, notes };
    selectedRow = null;
    displayEmployees();
    employeeForm.reset();
};
