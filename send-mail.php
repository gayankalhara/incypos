<?php

$json_data = '{  
   "transactions":[  
      {  
         "inserts":[  
            {  
               "columns":[  
                  "name",
                  "contact_number",
                  "email",
				  "intention"

               ],
               "tableName":"customer",
               "values":[  
                    "' . $_POST['name'] .'",
                    "' . $_POST['phone'] . '",
                    "' . $_POST['email'] . '",
                    "call-to-action"
               ]
            }
         ]
      }
   ],
   "databaseName":"incy"
}';


$url = 'http://192.168.1.109:9000/sync';

echo $json_data;

$post = file_get_contents('http://192.168.1.109:9000/sync',null,stream_context_create(array(
    'http' => array(
        'protocol_version' => 1.1,
        'user_agent'       => 'PHPExample',
        'method'           => 'POST',
        'header'           => "Content-type: application/jsonrn".
                              "Connection: closern" .
                              "Content-length: " . strlen($json_data) . "rn",
        'content'          => $json_data,
    ),
)));

if ($post) {
    echo $post;
} else {
    echo "POST failed";
}

?>