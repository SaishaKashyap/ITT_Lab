function func()
{
    var input=document.getElementById("ip");
    input.addEventListener("keyup",function(event)
    {
        if(event.keyCode==13)
        {
            event.preventDefault();
            var str=input.value;
            var c=0;
            var s1=str.substr(1,3);
            var s2=str.substr(3,5);
            var s3=str.substr(5,7);
            var s4=str.substr(7,10);
            if(!Number.isInteger(parseInt(str[0]))||parseInt(str[0])>4||parseInt(str[0])<1)
            {
                console.log("1");
                c=1;
            }
            else if(c==0&&(Number.isInteger(parseInt(s1[0]))||Number.isInteger(parseInt(s1[1]))))
            {
                console.log("2");
                c=1;
            }
            else if(c==0&&(s1[0]!=s1[0].toUpperCase()||s1[1]!=s1[1].toUpperCase()))
            {
                console.log("3");
                c=1;
            }
            else if(c==0&&!Number.isInteger(parseInt(s2)))
            {
                console.log("4");
                c=1;
            }
            else if(c==0&&(Number.isInteger(parseInt(s3[0])||Number.isInteger(parseInt(s3[1])))))
            {
                console.log("5");
                c=1;
            }
            else if(c==0&&(s3[0]!=s3[0].toUpperCase()||s3[1]!=s3[1].toUpperCase()))
            {
                console.log("6");
                c=1;
            }
            else if(c==0&&!Number.isInteger(parseInt(s4)))
            {
                console.log("7");
                console.log(s4);
                c=1;
            }
            if(c==1)
            {
                alert("Validation Failed");
            }
            else if(c==0)
            {
                alert("Successfully Validated");
            }
        }
    })
}