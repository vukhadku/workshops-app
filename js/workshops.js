(function () {
    const workshoplist = document.querySelector('#workshops-list');
    const fetchmessage =document.querySelector("#fetch-message");

    function fetchworkshops(){
        return axios.get(`https://workshops-server.herokuapp.com/workshops`)
                .then(response =>{
                    console.log(response.data)
                    return response.data;
                })
                .catch(error => {
                    console.log(error.message)
                });
    }
    function addworkshop(workshop){
        workshoplist.innerHTML= workshoplist.innerHTML +`<li class="col my-3">
        <div class="card">
            <img src ="${workshop.imageUrl}" class ="img-fluid"/>
        <h2 class="text-center">${workshop.name}</h2>
        <div>
            <small> <span class="date">${workshop.startDate}</span> --<span class="date">${workshop.endDate}</span></small>
        </div>
        <div>
            <small>
                <span>${workshop.time}</span>
            </small>
            
        </div>
        <div class="my-3">
            
                <span> ${workshop.location.address}</span>,
                <span>${workshop.location.city}</span>,
                <span>${workshop.location.state}</span>
        </div>
        
        <div>
            ${workshop.description}
        </div>
        
        
        </div>
        
        </li>`
    }
    function addworkshops(workshops){
        console.log("Reached here successfully")
        //workshops.forEach(workshop => addworkshop(workshop));
        for(let i=0;i<workshops.length;i++){
            addworkshop(workshops[i])
        }
    }

    function showFetchMessage(message,theme){
        fetchmessage.innerHTML=message
        fetchmessage.style.display='block';
        fetchmessage.className=`message message-${theme}`

    }

    function hideFetchMessage(){
        fetchmessage.style.display="none"
    }
   function init (){  // non blocking code , ajax request.
        showFetchMessage('Loading Message','info')
        fetchworkshops()
       .then(workshops => {
           addworkshops(workshops)  
           hideFetchMessage();
       })
       .catch(error => {showFetchMessage(error.message,'error')}) 
   }
   init();
    
}());