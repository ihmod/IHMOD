var a=0;
var b=0;
 function dis(v){
     if(v.value=='×')
     a='*'
     else if(v.value=='÷')
     a='/'
     else
     a=v.value;

     if(v.value=='×'||v.value=='÷'||v.value=='+'||v.value=='-'||v.value=='%')
     b='0';
     var txt = document.getElementById('txt');
     if(txt.value=='0'||b=='1')
     {
         if(a=='.')
         {
            txt.value+=a;
            b='0';
         }
         else
         {
            txt.value=""+a
            b='0';
         }
       
     }
     
     else if(txt.value==''){
         alert('请先开机！');
     }
     else{
        
            txt.value+=a;
         
         
     }
     
}
function result(){
    try{
        b='1';
        var txt = document.getElementById('txt');
        var result= eval(txt.value);
        txt.value=result;
        
    }
    catch(e){
        alert(" 错误运算！！");

    }
    
}
function dele(){
    var txt = document.getElementById('txt');
    if(txt.value=="")
    {txt.value="";}
    else
    {
        txt.value="0";
    }
    
}
function off(){
    var txt = document.getElementById('txt');
    if(txt.value=="")
    {
        txt.value="0";
    }
    else
    {
        txt.value="";
    }
    
}
function C(){
    var txt = document.getElementById('txt');
    var tt=String(txt.value);
    txt.value=tt.slice(0,tt.length-1);
}
function changecolor(e){
    var col=document.getElementById('mar');
    if(e.value=='p')
    col.className="mar1";
    else if(e.value=='g')
    col.className="mar";
}

