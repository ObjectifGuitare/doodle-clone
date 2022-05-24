let eventList = [];
let User = document.querySelector("select").value;
function displayEventAdder() {
    console.log("bonjour");
    let modalWindow = document.body.querySelector("#modalWindow");
    console.log(modalWindow);
    modalWindow.style.display = "block";
    document.body.querySelector("#closeModal").addEventListener("click", ()=>{
        modalWindow.style.display = "none";
    });
}
function displayAvailability() {
    console.log("has to display availability in a little philactère");
}
function deleteEvent() {
    console.log("has to delete the event");
    let modalWindow = document.createElement("div");
    modalWindow.setAttribute("class", "modalWindow");
    document.body.appendChild(modalWindow);
    modalWindow.style.display = "block";
}
function editEvent() {
    console.log("has to edit the event");
}
function displayEvents() {
    let Eventscontainer = document.body.querySelector(".EventContainer");
    // for(let elem of document.querySelectorAll(".eventElement"))
    // {
    //     elem.remove()
    // }
    let i = 0;
    for (const event of eventList){
        let eventDiv = document.createElement("div");
        let eventName = document.createElement("div");
        let eventDates = document.createElement("div");
        let eventDescription = document.createElement("div");
        eventDiv.setAttribute("class", "eventElement");
        eventDescription.setAttribute("class", "eventDescription");
        eventDates.setAttribute("class", "eventDates");
        Eventscontainer.appendChild(eventDiv);
        eventDiv.appendChild(eventName);
        eventDiv.appendChild(eventDescription);
        eventDiv.appendChild(eventDates);
        eventName.innerHTML = `${event.author}'s ${event.name}`;
        eventDescription.innerHTML = event.description;
        for (const date of event.dates){
            let br = document.createElement("br");
            let dateValue = document.createElement("p");
            let dateHolder = document.createElement("div");
            dateHolder.setAttribute("class", "dateHolder");
            let checkYes = document.createElement("input");
            let checkNo = document.createElement("input");
            let labelYes = document.createElement('label');
            let labelNo = document.createElement('label');
            checkNo.type = 'checkbox';
            checkNo.id = 'NoBox';
            checkNo.name = 'interest';
            checkNo.value = 'No';
            labelNo.htmlFor = 'No';
            checkNo.setAttribute("class", 'radio');
            checkYes.type = 'checkbox';
            checkYes.id = 'YesBox';
            checkYes.name = 'interest';
            checkYes.value = 'Yes';
            labelYes.htmlFor = 'Yes';
            checkYes.setAttribute("class", 'radio');
            dateValue.innerHTML = date.date;
            dateValue.setAttribute("class", `event${i}`);
            dateHolder.appendChild(dateValue);
            dateHolder.appendChild(br);
            labelYes.appendChild(document.createTextNode('Yes'));
            labelNo.appendChild(document.createTextNode('No'));
            eventDates.appendChild(dateHolder);
            dateHolder.appendChild(checkYes);
            dateHolder.appendChild(labelYes);
            dateHolder.appendChild(checkNo);
            dateHolder.appendChild(labelNo);
            dateValue.addEventListener("mouseover", ()=>{
                displayAvailability();
            });
        // is supposed to display a window with people who are available this day on hover
        }
        i++;
        let deleteBtn = document.createElement("div");
        let editBtn = document.createElement("div");
        let btns = document.createElement("div");
        btns.setAttribute("class", "delAndEdit");
        deleteBtn.innerHTML = "Delete";
        editBtn.innerHTML = "Edit";
        eventDiv.appendChild(btns);
        btns.appendChild(editBtn);
        btns.appendChild(deleteBtn);
        deleteBtn.addEventListener("click", deleteEvent);
        editBtn.addEventListener("click", editEvent);
    }
}
function fetchEventList() {
    fetch("http://localhost:3000/api/events/", {
        method: 'GET'
    }).then((res)=>res.json()
    ).then((obj)=>{
        eventList = obj;
        displayEvents();
    }).catch((error)=>console.log(error)
    );
}
function postEvent(newEvent) {
    fetch("http://localhost:3000/api/events/", {
        // Adding method type
        method: "POST",
        // Adding body or contents to send
        body: JSON.stringify(newEvent),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })// Converting to JSON
    .then((response)=>response.json()
    )// Displaying results to console
    .then((json)=>{
        console.log(json);
        fetchEventList();
    });
}
function addEvent() {
    // let document.querySelector("");
    let newEvent = {};
    newEvent.name = document.querySelector("#nameInput").value;
    newEvent.description = document.querySelector("#descriptionInput").value;
    newEvent.dates = [];
    for (let elem of document.querySelectorAll(".dateInput"))newEvent.dates.push(elem.value);
    newEvent.author = User;
    console.log(newEvent);
    console.log(eventList);
    postEvent(newEvent);
}
function displayAnotherDateInput() {
    let inputs = document.body.querySelectorAll(".dateInput");
    if (!inputs[inputs.length - 1].value) return;
    let container = document.querySelector(".dateInputCtn");
    let br = document.createElement("br");
    let newDate = document.createElement("input");
    newDate.type = "text";
    newDate.setAttribute("class", "dateInput");
    container.appendChild(newDate);
    container.appendChild(br);
    container.insertBefore(document.body.querySelector(".addDate"), br.nextSibling);
    newDate.style.marginBottom = "5px";
}
fetchEventList();
document.body.querySelector("select").addEventListener("change", ()=>User = document.querySelector("select").value
);
document.body.querySelector("#addEvent").addEventListener("click", displayEventAdder);
document.body.querySelector("#submitEvent").addEventListener("click", addEvent);
document.body.querySelector(".addDate").addEventListener("click", displayAnotherDateInput);

//# sourceMappingURL=index.c36f364e.js.map
