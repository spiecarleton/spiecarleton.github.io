document.addEventListener("DOMContentLoaded", () => {
    fetch('/website_data/events.json').then(response => {
        response.json().then(jsonObj => {
            let recurringEvents = jsonObj.recurringEvents;
            let events = jsonObj.events;
            let i = 0;
            recurringEvents.forEach(event => {
                const eventId = `reoccuring-event-${i++}`;

                const sidebarList = document.getElementsByClassName('menu')[0];

                sidebarList.appendChild(getSidebarTitleElement(eventId, event.sidebarTitle));

                const container = document.createElement('div');
                container.className = 'main-content-item';

                const jumpAnchor = document.createElement('a');
                jumpAnchor.id = eventId;
                jumpAnchor.className = 'anchor';
                container.appendChild(jumpAnchor);

                const title = document.createElement('h2');
                title.textContent = event.title;
                container.appendChild(title);

                const timedate = document.createElement('h3');
                timedate.textContent = "Temporal location: ";
                const timedateSpan = document.createElement('span');
                timedateSpan.textContent = `${event.time} on ${event.weekday}`;
                timedate.appendChild(timedateSpan);
                container.appendChild(timedate);

                const location = document.createElement('h3');
                location.textContent = "Spatial location: ";
                const locationSpan = document.createElement('span');
                locationSpan.textContent = event.location;
                location.appendChild(locationSpan);
                container.appendChild(location);

                const eventDates = document.createElement('h3');
                eventDates.textContent = "Event dates: ";
                container.appendChild(eventDates);

                const dateList = document.createElement('ul');
                event.dates.forEach(date => {
                    const listItem = document.createElement('li');
                    listItem.textContent = date;
                    dateList.appendChild(listItem);
                });

                container.appendChild(dateList);
                event.descriptionParagraphs.forEach(paragraphText => {
                    const paragraph = document.createElement('p');
                    paragraph.className = 'description';
                    paragraph.textContent = paragraphText;
                    container.appendChild(paragraph);
                });

                document.getElementsByClassName('main-content-container')[0].appendChild(container);
            });

            i = 0;
            events.forEach(event => {

                const eventId = `event-${i++}`;

                const sidebarList = document.getElementsByClassName('menu')[0];

                sidebarList.appendChild(getSidebarTitleElement(eventId, event.sidebarTitle));

                const container = document.createElement('div');
                container.className = 'main-content-item';

                const jumpAnchor = document.createElement('a');
                jumpAnchor.id = eventId;
                jumpAnchor.className = 'anchor';
                container.appendChild(jumpAnchor);
                const title = document.createElement('h2');
                title.textContent = event.title;
                container.appendChild(title);
                const date = document.createElement('h3');
                date.textContent = "Date: ";
                const dateSpan = document.createElement('span');
                dateSpan.textContent = event.date;
                date.appendChild(dateSpan);
                container.appendChild(date);
                const time = document.createElement('h3');
                time.textContent = "Time: ";
                const timeSpan = document.createElement('span');
                timeSpan.textContent = event.time;
                time.appendChild(timeSpan);
                container.appendChild(time);
                const location = document.createElement('h3');
                location.textContent = "Location: ";
                const locationSpan = document.createElement('span');
                locationSpan.textContent = event.location;
                location.appendChild(locationSpan);
                container.appendChild(location);
                event.descriptionParagraphs.forEach(paragraphText => {
                    const paragraph = document.createElement('p');
                    paragraph.className = 'description';
                    paragraph.textContent = paragraphText;
                    container.appendChild(paragraph);
                });

                document.getElementsByClassName('main-content-container')[0].appendChild(container);
            });
        });
    }).catch(err => console.error(err));
});

function getSidebarTitleElement(eventId, eventTitle) {
    const listElement = document.createElement('li');
    const img = document.createElement('img');
    img.src = '/images/arrow-narrow-right.svg';
    img.className = 'menu-img';
    listElement.appendChild(img);
    const link = document.createElement('a');
    link.href = `#${eventId}`;
    link.textContent = eventTitle;
    link.className = 'menu-item-link';
    listElement.appendChild(link);
    return listElement;
}