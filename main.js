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
