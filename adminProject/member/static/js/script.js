document.addEventListener('DOMContentLoaded', () => {
    const employeeTableBody = document.querySelector('table tbody');
    const updateButton = document.getElementById('update-button');
    const employeeForm = document.getElementById('employee-form'); // Lấy tham chiếu đến biểu mẫu

    let selectedRow = null;
    let selectedEmployeeId = null;

    // Function to handle row selection
    function selectRow(row) {
        if (selectedRow) {
            selectedRow.classList.remove('selected');
        }
        selectedRow = row;
        selectedRow.classList.add('selected');
        
        const cells = row.getElementsByTagName('td');
        selectedEmployeeId = cells[0].textContent; // Giả sử ID ở cột đầu tiên
        console.log(selectedEmployeeId);

        // Populate form fields with selected employee data
        document.getElementById('id_employee_id').value = cells[0].textContent || '';
        document.getElementById('id_name').value = cells[1].textContent || '';

        // Format the DOB (Date of Birth) to YYYY-MM-DD if necessary
        let dob = cells[2].textContent || '';
        if (dob) {
            const dobObj = new Date(dob);
            if (!isNaN(dobObj.getTime())) {
                dob = dobObj.toISOString().split('T')[0];
            } else {
                console.error("Invalid date format for DOB");
                dob = '';
            }
        }
        document.getElementById('id_dob').value = dob;

        document.getElementById('id_phone').value = cells[3].textContent || '';
        document.getElementById('id_address').value = cells[4].textContent || '';
        document.getElementById('id_email').value = cells[5].textContent || '';
        document.getElementById('id_department').value = cells[6].textContent || '';
        document.getElementById('id_position').value = cells[7].textContent || '';

        // Format the hire date to YYYY-MM-DD if necessary
        let hireDate = cells[8].textContent || '';
        if (hireDate) {
            const hireDateObj = new Date(hireDate);
            if (!isNaN(hireDateObj.getTime())) {
                hireDate = hireDateObj.toISOString().split('T')[0];
            } else {
                console.error("Invalid date format for hire date");
                hireDate = '';
            }
        }
        document.getElementById('id_hire_date').value = hireDate;

        document.getElementById('id_salary').value = cells[9].textContent || '';
        document.getElementById('id_status').value = cells[10].textContent || '';
        document.getElementById('id_notes').value = cells[11].textContent || '';
    }

    // Add click event listener to each row
    employeeTableBody.addEventListener('click', (event) => {
        const row = event.target.closest('tr');
        if (row) {
            selectRow(row);
        }
    });

    // Handle update button click
    updateButton.addEventListener('click', function() {
        console.log(selectedEmployeeId);
        console.log('updateButton');
        if (selectedEmployeeId) {
            employeeForm.action = `/employee/update/${selectedEmployeeId}/`; // URL để cập nhật
            employeeForm.submit();
        } else {
            alert('Please select an employee to update.');
        }
    });
});
