document.addEventListener('DOMContentLoaded', function () {
    const excelTable = document.getElementById('excel-table');

    // Replace 'your-file.csv' with the path to your CSV file
    const csvFilePath = 'test.csv';

    fetch(csvFilePath)
        .then(response => response.text())
        .then(data => {
            const rows = data.split('\n');
            
            rows.forEach(row => {
                const cells = row.split(',');
                const tableRow = document.createElement('tr');

                cells.forEach(cell => {
                    const tableCell = document.createElement('td');
                    tableCell.id = cell;
                    if (cell == "?") {
                        tableCell.id = "unk";
                    }
                    tableCell.textContent = cell;
                    tableRow.appendChild(tableCell);
                });

                excelTable.appendChild(tableRow);
            });
        })
        .catch(error => console.error('Error fetching CSV file:', error));
});
