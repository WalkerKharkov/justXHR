var jXHR = {
    get: function() {
        var query;
        try {
            query = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            try {
                query = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (e) {
                query = false;
            }
        }
        if (!query && typeof XMLHttpRequest != 'undefined') {
            query = new XMLHttpRequest();
        }
        return query;
    },

};
