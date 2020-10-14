
class lightsClass {
    constructor(){
        this.lights = [
            {
              name: "Cuarto 1",
              state: 0,
              id: 1
            },
            {
              name: "Cuarto 2",
              state: 0,
              id: 2
            },
            {
              name: "Comedor",
              state: 0,
              id: 3
            },
        
            {
              name: "Cocina",
              state: 0,
              id: 4
            },
        
            {
              name: "Sala",
              state: 0,
              id: 5
            },
          ];
    }
    
    updateLight= (id, state) => {
      
        this.lights.map(light => {
          if (light.id === id){
            light.state = state
          }
          return light
        });

    }

    readLight = (id) => {
        return this.lights.filter(light => light.id === id)
    }

    readAllLights = () => {
        let l = this.lights.map( (light) => {
                
          return {
                    name: light.name,
                    state: light.state
                }
            }

        )
        return l;
    }

    turnAllOff = () => {
      for (let i = 1; i < 6; i++){
        this.updateLight(i, 0)
      }
    }

    turnAllOn = () => {
      for (let i = 1; i < 6; i++){
        this.updateLight(i, 1)
      }
    }

    
}

const lights = new lightsClass();

module.exports = lights;