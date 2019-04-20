$(document).ready(function() {
  

  var bet;
  var win;
  var winpct;
  var tokenrwd;
  var tokenrefbonus;
  var wagerrefbonus;
  $("#submit").click(function(){
  bet = $("#initialbet").val() ;
  win = $("#winamount").val();
 winpct= $("#winpercentage").val()/100;
 tokenrwd= $("#tokensperbet").val();
 tokenrefbonus= $("#tokenref").val()/100;
 wagerrefbonus= $("#wagerref").val()/100;
    if (bet <= 0) {
      alert("Bet must be greater than 0");
    }
    if (win < bet && win !== undefined){
      alert("Win amount should be higher than bet");
    }
   if (winpct*100 <= 0 || winpct*100 >= 100) {
     alert("Win % should be between 0 and 100");;
   }
      if (tokenrwd <= 0) {
      alert("Token reward should be greater than 0");
    }
    var betprofit = win - bet;
    var cost = (1-winpct)* 1000000 * bet - (winpct * 1000000 * betprofit) - (1000000 * 100 * wagerrefbonus);
    var tokensMined = (tokenrwd * 1000000)* (1+ tokenrefbonus);
    var costPerToken = cost/tokensMined;

    

  $("#sub5").html("Total cost per token: "+ costPerToken.toFixed(6) + " TRX");


  
  })
  })
