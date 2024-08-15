const User = require('../Models/user.Schema')

//retourner tous les utlisateurs

router.get('/all users',async(req,res)=>{
    
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ message: 'Erreur lors de la récupération des utilisateurs', error: err });
    }
});


//Route POST pour ajouter un nouvel utilisateur


const usersCtrl={
    addUser:async(req,res)=>{
        try{
            const{ Name,age,favoriteFoods}=req.body
              const newUser={ Name,age,favoriteFoods}
                 const usertosave=new User(newUser)
                 await usertosave.save()
                 res.status(200).json('user added successfully')
        }catch(error){
        console.log('err', err)
    }
},
}




const usersCtrl1 = {
    updateUser: async (req, res) => {
        try {
            const { Name, age, favoriteFoods } = req.body;
            
            // Ensure you await the asynchronous operation
            const result = await User.updateOne(
                { _id: req.params.id },
                {
                    $set: {
                        Name, 
                        age, 
                        favoriteFoods, 
                        updatedAt: new Date()
                    }
                }
            );  
                res.status(200).send('User updated successfully');
        
               } catch (err) {console.log('err', err)
      
        }
    }
};



// Route POST pour supprimer un utilisateur par ID
router.delete('/users/delete/:id', async (req, res) => {
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
