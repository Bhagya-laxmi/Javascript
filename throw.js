<html>
<body>
<script type="text/javascript">
var x=prompt("Enter a number between 0 and 10:","");
try
 {
 if(x>10)
 {
 throw "Err1";
 }
 else if(x<0)
 {
 throw "Err2";
 }
 else if(isNaN(x))
 {
 throw "Err3";
 }
 }
catch(er)
 {
 if(er=="Err1")
 {
 alert("Error! The value is too high");
 }
 if(er=="Err2")
 {
 alert("Error! The value is too low");
 }
 if(er=="Err3")
 {
 alert("Error! The value is not a number");
 }
 }
</script>
</body>
</html>
