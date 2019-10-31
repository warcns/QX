/**
 * @supported 23AD6B11 55BE3B10 63ED6F86
 */
var obj = JSON.parse($response.body);
obj.body = null;
$done({body: JSON.stringify(obj)}); 