async function fetchMp3Files() {
    return ["HCl.mp3","H2S.mp3","HCN.mp3","HClO.mp3","H3PO4.mp3","NaOH.mp3",
    "KOH.mp3","Al(OH)3.mp3","Ca(OH)2.mp3","Mg(OH)2.mp3","NaAlO2.mp3","Zn3P2.mp3",
    "K2MnO4.mp3","Ag2PO4.mp3","MgCO3.mp3"]
}

  function createPlayButton(fileName) {
    const button = document.createElement('button');
    button.textContent = '>';
    button.addEventListener('click', () => {
      playAudio(fileName);
    });
    return button;
  }

  async function populateTable() {
    const tableBody = document.querySelector('#mp3Table tbody');
    const mp3Files = await fetchMp3Files();

    mp3Files.forEach(fileName => {
      const row = document.createElement('tr');
      const nameCell = document.createElement('td');
      nameCell.textContent = fileName.replace(".mp3","");
      const actionCell = document.createElement('td');
      actionCell.appendChild(createPlayButton(fileName));

      row.appendChild(nameCell);
      row.appendChild(actionCell);
      tableBody.appendChild(row);
    });
  }

  function playAudio(fileName) {
    const audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.src = `./music/${fileName}`; // Assuming your MP3 files are in the /mp3 folder
    audioPlayer.play();
  }

populateTable();