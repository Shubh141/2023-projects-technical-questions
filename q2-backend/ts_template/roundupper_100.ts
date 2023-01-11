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
        // Keep pushing entities into the space database until either all 
        // entities have been pushed or an invalid entity has been reached
        for (const entity of entities) {
            // Check if the data parsed in has the correct format
            if (checkFormat(entity)) {
                spaceDatabase.push(entity);
            } else {
                return res.sendStatus(400);   
            }
        }
        return res.sendStatus(200);
    } catch(err) {
        return res.sendStatus(400);
    } 
});

// lasooable returns all the space animals a space cowboy can lasso given their name
app.get('/lassoable', (req, res) => {
    
    
    // Check if the given cowboy exists in the database
    
    
    
})


//////////////////////////////////////////////// HELPER FUNCTIONS ////////////////////////////////////////////////

// A helper function to check if an entity is formatted correctly
function checkFormat(entity: any): boolean {
    // Return false if the entity's location type is invalid
    if (typeof entity.location.x !== 'number' || 
        typeof entity.location.y !== 'number') return false;

    if (entity.type === 'space_animal') {
        // Return false if the space animal is not a pig, cow or flying_burger
        if (!(entity.metadata.type === 'pig' ||
            entity.metadata.type === 'cow' ||
            entity.metadata.type === 'flying_burger')) {
            return false;
        } 
    } 
    else if (entity.type === 'space_cowboy') {
        // Return false if the space_cowboy's name or lassoLength type is invalid
        if (typeof entity.metadata.name !== 'string' || 
            typeof entity.metadata.lassoLength !== 'number') return false;
    } 
    else {
        // Return false if the entity is neither a space_cowboy nor a space_animal
        return false;
    }
    // If the entity passes all format checks above, return true
    return true;
}




app.listen(8080);
