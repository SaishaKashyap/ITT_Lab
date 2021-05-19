function calculate()
{
    console.log("here");
    var t=document.getElementById("table");
    var content=t.innerHTML;
    var i;
    for(i=0;i<=10;i++) 
    {   //add table data elements with number, its square and its cube
        content+="<tr>"+"<td>"+i+"</td>"+"<td>"+i*i+"</td>"+"<td>"+i*i*i+"</td>";
    }
    t.innerHTML=content;
}