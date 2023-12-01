var div=document.createElement("div");
div.style.textAlign="center";

var input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","state");
input.placeholder="California";

var button=document.createElement("button");
button.setAttribute("type","button");
button.classList.add("btn","btn-primary");
button.innerHTML="Search";
button.style.marginLeft="5px";
button.addEventListener("click",foo);

var container=document.createElement("div");
container.className="container";
container.style.backgroundColor="grey"

var row=document.createElement("div");
// row.className="row";
row.classList.add("row","m-3");

div.append(input,button);

container.append(row);

async function foo(){
    
    let res=document.getElementById("state").value;
    console.log(res);
    let res1=await fetch(`https://api.openbrewerydb.org/v1/breweries/search?query=${res}`);
    let res2=await res1.json();
    console.log(res2);
    
    for(var i=0;i<=20;i++){
        try{
        row.innerHTML+=`<div class="col-md-4">
        <div class="card text-bg-secondary mb-3" style="max-width: 18rem; font-weight:bold; margin:20px; font-family:TIMES NEW ROMEN">
        <div class="card-header" style="background-color:blue;">State : ${res2[i].state} </div>
        <div class="card-body">
        <h5 class="card-title">Name:${res2[i].name}<br>Type: ${res2[i].brewery_type}</h5>
        <p class="card-text">Address: ${res2[i].address_1}<br>Phone Num:${res2[i].phone}<br>Website URL:${res2[i].website_url}<br></p>
        </div>
        </div>
        </div>`
    }
    catch(error){
        console.log(error)
    }
  }
  
}
foo()
document.body.append(div,container);