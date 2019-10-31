/**
 * @supported 23AD6B11 55BE3B10 63ED6F86
 */
//Customize whitelist by onewayticket255
let whitelist=['追番','推荐','直播','热门','影视']

let body = $response.body
body=JSON.parse(body)

body['data']['tab'].forEach((element, index) => {
if(!(whitelist.includes(element['name']))) body['data']['tab'].splice(index,1)  
});

body['data']['bottom'].forEach((element, index)=> {
    if(element['pos']==4){      
       body['data']['bottom'].splice(index,1)  
    }
})

body=JSON.stringify(body)
$done({body}) 