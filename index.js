let eventList = [
    {
        name: "Hard bop electro punk gig",
        dates: ["2022-07-01", "2022-09-23"],
        author: "Méga Sébastien",
        description: "akshualy it's just good music dw ^^ UwU"
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

function displayEvents()
{
    let Eventscontainer = document.body.querySelector(".EventContainer");

    for (const event of eventList) {
        let eventDiv = document.createElement("div");
        let eventName = document.createElement("div");
        let eventAuthor = document.createElement("div");
        let eventDates = document.createElement("div");
        let eventDescription = document.createElement("div");
        eventDiv.setAttribute("class", "eventElement")
        Eventscontainer.appendChild(eventDiv);
        eventDiv.appendChild(eventName);
        eventDiv.appendChild(eventAuthor);
        eventDiv.appendChild(eventDates);
        eventDiv.appendChild(eventDescription);
        eventName.innerHTML = `${event.author}'s ${event.name}`;
        eventDescription.innerHTML = event.description;
        eventDates.innerHTML = event.dates;
        // eventAuthor.innerHTML = event.author;
        
    }
}


displayEvents();
document.body.querySelector("#addEvent").addEventListener("click", displayEventAdder)