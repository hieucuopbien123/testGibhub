var checkvar, Checkvar = 19, checkvar3;
// biến k đc bắt đầu bằng số
checkvar = 12.0;
var checkvar = "String nè! ";
document.write(checkvar,typeof checkvar,' ', typeof checkvar3);
let a1;a1=10;//biến let k đc khai báo lại,còn var thì đc;var là biến toàn cục,let thì k
const pi = 3.14;

var bool_confirm=confirm("Ar u human?")//trả về true false
if(bool_confirm==true)
{
    alert("bạn là người r! ",Checkvar);//k nên dùng , mà dùng +, dùng , ở đây sai
}//dùng "" hay '' với string đều đc
else
{
    alert('V bạn là súc vật à? ');
}

console.log("Dòng thông tin sẽ lưu ra log"); 
//hiện ra ngay lập tức như cer trong màn hình console
// console.error('Get error. ');
// console.warn('Get warn. ');//ít dùng
console.info('Get Info.');

var a=prompt("Nhâp "+"số...");
//Null nếu ấn Cancel
/*dấu + thì là ghi tiếp vs string.
k write ra a+a TT đc vì nó hiểu + là ghi tiếp=> đổi kiểu*/
a=parseInt(a);
var x2=a+a;//h a là số r, nhưng vẫn k write TT đc vì write với + mặc định là ghi tiếp=> biến lưu
document.write('  Nhân đôi lên là '+ x2);





