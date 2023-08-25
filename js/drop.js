let dropFile = document.getElementById('dropFile');

dropFile.addEventListener('drop',(event) => {
    event.preventDefault();
    event.stopPropagation();

    var dragFile = event.dataTransfer;
    var file = dragFile.files

    Array.from(file).forEach((file) => {
        
    })
})