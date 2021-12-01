var btn=document.getElementById('btn-translate');
var input=document.querySelector('#txtarea');
var output=document.getElementById('output');
var url="https://api.funtranslations.com/translate/ferb-latin.json";

function constructUrl(text)
{
    return url+"?"+"text="+text;
}

btn.addEventListener("click",function translateit(){
    var data=input.value;
    output.innerText="Translated :"
    fetch(constructUrl(data))
    .then(response=>response.json())
    .then(json=>{
        var tranlate_text=json.contents.translated;
        output.innerText=tranlate_text;
    });

})
