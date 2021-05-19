i=0;
s=5;
function fun()
{
    setInterval(changeFont,50);
}
function changeFont()
{
    var txt=document.getElementById("para1");
    if(i==0)                            //initially i=0
    {
        txt.innerHTML="TEXT GROWING";       //text growing
        txt.style.color="red";
        txt.style.fontSize=s+"px";
        s+=1;
        if(s==50)                   //when font size=50px
        {
            i=1;                    //switch to TEXT SHRINKING
        }
    }
    if(i==1)
    {
        txt.innerHTML="TEXT SHRINKING"; //text shrinking
        txt.style.color="blue";
        txt.style.fontSize=s+"px";
        s--;
        if(s==5)                //when font size=5px
        {
            i=0;                //switch to TEXT GROWING
        }
    }

}