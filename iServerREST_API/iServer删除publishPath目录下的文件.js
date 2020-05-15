
//服务类型：RESTDATA、RESTMAP、RESTSPATIALANALYST、RESTTRAFFICTRANSFERANALYST、REST_NETWORKANALYST3D
//数据类型：dataType=UDB、WORKSPACE、GEOJSON 指定数据类型的时候，如果是CSV或者excel一般会连带指定其分割符号、坐标索引。
            //CSV&separator={separator}&xIndex={xIndex}&yIndex={yIndex}
            //EXCEL&xIndex={xIndex}&yIndex={yIndex}
{//文件上传，传到publishPath里
    url = "http://localhost:8090/iserver/manager/filemanager/uploadtasks.rjson"
    token = "&token=Xxn7OodWhZjXhiJCEaXG2A4Z-7mlLJ52i6hfioJkfGXQ38qavH5qTicvoc4tVFuZO32ZiJJbvnVLF4_y1uy01Q.."
    request = {
        "path": "D:/data/SuperMapUDB/China/native.zip"
    }

    request = toJSON(request)

    function toJSON(o) {
        /// <summary>Converts object into JSON string.</summary>
        /// <param name="o" type="Object">The object to be converted into JSON string.</param>
        /// <returns type="Object">The JSON string after conversion.</returns>
        if (o == null)
            return "null";

        switch (o.constructor) {
            case String:
                var s = o; // .encodeURI();
                s = '"' + s.replace(/(["\\])/g, '\\$1') + '"';
                s = s.replace(/\n/g, "\\n");
                s = s.replace(/\r/g, "\\r");
                s = s.replace(/</g, "&lt;");
                s = s.replace(/>/g, "&gt;");
                s = s.replace(/%/g, "%25");
                s = s.replace(/&/g, "%26");
                return s;
            case Array:
                var v = [];
                for (var i = 0; i < o.length; i++)
                    v.push(toJSON(o[i]));
                return "[" + v.join(", ") + "]";
            case Number:
                return isFinite(o) ? o.toString() : toJSON(null);
            case Boolean:
                return o.toString();
            case Date:
                var d = new Object();
                d.__type = "System.DateTime";
                d.Year = o.getUTCFullYear();
                d.Month = o.getUTCMonth() + 1;
                d.Day = o.getUTCDate();
                d.Hour = o.getUTCHours();
                d.Minute = o.getUTCMinutes();
                d.Second = o.getUTCSeconds();
                d.Millisecond = o.getUTCMilliseconds();
                d.TimezoneOffset = o.getTimezoneOffset();
                return toJSON(d);
            default:
                if (o["toJSON"] != null && typeof o["toJSON"] == "function")
                    return o.toJSON();
                if (typeof o == "object") {
                    if (o.length) {
                        var v = [];
                        for (var i = 0; i < o.length; i++)
                            v.push(toJSON(o[i]));
                        return "[" + v.join(", ") + "]";
                    }
                    var v = [];
                    for (attr in o) {
                        if (typeof o[attr] != "function")
                            v.push('"' + attr + '":' + toJSON(o[attr]));
                    }

                    if (v.length > 0)
                        return "{" + v.join(", ") + "}";
                    else
                        return "{}";
                }

                return o.toString();
        }
    };





    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            console.log(xmlhttp.responseText)
        }
    }
    xmlhttp.open("POST", url + token, true);
    xmlhttp.send(request);
}

{   //从工作空间发布服务。
    url = "http://localhost:8090/iserver/manager/workspaces.rjson"
    token = "&token=Xxn7OodWhZjXhiJCEaXG2A4Z-7mlLJ52i6hfioJkfGXQ38qavH5qTicvoc4tVFuZO32ZiJJbvnVLF4_y1uy01Q.."
    request = {
        "workspaceConnectionInfo": "D:/uploadtest/China33.smwu",
        "servicesTypes": ["RESTMAP"],
        "isDataEditable": false,
        "mapEditable": true,
        "isMultiInstance": false,
        "instanceCount": 0,
        "dataProviderDelayCommitSetting": null
    }

    request = toJSON(request)

    function toJSON(o) {
        /// <summary>Converts object into JSON string.</summary>
        /// <param name="o" type="Object">The object to be converted into JSON string.</param>
        /// <returns type="Object">The JSON string after conversion.</returns>
        if (o == null)
            return "null";

        switch (o.constructor) {
            case String:
                var s = o; // .encodeURI();
                s = '"' + s.replace(/(["\\])/g, '\\$1') + '"';
                s = s.replace(/\n/g, "\\n");
                s = s.replace(/\r/g, "\\r");
                s = s.replace(/</g, "&lt;");
                s = s.replace(/>/g, "&gt;");
                s = s.replace(/%/g, "%25");
                s = s.replace(/&/g, "%26");
                return s;
            case Array:
                var v = [];
                for (var i = 0; i < o.length; i++)
                    v.push(toJSON(o[i]));
                return "[" + v.join(", ") + "]";
            case Number:
                return isFinite(o) ? o.toString() : toJSON(null);
            case Boolean:
                return o.toString();
            case Date:
                var d = new Object();
                d.__type = "System.DateTime";
                d.Year = o.getUTCFullYear();
                d.Month = o.getUTCMonth() + 1;
                d.Day = o.getUTCDate();
                d.Hour = o.getUTCHours();
                d.Minute = o.getUTCMinutes();
                d.Second = o.getUTCSeconds();
                d.Millisecond = o.getUTCMilliseconds();
                d.TimezoneOffset = o.getTimezoneOffset();
                return toJSON(d);
            default:
                if (o["toJSON"] != null && typeof o["toJSON"] == "function")
                    return o.toJSON();
                if (typeof o == "object") {
                    if (o.length) {
                        var v = [];
                        for (var i = 0; i < o.length; i++)
                            v.push(toJSON(o[i]));
                        return "[" + v.join(", ") + "]";
                    }
                    var v = [];
                    for (attr in o) {
                        if (typeof o[attr] != "function")
                            v.push('"' + attr + '":' + toJSON(o[attr]));
                    }

                    if (v.length > 0)
                        return "{" + v.join(", ") + "}";
                    else
                        return "{}";
                }

                return o.toString();
        }
    };





    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            console.log(xmlhttp.responseText)
        }
    }
    xmlhttp.open("POST", url + token, true);
    xmlhttp.send(request);
}

{   //验证数据是否可用。response：数据类型。
    url = "http://localhost:8090/iserver/manager/validation.json?returnContent=true&_t=1589261082842"
    token = "&token=Xxn7OodWhZjXhiJCEaXG2A4Z-7mlLJ52i6hfioJkfGXQ38qavH5qTicvoc4tVFuZO32ZiJJbvnVLF4_y1uy01Q.."
    request = { "type": "DATASTOREDATA", "value": "http://localhost:8090/iserver/services/datacatalog/rest/datacatalog/relationship/datas/5255fef0b6297a27a4b483e87b5f9f2a_702841c1_53b2_4147_9f18_904e6d07b47b" }
    request = toJSON(request)
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            console.log(xmlhttp.responseText)
        }
    }
    xmlhttp.open("POST", url + token, true);
    xmlhttp.send(request);//
}


{   //添加数据集。  //参数还要根据反馈进行一点修改
    url = "http://localhost:8090/iserver/services/datacatalog/rest/datacatalog/relationship/datasets.rjson"
    token = "&token=Xxn7OodWhZjXhiJCEaXG2A4Z-7mlLJ52i6hfioJkfGXQ38qavH5qTicvoc4tVFuZO32ZiJJbvnVLF4_y1uy01Q.."
    request = {
        "prjCoordSys":
        {
            "distanceUnit": "METER",
            "projectionParam": null,
            "epsgCode": 4326,
            "coordUnit": "DEGREE",
            "name": "Longitude / Latitude Coordinate System---GCS_WGS_1984",
            "projection": null,
            "type": "PCS_EARTH_LONGITUDE_LATITUDE",
            "coordSystem":
            {
                "datum":
                {
                    "name": "D_WGS_1984",
                    "type": "DATUM_WGS_1984",
                    "spheroid":
                    {
                        "flatten": 0.00335281066474748,
                        "name": "WGS_1984", "axis": 6378137,
                        "type": "SPHEROID_WGS_1984"
                    }
                },
                "unit": "DEGREE",
                "spatialRefType": "SPATIALREF_EARTH_LONGITUDE_LATITUDE",
                "name": "GCS_WGS_1984", "type": "GCS_WGS_1984",
                "primeMeridian":
                {
                    "longitudeValue": 0,
                    "name": "Greenwich",
                    "type": "PRIMEMERIDIAN_GREENWICH"
                }
            }
        },
        "name": "test1",
        "type": "POINT",
        "charset": "",
        "isFileCache": "",
        "description": ""
    }

    request = toJSON(request)

    function toJSON(o) {
        /// <summary>Converts object into JSON string.</summary>
        /// <param name="o" type="Object">The object to be converted into JSON string.</param>
        /// <returns type="Object">The JSON string after conversion.</returns>
        if (o == null)
            return "null";

        switch (o.constructor) {
            case String:
                var s = o; // .encodeURI();
                s = '"' + s.replace(/(["\\])/g, '\\$1') + '"';
                s = s.replace(/\n/g, "\\n");
                s = s.replace(/\r/g, "\\r");
                s = s.replace(/</g, "&lt;");
                s = s.replace(/>/g, "&gt;");
                s = s.replace(/%/g, "%25");
                s = s.replace(/&/g, "%26");
                return s;
            case Array:
                var v = [];
                for (var i = 0; i < o.length; i++)
                    v.push(toJSON(o[i]));
                return "[" + v.join(", ") + "]";
            case Number:
                return isFinite(o) ? o.toString() : toJSON(null);
            case Boolean:
                return o.toString();
            case Date:
                var d = new Object();
                d.__type = "System.DateTime";
                d.Year = o.getUTCFullYear();
                d.Month = o.getUTCMonth() + 1;
                d.Day = o.getUTCDate();
                d.Hour = o.getUTCHours();
                d.Minute = o.getUTCMinutes();
                d.Second = o.getUTCSeconds();
                d.Millisecond = o.getUTCMilliseconds();
                d.TimezoneOffset = o.getTimezoneOffset();
                return toJSON(d);
            default:
                if (o["toJSON"] != null && typeof o["toJSON"] == "function")
                    return o.toJSON();
                if (typeof o == "object") {
                    if (o.length) {
                        var v = [];
                        for (var i = 0; i < o.length; i++)
                            v.push(toJSON(o[i]));
                        return "[" + v.join(", ") + "]";
                    }
                    var v = [];
                    for (attr in o) {
                        if (typeof o[attr] != "function")
                            v.push('"' + attr + '":' + toJSON(o[attr]));
                    }

                    if (v.length > 0)
                        return "{" + v.join(", ") + "}";
                    else
                        return "{}";
                }

                return o.toString();
        }
    };





    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            console.log(xmlhttp.responseText)
        }
    }
    xmlhttp.open("POST", url + token, true);
    xmlhttp.send(request);//
}

{   //添加数据集。  //参数还要根据反馈进行一点修改
    url = "http://localhost:8090/iserver/services/datacatalog/rest/datacatalog/relationship/datasets.rjson"
    token = "&token=Xxn7OodWhZjXhiJCEaXG2A4Z-7mlLJ52i6hfioJkfGXQ38qavH5qTicvoc4tVFuZO32ZiJJbvnVLF4_y1uy01Q.."
    request = {
        "prjCoordSys":
        {
            "distanceUnit": "METER",
            "projectionParam": null,
            "epsgCode": 4326,
            "coordUnit": "DEGREE",
            "name": "Longitude / Latitude Coordinate System---GCS_WGS_1984",
            "projection": null,
            "type": "PCS_EARTH_LONGITUDE_LATITUDE",
            "coordSystem":
            {
                "datum":
                {
                    "name": "D_WGS_1984",
                    "type": "DATUM_WGS_1984",
                    "spheroid":
                    {
                        "flatten": 0.00335281066474748,
                        "name": "WGS_1984", "axis": 6378137,
                        "type": "SPHEROID_WGS_1984"
                    }
                },
                "unit": "DEGREE",
                "spatialRefType": "SPATIALREF_EARTH_LONGITUDE_LATITUDE",
                "name": "GCS_WGS_1984", "type": "GCS_WGS_1984",
                "primeMeridian":
                {
                    "longitudeValue": 0,
                    "name": "Greenwich",
                    "type": "PRIMEMERIDIAN_GREENWICH"
                }
            }
        },
        "name": "test1",
        "type": "POINT",
        "charset": "",
        "isFileCache": "",
        "description": ""
    }

    request = toJSON(request)

    function toJSON(o) {
        /// <summary>Converts object into JSON string.</summary>
        /// <param name="o" type="Object">The object to be converted into JSON string.</param>
        /// <returns type="Object">The JSON string after conversion.</returns>
        if (o == null)
            return "null";

        switch (o.constructor) {
            case String:
                var s = o; // .encodeURI();
                s = '"' + s.replace(/(["\\])/g, '\\$1') + '"';
                s = s.replace(/\n/g, "\\n");
                s = s.replace(/\r/g, "\\r");
                s = s.replace(/</g, "&lt;");
                s = s.replace(/>/g, "&gt;");
                s = s.replace(/%/g, "%25");
                s = s.replace(/&/g, "%26");
                return s;
            case Array:
                var v = [];
                for (var i = 0; i < o.length; i++)
                    v.push(toJSON(o[i]));
                return "[" + v.join(", ") + "]";
            case Number:
                return isFinite(o) ? o.toString() : toJSON(null);
            case Boolean:
                return o.toString();
            case Date:
                var d = new Object();
                d.__type = "System.DateTime";
                d.Year = o.getUTCFullYear();
                d.Month = o.getUTCMonth() + 1;
                d.Day = o.getUTCDate();
                d.Hour = o.getUTCHours();
                d.Minute = o.getUTCMinutes();
                d.Second = o.getUTCSeconds();
                d.Millisecond = o.getUTCMilliseconds();
                d.TimezoneOffset = o.getTimezoneOffset();
                return toJSON(d);
            default:
                if (o["toJSON"] != null && typeof o["toJSON"] == "function")
                    return o.toJSON();
                if (typeof o == "object") {
                    if (o.length) {
                        var v = [];
                        for (var i = 0; i < o.length; i++)
                            v.push(toJSON(o[i]));
                        return "[" + v.join(", ") + "]";
                    }
                    var v = [];
                    for (attr in o) {
                        if (typeof o[attr] != "function")
                            v.push('"' + attr + '":' + toJSON(o[attr]));
                    }

                    if (v.length > 0)
                        return "{" + v.join(", ") + "}";
                    else
                        return "{}";
                }

                return o.toString();
        }
    };





    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            console.log(xmlhttp.responseText)
        }
    }
    xmlhttp.open("POST", url + token, true);
    xmlhttp.send(request);//
}


{   //本地数据文件上传到数据服务目录。script添加一个文件上传dom，添加jquery引用。
    {/* <script src="https://code.jquery.com/jquery-2.2.4.min.js" integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44="
        crossorigin="anonymous"></script>
    <input id="fileupload" type="file" name="files[]" data-url="http://localhost:8090/iserver/services/datacatalog/rest/datacatalog/relationship/dataimport.json"></input> */}
   
    url = "http://localhost:8090/iserver/services/datacatalog/rest/datacatalog/relationship/dataimport.json?dataType=SHP"
    token = "&token=Xxn7OodWhZjXhiJCEaXG2A4Z-7mlLJ52i6hfioJkfGXQ38qavH5qTicvoc4tVFuZO32ZiJJbvnVLF4_y1uy01Q.."
    ww = document.querySelector('#fileupload').files[0];
    var formFile = new FormData();
    formFile.append("files", ww);
    $.ajax({
        type: "POST",
        url: url + token,
        data: formFile,
        processData: false,
        contentType: false,
        dataType: "JSON",
        success: function (result) {
            Console.log("ajax success")
            Console.log(result)
        }
    })

}



