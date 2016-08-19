    var x;
    var y;
    var num;
    var flag;

    //初始化页面函数
    function chushihua() {
        x = "start";
        y = "start";
        num = 0;
        flag = false;
    }

    //清空按钮
    function qingkong() {
        jisuan.input.value = "0";
        x = "start";
        y = "start";
    }

    //数字点击
    function addNum(i) {
        if (flag == true) { //是运算符
            jisuan.input.value = i;
            flag = false;
        } else {
            if (jisuan.input.value == "0") {
                jisuan.input.value = i;
            } else {
                jisuan.input.value += i; //不是第一个数
            }
        }
    }

    //运算点击
    function caozuo(x) {
        
        if (y == "start") {
            num = jisuan.input.value;
            y = x;
        } else {
            count();
            y = x;
        }
        flag = true;
    }

    function optNum (num) {
        num=parseFloat(num.toFixed(12));
        return num;
    }

    function count() {
        if (y != "start") {
            switch (y) {
                case "+":
                    num = optNum(parseFloat(num) + parseFloat(jisuan.input.value));
                    break;
                case "-":
                    num = optNum(parseFloat(num) - parseFloat(jisuan.input.value));
                    break;
                case "*":
                    num = optNum(parseFloat(num) * parseFloat(jisuan.input.value));
                    break;
                case "/":
                    num = optNum(parseFloat(num) / parseFloat(jisuan.input.value));
                    break;
            }
            jisuan.input.value = num;
            flag = true;            
        }
        flag = "false";

    }

    //数学函数sin cos tan等
    function hanshu(fun) {
        switch (fun) {
            case "sin":
                jisuan.input.value = Math.sin(jisuan.input.value);
                break;
            case "cos":
                jisuan.input.value = Math.cos(jisuan.input.value);
                break;
            case "tan":
                jisuan.input.value = Math.tan(jisuan.input.value);
                break;
            case "asin":
                jisuan.input.value = Math.asin(jisuan.input.value);
                break;
            case "acos":
                jisuan.input.value = Math.acos(jisuan.input.value);
                break;
            case "atan":
                jisuan.input.value = Math.atan(jisuan.input.value);
                break;
            case "log":
                jisuan.input.value = Math.log(jisuan.input.value);
                break;
            case "ln":
                jisuan.input.value = Math.ln(jisuan.input.value);
                break;
            case "sqrt":
                jisuan.input.value = Math.sqrt(jisuan.input.value);
                break;
            case "1/X":
                jisuan.input.value = 1 / jisuan.input.value;
                break;
            case "%":
                jisuan.input.value = jisuan.input.value * 0.01;
                break;
        }
    }

    //数的阶乘
    function jiecheng() {
        var num = jisuan.input.value;
        var sum = 1;
        for (var i = 1; i <= num; i++) {
            sum *= i;
        }
        jisuan.input.value = sum;
    }

    //退格键
    function tuige() {
        jisuan.input.value = jisuan.input.value.substring(0, jisuan.input.value.length - 1);
        jisuan.input.title = jisuan.input.value.substring(jisuan.input.title.length - 1);
    }