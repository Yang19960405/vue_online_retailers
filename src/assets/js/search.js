
$('.btn-search').on('click', function() {

	if($('.search-query').val() !== "") {
		window.location.href="/home/product/search/"+$('.search-query').val()+"/9/0";
	}
})
