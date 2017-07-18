function GET_WebResource_PARAMETER(paramName) {
    //Get the any query string parameters and load them
    //into the vals array

    var vals = new Array();
    if (location.search != "") {
        vals = location.search.substr(1).split("&");
        for (var i in vals) {
            vals[i] = vals[i].replace(/\+/g, " ").split("=");
        }
        //look for the parameter named 'data'
        for (var i in vals) {
            if (vals[i][0].toLowerCase() == "data") {
                return parseDataValue(vals[i][1], paramName);
                break;
            }
        }
    }
    return 0;
}
function parseDataValue(datavalue, paramName) {
    if (datavalue != "") {
        var vals = new Array();

        vals = decodeURIComponent(datavalue).split("&");
        for (var i in vals) {
            vals[i] = vals[i].replace(/\+/g, " ").split("=");

            if (vals[i][0] == paramName) {
                return vals[i][1];
            }
        }
    }
    return 0;
}