const ContactList = {
    contacts: [
      { number: 1, name: "Ben Blocker", position: "G" },
      { number: 2, name: "Dave Defender", position: "D" },
      { number: 3, name: "Sam Sweeper", position: "D" },
      { number: 4, name: "Matt Midfielder", position: "M" },
      { number: 5, name: "William Winger", position: "M" },
      { number: 6, name: "Fillipe Forward", position: "F" }
    ],
    all: function() { return this.contacts},
    get: function(id) {
      const isLocation = C => C.number === id
      return this.contacts.find(isLocation)
    }
  }
  
  export default ContactList;