$(function(){
	/*index.html开始*/
	$('.search-icon').on('click',toggle);
	$('.close').on('click',toggle);
	function toggle(){
		 var container = $(this).closest('.search-wrapper');
          if(!container.hasClass('active')){
          	container.addClass('active');
//              evt.preventDefault();
          }
          else if(container.hasClass('active') && $(this).closest('.input-holder').length == 0){
                container.removeClass('active');
                // clear input
                container.find('.search-input').val('');
                // clear and hide result container when we press close
                container.find('.result-container').fadeOut(100, function(){$(this).empty();});
          }
	}
	 /*
       function submitFn(this, evt){
            value = $(this).find('.search-input').val().trim();

            _html = "Yup yup! Your search text sounds like this: ";
            if(!value.length){
                _html = "Yup yup! Add some text friend :D";
            }
            else{
                _html += "<b>" + value + "</b>";
            }

            $(this).find('.result-container').html('<span>' + _html + '</span>');
            $(this).find('.result-container').fadeIn(100);

            evt.preventDefault();
        }*/
	/*index.html结束*/
})
