module.exports = (req,res) =>{
    let users = require('../../users/GET.json')
    let user = users.find(user => user.id == req.params.user_id);
   if(user){
       res.json({
           id:user.id,
           name:user.name
       })
   }else{
       res.json({
           message: 'User not found'
       })
   }

}