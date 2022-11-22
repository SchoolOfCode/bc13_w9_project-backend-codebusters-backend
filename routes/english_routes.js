import express from "express";
const router = express.Router();

import {
    getEnglishDefinitions,
    getEnglishDefinitionByTitle,
    updateEnglishDefinition,
    createEnglishDefinition,
    deleteEnglishDefinition
} from "../models/english_models.js";

//const error.message = "Please try again later.";

router.get("/", async (req, res) => {
    console.log("here?")
        const allEnglishObject = await getEnglishDefinitions();
        return res.json({success:true, payload: allEnglishObject});
    
    
    // catch (error) {
    //     res.status(500).json({ error: error.message });
    // }
})


router.get("/:title", async (req, res) => {
   {
        const englishObject = await getEnglishDefinitionByTitle(req.body.title);
        return res.json({success:true, payload: englishObject});
    } 
    
    // catch (error) {
    //     res.status(500).json({ error: error.message });
    // }
})


router.post("/", async (req, res) => {
 {
        const createEnglishObject = await createEnglishDefinition(req.body.title, req.body.definition, req.body.example, req.body.links, req.body.week);
        return res.json({success:true, payload: createEnglishObject});
    } 
    // catch (error) {
    //     res.status(500).json({ error: error.message });
    // }
})


router.patch("/:id", async (req, res) => {
   {
        const updateEnglishObject = await updateEnglishDefinition(req.params.id, req.body.title, req.body.definition, req.body.example, req.body.links, req.body.week);
        return res.json({success:true, payload: updateEnglishObject});
    } 
    
    // catch (error) {
    //     res.status(500).json({ error: error.message });
    // }
})


router.delete("/:id", async (req, res) => {
   {
        const deleteEnglishObject = await deleteEnglishDefinition(req.params.id);
        return res.json({success:true, payload: deleteEnglishObject});
    } 
    
    // catch (error) {
    //     res.status(500).json({ error: error.message });
    // }
})


export default router;

