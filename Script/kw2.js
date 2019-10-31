/**
 * @supported 23AD6B11 55BE3B10 63ED6F86
 */
var body = $response.body;
var obj = JSON.parse(body);

obj["isVIPMAutoPay"] = 2;
obj["isVIPLuxAutoPay"] = 2;
body = JSON.stringify(obj);
$done(body);
