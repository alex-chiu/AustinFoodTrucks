selections = ["all", "italian", "sa", "mexican", "asian", "mediterranean", "dessert", "american"]

function selection(value){
   if (value == "all"){
      document.getElementById("all").style.display = "block";
      for (let i = 0; i <= selections.length; i++){
         if (selections[i] != value){
            document.getElementById(selections[i]).style.display = "none";
         }
      }
   }

   if (value == "italian"){
      document.getElementById("italian").style.display = "block";
      for (let i = 0; i <= selections.length; i++){
         if (selections[i] != value){
            document.getElementById(selections[i]).style.display = "none";
         }
      }
   }

   if (value == "sa"){
      document.getElementById("sa").style.display = "block";
      for (let i = 0; i <= selections.length; i++){
         if (selections[i] != value){
            document.getElementById(selections[i]).style.display = "none";
         }
      }
   }
   if (value == "mexican"){
      document.getElementById("mexican").style.display = "block";
      for (let i = 0; i <= selections.length; i++){
         if (selections[i] != value){
            document.getElementById(selections[i]).style.display = "none";
         }
      }
   }

   if (value == "asian"){
      document.getElementById("asian").style.display = "block";
      for (let i = 0; i <= selections.length; i++){
         if (selections[i] != value){
            document.getElementById(selections[i]).style.display = "none";
         }
      }
   }

   if (value == "mediterranean"){
      document.getElementById("mediterranean").style.display = "block";
      for (let i = 0; i <= selections.length; i++){
         if (selections[i] != value){
            document.getElementById(selections[i]).style.display = "none";
         }
      }
   }

   if (value == "american"){
      document.getElementById("american").style.display = "block";
      for (let i = 0; i <= selections.length; i++){
         if (selections[i] != value){
            document.getElementById(selections[i]).style.display = "none";
         }
      }
   }

   if (value == "dessert"){
      document.getElementById("dessert").style.display = "block";
      for (let i = 0; i <= selections.length; i++){
         if (selections[i] != value){
            document.getElementById(selections[i]).style.display = "none";
         }
      }
   }
}