/**
 * @supported 23AD6B11 55BE3B10 63ED6F86
 */
let body = $response.body 
body=JSON.parse(body)
body['sub_webs'].splice(0,1)
body['sub_webs'].splice(1,1)
body=JSON.stringify(body)
$done({body})
