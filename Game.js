class Game {
    constructor(){

    }
    getState(){
        var gameStateRef  = database.ref('gameState');
        gameStateRef.on("value",function(data){
           gameState = data.val();
        })
    
    }
    
    update(state){
        database.ref('/').update({
            gameState: state
        });
    }

    async start(){
        if(gameState === 0){
          player = new Player();
          var playerCountRef = await database.ref('playerCount').once("value");
          if(playerCountRef.exists()){
            playerCount = playerCountRef.val();
            player.getCount();
          }
          form = new Form()
          form.display();
        }

     
      allVotes = [player1Vote,player2Vote,player3Vote];
    
      }

      play(){
        form.hide();
        Player.getPlayerInfo();
        if(allPlayers!== undefined){
          background(backgroundImage);

         var index = 0;
         var display_position = 130;
         var x = displayWidth/2-70;
         var y  = displayHeight/4;
  
        for(var plr in allPlayers){
          //add 1 to the index for every loop
          index = index + 1 ;

          display_position+=20;

        
         if(index!== player.index){
         fill("red");
         text(allPlayers[plr].name,x,y);
         y +=70;
         }
         
          if (index === player.index){
              if(allPlayers[plr].character==="detective"){
                image(detectiveLogo,displayWidth-400,30,400,400);
              }

              else if(allPlayers[plr].character==="nurse"){
                  image(nurseLogo,displayWidth-400,30,400,400);
               }

              else if(allPlayers[plr].character==="civilian"){
                image(civilianLogo,displayWidth-400,30,400,400);
              }

             else  if(allPlayers[plr].character==="killer"){
                image(killerLogo,displayWidth-400,30,400,400);
              }

             // form.displayVotes();
          
          }
         
          
          text(allPlayers[plr].name + ": " + allPlayers[plr].character, 120,display_position)
        }
  
      }
      drawSprites();

      }
}