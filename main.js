//https://teachablemachine.withgoogle.com/models/SBVDTjI5m/
function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/ov4DRVbLv/model.json',modelready);
}
function modelready(){
    classifier.classify(gotResults);
}