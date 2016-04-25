/**
 * Created by navalaks on 4/15/16.
 */
// var express = require('express');
// var app = express();
// var path = require('path');
// var bodyParser = require('body-parser');
// var fs = require('fs');
// var readline = require('readline');
// var google = require('googleapis');
// var googleAuth = require('google-auth-library');
// var gmailClass = google.gmail('v1');

var server_port = process.env.OPENSHIFT_NODEJS_PORT || 9000;
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';

// var OAuth2 = google.auth.OAuth2;

var http = require("http");

http.createServer(function (request, response) {

    // Send the HTTP header
    // HTTP Status: 200 : OK
    // Content Type: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});

    // Send the response body as "Hello World"
    response.end('Hello World Swap!!\n');
}).listen(server_port,server_ip_address);

// Console will print the message
//console.log('Server running at http://127.0.0.1:8081/');

// var cs = {"installed":{"client_id":"518447872291-fc17kc3q22j0mesojn36gtmp2jj1m34q.apps.googleusercontent.com","project_id":"carbon-sensor-128208","auth_uri":"https://accounts.google.com/o/oauth2/auth","token_uri":"https://accounts.google.com/o/oauth2/token","auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs","client_secret":"UClyvwfJbYlhfUwNmd2iU3RV","redirect_uris":["urn:ietf:wg:oauth:2.0:oob","http://localhost"]}};
//
// var oauth2Client = new OAuth2(cs.installed.client_id, cs.installed.client_secret, cs.installed.redirect_uris);
//
//
//
// // generate a url that asks permissions for Google+ and Google Calendar scopes
// var scopes = [
//     'https://www.googleapis.com/auth/gmail.send'
// ];
//
// var url = oauth2Client.generateAuthUrl({
//     access_type: 'online', // 'online' (default) or 'offline' (gets refresh_token)
//     scope: scopes // If you only need one scope you can pass it as string
// });
//
// oauth2Client.setCredentials({"access_token":"ya29..xwLO8dFA7dJ5nkyqQgmRdY2Wms-DY88wbTp2CkWx7Tl_973-JQE_dz8qNUisgcbpbw","token_type":"Bearer","refresh_token":"1/f3Em-1fw1In34m6JHNYYLhGiKie4-fpepMNmnAeEvHAMEudVrK5jSpoR30zcRFq6","expiry_date":1460897395904});
// google.options({ auth: oauth2Client });
//
// app.use(bodyParser.json());
// app.use("/css", express.static(__dirname + '/css'));
// app.use("/images", express.static(__dirname + '/images'));
// app.use(bodyParser.urlencoded({ extended: false }));
//
//
//
// // app.get('/', function (req, res) {
// //     res.sendFile(path.join(__dirname + '/index.html'));
// // });
//
// // app.listen(server_port, server_ip_address, function () {
// // });
//
// function sendSampleMail(cb) {
//     var gmailClass = google.gmail('v1');
//
//     var email_lines = [];
//     email_lines.push('From: "test" <swapnilnavalakha2010@gmail.com>');
//     email_lines.push('To: sagarn.pune@gmail.com');
//     email_lines.push('Content-type: text/html;charset=iso-8859-1');
//     email_lines.push('MIME-Version: 1.0');
//     email_lines.push('Subject: Testing email send');
//     email_lines.push('');
//     email_lines.push('And this would be the content.<br/>');
//     email_lines.push('The body is in HTML so <b>we could even use bold</b>');
//
//     var email = email_lines.join('\r\n').trim();
//
//     var base64EncodedEmail = new Buffer(email).toString('base64');
//     base64EncodedEmail = base64EncodedEmail.replace(/\+/g, '-').replace(/\//g, '_');
//
//         gmailClass.users.messages.send({
//             auth : oauth2Client,
//             userId: 'me',
//             resource: {
//             raw: base64EncodedEmail
//         }
//     }, cb);
// }
// app.post('/contact',function(req, res){
//     sendSampleMail(function(r){
//        console.log(r);
//         res.redirect('/');
//     });
// });
