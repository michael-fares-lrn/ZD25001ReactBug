
// Backend with Node SDK to sign items API request
const Learnosity = require('learnosity-sdk-nodejs');
const config = require('./config'); // Load consumer key & secret from config.js

const domain = 'localhost';
const uuid = require('uuid');
const learnositySdk = new Learnosity(); // Instantiate the SDK    

export async function getAssessment() {
  
    const user_id = "$ANONYMIZED_USER_ID";
    const session_id = uuid.v4();


    const error10001_request = {
        "user_id": user_id,
        "session_id": session_id,
        "activity_id": "Demo Activtiy",
        "rendering_type": "assess",
        "type": "submit_practice",
        "name": "Demo",
        "config": {
            "regions": "main",
        },
        "items":["Demo3","Demo4","Demo5","Demo7","Demo8","Demo9", "LEAR_Essay_Demo"]
    }

    const error10020_request = {
        "user_id": user_id,
        "session_id": session_id,
        "activity_id": "Demo Activtiy",
        "rendering_type": "assess",
        "type": "submit_practice",
        "name": "Demo",
        "config": {
            "regions": {
                "items": [
                    {
                      "type": "vertical_element",
                    }
                  ]
            },
            "configuration": {
                "lazyload": true
            }
        },
        "items":["Demo3","Demo4","Demo5","Demo7","Demo8","Demo9", "LEAR_Essay_Demo"]
    }


    // Items API configuration parameters.
    const signedRequest = learnositySdk.init(
        'items',                              
        {
            consumer_key: config.consumerKey, 
            domain: domain                  
        },
        config.consumerSecret,
        // change the below to error10020_request OR error_10001_request to reproduce the given "Activity JSON Poorly formed." error dialog
        // We should not show this dialog to the user. It should be a console error only.               
        error10001_request

    );
    return signedRequest;
}




