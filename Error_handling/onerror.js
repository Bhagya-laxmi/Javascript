Live Demo
<html>
   <head>
      
      <script type = "text/javascript">
         <!--
            window.onerror = function () {
               alert("An error occurred.");
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

/* The error event is fired on the window object whenever an exception occurs on the page.*/
//here the error is that the function myFunc() doesn't exist.
