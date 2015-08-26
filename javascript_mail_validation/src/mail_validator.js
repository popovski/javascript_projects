	var isValidEmailAddress = function(email, delim) {
        var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        
        if (typeof delim == 'string') {
        	var emails = email.split(delim);
        	for (var i = 0; i < emails.length; i++) {
        		emails[i] = $.trim(emails[i]);
        		
        		if (!regex.test(emails[i])) {
        			return false;
        		}
        	}
        	return true;
        }
        //if there is no delimiter, we still need to trim the email
        return regex.test($.trim(email));
    };