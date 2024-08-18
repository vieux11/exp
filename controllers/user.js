const User = require("../models/user");
exports.creeUser=(req, res)=>{
  const user1 = new User({
    nom: "nqnqq",
    prenom: "kundji",
  });
  console.log(user1);
  
user1.save()
.then((d)=>res.json(d)
)
}
exports.createUser = async (req, res, next) => {
  const { nomBody, prenomBody } = req.body;
  try {
      const user = await User.create({
      nom: nomBody,
      prenom: prenomBody,
    });
    return res.status(201).json({ msg: "creation reussie", data: user });
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
};
exports.afficherUser = async (req, res) => {
  try {
    const listUSer = await User.find();
    if (listUSer.length < 1) return res.status(404).send("aucun utilisateur");
    else return res.status(200).json({ msg: "reussie", data: listUSer });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ erreur: error });
  }
};
exports.getOneUser = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.idUser });
    if (!user) return res.status(404).send("aucun utilisateur");
    else return res.status(200).json({ msg: "reussie", data: user });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ erreur: error });
  }
};
exports.updateUser = (req, res) => {
  const { nom, prenom } = req.body;
  User.updateOne(
    { _id: req.params.idUser },
    {
      nom,
      prenom,
    }
  )
    .then((response) => {
        if(response.modifiedCount === 1)   return res.status(200).json({msg:'modfif reussie'});
        return res.status(404).send('rien a modifier')
    
    })}
    exports.deleteUser = (req, res) => {
        User.deleteOne(
          { _id: req.params.idUser }
         
        )
          .then((response) => {
              if(response.deletedCount === 1)   return res.status(200).json({msg:'suppression reussie'});
            return res.status(404).send('rien a supprimer')
          
          })

    .catch((error) => {
      console.log(error);
      return res.status(500).json({ erreur: error });
    });
};
