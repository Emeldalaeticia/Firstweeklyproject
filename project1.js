const eventOrganizers = new WeakMap();

const calendarEvent = [
  {
    title: "Linet's Birthday",
    date : new Date("2023-04-14"),
    location: "Nabo bistro",
    attendees : new Set(["Donna, JJ, Kiseke, Joy, Mum, Mich, Abu, Bish, Jackie"])
  },


  {
    title: "Business Meeting",
    date : new Date("2023-04-17"),
      location : "Shake Business park",
      attendees : new Set([" Martin, Laeticia, Loise, Chelsea "])
  },

  {
      title: "Family Fun Day",
      date: new Date("2023-04-28"),
        location : "Crazy Koroga",
        attendees : new Set([" Bish, Jackie, Celle, Florence, Mary"])
  }

];

console.log(calendarEvent); 

// filter & Map 
const next7Days= new Date("2023-04-13"); next7Days.setDate(next7Days.getDate()+7);
const upcomingevents = calendarEvent.filter( event => event.date <= next7Days)
.map(({title, date, location}) => ({title, date, location}));

console.log(upcomingevents); 

// WeakMap

//eventOrganizers.set(calendarEvent[0].title,"JJ");
//eventOrganizers.set(calendarEvent[1].title,"Laeticia");
//eventOrganizers.set(calendarEvent.title[2],"Florence");

const title = {};
eventOrganizers.set(calendarEvent[0],"Kiseke");
eventOrganizers.set(calendarEvent[1],"Laeticia");
eventOrganizers.set(calendarEvent[2],"Florence");

console.log(`The organizer for the Birthday event is ${eventOrganizers.get(calendarEvent[0])}`)

// Using destructuring assignment to display event properties in a table format
calendarEvent.forEach(({ title, date, location }) => {
  console.table({ title, date, location });
  });

// function to add a new attendee to an event ***
/*function addAttendee(title, attendee) {
  let event = calendarEvent.find (event  => calendarEvent.title === title);
  calendarEvent.attendees.add(attendee);
} 

console.log(`${addAttendee.get(calendarEvent[0])}`); */



// Create a function to convert the event array to a JSON string

function convertToJson(calendarEvent) {
  const formattedEvents = calendarEvent.map(event => {
  const formattedDate = (`${event.date.getMonth() + 1}, /${event.date.getDate()}, /${event.date.getFullYear()}`);
  return { ...event, formattedDate };
  });
  return JSON.stringify(formattedEvents);
  };
  
  console.log(convertToJson(calendarEvent)) 

  // Using Object.keys(), Object.values(), and Object.entries() to display event properties and values
 const firstEvent = calendarEvent[0];
console.log(Object.keys(firstEvent));
console.log(Object.values(firstEvent));
console.log(Object.entries(firstEvent)); 

// Use .forEach() to console.log title and date of each event

calendarEvent.forEach(({ title, date }) => {
  console.log(`${title} - ${date.toDateString()}`);
  }); 

  
  
  // Bonus: Implementing functionality to delete events from the array using .splice()
  
function deleteEvent(title) {
  const index = calendarEvent.findIndex(event => event.title === title);
  calendarEvent.splice(index, 1);
  } 

// Bonus: Using .reduce() to find the event with the most attendees

const eventWithMostAttendees = calendarEvent.reduce((acc, event) => {
if (event.attendees.size > acc.attendees.size) {
return event;
} else {
return acc;
}
});

console.log(`Event with most attendees: ${eventWithMostAttendees.title}`); 
  
  
