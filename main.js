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

// ======================== Modal for Adding New Player ======================== //

// Modal HTML - Tambahkan ke body atau sebelum closing </body> tag
const modalHTML = `
<div id="playerModal" class="fixed inset-0 bg-white bg-opacity-50 hidden items-center justify-center z-50 p-4">
  <div class="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto transform transition-all">
    <!-- Modal Header -->
    <div class="bg-gradient-to-r from-red-600 to-red-700 text-white p-6 rounded-t-2xl">
      <div class="flex justify-between items-center">
        <div class="flex items-center gap-3">
          <div class="bg-white/20 p-2 rounded-lg">
            <i class="fa-solid fa-user-plus text-2xl"></i>
          </div>
          <div>
            <h3 class="text-2xl font-bold">Tambah Pemain Baru</h3>
            <p class="text-red-100 text-sm">Lengkapi data pemain secara detail</p>
          </div>
        </div>
        <button id="closeModal" class="text-white hover:bg-white/20 w-10 h-10 rounded-full flex items-center justify-center transition-all">
          <i class="fa-solid fa-xmark text-2xl"></i>
        </button>
      </div>
    </div>

    <!-- Modal Body -->
    <form id="addPlayerForm" class="p-6">
      
      <!-- Personal Information Section -->
      <div class="bg-red-50 rounded-xl p-5 mb-6 border-2 border-red-100">
        <h4 class="font-bold text-gray-800 mb-4 flex items-center gap-2">
          <i class="fa-solid fa-id-card text-red-600"></i>
          Informasi Personal
        </h4>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <!-- Nama Lengkap -->
          <div class="md:col-span-2">
            <label class="block text-sm font-semibold text-gray-700 mb-2">
              <i class="fa-solid fa-user text-red-600 mr-2"></i>Nama Lengkap
            </label>
            <input 
              type="text" 
              name="name"
              required
              class="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-red-500 focus:outline-none transition-colors"
              placeholder="Contoh: Andi Wijaya"
            >
          </div>

          <!-- URL Foto -->
          <div class="md:col-span-2">
            <label class="block text-sm font-semibold text-gray-700 mb-2">
              <i class="fa-solid fa-image text-red-600 mr-2"></i>URL Foto Pemain
            </label>
            <input 
              type="url" 
              name="image"
              required
              class="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-red-500 focus:outline-none transition-colors"
              placeholder="https://example.com/photo.jpg"
            >
          </div>

          <!-- Jenis Kelamin -->
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">
              <i class="fa-solid fa-venus-mars text-red-600 mr-2"></i>Jenis Kelamin
            </label>
            <select 
              name="gender"
              required
              class="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-red-500 focus:outline-none transition-colors"
            >
              <option value="">Pilih Jenis Kelamin</option>
              <option value="Laki-laki">Laki-laki</option>
              <option value="Perempuan">Perempuan</option>
            </select>
          </div>

          <!-- Nomor Punggung -->
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">
              <i class="fa-solid fa-hashtag text-red-600 mr-2"></i>Nomor Punggung
            </label>
            <input 
              type="number" 
              name="number"
              required
              min="0"
              max="99"
              class="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-red-500 focus:outline-none transition-colors"
              placeholder="7"
            >
          </div>

          <!-- Posisi -->
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">
              <i class="fa-solid fa-basketball text-red-600 mr-2"></i>Posisi
            </label>
            <select 
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

          <!-- Usia -->
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">
              <i class="fa-solid fa-calendar text-red-600 mr-2"></i>Usia
            </label>
            <input 
              type="number" 
              name="age"
              required
              min="15"
              max="50"
              class="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-red-500 focus:outline-none transition-colors"
              placeholder="25"
            >
          </div>

          <!-- Jumlah Pertandingan -->
          <div class="md:col-span-2">
            <label class="block text-sm font-semibold text-gray-700 mb-2">
              <i class="fa-solid fa-trophy text-red-600 mr-2"></i>Jumlah Pertandingan
            </label>
            <input 
              type="number" 
              name="games"
              required
              min="0"
              class="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-red-500 focus:outline-none transition-colors"
              placeholder="12"
            >
          </div>
        </div>
      </div>

      <!-- Physical Attributes Section -->
      <div class="bg-blue-50 rounded-xl p-5 mb-6 border-2 border-blue-100">
        <h4 class="font-bold text-gray-800 mb-4 flex items-center gap-2">
          <i class="fa-solid fa-dumbbell text-blue-600"></i>
          Atribut Fisik
        </h4>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <!-- Tinggi Badan -->
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">
              <i class="fa-solid fa-ruler-vertical text-blue-600 mr-2"></i>Tinggi Badan (cm)
            </label>
            <input 
              type="number" 
              name="height"
              required
              min="150"
              max="250"
              step="0.1"
              class="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
              placeholder="188"
            >
          </div>

          <!-- Berat Badan -->
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">
              <i class="fa-solid fa-weight-scale text-blue-600 mr-2"></i>Berat Badan (kg)
            </label>
            <input 
              type="number" 
              name="weight"
              required
              min="40"
              max="200"
              step="0.1"
              class="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
              placeholder="85"
            >
          </div>

          <!-- Wing Span -->
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">
              <i class="fa-solid fa-arrows-left-right text-blue-600 mr-2"></i>Wing Span (cm)
            </label>
            <input 
              type="number" 
              name="wingspan"
              required
              min="150"
              max="250"
              step="0.1"
              class="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
              placeholder="195"
            >
          </div>
        </div>
      </div>

      <!-- Athletic Performance Section -->
      <div class="bg-green-50 rounded-xl p-5 mb-6 border-2 border-green-100">
        <h4 class="font-bold text-gray-800 mb-4 flex items-center gap-2">
          <i class="fa-solid fa-bolt text-green-600"></i>
          Performa Atletik
        </h4>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <!-- Kecepatan Lari -->
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">
              <i class="fa-solid fa-gauge-high text-green-600 mr-2"></i>Kecepatan Lari (km/jam)
            </label>
            <input 
              type="number" 
              name="speed"
              required
              min="0"
              max="50"
              step="0.1"
              class="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-green-500 focus:outline-none transition-colors"
              placeholder="28.5"
            >
          </div>

          <!-- Tinggi Loncatan Maksimal -->
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">
              <i class="fa-solid fa-arrow-up text-green-600 mr-2"></i>Tinggi Loncatan Maksimal (cm)
            </label>
            <input 
              type="number" 
              name="verticalJump"
              required
              min="0"
              max="150"
              step="0.1"
              class="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-green-500 focus:outline-none transition-colors"
              placeholder="85"
            >
          </div>
        </div>
      </div>

      <!-- Modal Footer -->
      <div class="flex gap-3 pt-6 border-t border-gray-200">
        <button 
          type="button" 
          id="cancelBtn"
          class="flex-1 px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold rounded-xl transition-colors"
        >
          <i class="fa-solid fa-xmark mr-2"></i>Batal
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
  const openModalBtn = document.querySelector('#team-roster button');
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
      image: formData.get('image'),
      gender: formData.get('gender'),
      number: parseInt(formData.get('number')),
      position: formData.get('position'),
      age: parseInt(formData.get('age')),
      games: parseInt(formData.get('games')),
      height: parseFloat(formData.get('height')),
      weight: parseFloat(formData.get('weight')),
      wingspan: parseFloat(formData.get('wingspan')),
      speed: parseFloat(formData.get('speed')),
      verticalJump: parseFloat(formData.get('verticalJump'))
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
    addPlayerToRoster(player, false);
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
      
      <p class="text-red-600 font-semibold mb-2 text-center">
        ${player.position}
      </p>

      <p class="text-xs text-gray-500 mb-4">${player.gender}</p>

      <div class="w-full h-px bg-gradient-to-r from-transparent via-red-300 to-transparent mb-4"></div>

      <div class="w-full space-y-2 text-sm">
        <div class="flex justify-between items-center">
          <span class="text-gray-500">Usia</span>
          <span class="font-semibold text-gray-800">${player.age} tahun</span>
        </div>
        <div class="flex justify-between items-center">
          <span class="text-gray-500">Tinggi</span>
          <span class="font-semibold text-gray-800">${player.height} cm</span>
        </div>
        <div class="flex justify-between items-center">
          <span class="text-gray-500">Berat</span>
          <span class="font-semibold text-gray-800">${player.weight} kg</span>
        </div>
        <div class="flex justify-between items-center">
          <span class="text-gray-500">Wing Span</span>
          <span class="font-semibold text-gray-800">${player.wingspan} cm</span>
        </div>
        <div class="flex justify-between items-center">
          <span class="text-gray-500">Kecepatan</span>
          <span class="font-semibold text-blue-600">${player.speed} km/h</span>
        </div>
        <div class="flex justify-between items-center">
          <span class="text-gray-500">Loncatan</span>
          <span class="font-semibold text-green-600">${player.verticalJump} cm</span>
        </div>
      </div>

      <div class="w-full h-px bg-gray-200 my-4"></div>

      <div class="bg-gradient-to-r from-red-50 to-red-100 rounded-lg px-4 py-3 w-full mb-3">
        <p class="text-center text-gray-700">
          <span class="text-2xl font-bold text-red-600">${player.games}</span>
          <span class="text-sm text-gray-600 ml-2">Pertandingan</span>
        </p>
      </div>
      
      <button onclick="deletePlayer(${player.id})" class="w-full text-red-600 hover:bg-red-50 py-2 rounded-lg font-semibold transition-colors border-2 border-red-200 hover:border-red-400">
        <i class="fa-solid fa-trash mr-2"></i>Hapus
      </button>
    </div>
  `;

  rosterContainer.insertAdjacentHTML('beforeend', playerCard);
}

// Function to delete player
function deletePlayer(id) {
  if (confirm('Apakah Anda yakin ingin menghapus pemain ini?')) {
    let players = loadPlayers();
    players = players.filter(player => player.id !== id);
    savePlayers(players);
    loadPlayersToRoster();
    alert('Pemain berhasil dihapus!');
  }
}

// Make functions global
window.downloadPlayersJSON = downloadPlayersJSON;

// ======================== Modal for Adding Player Statistics ======================== //

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

// Modal HTML for Match History
const matchModalHTML = `
<div id="matchModal" class="fixed inset-0 bg-white bg-opacity-50 hidden items-center justify-center z-50 p-4">
  <div class="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto transform transition-all">
    <!-- Modal Header -->
    <div class="bg-gradient-to-r from-red-600 to-red-700 text-white p-6 rounded-t-2xl">
      <div class="flex justify-between items-center">
        <div class="flex items-center gap-3">
          <div class="bg-white/20 p-2 rounded-lg">
            <i class="fa-solid fa-clock-rotate-left text-2xl"></i>
          </div>
          <div>
            <h3 class="text-2xl font-bold">Tambah Pertandingan</h3>
            <p class="text-red-100 text-sm">Input data pertandingan baru</p>
          </div>
        </div>
        <button id="closeMatchModal" class="text-white hover:bg-white/20 w-10 h-10 rounded-full flex items-center justify-center transition-all">
          <i class="fa-solid fa-xmark text-2xl"></i>
        </button>
      </div>
    </div>

    <!-- Modal Body -->
    <form id="addMatchForm" class="p-6">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <!-- Opponent Team -->
        <div class="md:col-span-2">
          <label class="block text-sm font-semibold text-gray-700 mb-2">
            <i class="fa-solid fa-shield text-red-600 mr-2"></i>Tim Lawan
          </label>
          <input 
            type="text" 
            name="opponent"
            required
            class="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-red-500 focus:outline-none transition-colors"
            placeholder="Contoh: Thunder"
          >
        </div>

        <!-- Match Type -->
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-2">
            <i class="fa-solid fa-trophy text-red-600 mr-2"></i>Tipe Pertandingan
          </label>
          <select 
            name="matchType"
            required
            class="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-red-500 focus:outline-none transition-colors"
          >
            <option value="">Pilih Tipe</option>
            <option value="Competitive">Competitive</option>
            <option value="Tournament">Tournament</option>
            <option value="Friendly">Friendly</option>
          </select>
        </div>

        <!-- Match Date -->
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-2">
            <i class="fa-solid fa-calendar text-red-600 mr-2"></i>Tanggal Pertandingan
          </label>
          <input 
            type="date" 
            name="matchDate"
            required
            class="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-red-500 focus:outline-none transition-colors"
          >
        </div>

        <!-- Our Score -->
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-2">
            <i class="fa-solid fa-basketball text-red-600 mr-2"></i>Skor Tim Kita
          </label>
          <input 
            type="number" 
            name="ourScore"
            required
            min="0"
            class="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-red-500 focus:outline-none transition-colors"
            placeholder="85"
          >
        </div>

        <!-- Opponent Score -->
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-2">
            <i class="fa-solid fa-basketball text-red-600 mr-2"></i>Skor Tim Lawan
          </label>
          <input 
            type="number" 
            name="opponentScore"
            required
            min="0"
            class="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-red-500 focus:outline-none transition-colors"
            placeholder="72"
          >
        </div>
      </div>

      <!-- Modal Footer -->
      <div class="flex gap-3 mt-8 pt-6 border-t border-gray-200">
        <button 
          type="button" 
          id="cancelMatchBtn"
          class="flex-1 px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold rounded-xl transition-colors"
        >
          Batal
        </button>
        <button 
          type="submit"
          class="flex-1 px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all"
        >
          <i class="fa-solid fa-check mr-2"></i>Simpan Pertandingan
        </button>
      </div>
    </form>
  </div>
</div>
`;

// Modal HTML for Match Statistics (Top Performers)
const matchStatsModalHTML = `
<div id="matchStatsModal" class="fixed inset-0 bg-white bg-opacity-50 hidden items-center justify-center z-50 p-4">
  <div class="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto transform transition-all">
    <!-- Modal Header -->
    <div class="bg-gradient-to-r from-red-600 to-red-700 text-white p-6 rounded-t-2xl">
      <div class="flex justify-between items-center">
        <div class="flex items-center gap-3">
          <div class="bg-white/20 p-2 rounded-lg">
            <i class="fa-solid fa-chart-line text-2xl"></i>
          </div>
          <div>
            <h3 class="text-2xl font-bold">Tambah Statistik Pertandingan</h3>
            <p class="text-red-100 text-sm">Input performa pemain terbaik</p>
          </div>
        </div>
        <button id="closeMatchStatsModal" class="text-white hover:bg-white/20 w-10 h-10 rounded-full flex items-center justify-center transition-all">
          <i class="fa-solid fa-xmark text-2xl"></i>
        </button>
      </div>
    </div>

    <!-- Modal Body -->
    <form id="addMatchStatsForm" class="p-6">
      <div class="space-y-6">
        
        <!-- Top Scorer -->
        <div class="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-4 border-2 border-yellow-200">
          <h4 class="font-bold text-gray-800 mb-3 flex items-center gap-2">
            🏆 Top Scorer
          </h4>
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">Nama Pemain</label>
              <input 
                type="text" 
                name="topScorerName"
                required
                class="w-full px-4 py-2 border-2 border-gray-300 rounded-xl focus:border-orange-500 focus:outline-none transition-colors"
                placeholder="Andi Wijaya"
              >
            </div>
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">Points</label>
              <input 
                type="number" 
                name="topScorerPoints"
                required
                min="0"
                class="w-full px-4 py-2 border-2 border-gray-300 rounded-xl focus:border-orange-500 focus:outline-none transition-colors"
                placeholder="28"
              >
            </div>
          </div>
        </div>

        <!-- Most Assists -->
        <div class="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 border-2 border-blue-200">
          <h4 class="font-bold text-gray-800 mb-3 flex items-center gap-2">
            🎯 Most Assists
          </h4>
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">Nama Pemain</label>
              <input 
                type="text" 
                name="assistLeaderName"
                required
                class="w-full px-4 py-2 border-2 border-gray-300 rounded-xl focus:border-indigo-500 focus:outline-none transition-colors"
                placeholder="Budi Santoso"
              >
            </div>
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">Assists</label>
              <input 
                type="number" 
                name="assistLeaderAssists"
                required
                min="0"
                class="w-full px-4 py-2 border-2 border-gray-300 rounded-xl focus:border-indigo-500 focus:outline-none transition-colors"
                placeholder="12"
              >
            </div>
          </div>
        </div>

        <!-- Best Defense -->
        <div class="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 border-2 border-purple-200">
          <h4 class="font-bold text-gray-800 mb-3 flex items-center gap-2">
            🛡️ Best Defense
          </h4>
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">Nama Pemain</label>
              <input 
                type="text" 
                name="defenseLeaderName"
                required
                class="w-full px-4 py-2 border-2 border-gray-300 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
                placeholder="Cahyo Pratama"
              >
            </div>
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">Blocks</label>
              <input 
                type="number" 
                name="defenseLeaderBlocks"
                required
                min="0"
                class="w-full px-4 py-2 border-2 border-gray-300 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
                placeholder="8"
              >
            </div>
          </div>
        </div>
      </div>

      <!-- Modal Footer -->
      <div class="flex gap-3 mt-8 pt-6 border-t border-gray-200">
        <button 
          type="button" 
          id="cancelMatchStatsBtn"
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

// Storage keys
const MATCH_STORAGE_KEY = 'matchHistory';
const MATCH_STATS_STORAGE_KEY = 'matchStatistics';

// Load matches from localStorage
function loadMatches() {
  const stored = localStorage.getItem(MATCH_STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
}

// Save matches to localStorage
function saveMatches(matches) {
  localStorage.setItem(MATCH_STORAGE_KEY, JSON.stringify(matches));
}

// Load match stats from localStorage
function loadMatchStats() {
  const stored = localStorage.getItem(MATCH_STATS_STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
}

// Save match stats to localStorage
function saveMatchStats(stats) {
  localStorage.setItem(MATCH_STATS_STORAGE_KEY, JSON.stringify(stats));
}

// Download match data as JSON
function downloadMatchJSON() {
  const matches = loadMatches();
  const dataStr = JSON.stringify(matches, null, 2);
  const dataBlob = new Blob([dataStr], { type: 'application/json' });
  const url = URL.createObjectURL(dataBlob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `match-history-${new Date().toISOString().split('T')[0]}.json`;
  link.click();
  URL.revokeObjectURL(url);
}

// Download match stats as JSON
function downloadMatchStatsJSON() {
  const stats = loadMatchStats();
  const dataStr = JSON.stringify(stats, null, 2);
  const dataBlob = new Blob([dataStr], { type: 'application/json' });
  const url = URL.createObjectURL(dataBlob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `match-statistics-${new Date().toISOString().split('T')[0]}.json`;
  link.click();
  URL.revokeObjectURL(url);
}

// Initialize match modals
document.addEventListener('DOMContentLoaded', function() {
  // Add modals HTML to body
  document.body.insertAdjacentHTML('beforeend', matchModalHTML);
  document.body.insertAdjacentHTML('beforeend', matchStatsModalHTML);

  // Get elements - Match History Modal
  const matchModal = document.getElementById('matchModal');
  const openMatchModalBtns = document.querySelectorAll('.bg-white.rounded-2xl .bg-gradient-to-r.from-red-500');
  const closeMatchModalBtn = document.getElementById('closeMatchModal');
  const cancelMatchBtn = document.getElementById('cancelMatchBtn');
  const addMatchForm = document.getElementById('addMatchForm');

  // Get elements - Match Stats Modal
  const matchStatsModal = document.getElementById('matchStatsModal');
  const closeMatchStatsModalBtn = document.getElementById('closeMatchStatsModal');
  const cancelMatchStatsBtn = document.getElementById('cancelMatchStatsBtn');
  const addMatchStatsForm = document.getElementById('addMatchStatsForm');

  // Load existing data
  loadMatchesToUI();
  loadMatchStatsToUI();

  // Open Match History modal (first button in the section)
  if (openMatchModalBtns[0]) {
    openMatchModalBtns[0].addEventListener('click', function() {
      matchModal.classList.remove('hidden');
      matchModal.classList.add('flex');
      document.body.style.overflow = 'hidden';
    });
  }

  // Open Match Stats modal (second button in the section)
  if (openMatchModalBtns[1]) {
    openMatchModalBtns[1].addEventListener('click', function() {
      matchStatsModal.classList.remove('hidden');
      matchStatsModal.classList.add('flex');
      document.body.style.overflow = 'hidden';
    });
  }

  // Close Match History modal
  function closeMatchModal() {
    matchModal.classList.add('hidden');
    matchModal.classList.remove('flex');
    document.body.style.overflow = 'auto';
    addMatchForm.reset();
  }

  closeMatchModalBtn?.addEventListener('click', closeMatchModal);
  cancelMatchBtn?.addEventListener('click', closeMatchModal);

  matchModal?.addEventListener('click', function(e) {
    if (e.target === matchModal) closeMatchModal();
  });

  // Close Match Stats modal
  function closeMatchStatsModal() {
    matchStatsModal.classList.add('hidden');
    matchStatsModal.classList.remove('flex');
    document.body.style.overflow = 'auto';
    addMatchStatsForm.reset();
  }

  closeMatchStatsModalBtn?.addEventListener('click', closeMatchStatsModal);
  cancelMatchStatsBtn?.addEventListener('click', closeMatchStatsModal);

  matchStatsModal?.addEventListener('click', function(e) {
    if (e.target === matchStatsModal) closeMatchStatsModal();
  });

  // Close with ESC key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      if (!matchModal.classList.contains('hidden')) closeMatchModal();
      if (!matchStatsModal.classList.contains('hidden')) closeMatchStatsModal();
    }
  });

  // Handle Match form submission
  addMatchForm?.addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = new FormData(addMatchForm);
    const ourScore = parseInt(formData.get('ourScore'));
    const opponentScore = parseInt(formData.get('opponentScore'));
    const result = ourScore > opponentScore ? 'WIN' : 'LOSS';

    const matchData = {
      id: Date.now(),
      opponent: formData.get('opponent'),
      matchType: formData.get('matchType'),
      matchDate: formData.get('matchDate'),
      ourScore: ourScore,
      opponentScore: opponentScore,
      result: result
    };

    const matches = loadMatches();
    matches.unshift(matchData); // Add to beginning
    saveMatches(matches);

    console.log('New Match:', matchData);
    loadMatchesToUI();
    alert(`Pertandingan vs ${matchData.opponent} berhasil ditambahkan!`);
    closeMatchModal();
  });

  // Handle Match Stats form submission
  addMatchStatsForm?.addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = new FormData(addMatchStatsForm);
    const statsData = {
      id: Date.now(),
      topScorer: {
        name: formData.get('topScorerName'),
        points: parseInt(formData.get('topScorerPoints'))
      },
      assistLeader: {
        name: formData.get('assistLeaderName'),
        assists: parseInt(formData.get('assistLeaderAssists'))
      },
      defenseLeader: {
        name: formData.get('defenseLeaderName'),
        blocks: parseInt(formData.get('defenseLeaderBlocks'))
      }
    };

    const stats = loadMatchStats();
    stats.unshift(statsData); // Add to beginning
    saveMatchStats(stats);

    console.log('New Match Stats:', statsData);
    loadMatchStatsToUI();
    alert('Statistik pertandingan berhasil ditambahkan!');
    closeMatchStatsModal();
  });
});

// Load matches to UI
function loadMatchesToUI() {
  const matches = loadMatches();
  const container = document.querySelector('.mt-6.space-y-3');
  
  if (!container) return;
  
  container.innerHTML = '';
  
  // Show only latest 3 matches
  matches.slice(0, 3).forEach(match => {
    addMatchToUI(match, container);
  });
}

// Add single match to UI
function addMatchToUI(match, container) {
  const isWin = match.result === 'WIN';
  const date = new Date(match.matchDate).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' });
  
  const matchCard = `
    <div class="bg-gradient-to-r from-${isWin ? 'green' : 'red'}-50 to-${isWin ? 'green' : 'red'}-100 border-l-4 border-${isWin ? 'green' : 'red'}-500 rounded-lg p-4 hover:shadow-md transition-shadow">
      <div class="flex justify-between items-center">
        <div>
          <p class="font-semibold text-gray-800">Spiritz vs ${match.opponent}</p>
          <p class="text-sm text-gray-600">${match.matchType} • ${date}</p>
        </div>
        <div class="text-right">
          <p class="text-2xl font-bold text-${isWin ? 'green' : 'red'}-600">${match.ourScore}-${match.opponentScore}</p>
          <span class="text-xs bg-${isWin ? 'green' : 'red'}-500 text-white px-2 py-1 rounded-full font-semibold">${match.result}</span>
        </div>
      </div>
    </div>
  `;
  
  container.insertAdjacentHTML('beforeend', matchCard);
}

// Load match stats to UI
function loadMatchStatsToUI() {
  const stats = loadMatchStats();
  
  if (stats.length === 0) return;
  
  const latestStats = stats[0]; // Get latest stats
  
  // Update Top Scorer
  const topScorerName = document.querySelector('.from-yellow-50 .text-orange-600');
  const topScorerPoints = document.querySelector('.from-yellow-50 .text-3xl');
  if (topScorerName) topScorerName.textContent = latestStats.topScorer.name;
  if (topScorerPoints) topScorerPoints.textContent = latestStats.topScorer.points;
  
  // Update Assist Leader
  const assistLeaderName = document.querySelector('.from-blue-50 .text-indigo-600');
  const assistLeaderAssists = document.querySelector('.from-blue-50 .text-3xl');
  if (assistLeaderName) assistLeaderName.textContent = latestStats.assistLeader.name;
  if (assistLeaderAssists) assistLeaderAssists.textContent = latestStats.assistLeader.assists;
  
  // Update Defense Leader
  const defenseLeaderName = document.querySelector('.from-purple-50 .text-purple-600');
  const defenseLeaderBlocks = document.querySelector('.from-purple-50 .text-3xl');
  if (defenseLeaderName) defenseLeaderName.textContent = latestStats.defenseLeader.name;
  if (defenseLeaderBlocks) defenseLeaderBlocks.textContent = latestStats.defenseLeader.blocks;
}

// Make functions global
window.downloadMatchJSON = downloadMatchJSON;
window.downloadMatchStatsJSON = downloadMatchStatsJSON;