function calculate()
{
    console.log("here");
    var t=document.getElementById("table");
    var content=t.innerHTML;
    var i;
    for(i=0;i<=10;i++)
    {
        content+="<tr>"+"<td>"+i+"</td>"+"<td>"+i*i+"</td>"+"<td>"+i*i*i+"</td>";
    }
    t.innerHTML=content;
}