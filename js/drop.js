function addFileToTable(file) {
    let row = document.createElement('tr');

    let nameData = document.createElement('td');
    nameData.textContent = file.name;

    let sizeData = document.createElement('td');
    sizeData.textContent = formatFileSize(file.size);

    let removeData = document.createElement('td')
    let removeElement = document.createElement('button');
    
    removeElement.textContent = 'Remover';
    removeElement.style.background = 'transparent'
    removeElement.style.border = 'none'
    removeElement.style.color = 'blue'
    removeElement.style.cursor = 'pointer'
    removeElement.addEventListener('click', (event) => {
        row.remove();
    });
    removeData.appendChild(removeElement);
    
    row.appendChild(nameData);
    row.appendChild(sizeData);
    row.appendChild(removeData);

    fileTable.appendChild(row)
}

function formatFileSize(bytes) {
    if (bytes === 0) {
        return '0 Bytes'
    }

    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const size = Math.floor(Math.log(bytes)/Math.log(k));
    const valueBytes = parseFloat((bytes/Math.pow(k, size)).toFixed(2));

    return `${valueBytes} ${sizes[size]}` 
}

let dropFile = document.getElementById('dropFile');
let fileTable = document.querySelector('#nameFile tbody');
let inputFile = document.getElementById('inputFile');

dropFile.addEventListener('dragover', (event) => {
    event.preventDefault();
    dropFile.style.border = '1.5px dashed #ccc';
});

dropFile.addEventListener('dragleave', (event) => {
    event.preventDefault();
    dropFile.style.border = '1.5px dashed #000';
});

dropFile.addEventListener('drop', (event) => {
    event.preventDefault();

    let files = event.dataTransfer.files;
    for(const file of files) {
        addFileToTable(file)
    }
});

inputFile.addEventListener('change', (event) => {
    let fileSelect = event.target.files;
    for(const file of fileSelect) {
        addFileToTable(file);
    }
});
