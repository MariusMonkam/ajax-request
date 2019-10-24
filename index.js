var data;
//call new XMLhttpRequest
var request = new XMLHttpRequest();
//open call prepare request
//how we are going to send (get) and which file (data.json)
request.open('GET','data.json')

//track the request 

request.onreadystatechange = function(){
  //check the result
  if(
    request.status === 200 && 
    request.readyState === 4 //every thing is ok
  ){
    //convert the data to json
    data=JSON.parse(request.responseText);
    console.log(data);
    console.log(request);
    $.each(data.prizes,function(key,val){
      $('.prize-nobel')
      .append('<li>'+ val.year  +  val.category  + '</li>')
    })
    
  }
}

//send Call
request.send();