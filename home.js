

    let index =0;
    function animateText(){
        let element =document.getElementById("text");
        
        let completeText="Welcome to My Website My Name is Dominic, Software Student.";
           // element.innerHTML="";

        if(index<completeText.length){

         element.innerHTML+=completeText.charAt(index);
         index++

        }



        
        
    
}
setInterval(animateText,200);





