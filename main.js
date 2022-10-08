prediction_1 = ""

Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');


function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>';
    });
}

console.log('ml5 version:', ml5.version);


classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/GQ1DASNNq/model.json", model_Loaded);

function model_Loaded(){

    console.log("Model is Loaded");
}
 
function predict(){

    img = document.getElementById("snapshot");

    classifier.classify(img, got_results);
}

function got_results(error, results){
    if (error){
      console.error(error);
    } else{
        console.log(results);
        prediction1 = results[0].label;

        document.getElementById("status").innerHTML = prediction1;
    
        if (prediction1 == "Not Wearing"){

            document.getElementById("update_emoji").innerHTML = "&#x26d4;";
        }
        else if (prediction1 == "Wearing"){

            document.getElementById("update_emoji").innerHTML = "&#x1F637;";
        }
        else if (prediction1 == "Half weared"){

            document.getElementById("update_emoji").innerHTML = "&#x1F637;";
        }
        else if (prediction1 == "Removed"){

            document.getElementById("update_emoji").innerHTML = "&#x26d4;";
        }
        else if (prediction1 == "Not Wearing 2"){

            document.getElementById("update_emoji").innerHTML = "&#x26d4;";
        }
     }

    }