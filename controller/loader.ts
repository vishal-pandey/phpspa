import * as $ from 'jquery';

export default class Loader{
	
	load(){
		loadHelper("view");
	}
	link(){
		linkHelper();
	}
	loadMain(){
		$("view-outlet").load("./view/main.php");
	}

}

function loadHelper(pass){
	let tview = $(pass).attr("data-view");
	let toload = "./view/"+tview+".php";
	$(pass).load(toload, function(){
		$(pass).children("view").each(function(){
			linkHelper();
			loadHelper(this);
		})
	})
}

function linkHelper(){
	$(document).on("click", '[data-link]', function(event) { 
    let rview = $(this).attr("data-link");
		$("view-outlet").load("./view/"+rview+".php");
	});
}