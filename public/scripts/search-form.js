function searchForm(){
    // code heref
    var arrayTitleCard=[];
    lee_json(arrayTitleCard);
    evalua_busqueda(arrayTitleCard);
    delete_search_save();

	$('li.link-search-save').hover(function () {
		var id=this.getAttribute("data");
    	$(this).append( "<div class='delete'> <a href='javascript:;' class='btn-edit'>Editar</a> | <a href='javascript:;' data-item='"+id+"' class='btn-delete'>Eliminar</a></div>" );
		},function () {
    	$('.delete').remove();
	});

}

function lee_json(arr) {
            $.getJSON("../books-schema.json", function(datos) {
            	var newTemplate = $('#cardMovie').html();
            	_.templateSettings = {
				  	interpolate: /\{\{(.+?)\}\}/g
				};
            	var newCompiledTemplate = _.template(newTemplate,_.templateSettings);
            	for(i=0; i<datos.data.length;i++){
            		$('.content').append(newCompiledTemplate(datos.data[i]));
            		arr.push(datos.data[i].title);
            	}
      
            });
        }

function evalua_busqueda(arrayTitleCard){
	var inputBox = document.getElementById("inputBuscar");
    var awesomplete = new Awesomplete(inputBox,{minChars:3,maxItems:7});
    var btn_search =$('.button-search');
    awesomplete.list=arrayTitleCard;
	btn_search.on("Click", function(){
		if (inputBox.val() !== "") {
			btn_search.attr('disabled', false);
		} else {
			btn_search.attr('disabled', true);
		}
	});
}

function delete_search_save(){
	$('li.link-search-save').bind("click",function () {
		var id=this.getAttribute("data");
    	$("#"+id).remove();
    });

}


