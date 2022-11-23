import query  from "../db/index.js";
import { getEnglishDefinitionByTitle } from "./english_models.js";

async function getSpanishDefinitions() {
  {
    const allSpanishObject = await query("SELECT * FROM spanishDefinitions");
    return allSpanishObject.rows;
  } 
}


async function getSpanishDefinitionByEnglishTitle(englishtitle) {

    const allSpanishObject = await query("SELECT * FROM spanishDefinitions WHERE englishtitle ILIKE '%'||$1||'%'",[englishtitle]);
    return allSpanishObject.rows;
  
}

async function getSpanishDefinitionByTitle(title) {

    const allSpanishObject = await query("SELECT * FROM spanishDefinitions WHERE title ILIKE '%'||$1||'%'",[title]);
    return allSpanishObject.rows;
  
}


async function updateSpanishDefinition(id, englishTitle, title, definition, example, links, week){
    {
        const updateSpanishObject = await query(
        "UPDATE spanishDefinitions SET englishTitle = $2, title = $3, definition = $4, example = $5, links = $6, week = $7 WHERE id = $1 RETURNING *;",
        [id, title, definition, example, links, week]
        );
        return updateSpanishObject.rows;
    } 
    }


async function createSpanishDefinition(englishTitle, title, definition, example, links, week) {
    {
        const createSpanishObject = await query(
        "INSERT INTO spanishDefinitions (englishTitle, title, definition, example, links, week) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;",
        [englishTitle, title, definition, example, links, week]
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
    getSpanishDefinitionByEnglishTitle,
    getSpanishDefinitionByTitle,
    updateSpanishDefinition,
    createSpanishDefinition,
    deleteSpanishDefinition
}
