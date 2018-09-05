window.onload=function () {
    let btn=document.querySelector(".btn");
    console.log(btn);
    let massage_box_in=document.querySelector(".massage_box_in");
    console.log(massage_box_in);
    let input=document.querySelector("input");
    console.log(input);

    btn.onclick=function () {
        let box_add=document.createElement("li");
        box_add.style=`width:${600}px;height:${40}px; background-color:#f2f2f2;border-bottom: 1px solid gray;`;
        //width冒号
        massage_box_in.appendChild(box_add);
        let con=document.createElement("div");
        con.innerText=input.value;
        //盒子的内容
        console.log(con);
        box_add.appendChild(con);
    }


}