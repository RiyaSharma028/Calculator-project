try {
  let String = " ";
  let buttons = document.querySelectorAll('.btn');
  Array.from(buttons).forEach((button)=>{
    button.addEventListener('click' , (e)=>{
      if (e.target.innerHTML == '=') {
         String = eval(String);
         document.querySelector('input').value = String;
      }else if(e.target.innerHTML == 'AC'){
           String = " ";
           document.querySelector('input').value = String;

      }else if(e.target.innerHTML === 'C'){
        String = String.slice(0, -1);
        document.querySelector('input').value = String;
      }else if(e.target.innerHTML === '%'){
        String = (parseFloat(String) / 100).toString();
        document.querySelector('input').value = String;
      }
      else{
        console.log(e.target);
        String = String + e.target.innerHTML;
        document.querySelector('input').value = String;
      }
      
      
    })
  })
} catch (error) {
   console.log(error);
}