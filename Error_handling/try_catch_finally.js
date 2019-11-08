<html>
   <head>
      
      <script type = "text/javascript">
         <!--
            function myFunc() {
               var a = 100;
               try {
                   var abd = excuse();
                  alert("Value of variable a is : " + a );
               } 
                catch ( e ) {
                  alert("Error: " + e.description );
               }
               finally {
                  alert("Finally block will always execute!" );
               }
            }
         //-->
      </script>
      
   </head>
   <body>
      <p>Click the following to see the result:</p>
      
      <form>
         <input type = "button" value = "Click Me" onclick = "myFunc();" />
      </form>
      
   </body>
</html>


/*The try block must be followed by either exactly one catch block or one finally block (or one of both). When an exception occurs in the try block, the exception is placed in e and the catch block is executed. 
The optional finally block executes unconditionally after try/catch.*/
