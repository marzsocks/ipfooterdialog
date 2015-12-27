$.fn.ip_FooterDialog = function (options) {

	//? Briefly shows a dialog message at the bottom of the window/ element

	var options = $.extend({
		
		Message: '',
		BackColor: '#2fad75',
        cssClass: '',
		Duration: 5000,

	}, options);

	//code starts here            
	return this.each(function () {

	    var self = this;
		
	    clearTimeout(self.ip_ShowFooterAlert_Timeout_JQ);

	    var FooterObject = $(self).children('.ip_FooterDialog');
		if (FooterObject.length == 0) {

			Footer = '<div class="ip_FooterDialog"><div class="ip_FooterDialog_Text"></div></div>';
			$(self).append(Footer);
			FooterObject = $(self).children('.ip_FooterDialog')[0]; // $('.ip_FooterDialog')[0];

		}
		else { FooterObject = FooterObject[0]; }

		if (options.cssClass) {
		    $(FooterObject).attr('class', 'ip_FooterDialog');		    
		    $(FooterObject).addClass(options.cssClass);
		}
		$(FooterObject).children('.ip_FooterDialog_Text').html(options.Message);
		$(FooterObject).css('background-color', options.BackColor);

		$(FooterObject).slideDown(200);

		self.ip_ShowFooterAlert_Timeout_JQ = setTimeout(function () { $(FooterObject).slideUp(200); }, options.Duration);

	});
}
