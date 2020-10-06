function story() {
    document.getElementById('contentMain').innerHTML="";
   
  
$.ajax({
    type: "GET",
    url: "http://www.json-generator.com/api/json/get/cesRDiKjNe?indent=2",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    success: function(result){
            result.forEach(function(element) {
            $('#contentMain').append('<div class="jumbotron" id="blogPost'+element.id+'">Chapter '+element.id+'</div>');
            $('#blogPost'+element.id).click(function(){
                $('#contentMain').replaceWith('<div id="contentMain"><h1>' + element.heading+'</h1><p> '+ element.content + '</p></div>');  
            });
          });
       
        // document.getElementById("content").innerHTML = "Paragraph changed.";
    },
    error:function(){
        content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fermentum, lectus sodales feugiat viverra, sem sem pharetra risus, condimentum blandit leo felis ut neque. Quisque eget vulputate ex. Morbi justo ligula, tempus in mauris ornare, interdum posuere neque. Vivamus ultrices pharetra nibh at facilisis. Fusce eget tortor eu purus auctor accumsan sit amet eget justo. Morbi porttitor ipsum sed urna iaculis consequat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas a placerat ex. Vivamus sollicitudin molestie ex quis pretium. Donec vel placerat quam. Praesent ut ante hendrerit, mattis magna a, malesuada neque. Vestibulum varius urna aliquet nulla pellentesque eleifend.";
        $('#blogPost0').attr('hidden',false);
        $('#blogPost0').click(function(){
            $('#contentMain').replaceWith('<div id="contentMain"><h1>BharaT</h1><p>'+ content + '</p></div>');  
        });
    }
    
});

}

function characters(){
    document.getElementById('contentMain').innerHTML="";
  
    $.ajax({
        type: "GET",
        url: "http://www.json-generator.com/api/json/get/bTRSEshPaW?indent=2",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(result){
             result.forEach(function(element) {
            $('#contentMain').append('<div class="jumbotron" id="char'+element.id+'">'+element.name+'</div>');  
            $('#char'+element.id).click(function(){
                $('#contentMain').replaceWith('<div id="contentMain"><h1>' + element.name+'</h1><img src='+ element.image +'</img></div>');  
            }
        );
            });
        }
});
}



