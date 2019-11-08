
<html>
   <head>
      <title>User-defined objects</title>     
      <script type = "text/javascript">
      
      function start(day){
          this.day = day;
      }
      
      function addprice(amount){
        this.value = amount;
      }
      
      function subject(subject, status){
          this.subject = subject;
          this.status = status;
          this.start = start;
          this.addprice = addprice;
      }
      
      
         var book = new Object();   // Create the object
         book.subject = "Perl";     // Assign properties to the object
         book.author  = "Mohtashim";
      </script>      
   </head>
   
   <body>  
      <script type = "text/javascript">
      var course = new subject("Javascript", "learning");
     course.start( "today");
     course.addprice(100);
         document.write("Book name is : " + book.subject + "<br>");
         document.write("Book author is : " + book.author + "<br>");
         document. write(" Subject is " + course.subject + " and the status is " + course. status +"<br>" );
         document.write("start day is " + course.day + "  with the course price as " + course.value );
      </script>   
   </body>
</html>


