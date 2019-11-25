var obj = $response.body;
var met = $request.method;
var url = $request.url;

const vip = '/api/v2/readings/limitation';
const time = '/api/v2/readings/accessible';

if (met == "GET"){
    if (url.indexOf(vip) != -1) {
    obj = {
    "modules": [],
    "auditionDuration": 7200
          };
     }
}

if (met == "GET"){
    if (url.indexOf(time) != -1) {
    obj = {
    "from": 1482071586,
    "to": 1671373986,
    "ids": []
           };
      }
}
$done({body: JSON.stringify(obj)});