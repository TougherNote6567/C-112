prediction_1 = "";
prediction_2 = "";

Webcam.set({
    width:300,
    height:350,
    image_format:"png",
    png_quality:90
});

wc = document.getElementById("something_something");

Webcam.attach(wc);

function capture(){
    Webcam.snap(function(data_uri){
        document.getElementById("pictr").innerHTML = '<img id="Ya" src="'+data_uri+'">';
    });
}
console.log("ml5 version", ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/-OofrCp0C/model.json", model_loaded);

function model_loaded(){
    console.log("Model has been intialized and authorized by NOV-8");
}

function speak(){
    
    
    var synth = window.speechSynthesis;
    var speak_data1 = "Prediction 1 is" + prediction_1;
    var speak_data2 = "Prediction 2 is" + prediction_2;
    var utterThis = new SpeechSynthesisUtterance(speak_data1+ speak_data2);
    synth.speak(utterThis);

}

function emotion(){
    img = document.getElementById("Ya");
    classifier.classify(img , gotResult);

}

function gotResult(error, results){
    if(error){
console.error(error);
    }
    else{
      console.log(results);  
      document.getElementById("eN1").innerHTML = results[0].label;
      document.getElementById("eN2").innerHTML = results[1].label;
      prediction_1 = results[0].label;
      prediction_2 = results[1].label;
      speak();

      if(results[0].label == "Happy"){
document.getElementById("eE1").innerHTML = "&#128516;";
      }

    if(results[0].label == "Sad"){
document.getElementById("eE1").innerHTML = "&#128552;";
    }

    if(results[0].label == "Angry"){
document.getElementById("eE1").innerHTML = "&#128545;";
    }

    if(results[0].label == "Victory"){
document.getElementById("eE1").innerHTML = "&#9996;";
    }

    if(results[1].label == "Happy"){
        document.getElementById("eE2").innerHTML = "&#128516;";
              }
        
            if(results[1].label == "Sad"){
        document.getElementById("eE2").innerHTML = "&#128552;";
            }
        
            if(results[1].label == "Angry"){
        document.getElementById("eE2").innerHTML = "&#128545;";
            }
        
            if(results[1].label == "Victory"){
        document.getElementById("eE2").innerHTML = "&#9996;";
            }
    }
}