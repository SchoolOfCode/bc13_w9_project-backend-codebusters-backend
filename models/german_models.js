import query  from "../db/index.js";

async function getGermanDefinitions() {
  {
    const allGermanObject = await query("SELECT * FROM germanDefinitions");
    return allGermanObject.rows;
  } 
}


async function getGermanDefinitionByTitle(title) {

    const allGermanObject = await query("SELECT * FROM germanDefinitions WHERE title ILIKE '%'||$1||'%'",[title]);
    return allGermanObject.rows;
  
}

async function getGermanDefinitionByEnglishTitle(englishtitle) {

  const allGermanObject = await query("SELECT * FROM germanDefinitions WHERE englishtitle ILIKE '%'||$1||'%'",[englishtitle]);
  return allGermanObject.rows;

}


async function updateGermanDefinition(id, title, definition, example, links, week){
    {
        const updateGermanObject = await query(
        "UPDATE germanDefinitions SET title = $2, definition = $3, example = $4, links = $5, week = $6 WHERE id = $1 RETURNING *;",
        [id, title, definition, example, links, week]
        );
        return updateGermanObject.rows;
    } 
    }


async function createGermanDefinition(title, definition, example, links, week) {
    {
        const createGermanObject = await query(
        "INSERT INTO germanDefinitions (title, definition, example, links, week) VALUES ($1, $2, $3, $4, $5) RETURNING *;",
        [title, definition, example, links, week]
        );
        return createGermanObject.rows;
    } 

    }


async function deleteGermanDefinition(id) {
  {
    const deleteGermanObject = await query(
      "DELETE FROM germanDefinitions WHERE id = $1 RETURNING *;",
      [id]
    );
    return deleteGermanObject.rows;
  } 

}


export {
    getGermanDefinitions,
    getGermanDefinitionByTitle,
    updateGermanDefinition,
    createGermanDefinition,
    deleteGermanDefinition,
    getGermanDefinitionByEnglishTitle
}
