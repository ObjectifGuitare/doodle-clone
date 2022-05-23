let eventList = [
    {
        name: "Hard bop electro punk gig",
        dates: ["2022-07-01", "2022-09-23"],
        author: "Méga Sébastien",
        description: "akshualy it's just good music dw ^^ UwU"
    },
    {
        name: "je vais cuisiner mes enfants",
        dates: ["2023-07-01", "2024-09-23"],
        author: "Marc",
        description: "tendre et chaud"
    }
]


function displayEventAdder()
{
    console.log("bonjour")
    let modalWindow = document.body.querySelector("#modalWindow");
    console.log(modalWindow);
    modalWindow.style.display = "block";
    document.body.querySelector("#closeModal").addEventListener("click", () =>{modalWindow.style.display = "none"})
}

// function displayAvailability()
// {

// }

function displayEvents()
{
    let Eventscontainer = document.body.querySelector(".EventContainer");
    let i = 0;
    for (const event of eventList) {
        let eventDiv = document.createElement("div");
        let eventName = document.createElement("div");
        let eventDates = document.createElement("div");
        let eventDescription = document.createElement("div");

        eventDiv.setAttribute("class", "eventElement")
        eventDescription.setAttribute("class", "eventDescription")
        eventDates.setAttribute("class", "eventDates")

        Eventscontainer.appendChild(eventDiv);
        eventDiv.appendChild(eventName);
        eventDiv.appendChild(eventDescription);
        eventDiv.appendChild(eventDates);
        eventName.innerHTML = `${event.author}'s ${event.name}`;
        eventDescription.innerHTML = event.description;
        
        for (const date of event.dates) {
            let br = document.createElement("br")
            let dateValue = document.createElement("p")
            let dateHolder = document.createElement("div");
            dateHolder.setAttribute("class", "dateHolder")
            let checkYes = document.createElement("input");
            let checkNo = document.createElement("input");
            let labelYes = document.createElement('label');
            let labelNo = document.createElement('label');
            
            checkNo.type = 'checkbox';
            checkNo.id = 'NoBox';
            checkNo.name = 'interest';
            checkNo.value = 'No';
            labelNo.htmlFor = 'No';
            
            checkYes.type = 'checkbox';
            checkYes.id = 'YesBox';
            checkYes.name = 'interest';
            checkYes.value = 'Yes';
            labelYes.htmlFor = 'Yes';
            dateValue.innerHTML = date;
            dateValue.setAttribute("class", `event${i}`)
            dateHolder.appendChild(dateValue)
            dateHolder.appendChild(br);
            labelYes.appendChild(document.createTextNode('Yes'));
            labelNo.appendChild(document.createTextNode('No'));
            eventDates.appendChild(dateHolder);
            dateHolder.appendChild(checkYes);
            dateHolder.appendChild(labelYes)
            dateHolder.appendChild(checkNo);
            dateHolder.appendChild(labelNo)
            
            // dateValue.addEventListener("mouseover", () =>{displayAvailability(i)})
            // is supposed to display a window with people who are available this day on hover
        }
        i++;
    }
}


displayEvents();
document.body.querySelector("#addEvent").addEventListener("click", displayEventAdder)