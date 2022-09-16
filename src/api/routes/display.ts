import express from "express";
export const displayRouter = express.Router()
import Customer from "../../db/models/customer";

displayRouter.get("/", async (req, res) => {
    let data = await Customer.findAll()
    let allNames: any = data.map(getAllNames)
    function getAllNames (name: any) {
        return name.firstName + ' ' + name.lastName
    } 
    res.send(allNames)
})