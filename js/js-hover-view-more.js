$(document).ready(function(){
      
    var bool0 = 1;
    var bool1 = 1;
    var bool2 = 1;
    var bool3 = 1;
    var bool4 = 1;
    var bool5 = 1;
    var bool6 = 1;
    var bool7 = 1;
    
    $('#experience0').on('mouseenter', function() {
        if(bool0){
            bool0 = 0;
            $('#view-more0').addClass('animate-link');
        }
    });
    $('#view-more0').on('animationend',function(){
        $(this).removeClass('animate-link');
            bool0 = 1;
    });
    
    
    $('#experience1').on('mouseenter', function() {
        if(bool1){
            bool1 = 0;
            $('#view-more1').addClass('animate-link');
        }
    });
    $('#view-more1').on('animationend',function(){
        $(this).removeClass('animate-link');
            bool1 = 1;
    });
    
    
    $('#experience2').on('mouseenter', function() {
        if(bool2){
            bool2 = 0;
            $('#view-more2').addClass('animate-link');
        }
    });
    $('#view-more2').on('animationend',function(){
        $(this).removeClass('animate-link');
            bool2 = 1;
    });
    
    
    $('#experience3').on('mouseenter', function() {
        if(bool3){
            bool3 = 0;
            $('#view-more3').addClass('animate-link');
        }
    });
    $('#view-more3').on('animationend',function(){
        $(this).removeClass('animate-link');
            bool3 = 1;
    });
    
    
    $('#experience4').on('mouseenter', function() {
        if(bool4){
            bool4 = 0;
            $('#view-more4').addClass('animate-link');
        }
    });
    $('#view-more4').on('animationend',function(){
        $(this).removeClass('animate-link');
            bool4 = 1;
    });
    
    
    $('#experience5').on('mouseenter', function() {
        if(bool5){
            bool5 = 0;
            $('#view-more5').addClass('animate-link');
        }
    });
    $('#view-more5').on('animationend',function(){
        $(this).removeClass('animate-link');
            bool5 = 1;
    });
    
    
    $('#experience6').on('mouseenter', function() {
        if(bool6){
            bool6 = 0;
            $('#view-more6').addClass('animate-link');
        }
    });
    $('#view-more6').on('animationend',function(){
        $(this).removeClass('animate-link');
            bool6 = 1;
    });
    
    
    $('#experience7').on('mouseenter', function() {
        if(bool7){
            bool7 = 0;
            $('#view-more7').addClass('animate-link');
        }
    });
    $('#view-more7').on('animationend',function(){
        $(this).removeClass('animate-link');
            bool7 = 1;
    });
    
});

