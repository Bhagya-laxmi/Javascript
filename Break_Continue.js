<html>
   <body>      
      <script type = "text/javascript">
         <!--
            var x = 1;
            var y = 1;
            
            document.write("Entering the loop<br /> ");
         
            document.write("continue:")
            while (x < 10) {
               x = x + 1;
               
               if (x == 5) {
                  continue;   // skip rest of the loop body
               }
               document.write( x + "<br />");
            }         
            document.write("Exiting the loop!<br /> ");
            
            
            document.write("<br />");
            document.write("break:");
            
            while (y < 20) {
            if (y == 5) {
               break;   // breaks out of loop completely
            }
            y = y + 1;
            document.write( y + "<br />");
         }         
         document.write("Exiting the loop!<br /> ");
         
         //-->
      </script>      
      <p>Set the variable to different value and then try...</p>
   </body>
</html>
