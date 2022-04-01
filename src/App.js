import './App.css';
import ContactCard from './ContactCard';

function App() {

  const contacts = [
    {
      name: "Chaitra", 
      email: "chaitra@gmail.com",
      location: "Gulbarga",
      age: 26
    },
    {
      name: "Bhagya",
      email: "bhagya@gmail.com",
      location: "Bijapur",
      age: "28"
    },
    {
      name: "Prabha",
      email: "prabha@gmail.com",
      location: "Bijapur",
      age: "50"
    }
  ]

  return (
    <div>
      {contacts.map((contact, index) => {
        return (
          <ContactCard key={index}
            name={contact.name}
            email={contact.email}
            location={contact.location}
            age={contact.age}
          />
        )
      })}
     
    </div>
  );
}

export default App;
