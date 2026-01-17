fetch('/website_data/current_year.json').then(response => {
    response.json().then(jsonObj => {
        let year = jsonObj.currentYear;
        document.getElementsByClassName("footer-message")[0].textContent = `Copyright Carleton Photonics Journal Club SPIE Chapter ${year}©`;
    });
}).catch(err => console.error(err));
