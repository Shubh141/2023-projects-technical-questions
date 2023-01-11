import express from 'express';

// location is the simple (x, y) coordinates of an entity within the system
// spaceCowboy models a cowboy in our super amazing system
// spaceAnimal models a single animal in our amazing system
type location = { x: number, y: number };
type spaceCowboy = { name: string, lassoLength: number };
type spaceAnimal = { type: "pig" | "cow" | "flying_burger" };

// spaceEntity models an entity in the super amazing (ROUND UPPER 100) system
type spaceEntity =
    | { type: "space_cowboy", metadata: spaceCowboy, location: location }
    | { type: "space_animal", metadata: spaceAnimal, location: location };


// === ADD YOUR CODE BELOW :D ===

// === ExpressJS setup + Server setup ===
const spaceDatabase = [] as spaceEntity[];
const app = express();

// the POST /entity endpoint adds an entity to your global space database
app.post('/entity', (req, res) => {
    try {
        const { entities } = req.body;
        for (const entity of entities) {
            // Check if the data parsed in has the correct format
            if (checkFormat(entity)) {
                
            }
            
        }
        
        
        
        return res.sendStatus(200);
    } catch(err) {
        return res.sendStatus(400);
    }
    
    
    
});

// lasooable returns all the space animals a space cowboy can lasso given their name
app.get('/lassoable', (req, res) => {
    // TODO: fill me in
})


//////////////////////////////////////////////// HELPER FUNCTIONS ////////////////////////////////////////////////

// A helper function to check if an entity is formatted correctly
function checkFormat(entity: any): boolean {
    // Return false if the entity's location type is invalid
    if (typeof entity.location.x !== 'number' || entity.location.y.type !== 'number') return false;
    
    if (entity.type === "space_animal") {
        // Return true if the entity metadata type is valid
        switch (entity.metadata.type) {
            case "pig":
            case "cow":
            case "flying_burger:
                return true;
        }
      
    } else if (entity.type === "space_cowboy") {
        
        
        
        
    }
    // If the entity is neither a space_cowboy nor a space_animal
    return false;
}



app.listen(8080);
