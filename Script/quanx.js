/*
#远程引用大佬Js 订阅
[rewrite]
^https:\/\/(raw.githubusercontent|\w+\.github)\.(com|io)\/.*\.js$ url script-response-body quanx.js

[Mitm]
raw.githubusercontent.com, *.github.io, 

本地只需放置一个脚本
*/

var body = $response.body;
body = '\/*\n@supported 063C1F321B94 55BE3B10 63ED6F86\n*\/\n' + body;

$done(body);