/**
 * Created by chen on 2018/1/15.
 */

//封装冒泡排序
function bupple(arr,type='asc') {
    for (let i=0;i<arr.length;i++) {
        for (let j=0;j<arr.length-i-1;j++) {
            if (type=='asc') {                  //升序
                if (arr[j]>arr[j+1]) {
                    let tmp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = tmp;
                }
            }
            else if (type=='desc') {               //降序
                if (arr[j]<arr[j+1]) {
                    let tmp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = tmp;
                }
            }
        }
    }
    console.log(arr);
}

//选择排序
function xuanze(arr,type='asc') {
    for (let i=0;i<arr.length-1;i++) {
        for (let j=i;j<arr.length;j++) {
            if (type=='asc') {
                if (arr[j]>arr[i]) {
                    let tmp = arr[j];
                    arr[j] = arr[i];
                    arr[i] = tmp;
                }
            }
            else if (type=='desc') {             
                if (arr[j] < arr[i]) {
                    let tmp = arr[j];
                    arr[j] = arr[i];
                    arr[i] = tmp;
                }
            }
        }
    }
    console.log(arr);
}
//求得一个二维数组中，长度最长的数组
function chang(arr) {
    let max=arr[0];
    for (let i=0;i<arr.length;i++) {
        if(max.length<arr[i].length){
            max=arr[i];
        }
    }
    console.log(max);
}

//求二维数组的和
function sum(arr) {
    let sum=0;
    for(let i=0;i<arr.length;i++){
        for (let j=0;j<arr[i].length;j++) {
            sum+=arr[i][j];
        }
    }
    console.log(sum);
}

//求二维数组的最大值
function max(arr) {
    let max=arr[0][0];
    for (let i=0;i<arr.length;i++) {
        for (let j=0;j<arr[i].length;j++) {
            if(max<arr[i][j]) {
                max=arr[i][j];
            }
        }
    }
    console.log(max);
}

// 复制二维数组
function copy(arr) {
    let brr=[];
    for(let i=0;i<arr.length;i++) {
        brr[i]=[];
        for (let j=0;j<arr[i].length;j++){
            brr[i][j]=arr[i][j];
        }
    }
    console.log(brr);
}

// 找出数组大于5的数的个数
function dayu5count(arr) {
    let count=0;
    for(let i=0;i<arr.length;i++) {				//arr.length,得到数组长度
        if (arr[i]>5) {
            count+=1;
        }
    }
    console.log(count);
}


// 选出大于5的数组成新数组
function dayu5(arr) {
    let brr=[];
    for(let i=0;i<arr.length;i++) {
        if (arr[i]>5) {
            brr[brr.length]=arr[i];				//brr.length=下标
        }
    }
    console.log(brr);
}

// 在数组的后面添加一个值
function add(arr) {
    let a=prompt('请输入一个任意值');
    arr[arr.length]=a;
    console.log(arr);
}

// 将数组中数字内容求和
function qiuhe(arr) {
    let sum=0;
    for(let i=0;i<arr.length;i++) {
        sum+=arr[i];
    }
    console.log(sum);
}

// 判断数组中是否所有数字都大于0
function dayu0(arr) {
    let flag='所有数字均大于0';
    for(let i=0;i<arr.length;i++) {
        if (arr[i]<=0) {
            flag='存在不大于0的数字';
        }
    }
    console.log(flag);
}

// 合并两个数组
function hebing(arr,brr) {
    for(let i=0;i<brr.length;i++) {
        arr[arr.length]=brr[i];
    }
    console.log(arr);
}

// 找到数组中某一个数的下标
function xiabiao(arr,n) {
    let str='';
    for(let i=0;i<arr.length;i++) {
        if (arr[i]==5) {
            str+=i;
            str+=',';
        }
    }
    console.log(str);
}

// 数组反转
function fanzhuan(arr) {
    let brr=[];
    for(let i=1;i<=arr.length;i++) {
        brr[brr.length]=arr[arr.length-i];
    }
    console.log(brr);
}


// 移除数组中等于3的元素
function yichu(arr) {
    for(let i=arr.length-1;i>=0;i--) {
        if(arr[i]==3){
            for(let j=i;j<arr.length;j++){
                arr[j]=arr[j+1];
            }
            arr.length-=1;
        }
    }
    console.log(arr);
}

// 删除数组的第一个值
function delete1(arr) {
    for(let j=0;j<arr.length;j++){
        arr[j]=arr[j+1];
    }
    arr.length-=1;
    console.log(arr);
}

// 在数组前面添加一个值
function add2(arr) {
    let a=prompt('请输入一个任意值');
    arr.length+=1;
    for(let i=arr.length-1;i>=0;i--){
        arr[i]=arr[i-1];
    }
    arr[0]=a;
    console.log(arr);
}

// n*n的乘法表
function chengfabiao(n) {
    let x=1,y=1,res=0;
    for(let x=1;x<=n; x++) {
        for(let y=1;y<=n;y++){
            res=x*y;
            if(y<=x){
                document.write(y+'x'+x+'='+res+' ');
            }
        }
        document.write('</br>');
    }
}

// 封装一个n行m列的表格
function biaoge(n,m) {
    document.write("<table border='1px' width='300px' cellspacing='0' cellpadding='3px'>");
    let x=1,y=1;
    for(let x=1;x<=n; x++) {
        document.write('<tr height="30px">');
        for(let y=1;y<=m;y++){
            document.write('<td>');
            document.write('</td>');
        }
    }
}

// 输入一个数判断是不是质数
function zhishu(n){
    let flag='是质数';
    for (let i=1;i<=n;i++) {
        if (n<1) {
            flag='输入错误';
        }
        else if(n===1) {
            flag='不是质数也不是合数';
        }
        else if(n%i==0) {
            flag='是合数';
        }
    }
    console.log('当n=',n,',',flag);
}
zhishu(1);
