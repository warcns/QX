/**
 * @supported 23AD6B11 55BE3B10 63ED6F86
 */
let body = $response.body
body=JSON.parse(body)
delete body['data']['notice']
body=JSON.stringify(body)
$done({body})
