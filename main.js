menu_list_array = ["Veg Margherita Pizza","Chicken Tikka Pizza","Panner Pizza","Chesse Burst","Pizzera Special"
                    ]; 

function getmenu(){

for(i=0;i<menu_list_array.length;i++){
document.getElementById("display_menu").innerHTML+=menu_list_array[i]+"<br>";
}




   
}



function add_item(){
    menu_list_addedmenu=[];
   menu_list_addedmenu=document.getElementById("add_item").value;
    for(i=0;i<10;i++){
        document.getElementById("display_addedmenu").innerHTML+="<img src='https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'>"+menu_list_addedmenu[i]+"<br>";
	
      }
    }

function add_top(){
    var item=document.getElementById("add_item").value;
    menu_list_array.push(item);
	add_item();
}
