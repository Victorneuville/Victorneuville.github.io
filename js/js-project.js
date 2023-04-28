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
    
    $('#container-opacity-text15').on('mouseenter', function() {
        $('#container-opacity-text15').addClass("opacity");
        $('#img-project15').addClass("scale");
        $('#opacity-project15').addClass("scale");
    });
    $('#container-opacity-text15').on('mouseleave',function(){
        $('#container-opacity-text15').removeClass("opacity");
        $('#img-project15').removeClass("scale");
        $('#opacity-project15').removeClass("scale");
    });
    
    $('#container-opacity-text13').on('mouseenter', function() {
        $('#container-opacity-text13').addClass("opacity");
        $('#img-project13').addClass("scale");
        $('#opacity-project13').addClass("scale");
    });
    $('#container-opacity-text13').on('mouseleave',function(){
        $('#container-opacity-text13').removeClass("opacity");
        $('#img-project13').removeClass("scale");
        $('#opacity-project13').removeClass("scale");
    });
    
    $('#container-opacity-text14').on('mouseenter', function() {
        $('#container-opacity-text14').addClass("opacity");
        $('#img-project14').addClass("scale");
        $('#opacity-project14').addClass("scale");
    });
    $('#container-opacity-text14').on('mouseleave',function(){
        $('#container-opacity-text14').removeClass("opacity");
        $('#img-project14').removeClass("scale");
        $('#opacity-project14').removeClass("scale");
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