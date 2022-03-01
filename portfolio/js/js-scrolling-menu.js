$(document).ready(function(){
         
    var tab_hide =[,"niv2-skill2","niv2-skill3","niv2-skill4","niv2-skill5","niv2-skill6","niv2-skill7"];
    hide_menu();
    
    var skill1 = document.getElementById('skill1');
    var arrow_skill1 = document.getElementById('arrow-skill1');
    arrow_skill1.style.transform = "rotate(0deg)";
    
    var skill2 = document.getElementById('skill2');
    var arrow_skill2 = document.getElementById('arrow-skill2');
    arrow_skill2.style.transform = "rotate(-90deg)";
    
    var skill3 = document.getElementById('skill3');
    var arrow_skill3 = document.getElementById('arrow-skill3');
    arrow_skill3.style.transform = "rotate(-90deg)";
    
    var skill4 = document.getElementById('skill4');
    var arrow_skill4 = document.getElementById('arrow-skill4');
    arrow_skill4.style.transform = "rotate(-90deg)";
    
    var skill5 = document.getElementById('skill5');
    var arrow_skill5 = document.getElementById('arrow-skill5');
    arrow_skill5.style.transform = "rotate(-90deg)";
    
    var skill6 = document.getElementById('skill6');
    var arrow_skill6 = document.getElementById('arrow-skill6');
    arrow_skill6.style.transform = "rotate(-90deg)";
    
    var skill7 = document.getElementById('skill7');
    var arrow_skill7 = document.getElementById('arrow-skill7');
    arrow_skill7.style.transform = "rotate(-90deg)";
    
    $("#skill1").click(function(){
        $("#niv2-skill1").toggle(500, function(){
        });
        rotate(arrow_skill1);

    });
    
    $("#skill2").click(function(){
        $("#niv2-skill2").toggle(500, function(){
        });
        rotate(arrow_skill2);

    });
    
    $("#skill3").click(function(){
        $("#niv2-skill3").toggle(500, function(){
        });
        rotate(arrow_skill3);

    });
    $("#skill4").click(function(){
        $("#niv2-skill4").toggle(500, function(){
        });
        rotate(arrow_skill4);

    });
    $("#skill5").click(function(){
        $("#niv2-skill5").toggle(500, function(){
        });
        rotate(arrow_skill5);

    });
    
    $("#skill6").click(function(){
        $("#niv2-skill6").toggle(500, function(){
        });
        rotate(arrow_skill6);

    });
    $("#skill7").click(function(){
        $("#niv2-skill7").toggle(500, function(){
        });
        rotate(arrow_skill7);

    });
    
    function hide_menu() {
        tab_hide.forEach(function(item, index, array) {
            $("#" + item).hide();
        });
    }
    function rotate(arrow) {
        if (arrow.style.transform == "rotate(-90deg)"){
            arrow.style.transform = "rotate(0deg)";
        }
        else if (arrow.style.transform == "rotate(0deg)" ){
            arrow.style.transform = "rotate(-90deg)";
        }
    };
    
    
});





