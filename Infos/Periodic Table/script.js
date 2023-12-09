const periodicTableContainer = document.getElementById('periodic-table');
const color = {
    "alkali metal": "#ff9999",
    "alkaline earth metal":"#ff9999",
    "transition metal":"#99ccff",
    "halogen":"#a6a6ff",
    "noble gas":"#ffcc99",
    "lanthanide":"#D0B7FF",
    "actinide":"#D0B7FF",
    "polyatomic nonmetal":"#feff99",
    "diatomic nonmetal":"#feff99",
    "metalloid":"#CCFFCC",
    "post-transition metal":"#CCFFCC"
}
const chemGroup = ["IA", "IIA", "IIIB", "IVB", "VB", "VIB", "VIIB", "VIIIB", "VIIIB", "VIIIB", "IB", "IIB", "IIIA", "IVA", "VA", "VIA", "VIIA", "VIIIA"]
const overlay = document.getElementById("overlay");
overlay.onclick = function() {
    window.location = "#";
};
// Replace 'path/to/PeriodicTableJSON.json' with the actual path to your downloaded JSON file
fetch('./PeriodicTableJSON.json')
    .then(response => response.json())
    .then(data => {
        const elements = data.elements;

        elements.forEach(elementData => {
            const element = document.createElement('div');
            element.className = 'element';
            
            element.textContent = elementData.symbol;
            element.onclick = function() {
                window.location = '#popup';
                const info = data.elements[parseInt(element.getAttribute("nto"))-1];
                temp = document.getElementById("eDoc");
                temp.style.backgroundColor = color[info.category];
                temp.innerHTML = info.symbol;

                const quick =document.getElementById("quickInfo");
                quick.innerHTML = `<strong>Tên: </strong>${info.name}<br><strong>Số hiệu: </strong>${info.number}<br><strong>Chu kì: </strong>${info.period}<br><strong>Klg: </strong>${info.atomic_mass.toFixed(1)}u<br><strong>Nhóm: </strong>${chemGroup[info.group-1]}`;
            
                const full = document.getElementById("deepInfo");
                full.innerHTML = `<h1>${info.name}</h1><br><strong>Tìm ra bởi: </strong>${info.discovered_by}<br><strong>Đặt tên: </strong>${info.named_by}<br><strong>Nhiệt độ bay hơi: </strong>${(info.boil-273.15).toFixed(2)}<br><strong>Nhiệt độ nóng chảy: </strong>${(info.melt-273.15).toFixed(2)}<br><strong>Cấu hình electron: </strong>${info.electron_configuration_semantic}<br>`;
            
            }

            const category = elementData.category ? elementData.category.toLowerCase() : '';

            const details = document.createElement('div');
            details.id = "element-details";
            details.innerHTML = elementData.number;

            element.setAttribute('data-category', category);
            element.setAttribute('nto', elementData.number);
            if (elementData.number == 1) {
                element.style.gridArea = "1 / 1 / 2 / 18"
            }
            if (elementData.number == 4) {
                element.style.gridArea = "2 / 2 / 3 / 13"
            }
            if (elementData.number == 12) {
                element.style.gridArea = "3 / 2 / 4 / 13"
            }
            if (elementData.number == 56) {
                element.style.gridArea = "6 / 2 / 7 / 4"
            }
            if (elementData.number == 88) {
                element.style.gridArea = "7 / 2 / 8 / 4"
            }
            element.appendChild(details);

            periodicTableContainer.appendChild(element);
        });
    })
    .catch(error => console.error('Error fetching data:', error));


