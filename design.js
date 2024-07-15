function div(){
    var a= parseInt(document.getElementById("n1").value);
    var b= parseInt(document.getElementById("n2").value);
    b=b/100
    b=b*b
    bmi=a/b
    document.getElementById("result").textContent=(bmi).toFixed(1);
    if(bmi<16)
    {
        document.getElementById("vicky").textContent="Severe Thinness";
    }
    else if(bmi>=16 && bmi<17)
    {
        document.getElementById("vicky").textContent="Moderate Thinness";
    }
    else if(bmi>=17 && bmi<18.5)
    {
        document.getElementById("vicky").textContent="Mild Thinness";
    }
    else if(bmi>=18.5 && bmi<25)
    {
        document.getElementById("vicky").textContent="Normal";
    }
    else if(bmi>=25 && bmi<30)
    {
        document.getElementById("vicky").textContent="Overweight";
    }
    else if(bmi>=30 && bmi<35)
    {
        document.getElementById("vicky").textContent="Obese Class 1";
    }
    else if(bmi>=35 && bmi<40)
    {
        document.getElementById("vicky").textContent="Obese Class 2";
    }
    else
    {
        document.getElementById("vicky").textContent="Obese Class 3";
    }
}
