$(document).ready(function(){
    
    
    var bool1 = 1;
    
    $('#link-more-projects').on('mouseenter', function() {
        if(bool1){
            bool1 = 0;
            $('#link-more-projects').addClass('animate-link');
        }
    });
    $('#link-more-projects').on('animationend',function(){
        $(this).removeClass('animate-link');
            bool1 = 1;
    });
    
    $('#container-opacity-text1').on('mouseenter', function() {
        $('#container-opacity-text1').addClass("opacity");
        $('#img-project1').addClass("scale");
        $('#opacity-project1').addClass("scale");
    });
    $('#container-opacity-text1').on('mouseleave',function(){
        $('#container-opacity-text1').removeClass("opacity");
        $('#img-project1').removeClass("scale");
        $('#opacity-project1').removeClass("scale");
    });
    
    $('#container-opacity-text2').on('mouseenter', function() {
        $('#container-opacity-text2').addClass("opacity");
        $('#img-project2').addClass("scale");
        $('#opacity-project2').addClass("scale");
    });
    
    $('#container-opacity-text2').on('mouseleave',function(){
        $('#container-opacity-text2').removeClass("opacity");
        $('#img-project2').removeClass("scale");
        $('#opacity-project2').removeClass("scale");
    });
    
    $('#container-opacity-text3').on('mouseenter', function() {
        $('#container-opacity-text3').addClass("opacity");
        $('#img-project3').addClass("scale");
        $('#opacity-project3').addClass("scale");
    });
    $('#container-opacity-text3').on('mouseleave',function(){
        $('#container-opacity-text3').removeClass("opacity");
        $('#img-project3').removeClass("scale");
        $('#opacity-project3').removeClass("scale");
    });
    
    $('#container-opacity-text4').on('mouseenter', function() {
        $('#container-opacity-text4').addClass("opacity");
        $('#img-project4').addClass("scale");
        $('#opacity-project4').addClass("scale");
    });
    $('#container-opacity-text4').on('mouseleave',function(){
        $('#container-opacity-text4').removeClass("opacity");
        $('#img-project4').removeClass("scale");
        $('#opacity-project4').removeClass("scale");
    });
    
    $('#container-opacity-text5').on('mouseenter', function() {
        $('#container-opacity-text5').addClass("opacity");
        $('#img-project5').addClass("scale");
        $('#opacity-project5').addClass("scale");
    });
    $('#container-opacity-text5').on('mouseleave',function(){
        $('#container-opacity-text5').removeClass("opacity");
        $('#img-project5').removeClass("scale");
        $('#opacity-project5').removeClass("scale");
    });
    
    $('#container-opacity-text6').on('mouseenter', function() {
        $('#container-opacity-text6').addClass("opacity");
        $('#img-project6').addClass("scale");
        $('#opacity-project6').addClass("scale");
    });
    $('#container-opacity-text6').on('mouseleave',function(){
        $('#container-opacity-text6').removeClass("opacity");
        $('#img-project6').removeClass("scale");
        $('#opacity-project6').removeClass("scale");
    });
    
    
});