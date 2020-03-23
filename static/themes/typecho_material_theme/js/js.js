$(document).scroll(function(){
	var before = $(document).scrollTop();
    $(document).scroll(function() {
        var after = $(document).scrollTop();
        if (before<after) {
            
            before = after;
        };
        if (before>after || after<=40) {
            
            before = after;
        };
    });
});