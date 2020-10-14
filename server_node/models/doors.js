class doorsClass{
  constructor(){
    this.doors = [
      {
        name: "Cuarto 1",
        id: 1,
        state: 0,
      },
      {
        name: "Cuarto 2",
        id: 2,
        state: 0,
      },
      {
        name: "Front",
        id: 3,
        state: 0,
      },
      {
        name: "Back",
        id: 4,
        state: 0,
      },
    ];

  }
    
    updateDoor = (id, state) => {
        doorToUpdate = this.doors.filter(door => door.id === id);
        doorToUpdate.state = state;
    }

    readDoor = (id) => {
        return this.doors.filter(door => door.id === id)
    }

    readAllDoors = () => {
        return this.doors.map(
            door => {
                return {
                    name: door.name,
                    state: door.state
                }
            }
        )
    }
}

const doors = new doorsClass();
module.exports = doors;