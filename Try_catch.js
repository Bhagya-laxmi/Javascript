<html>
<head>
<script type="text/javascript">
var txt="";
function message()
{
try
 {
 adddlert("Welcome guest!");
 }
catch(err)
 {
 txt="There was an error on this page.\n\n";
 txt+="Error description: " + err.description + "\n\n";
 txt+="Click OK to continue.\n\n";
 alert(txt);
 //document.write(txt);
 }
}
</script>
</head>
<body>
<input type="button" value="View message" onclick="message()" />
</body>
</html>
