document.addEventListener('DOMContentLoaded', () => {
    const employeeTableBody = document.querySelector('table tbody');
    let selectedRow = null;
    let selectedEmployeeId = null;

    // employeeTableBody.addEventListener('click', function (e) {
    //     // const row = e.target.closest('tr');
    //     // if (row) {
    //     //     selectedEmployeeId = row.cells[0].innerText; // Get Employee ID from the first cell
    //     //     console.log('Selected Employee ID:', selectedEmployeeId);
    //     // }
    //     console.log('Selected Employee ID:', selectedEmployeeId);
    // });


    // Update Employee Button Click Event



    // Function to handle row selection
    function selectRow(row) {
        if (selectedRow) {
            selectedRow.classList.remove('selected');
        }
        selectedRow = row;
        selectedRow.classList.add('selected');

        const cells = row.getElementsByTagName('td');

        // Populate form fields with selected employee data
        document.getElementById('id_employee_id').value = cells[0].textContent || '';
        document.getElementById('id_name').value = cells[1].textContent || '';
        document.getElementById('id_dob').value = cells[2].textContent || '';
        document.getElementById('id_phone').value = cells[3].textContent || '';
        document.getElementById('id_address').value = cells[4].textContent || '';
        document.getElementById('id_email').value = cells[5].textContent || '';
        document.getElementById('id_department').value = cells[6].textContent || '';
        document.getElementById('id_position').value = cells[7].textContent || '';
        document.getElementById('id_hire_date').value = cells[8].textContent || '';
        document.getElementById('id_salary').value = cells[9].textContent || '';
        document.getElementById('id_status').value = cells[10].textContent || '';
        document.getElementById('id_notes').value = cells[11].textContent || '';
    }

    // Add click event listener to each row
    employeeTableBody.addEventListener('click', (event) => {
        const row = event.target.closest('tr');
        if (row) {
            // 1
            selectedEmployeeId = row.cells[0].innerText;
            selectRow(row);
        }
    });

    // Function to submit a form with the selected employee ID
    function submitForm(actionUrl) {
        if (selectedEmployeeId) {
            const form = document.getElementById('employee-form');
            const input = document.createElement('input');
            input.type = 'hidden';
            input.name = 'employee_id';
            input.value = selectedEmployeeId;
            form.appendChild(input);

            form.action = actionUrl;
            form.submit();  // Submit the form
        } else {
            alert('Please select an employee first.');
        }
    }

    document.getElementById('update-button').addEventListener('click', function () {
        submitForm('/update-employee/');  // Change this URL to match your update view
    });
});
