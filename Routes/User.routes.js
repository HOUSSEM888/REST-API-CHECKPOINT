const express=require('express')
const User = require('../Models/user.Schema')
const router=express.Router()
const mongoose= require('mongoose')

//retourner tous les utlisateurs

router.post('/all users',async(req,res)=>{
    
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ message: 'Erreur lors de la récupération des utilisateurs', error: err });
    }
});


//Route POST pour ajouter un nouvel utilisateur

 router.post('/add-new-user',(req,res)=>{
    const{ Name,age,favoriteFoods}=req.body
    const newUser={ Name,age,favoriteFoods}
    const usertosave=new User(newUser)
    usertosave.save()
    .then(()=>res.status(200).send('user saved!'))
    .catch((err)=>console.log('err', err))

})

//Route POST pour modifier un utilisateur par ID
router.post('/users/update/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!user) {
            return res.status(404).json({ message: 'Utilisateur non trouvé' });
        }
        res.status(200).json(user);
    } catch (err) {
        res.status(400).json({ message: 'Erreur lors de la mise à jour de l\'utilisateur', error: err });
    }
});


// Route POST pour supprimer un utilisateur par ID
router.post('/users/delete/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'Utilisateur non trouvé' });
        }
        res.status(200).json({ message: 'Utilisateur supprimé avec succès' });
    } catch (err) {
        res.status(500).json({ message: 'Erreur lors de la suppression de l\'utilisateur', error: err });
    }
});
 module.exports=router
