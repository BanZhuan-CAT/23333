var a_1=680 ,a_2=900 ,a_3=1099 ,a_4=1257 ,a_5=1453 ,a_11=200 ,a_12=381 ,a_13=575 ; //abcdf第一行，fg第一列第二行的首个的坐标，请在开发者模式内获取
var a=1,b=2,c=3,d=4,e=5,f=6,g=7,h=8,i=9,j=10,k=11,l=12,m=13,n=14,o=15;
var arr=[];
var len=arr.length;

function push(pp){ //用于单击的函数
switch (pp) {
    case 1:
        press(a_1,a_11,10);
        break;
    case 2:
        press(a_2,a_11,10);
        break;
    case 3:
        press(a_3,a_11,10);
        break;
    case 4:
        press(a_4,a_11,10);
        break;
    case 5:
        press(a_5,a_11,10);
        break;
    case 6:
        press(a_1,a_12,10);
        break;
    case 7:
        press(a_2,a_12,10);
        break;
    case 8:
        press(a_3,a_12,10);
        break;
    case 9:
        press(a_4,a_12,10);
        break;
    case 10:
        press(a_5,a_12,10);
        break;
    case 11:
        press(a_1,a_13,10);
        break;
    case 12:
        press(a_2,a_13,10);
        break;
    case 13:
        press(a_3,a_13,10);
        break;
    case 14:
        press(a_4,a_13,10);
        break;
    case 15:
        press(a_5,a_13,10);
        break;                                                                                                                                                                                  
                                                                                                                                                                                        
    default:
        break;
}
}

for(j=0;j < len;j++)
{
    if(arr[j] > 100)
    {
        sleep(arr[j]);
    }
    if(arr[j] < 100){
        push(arr[j]);
    }
    
}

