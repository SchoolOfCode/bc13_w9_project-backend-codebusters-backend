import query  from "../db/index.js";

async function getSpanishDefinitions() {
  {
    const allSpanishObject = await query("SELECT * FROM spanishDefinitions");
    return allSpanishObject.rows;
  } 
}


async function getSpanishDefinitionByTitle(title) {

    const allSpanishObject = await query("SELECT * FROM spanishDefinitions WHERE title ILIKE $1 ",[title]);
    return allSpanishObject.rows;
  
}


async function updateSpanishDefinition(id, title, definition, example, links, week){
    {
        const updateSpanishObject = await query(
        "UPDATE spanishDefinitions SET title = $2, definition = $3, example = $4, links = $5, week = $6 WHERE id = $1 RETURNING *;",
        [id, title, definition, example, links, week]
        );
        return updateSpanishObject.rows;
    } 
    }


async function createSpanishDefinition(title, definition, example, links, week) {
    {
        const createSpanishObject = await query(
        "INSERT INTO spanishDefinitions (title, definition, example, links, week) VALUES ($1, $2, $3, $4, $5) RETURNING *;",
        [title, definition, example, links, week]
        );
        return createSpanishObject.rows;
    } 

    }


async function deleteSpanishDefinition(id) {
  {
    const deleteSpanishObject = await query(
      "DELETE FROM spanishDefinitions WHERE id = $1 RETURNING *;",
      [id]
    );
    return deleteSpanishObject.rows;
  } 

}


export {
    getSpanishDefinitions,
    getSpanishDefinitionByTitle,
    updateSpanishDefinition,
    createSpanishDefinition,
    deleteSpanishDefinition
}
