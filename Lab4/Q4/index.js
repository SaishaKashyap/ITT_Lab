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
            var s1=str.substr(1,3);         //get 2nd and 3rd digits
            var s2=str.substr(3,5);         //get 4th and 5th digits
            var s3=str.substr(5,7);         //get 6th and 7th digits
            var s4=str.substr(7,10);        //get last 3 digits
            if(!Number.isInteger(parseInt(str[0]))||parseInt(str[0])>4||parseInt(str[0])<1)
            {
                console.log("1");       //check if 1st digit is between 1 and 4
                c=1;
            }
            else if(c==0&&(Number.isInteger(parseInt(s1[0]))||Number.isInteger(parseInt(s1[1]))))
            {
                console.log("2");       //check if 2nd and 3rd digits are letters
                c=1;
            }
            else if(c==0&&(s1[0]!=s1[0].toUpperCase()||s1[1]!=s1[1].toUpperCase()))
            {
                console.log("3");       //check if 2nd and 3rd digits are uppercase
                c=1;
            }
            else if(c==0&&!Number.isInteger(parseInt(s2)))
            {
                console.log("4");       //check if 3rd and 4th digits are numbers
                c=1;
            }
            else if(c==0&&(Number.isInteger(parseInt(s3[0])||Number.isInteger(parseInt(s3[1])))))
            {
                console.log("5");       //check if 6th and 7th digits are letters
                c=1;
            }
            else if(c==0&&(s3[0]!=s3[0].toUpperCase()||s3[1]!=s3[1].toUpperCase()))
            {
                console.log("6");       //check if 6th and 7th digits are uppercase
                c=1;
            }
            else if(c==0&&!Number.isInteger(parseInt(s4)))
            {
                console.log("7");       //check if last 3 digits are letters
                console.log(s4);
                c=1;
            }
            if(c==1)                    //conditions not satisfied
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