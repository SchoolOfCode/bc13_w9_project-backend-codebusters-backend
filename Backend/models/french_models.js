import query  from "../db/index.js";

async function getFrenchDefinitions() {
  {
    const allFrenchObject = await query("SELECT * FROM frenchDefinitions");
    return allFrenchObject.rows;
  } 
}


async function getFrenchDefinitionByTitle(title) {

    const allFrenchObject = await query("SELECT * FROM frenchDefinitions WHERE title ILIKE '%'||$1||'%' ",[title]);
    return allFrenchObject.rows;
  
}


async function updateFrenchDefinition(id, title, definition, example, links, week){
    {
        const updateFrenchObject = await query(
        "UPDATE frenchDefinitions SET title = $2, definition = $3, example = $4, links = $5, week = $6 WHERE id = $1 RETURNING *;",
        [id, title, definition, example, links, week]
        );
        return updateFrenchObject.rows;
    } 
    }


async function createFrenchDefinition(title, definition, example, links, week) {
    {
        const createFrenchObject = await query(
        "INSERT INTO frenchDefinitions (title, definition, example, links, week) VALUES ($1, $2, $3, $4, $5) RETURNING *;",
        [title, definition, example, links, week]
        );
        return createFrenchObject.rows;
    } 

    }


async function deleteFrenchDefinition(id) {
  {
    const deleteFrenchObject = await query(
      "DELETE FROM frenchDefinitions WHERE id = $1 RETURNING *;",
      [id]
    );
    return deleteFrenchObject.rows;
  } 

}


export {
    getFrenchDefinitions,
    getFrenchDefinitionByTitle,
    updateFrenchDefinition,
    createFrenchDefinition,
    deleteFrenchDefinition
}
