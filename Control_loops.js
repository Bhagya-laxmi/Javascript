<html>
   <body>   
      <script type = "text/javascript">
         <!--
            var ifloop = 1;
            var switchloop =1;
            var whileloop =2;
            var dowhileloop=1;
            var forloop;
         
            document.write("IfLoop:");
            if( ifloop ) {
               document.write("<b>If loop</b>");
               document.write("<br />");
            } else {
               document.write("<b>No If loop</b>");
               document.write("<br />");
            }
            
            document.write("SwitchLoop:");
            switch(switchloop){
                case 1: document.write("switch statement");
                document.write("<br />");
                break;
                
                case 0: document.write("No switch statement");
                document.write("<br />");
                break;
            }
            
            document.write("WhileLoop:");
            while(whileloop >0)
            {
                document.write(whileloop);
                document.write(" --");
                whileloop--;
            }
            
            document.write("<br />")
            document.write("DoWhileLoop:");
            do{
                document.write(dowhileloop);
                document.write("<br />");
            }while(dowhileloop<1);
           
           for(forloop =0; forloop<1; forloop ++)
           {
               document.write("Forloop:")
               document.write(forloop);
               document.write("<br /");
           }
            
         //-->
      </script>     
      <p>Set the variable to different value and then try...</p>
   </body>
</html>
