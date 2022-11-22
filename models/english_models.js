import query  from "../db/index.js";

async function getEnglishDefinitions() {
  try {
    const allEnglishObject = await query("SELECT * FROM englishDefinitions");
    return allEnglishObject.rows;
  } catch (error) {
    throw error;
  }
}


async function getEnglishDefinitionByTitle(title) {
  try {
    const allEnglishObject = await query(
      "SELECT * FROM englishDefinitions WHERE title = $1",
      [title]
    );
    return allEnglishObject.rows;
  } catch (error) {
    throw error;
  }
}


async function updateEnglishDefinition(id, title, definition, example, links, week){
    try {
        const updateEnglishObject = await query(
        "UPDATE englishDefinitions SET title = $2, definition = $3, example = $4, links = $5, week = $6 WHERE id = $1 RETURNING *;",
        [id, title, definition, example, links, week]
        );
        return updateEnglishObject.rows;
    } catch (error) {
        throw error;
    }
    }


async function createEnglishDefinition(title, definition, example, links, week) {
    try {
        const createEnglishObject = await query(
        "INSERT INTO englishDefinitions (title, definition, example, links, week) VALUES ($1, $2, $3, $4, $5) RETURNING *;",
        [title, definition, example, links, week]
        );
        return createEnglishObject.rows;
    } catch (error) {   
        throw error;
    }
    }


async function deleteEnglishDefinition(id) {
  try {
    const deleteEnglishObject = await query(
      "DELETE FROM englishDefinitions WHERE id = $1 RETURNING *;",
      [id]
    );
    return deleteEnglishObject.rows;
  } catch (error) {
    throw error;
  }
}


export {
    getEnglishDefinitions,
    getEnglishDefinitionByTitle,
    updateEnglishDefinition,
    createEnglishDefinition,
    deleteEnglishDefinition
}
