    function juge(form) {
        var score = form.Text1.value; //输入参数，用Switch语句来做判断
        switch (true) {
            case score > 90 && score <= 100:
                alert("1等生");
                break;
            case score > 80 && score <= 90:
                alert("2等生");
                break;
            case score > 70 && score <= 80:
                alert("3等生");
                break;
            case score > 60 && score <= 70:
                alert("4等生");
                break;
            case score > 50 && score <= 60:
                alert("5等生");
                break;
            case score > 40 && score <= 50:
                alert("6等生");
                break;
            case score > 30 && score <= 40:
                alert("7等生");
                break;
            case score > 20 && score <= 30:
                alert("8等生");
                break;
            case score > 10 && score <= 20:
                alert("9等生");
                break;
            case score >= 0 && score <= 10:
                alert("差生");
                break;
            default:
                alert("您尚未输入成绩或成绩不符合实际，请重新输入！");
                break;
        }
    }