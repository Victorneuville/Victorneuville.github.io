$(document).ready(function(){
         
    var bool1 = 1;
    var bool2 = 1;
    var bool3 = 1;
    
    $('#link-linkedin').on('mouseenter', function() {
        if(bool1){
            bool1 = 0;
            $('#svg-linkedin').addClass('animate-link');
        }
    });
    $('#svg-linkedin').on('animationend',function(){
        $(this).removeClass('animate-link');
            bool1 = 1;
    });
    
    
    $('#link-phone').on('mouseenter', function() {
        if(bool2){
            bool2 = 0;
            $('#svg-phone').addClass('animate-link');
        }
    });
    $('#svg-phone').on('animationend',function(){
        $(this).removeClass('animate-link');
            bool2 = 1;
    });
    
    
    $('#link-mail').on('mouseenter', function() {
        if(bool3){
            bool3 = 0;
            $('#svg-mail').addClass('animate-link');
        }
    });
    $('#svg-mail').on('animationend',function(){
        $(this).removeClass('animate-link');
            bool3 = 1;
    });
    
});

