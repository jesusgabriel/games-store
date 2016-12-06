const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/games-store');

const GameSchema = new mongoose.Schema({
  name: String,
  genre: String,
  year: String,
  imageUrls: [String],
  description: String,
  minimumRequirements: {},
  recommendedRequiremens: {},
  price: String,
  hdspace: String,
});


const Game = mongoose.model('Game', GameSchema);

function getAllGames(req, res){
  Game.find()
  .then(function(games){
    res.json(games)
  })
  .catch(err=>res.sendStatus(500));
}

function createNewGame(req, res){
  var g = newGame(req.body);
  g.save()
  then(result=>res.json(result))
  .catch(err=>{
    console.log(err.toString());
    res.sendStatus(500);
  });
}
function updateGame(req, res){
  let gameId = req.params.id;
  Game.findByIdAndUpdate(gameId, req.body)
  .then(result=>res.json(result))
  .catch(err=>{
    console.log(err.toString());
    res.sendStatus(500);
  });
}

function deleteGame(req, res){
  let gameId = req.params.id;
  Game.findByIdAndRemove(gameId)
  .then(result=>res.json(result))
  .catch(err=>{
    console.log(err.toString());
    res.sendStatus(500);
  });

}


module.exports = {
  getAll: getAllGames,
  newGame: createNewGame,
  updateGame:updateGame,
  delete: deleteGame

};
