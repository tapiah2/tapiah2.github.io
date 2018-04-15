parent._Paletton.events.trigger('ui/preview/loaded');

$(function(){
	
	$('.bgcol')
	.tooltip({
		position: {
			my: 'left+10 top+10',
			at: 'left bottom'
			},
		track:true,
		show: {
			effect: 'fadeIn',
			delay: 0
			},
		hide: {
			effect: 'fadeOut',
			delay: 0
			},
		content: function(){
			var $e = $(this), col = $e.attr('title'), data = $e.attr('col-data'),
				str = col;
			if (data) {
				str = '<p>' + str + '</p><p class="info">Click for more info</p>';
				}
			return str;
			}
		})
	.click(function(e){
		e.stopPropagation();
		var data = $(this).attr('col-data');
		parent._Paletton.events.trigger('ui/preview/colinfo',{hex:data});
		$(this).tooltip('close');
		})

	});