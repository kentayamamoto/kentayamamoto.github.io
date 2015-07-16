$(function(){
	$(".progress").hide();
	window.myObj = {"x": 0};
	
	// リストの読み込み
	var url = "json/apilist.json";
	$.ajax({
		url: url,
		type: 'GET',
		data: '',
		dataType: 'text',
		success: function(data) {
			var dataParsed = JSON.parse(data);
			window.listObj = dataParsed;
			renderList(dataParsed);
		}
	});
	
	$("#api-name").change(function () {
		var id = $(this).val();
		$('#api-url').val(window.listObj[id].url);
		$('#api-type').val(window.listObj[id].type);
		$('#api-input').val(window.listObj[id].input);
	});
	
	$("#btn_call").click(function() {
    	$(".progress").show();
    	$('#bar').css("width", "0%");
    	$("#container").hide("slow");
    	window.myObj.x = 0;
    	myFunc();
    	
    	var url = $('#api-url').val();
    	$.ajax({
    		url: url,
    		type: $('#api-type').val(),
    		data: '',
    		dataType: 'text',
    		success: function(data) {
    			var dataParsed = JSON.parse(data);
    			render(dataParsed);
    		},
			error: function(error) {
				$('#bar').css("width", "100%");
    			$(".progress").hide("slow");
				window.alert('エラー');
			}
    	});
    });
    
    var selectTemplate = _.template($('#template-select').html());
    function renderList(data) {
    	_.each(data, function(item, i) {
    		item.id = i;
    		$('#api-name').append(selectTemplate(item));
    	});
    };
    
    function render(data) {
    	$('#api-result').val(JSON.stringify(data, null, "    "));
    	$('#bar').css("width", "100%");
    	$(".progress").hide("slow");
    };
	
    function myFunc() {
        window.myObj.x++;
        var barVal = (1-1/(window.myObj.x+1))*50;
        $('#bar').css("width",barVal + "%");
        setTimeout(myFunc,300);
    }
});