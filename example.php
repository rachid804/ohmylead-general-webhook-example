<?php

$client = new http\Client;
$request = new http\Client\Request;

$body = new http\Message\Body;
$body->append('{
  "first_name": "John",
  "lastt_name": "Doe",
  "email": "john.doe@example.com",
  "phone": "+212600000000",
  "custom1": "Custom 1",
  "custom2": "Custom 2"
}');

$request->setRequestUrl('https://app.ohmylead.com/webhooks/0a89f8b6-70e2-4bcc-8fc2-536d3fc69ef9');
$request->setRequestMethod('POST');
$request->setBody($body);

$request->setHeaders(array(
  'content-type' => 'application/json',
  'accept' => 'application/json'
));


$client->enqueue($request)->send();
$response = $client->getResponse();

echo $response->getBody();