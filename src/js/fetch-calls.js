const BASE_URL = 'http://localhost:8080';

/**
 * Fetch hospital by ID
 */
export async function fetchHospital(id) {
    const res = await fetch(`${BASE_URL}/api/hospitals/${id}`);
    if (!res.ok) return null;
    return await res.json();
}

/**
 * PATCH hospital
 */
export async function updateHospital(id, name, address, date) {
    const res = await fetch(`${BASE_URL}/api/hospitals/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            hospitalName: name,
            hospitalAddress: address,
            establishedDate: date
        })
    });
    return res.ok;
}
