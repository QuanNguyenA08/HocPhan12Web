document.addEventListener('DOMContentLoaded', () => {
    const employeeTableBody = document.querySelector('table tbody');
    let selectedRow = null;

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
            selectRow(row);
        }
    });
});
