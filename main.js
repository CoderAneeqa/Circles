var mouseEvent="empty";
var last_position_x, last_position_y;
canvas=document.getElementById("myCanvas");


ctx= canvas.getContext("2d");
color="black";
width_line= 1;

canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e){
    color=document.getElementById("color").value;
    width_line=document.getElementById("width_line").value;
    radius=document.getElementById("radius").value
    mouseEvent="mouseDown"
}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e){
    current_position_x= e.clientX - canvas.offsetLeft;
    current_position_y = e.clientY - canvas.offsetTop;
     
    if(mouseEvent=="mouseDown"){
        
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth= width_line;
        ctx.arc(current_position_x,current_position_y, radius ,0, 2*Math.PI);
        ctx.stroke();
    }

    last_position_x=current_position_x
    last_position_y=current_position_y
}

canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e){
    mouseEvent= "mouseUp";

}
canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e){
    mouseEvent= "mouseLeave";
    
}

function clearArea(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}




 