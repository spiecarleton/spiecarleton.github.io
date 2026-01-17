document.addEventListener("DOMContentLoaded", () => {
    fetch('/website_data/executives.json').then(response => {
        response.json().then(jsonObj => {
            const execsContainer = document.getElementsByClassName('exec-profile-container')[0];
            const executives = jsonObj.executives;
            document.getElementById('exec-year').textContent = jsonObj.forYears;
            executives.forEach(executive => {
                const container = document.createElement('div');
                container.className = 'exec-profile';
                const img = document.createElement('img');
                img.className = 'exec-profile-img';
                img.src = `/images/profile_photos/${executive.photoFilename}`;
                img.alt = `${executive.name} Photo`;
                img.onerror = () => {
                    img.onerror = null;
                    img.src = '/images/profile_photos/blank_profile.jpg';
                }
                const name = document.createElement('p');
                name.textContent = executive.name;
                name.className = 'exec-name';
                const degree = document.createElement('p');
                degree.textContent = `Pursuing ${executive.degree}`;
                degree.className = 'exec-degree';
                const title = document.createElement('p');
                title.textContent = executive.role;
                title.className = 'exec-role';
                container.appendChild(img);
                container.appendChild(name);
                container.appendChild(degree);
                container.appendChild(title);
                execsContainer.appendChild(container);
            });
        });
    }).catch(err => console.error(err));

    fetch('/website_data/members.json').then(response => {
        response.json().then(jsonObj => {
            const membersList = document.getElementById('members-list');
            const members = jsonObj.members;
            members.forEach(executive => {
                const listElement = document.createElement('li');
                listElement.textContent = `${executive.name}, ${executive.degree}`;
                membersList.appendChild(listElement);
            });
        });
    }).catch(err => console.error(err));

    fetch('/website_data/who-we-are.json').then(response => {
        response.json().then(jsonObj => {
            const descriptionElement = document.getElementById('who-we-are');
            descriptionElement.textContent = jsonObj.whoWeAre;
        });
    }).catch(err => console.error(err));
});


