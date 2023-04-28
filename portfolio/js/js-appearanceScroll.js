$(function(){
    
    var doc = $(document);
    var vanish_mouse = $("#vanish-mouse");
    doc.on('scroll', function(){
        
        var position = doc.scrollTop();
        var offsetTop = vanish_mouse.offset().top * 10 / 100;
        
        if(position > offsetTop){
            vanish_mouse.css('opacity', 1 - (position - offsetTop) / 400);

        }
    })
})