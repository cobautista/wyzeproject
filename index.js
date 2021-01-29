var wyzeData = [

    ["App","Account","Cannot Login"],
    ["App","Account","Password Reset Issue"],
    ["App","Account","2FA Issue"],
    ["App","Notification","No Notification"],
    ["App","Notification","Late/Delayed Notification"],
    ["App","Notification","Missing Notification"],
    ["App","Notification","Too Many Notification"],
    ["App","Notification","Other"],
    ["App","Rules","Schedules Not Working"],
    ["App","Rules","Shortcuts Not Working"],
    ["App","Rules","Device Trigger Not Working"],
    ["App","Sharing","Cannot Share with New User"],
    ["App","Sharing","Cannot Share with Existing User"],
    ["Band","Setup","Never Setup"],
    ["Band","Setup","Failed Setup"],
    ["Band","Connectivity","No notification"],
    ["Band","Connectivity","Bluetooth"],
    ["Band","Connectivity","Others"],
    ["Beta Program","Cannot Install app","Not Available"],
    ["Beta Program","User Full (iOS)","Others"],
    ["Bulb","Setup","Never Setup"],
    ["Bulb","Setup","Failed Setup"],
    ["Bulb","Connectivity","Offline"],
    ["Bulb","Connectivity","Internet of Things"],
    ["Bulb","Light Quality","Flickering"],
    ["Bulb","Light Quality","Missing Color"],
    ["Bulb","Light Quality","Random On/Off"],
      

];

function makeDropDown(data,level1Filter){

    const filteredArray = filterArray(data,[level1Filter]);
    const uniqueList = getUniqueValues(filteredArray,1)
    const selectLevel2 = document.getElementById("level2");
    populateDropDown(selectLevel2,uniqueList);

}

/*makeDropDown(wyzeData,"Band");*/

function applyDropDown() {
   const selectLevel1Value = document.getElementById("level1").value;
   makeDropDown(wyzeData,selectLevel1Value);
}

function afterDocumentLoads(){
    populateFirstLevelDropDown();
    applyDropDown();

}

function getUniqueValues(data,index){
    const uniqueOptions = new Set();
    data.forEach(r => uniqueOptions.add(r[index]));
    return [...uniqueOptions];
}

function populateFirstLevelDropDown(){

    const uniqueList = getUniqueValues(wyzeData,0);
    const el = document.getElementById("level1")
    populateDropDown(el,uniqueList);

}

function populateDropDown(el,listAsArray){
    el.innerHTML = "";

    listAsArray.forEach(item => {
        const option = document.createElement("option");
        option.textContent = item;
        el.appendChild(option);    

    });

}
/* argument for filter 30:22*/

function filterArray(data,filtersAsArray){

  return data.filter(r => filtersAsArray.every((item,i) => item === r[i]));

}


document.getElementById("level1").addEventListener("change",applyDropDown);
document.addEventListener("DOMContentLoaded",afterDocumentLoads);




