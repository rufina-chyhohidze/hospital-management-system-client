import { fetchHospital, updateHospital } from './fetch-calls.js';

const idInput = document.getElementById('hospital-id');
const loadBtn = document.getElementById('load-button');
const nameInput = document.getElementById('hospital-name');
const addressInput = document.getElementById('hospital-address');
const dateInput = document.getElementById('hospital-date');
const updateBtn = document.getElementById('update-button');

loadBtn.addEventListener('click', async () => {
    const hospital = await fetchHospital(idInput.value);
    if (!hospital) {
        alert('Hospital not found.');
        return;
    }

    nameInput.value = hospital.hospitalName;
    addressInput.value = hospital.hospitalAddress;
    dateInput.value = hospital.establishedDate;
    updateBtn.disabled = false;
});

updateBtn.addEventListener('click', async () => {
    const success = await updateHospital(
        idInput.value,
        nameInput.value,
        addressInput.value,
        dateInput.value
    );

    if (success) {
        updateBtn.disabled = true;
        alert('Update successful');
    } else {
        alert('Update failed');
    }
});
