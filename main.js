menu_list_array = ["Chicken Pizza", "Cheese pizaa", "Veggie pizza", "Paneer pizza"]
function getmenu()
{
htmldata="<ol class='menulist'>"
menu_list_array.sort();
for(var i=0;i<menu_list_array.length;i++){
html=htmldata+'<li>'+menu_list_array[i] +'</li>'
}
htmldata=htmldata+"<ol>"
document.getElementById("display_menu").innerHTML = htmldata;
}
function add_item()
{
var htmldata;
var item=document.getElementById("add_item").ariaValueMax;
menu_list_array.push(item);
menu_list_array.sort();
htmldata="<section class='cards'>"
for(var i=0;i<menu_list_array.length;i++){
htmldata=htmldata+'<div class="card"'+'<img src"images/pizzaImg.png/>'+menu_list_array[i]

}
htmldata=htmldata+"</section>"
document.getElementById("display_addedmenu").innerHTML = htmldata;
}