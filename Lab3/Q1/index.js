i=0;
s=5;
function fun()
{
    setInterval(changeFont,1);
}
function changeFont()
{
    var txt=document.getElementById("para1");
    if(i==0)
    {
        txt.innerHTML="TEXT GROWING";
        txt.style.color="red";
        txt.style.fontSize=s+"px";
        s+=1;
        if(s==50)
        {
            i=1;
        }
    }
    if(i==1)
    {
        txt.innerHTML="TEXT SHRINKING";
        txt.style.color="blue";
        txt.style.fontSize=s+"px";
        s--;
        if(s==5)
        {
            i=0;
        }
    }

}