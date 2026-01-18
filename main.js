import { players } from "./data.js";

const rosterContainer = document.getElementById("roster-container");
const statsBody = document.getElementById("stats-body");

// Player Roster Rendering
function renderRoster() {
  // Kosongkan container dulu (optional)
  rosterContainer.innerHTML = "";

  players.forEach((player) => {
    const cardHTML = `
            <div class="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center">
                <img
                  src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1331&auto=format&fit=crop"
                  alt="${player.name}"
                  class="w-24 h-24 rounded-full mb-4 object-cover"
                />
                <h3 class="text-xl font-semibold mb-2 text-center">${player.name}</h3>
                <p class="text-gray-600 mb-1">${player.position}</p>
                <hr class="w-full my-2"/>
                <div class="flex gap-4 text-sm">
                    <p class="text-gray-600">PPG: ${player.ppg}</p>
                    <p class="text-gray-600">RPG: ${player.rpg}</p>
                    <p class="text-gray-600">APG: ${player.apg}</p>
                </div>
                <hr class="w-full my-2 te"/>
                <p class="text-sm text-gray-500">${player.gp} Pertandingan</p>
            </div>
        `;
    // Masukkan HTML ke dalam container
    rosterContainer.innerHTML += cardHTML;
  });
}

function renderStats() {
  // Kosongkan body table
  statsBody.innerHTML = "";

  players.forEach((player, index) => {
    const rowHTML = `
            <tr class="text-center hover:bg-gray-50">
                <td class="p-3">${index + 1}</td>
                <td class="p-3 text-left font-medium">${player.name}</td>
                <td class="p-3">${player.position}</td>
                <td class="p-3">${player.gp}</td>
                <td class="p-3">${player.ppg}</td>
                <td class="p-3">${player.apg}</td>
                <td class="p-3">${player.bpg}</td>
                <td class="p-3">${player.spg}</td>
                <td class="p-3">${player.ft}</td>
                <td class="p-3">${player.fta}</td>
                <td class="p-3">${player.ftPercent}%</td>
                <td class="p-3">${player.fg}</td>
                <td class="p-3">${player.fga}</td>
                <td class="p-3">${player.fgPercent}%</td>
                <td class="p-3">${player.threeP}</td>
                <td class="p-3">${player.threePA}</td>
                <td class="p-3">${player.threePPercent}%</td>
                <td class="p-3">${player.tgp}</td>
                <td class="p-3">
                    <button class="bg-blue-500 text-white px-2 py-1 rounded text-xs hover:bg-blue-600">Edit</button>
                    <button class="bg-red-500 text-white px-2 py-1 rounded text-xs hover:bg-red-600">Del</button>
                </td>
            </tr>
        `;
    statsBody.innerHTML += rowHTML;
  });
}

// Memanggil fungsi untuk render statistik pemain
document.addEventListener("DOMContentLoaded", () => {
  renderRoster();
  renderStats();
});


// Modal
const modalHTML = `
<div id="playerModal" class="fixed inset-0 bg-white bg-opacity-50 hidden items-center justify-center z-50 p-4">
  <div class="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto transform transition-all">
    <!-- Modal Header -->
    <div class="bg-gradient-to-r from-red-600 to-red-700 text-white p-6 rounded-t-2xl">
      <div class="flex justify-between items-center">
        <div class="flex items-center gap-3">
          <div class="bg-white/20 p-2 rounded-lg">
            <i class="fa-solid fa-user-plus text-2xl"></i>
          </div>
          <div>
            <h3 class="text-2xl font-bold">Tambah Pemain Baru</h3>
            <p class="text-red-100 text-sm">Lengkapi data pemain</p>
          </div>
        </div>
        <button id="closeModal" class="text-white hover:bg-white/20 w-10 h-10 rounded-full flex items-center justify-center transition-all">
          <i class="fa-solid fa-xmark text-2xl"></i>
        </button>
      </div>
    </div>

    <!-- Modal Body -->
    <form id="addPlayerForm" class="p-6">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <!-- Nama Lengkap -->
        <div class="md:col-span-2">
          <label class="block text-sm font-semibold text-gray-700 mb-2">
            <i class="fa-solid fa-user text-red-600 mr-2"></i>Nama Lengkap
          </label>
          <input 
            type="text" 
            id="playerName" 
            name="name"
            required
            class="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-red-500 focus:outline-none transition-colors"
            placeholder="Contoh: Andi Wijaya"
          >
        </div>

        <!-- Posisi -->
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-2">
            <i class="fa-solid fa-basketball text-red-600 mr-2"></i>Posisi
          </label>
          <select 
            id="playerPosition" 
            name="position"
            required
            class="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-red-500 focus:outline-none transition-colors"
          >
            <option value="">Pilih Posisi</option>
            <option value="Point Guard">Point Guard (PG)</option>
            <option value="Shooting Guard">Shooting Guard (SG)</option>
            <option value="Small Forward">Small Forward (SF)</option>
            <option value="Power Forward">Power Forward (PF)</option>
            <option value="Center">Center (C)</option>
          </select>
        </div>

        <!-- Nomor Punggung -->
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-2">
            <i class="fa-solid fa-hashtag text-red-600 mr-2"></i>Nomor Punggung
          </label>
          <input 
            type="number" 
            id="playerNumber" 
            name="number"
            required
            min="0"
            max="99"
            class="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-red-500 focus:outline-none transition-colors"
            placeholder="Contoh: 7"
          >
        </div>

        <!-- Usia -->
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-2">
            <i class="fa-solid fa-calendar text-red-600 mr-2"></i>Usia
          </label>
          <input 
            type="number" 
            id="playerAge" 
            name="age"
            required
            min="15"
            max="50"
            class="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-red-500 focus:outline-none transition-colors"
            placeholder="Contoh: 25"
          >
        </div>

        <!-- Tinggi Badan -->
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-2">
            <i class="fa-solid fa-ruler-vertical text-red-600 mr-2"></i>Tinggi Badan (cm)
          </label>
          <input 
            type="number" 
            id="playerHeight" 
            name="height"
            required
            min="150"
            max="250"
            class="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-red-500 focus:outline-none transition-colors"
            placeholder="Contoh: 188"
          >
        </div>

        <!-- Jumlah Pertandingan -->
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-2">
            <i class="fa-solid fa-trophy text-red-600 mr-2"></i>Jumlah Pertandingan
          </label>
          <input 
            type="number" 
            id="playerGames" 
            name="games"
            required
            min="0"
            class="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-red-500 focus:outline-none transition-colors"
            placeholder="Contoh: 12"
          >
        </div>

        <!-- URL Foto -->
        <div class="md:col-span-2">
          <label class="block text-sm font-semibold text-gray-700 mb-2">
            <i class="fa-solid fa-image text-red-600 mr-2"></i>URL Foto Pemain
          </label>
          <input 
            type="url" 
            id="playerImage" 
            name="image"
            required
            class="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-red-500 focus:outline-none transition-colors"
            placeholder="https://example.com/photo.jpg"
          >
        </div>
      </div>

      <!-- Modal Footer -->
      <div class="flex gap-3 mt-8 pt-6 border-t border-gray-200">
        <button 
          type="button" 
          id="cancelBtn"
          class="flex-1 px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold rounded-xl transition-colors"
        >
          Batal
        </button>
        <button 
          type="submit"
          class="flex-1 px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all"
        >
          <i class="fa-solid fa-check mr-2"></i>Simpan Pemain
        </button>
      </div>
    </form>
  </div>
</div>
`;

// Storage key for localStorage
const STORAGE_KEY = 'basketballPlayers';

// Load players from localStorage
function loadPlayers() {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
}

// Save players to localStorage
function savePlayers(players) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(players));
}

// Download players data as JSON file
function downloadPlayersJSON() {
  const players = loadPlayers();
  const dataStr = JSON.stringify(players, null, 2);
  const dataBlob = new Blob([dataStr], { type: 'application/json' });
  const url = URL.createObjectURL(dataBlob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `basketball-players-${new Date().toISOString().split('T')[0]}.json`;
  link.click();
  URL.revokeObjectURL(url);
}

// Inject modal ke body saat DOM loaded
document.addEventListener('DOMContentLoaded', function() {
  // Tambahkan modal HTML ke body
  document.body.insertAdjacentHTML('beforeend', modalHTML);

  // Get elements
  const modal = document.getElementById('playerModal');
  const openModalBtn = document.querySelector('#team-roster button'); // Button "Tambah pemain"
  const closeModalBtn = document.getElementById('closeModal');
  const cancelBtn = document.getElementById('cancelBtn');
  const addPlayerForm = document.getElementById('addPlayerForm');

  // Load existing players on page load
  loadPlayersToRoster();

  // Open modal
  openModalBtn?.addEventListener('click', function() {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
  });

  // Close modal function
  function closeModal() {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = 'auto';
    addPlayerForm.reset();
  }

  // Close modal events
  closeModalBtn?.addEventListener('click', closeModal);
  cancelBtn?.addEventListener('click', closeModal);

  // Close modal when clicking outside
  modal?.addEventListener('click', function(e) {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Close modal with ESC key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });

  // Handle form submission
  addPlayerForm?.addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form data
    const formData = new FormData(addPlayerForm);
    const playerData = {
      id: Date.now(),
      name: formData.get('name'),
      position: formData.get('position'),
      number: parseInt(formData.get('number')),
      age: parseInt(formData.get('age')),
      height: parseInt(formData.get('height')),
      games: parseInt(formData.get('games')),
      image: formData.get('image')
    };

    // Load existing players
    const players = loadPlayers();
    
    // Add new player
    players.push(playerData);
    
    // Save to localStorage
    savePlayers(players);

    console.log('New Player Data:', playerData);
    console.log('All Players:', players);

    // Add player card to roster
    addPlayerToRoster(playerData);

    // Show success message
    alert(`Pemain ${playerData.name} berhasil ditambahkan!`);

    // Close modal
    closeModal();
  });
});

// Function to load all players to roster
function loadPlayersToRoster() {
  const players = loadPlayers();
  const rosterContainer = document.getElementById('roster-container');
  
  // Clear existing content
  rosterContainer.innerHTML = '';
  
  // Add each player
  players.forEach(player => {
    addPlayerToRoster(player, false); // false = don't save again
  });
}

// Function to add player card to roster
function addPlayerToRoster(player, saveToStorage = false) {
  const rosterContainer = document.getElementById('roster-container');
  
  const playerCard = `
    <div class="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 flex flex-col items-center border-2 border-red-100 hover:border-red-300 hover:-translate-y-2">
      <div class="relative mb-5">
        <div class="absolute inset-0 bg-gradient-to-br from-red-500 to-red-700 rounded-full blur-md opacity-50 group-hover:opacity-75 transition-opacity"></div>
        <div class="relative w-28 h-28 rounded-full bg-gradient-to-br from-red-500 to-red-600 p-1">
          <img
            src="${player.image}"
            alt="${player.name}"
            class="w-full h-full rounded-full object-cover border-4 border-white"
          />
        </div>
        <div class="absolute -bottom-2 -right-2 bg-red-600 text-white font-bold text-sm w-10 h-10 rounded-full flex items-center justify-center shadow-lg border-2 border-white">
          ${player.number}
        </div>
      </div>

      <h3 class="text-xl font-bold text-gray-800 mb-1 text-center">
        ${player.name}
      </h3>
      
      <p class="text-red-600 font-semibold mb-4 text-center">
        ${player.position}
      </p>

      <div class="w-full h-px bg-gradient-to-r from-transparent via-red-300 to-transparent mb-4"></div>

      <div class="w-full space-y-3">
        <div class="flex justify-between items-center">
          <span class="text-sm text-gray-500">Usia</span>
          <span class="text-base font-semibold text-gray-800">${player.age} tahun</span>
        </div>
        <div class="flex justify-between items-center">
          <span class="text-sm text-gray-500">Tinggi</span>
          <span class="text-base font-semibold text-gray-800">${player.height} cm</span>
        </div>
      </div>

      <div class="w-full h-px bg-gray-200 my-4"></div>

      <div class="bg-gradient-to-r from-red-50 to-red-100 rounded-lg px-4 py-3 w-full">
        <p class="text-center text-gray-700">
          <span class="text-2xl font-bold text-red-600">${player.games}</span>
          <span class="text-sm text-gray-600 ml-2">Pertandingan</span>
        </p>
      </div>
      
      <button class="delete-btn mt-4 w-full text-red-600 hover:bg-red-50 py-2 rounded-lg font-semibold transition-colors border-2 border-red-200 hover:border-red-400"
      data-id="${player.id}">
        <i class="fa-solid fa-trash mr-2"></i>Hapus
      </button>
    </div>
  `;

  rosterContainer.insertAdjacentHTML('beforeend', playerCard);
}

// Function to delete player
function deletePlayer(id) {
  if (!confirm("Apakah Anda yakin ingin menghapus pemain ini?")) return;

  let players = loadPlayers();
  players = players.filter(player => player.id !== id);

  savePlayers(players);
  loadPlayersToRoster();

  alert("Pemain berhasil dihapus!");
}

document.addEventListener("click", (e) => {
  const btn = e.target.closest(".delete-btn");
  if (!btn) return;

  const id = Number(btn.dataset.id);
  deletePlayer(id);
});

loadPlayersToRoster();

// Optional: Add export button to download JSON
// You can add this button in your HTML and call downloadPlayersJSON()
window.downloadPlayersJSON = downloadPlayersJSON;

// Modal HTML for Player Statistics
const statsModalHTML = `
<div id="statsModal" class="fixed inset-0 bg-white bg-opacity-50 hidden items-center justify-center z-50 p-4">
  <div class="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto transform transition-all">
    <!-- Modal Header -->
    <div class="bg-gradient-to-r from-red-600 to-red-700 text-white p-6 rounded-t-2xl">
      <div class="flex justify-between items-center">
        <div class="flex items-center gap-3">
          <div class="bg-white/20 p-2 rounded-lg">
            <i class="fa-solid fa-chart-line text-2xl"></i>
          </div>
          <div>
            <h3 class="text-2xl font-bold">Tambah Statistik Pemain</h3>
            <p class="text-red-100 text-sm">Input data statistik pemain</p>
          </div>
        </div>
        <button id="closeStatsModal" class="text-white hover:bg-white/20 w-10 h-10 rounded-full flex items-center justify-center transition-all">
          <i class="fa-solid fa-xmark text-2xl"></i>
        </button>
      </div>
    </div>

    <!-- Modal Body -->
    <form id="addStatsForm" class="p-6">
      <!-- Player Info Section -->
      <div class="bg-red-50 rounded-xl p-4 mb-6 border-2 border-red-100">
        <h4 class="font-bold text-gray-800 mb-3 flex items-center gap-2">
          <i class="fa-solid fa-user text-red-600"></i>
          Informasi Pemain
        </h4>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">Nama Pemain</label>
            <input 
              type="text" 
              name="playerName"
              required
              class="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-red-500 focus:outline-none transition-colors"
              placeholder="Contoh: Andi Wijaya"
            >
          </div>
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">Posisi</label>
            <select 
              name="position"
              required
              class="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-red-500 focus:outline-none transition-colors"
            >
              <option value="">Pilih Posisi</option>
              <option value="PG">Point Guard (PG)</option>
              <option value="SG">Shooting Guard (SG)</option>
              <option value="SF">Small Forward (SF)</option>
              <option value="PF">Power Forward (PF)</option>
              <option value="C">Center (C)</option>
            </select>
          </div>
        </div>
      </div>

      <!-- Per Game Stats -->
      <div class="mb-6">
        <h4 class="font-bold text-gray-800 mb-3 flex items-center gap-2">
          <i class="fa-solid fa-basketball text-red-600"></i>
          Per Game Averages
        </h4>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">GP (Games Played)</label>
            <input 
              type="number" 
              name="gp"
              required
              min="0"
              step="1"
              class="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-red-500 focus:outline-none transition-colors"
              placeholder="12"
            >
          </div>
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">PPG (Points)</label>
            <input 
              type="number" 
              name="ppg"
              required
              min="0"
              step="0.1"
              class="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-red-500 focus:outline-none transition-colors"
              placeholder="20.5"
            >
          </div>
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">APG (Assists)</label>
            <input 
              type="number" 
              name="apg"
              required
              min="0"
              step="0.1"
              class="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-red-500 focus:outline-none transition-colors"
              placeholder="5.3"
            >
          </div>
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">BPG (Blocks)</label>
            <input 
              type="number" 
              name="bpg"
              required
              min="0"
              step="0.1"
              class="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-red-500 focus:outline-none transition-colors"
              placeholder="1.2"
            >
          </div>
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">SPG (Steals)</label>
            <input 
              type="number" 
              name="spg"
              required
              min="0"
              step="0.1"
              class="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-red-500 focus:outline-none transition-colors"
              placeholder="2.1"
            >
          </div>
        </div>
      </div>

      <!-- Free Throw Stats -->
      <div class="mb-6">
        <h4 class="font-bold text-gray-800 mb-3 flex items-center gap-2">
          <i class="fa-solid fa-bullseye text-red-600"></i>
          Free Throw Stats
        </h4>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">FT (Made)</label>
            <input 
              type="number" 
              name="ft"
              required
              min="0"
              step="1"
              class="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-red-500 focus:outline-none transition-colors"
              placeholder="45"
            >
          </div>
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">FTA (Attempts)</label>
            <input 
              type="number" 
              name="fta"
              required
              min="0"
              step="1"
              class="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-red-500 focus:outline-none transition-colors"
              placeholder="60"
            >
          </div>
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">FT% (Percentage)</label>
            <input 
              type="number" 
              name="ftPercent"
              required
              min="0"
              max="100"
              step="0.1"
              class="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-red-500 focus:outline-none transition-colors"
              placeholder="75.0"
            >
          </div>
        </div>
      </div>

      <!-- Field Goal Stats -->
      <div class="mb-6">
        <h4 class="font-bold text-gray-800 mb-3 flex items-center gap-2">
          <i class="fa-solid fa-crosshairs text-red-600"></i>
          Field Goal Stats
        </h4>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">FG (Made)</label>
            <input 
              type="number" 
              name="fg"
              required
              min="0"
              step="1"
              class="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-red-500 focus:outline-none transition-colors"
              placeholder="150"
            >
          </div>
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">FGA (Attempts)</label>
            <input 
              type="number" 
              name="fga"
              required
              min="0"
              step="1"
              class="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-red-500 focus:outline-none transition-colors"
              placeholder="300"
            >
          </div>
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">FG% (Percentage)</label>
            <input 
              type="number" 
              name="fgPercent"
              required
              min="0"
              max="100"
              step="0.1"
              class="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-red-500 focus:outline-none transition-colors"
              placeholder="50.0"
            >
          </div>
        </div>
      </div>

      <!-- 3-Point Stats -->
      <div class="mb-6">
        <h4 class="font-bold text-gray-800 mb-3 flex items-center gap-2">
          <i class="fa-solid fa-circle-dot text-red-600"></i>
          3-Point Stats
        </h4>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">3P (Made)</label>
            <input 
              type="number" 
              name="threeP"
              required
              min="0"
              step="1"
              class="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-red-500 focus:outline-none transition-colors"
              placeholder="30"
            >
          </div>
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">3PA (Attempts)</label>
            <input 
              type="number" 
              name="threePA"
              required
              min="0"
              step="1"
              class="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-red-500 focus:outline-none transition-colors"
              placeholder="90"
            >
          </div>
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">3P% (Percentage)</label>
            <input 
              type="number" 
              name="threePPercent"
              required
              min="0"
              max="100"
              step="0.1"
              class="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-red-500 focus:outline-none transition-colors"
              placeholder="33.3"
            >
          </div>
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">TGP (Total Games)</label>
            <input 
              type="number" 
              name="tgp"
              required
              min="0"
              step="1"
              class="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-red-500 focus:outline-none transition-colors"
              placeholder="36"
            >
          </div>
        </div>
      </div>

      <!-- Modal Footer -->
      <div class="flex gap-3 pt-6 border-t border-gray-200">
        <button 
          type="button" 
          id="cancelStatsBtn"
          class="flex-1 px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold rounded-xl transition-colors"
        >
          Batal
        </button>
        <button 
          type="submit"
          class="flex-1 px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all"
        >
          <i class="fa-solid fa-check mr-2"></i>Simpan Statistik
        </button>
      </div>
    </form>
  </div>
</div>
`;

// Storage key for player statistics
const STATS_STORAGE_KEY = 'playerStatistics';

// Load statistics from localStorage
function loadStatistics() {
  const stored = localStorage.getItem(STATS_STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
}

// Save statistics to localStorage
function saveStatistics(stats) {
  localStorage.setItem(STATS_STORAGE_KEY, JSON.stringify(stats));
}

// Download statistics as JSON file
function downloadStatisticsJSON() {
  const stats = loadStatistics();
  const dataStr = JSON.stringify(stats, null, 2);
  const dataBlob = new Blob([dataStr], { type: 'application/json' });
  const url = URL.createObjectURL(dataBlob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `player-statistics-${new Date().toISOString().split('T')[0]}.json`;
  link.click();
  URL.revokeObjectURL(url);
}

// Initialize statistics modal
document.addEventListener('DOMContentLoaded', function() {
  // Add stats modal HTML to body
  document.body.insertAdjacentHTML('beforeend', statsModalHTML);

  // Get elements
  const statsModal = document.getElementById('statsModal');
  const openStatsModalBtn = document.querySelector('#player-stat button');
  const closeStatsModalBtn = document.getElementById('closeStatsModal');
  const cancelStatsBtn = document.getElementById('cancelStatsBtn');
  const addStatsForm = document.getElementById('addStatsForm');

  // Load existing statistics
  loadStatisticsToTable();

  // Open modal
  openStatsModalBtn?.addEventListener('click', function() {
    statsModal.classList.remove('hidden');
    statsModal.classList.add('flex');
    document.body.style.overflow = 'hidden';
  });

  // Close modal function
  function closeStatsModal() {
    statsModal.classList.add('hidden');
    statsModal.classList.remove('flex');
    document.body.style.overflow = 'auto';
    addStatsForm.reset();
  }

  // Close modal events
  closeStatsModalBtn?.addEventListener('click', closeStatsModal);
  cancelStatsBtn?.addEventListener('click', closeStatsModal);

  // Close when clicking outside
  statsModal?.addEventListener('click', function(e) {
    if (e.target === statsModal) {
      closeStatsModal();
    }
  });

  // Close with ESC key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && !statsModal.classList.contains('hidden')) {
      closeStatsModal();
    }
  });

  // Handle form submission
  addStatsForm?.addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = new FormData(addStatsForm);
    const statsData = {
      id: Date.now(),
      playerName: formData.get('playerName'),
      position: formData.get('position'),
      gp: parseInt(formData.get('gp')),
      ppg: parseFloat(formData.get('ppg')),
      apg: parseFloat(formData.get('apg')),
      bpg: parseFloat(formData.get('bpg')),
      spg: parseFloat(formData.get('spg')),
      ft: parseInt(formData.get('ft')),
      fta: parseInt(formData.get('fta')),
      ftPercent: parseFloat(formData.get('ftPercent')),
      fg: parseInt(formData.get('fg')),
      fga: parseInt(formData.get('fga')),
      fgPercent: parseFloat(formData.get('fgPercent')),
      threeP: parseInt(formData.get('threeP')),
      threePA: parseInt(formData.get('threePA')),
      threePPercent: parseFloat(formData.get('threePPercent')),
      tgp: parseInt(formData.get('tgp'))
    };

    // Load existing stats
    const allStats = loadStatistics();
    
    // Add new stats
    allStats.push(statsData);
    
    // Save to localStorage
    saveStatistics(allStats);

    console.log('New Statistics:', statsData);

    // Reload table
    loadStatisticsToTable();

    // Show success
    alert(`Statistik ${statsData.playerName} berhasil ditambahkan!`);

    // Close modal
    closeStatsModal();
  });
});

// Load all statistics to table
function loadStatisticsToTable() {
  const stats = loadStatistics();
  const tbody = document.getElementById('stats-body');
  
  tbody.innerHTML = '';
  
  stats.forEach((stat, index) => {
    addStatToTable(stat, index + 1);
  });
}

// Add single stat row to table
function addStatToTable(stat, rowNumber) {
  const tbody = document.getElementById('stats-body');
  
  const row = `
    <tr class="border-b border-gray-200 hover:bg-red-50 transition-colors">
      <td class="px-4 py-4 font-medium text-gray-900">${rowNumber}</td>
      <td class="px-4 py-4 font-semibold text-gray-800">${stat.playerName}</td>
      <td class="px-4 py-4 text-center">
        <span class="inline-block bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-bold">
          ${stat.position}
        </span>
      </td>
      <td class="px-4 py-4 text-center text-gray-700">${stat.gp}</td>
      <td class="px-4 py-4 text-center font-semibold text-red-600">${stat.ppg}</td>
      <td class="px-4 py-4 text-center text-gray-700">${stat.apg}</td>
      <td class="px-4 py-4 text-center text-gray-700">${stat.bpg}</td>
      <td class="px-4 py-4 text-center text-gray-700">${stat.spg}</td>
      <td class="px-4 py-4 text-center text-gray-700">${stat.ft}</td>
      <td class="px-4 py-4 text-center text-gray-700">${stat.fta}</td>
      <td class="px-4 py-4 text-center font-medium text-gray-800">${stat.ftPercent}%</td>
      <td class="px-4 py-4 text-center text-gray-700">${stat.fg}</td>
      <td class="px-4 py-4 text-center text-gray-700">${stat.fga}</td>
      <td class="px-4 py-4 text-center font-medium text-gray-800">${stat.fgPercent}%</td>
      <td class="px-4 py-4 text-center text-gray-700">${stat.threeP}</td>
      <td class="px-4 py-4 text-center text-gray-700">${stat.threePA}</td>
      <td class="px-4 py-4 text-center font-medium text-gray-800">${stat.threePPercent}%</td>
      <td class="px-4 py-4 text-center text-gray-700">${stat.tgp}</td>
      <td class="px-4 py-4">
        <div class="flex gap-2 justify-center">
          <button onclick="editStatistic(${stat.id})" class="text-blue-600 hover:text-blue-700 hover:bg-blue-50 px-3 py-1 rounded transition-colors">
            <i class="fa-solid fa-edit"></i>
          </button>
          <button onclick="deleteStatistic(${stat.id})" class="text-red-600 hover:text-red-700 hover:bg-red-50 px-3 py-1 rounded transition-colors">
            <i class="fa-solid fa-trash"></i>
          </button>
        </div>
      </td>
    </tr>
  `;
  
  tbody.insertAdjacentHTML('beforeend', row);
}

// Delete statistic
function deleteStatistic(id) {
  if (confirm('Apakah Anda yakin ingin menghapus statistik ini?')) {
    let stats = loadStatistics();
    stats = stats.filter(stat => stat.id !== id);
    saveStatistics(stats);
    loadStatisticsToTable();
    alert('Statistik berhasil dihapus!');
  }
}

// Edit statistic (optional - you can implement this)
function editStatistic(id) {
  alert('Fitur edit akan segera tersedia!');
  // You can implement edit functionality here
}

// Make functions global
window.deleteStatistic = deleteStatistic;
window.editStatistic = editStatistic;
window.downloadStatisticsJSON = downloadStatisticsJSON;