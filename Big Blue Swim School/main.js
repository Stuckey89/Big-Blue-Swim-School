const search = document.getElementById('search');
const matchList = document.getElementById('match-list');

// Search the schedule_response.json file and filter the file
const searchStudents = async searchText => {
    const res = await fetch('schedule_response.json');
    const times = await res.json();

    console.log(times);

};

search.addEventListener('input', () => searchStudents(search.value));