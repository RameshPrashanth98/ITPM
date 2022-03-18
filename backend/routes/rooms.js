const express = require("express");
const router = express.Router();

const Rooms = require("../models/rooms") 


//Get all room details
router.get("/getallrooms",async(req,res)=>{
    try {
        const rooms = await Rooms.find({})
        res.send(rooms)
    } catch (error) {
        return res.status(400).json({message: error});
    }
});

//Add new room to the system
/*router.post("/addnewroom",async(req,res)=>{

    try {
        const newroom = new Rooms(req.body)
        await newroom.save()

        res.send('New room sucesfully added to the system')
    } catch (error) {
        return res.status(400).json({error});
    }
})*/

 //Update room details
 /*router.route("/update/:id").put(async(req,res)=>{
  let roomID = req.params.id;  //get unique user id from data base

    const updateroom = new Rooms(req.body);

    const update = await Rooms.findByIdAndUpdate(roomID,updateroom ).then(()=>{
        res.status(200).send({status: "room details are updated"});
    }).catch((e)=>{
     //console.log.(err.message);
        console.log(e);
        res.status(500).send({status:"Error in updating room datails"})
    })

    

})*/


   //Delete room details from database
   router.route("/delete/:id").delete(async(req,res)=>{
        
    let roomID = req.params.id;

    await Rooms.findByIdAndDelete(roomID).then(()=>{
        res.status(200).send({status: "room deleted from database"});
    }).catch((e)=>{
        console.log(e);
           res.status(500).send({status:"Error in deleting room datails"})
    })

})

//Test room route
router.route("/test").get((req,res)=>{
    res.json("Room function working");
});


module.exports = router;