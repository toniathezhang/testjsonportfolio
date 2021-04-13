let projList = [
    {
      "title" : "Finding Our Way at NYUAD",
      "imgSrc" : "imgs/proj4.png",
      "bgcolor" : "white",
      "year" : "2020",
      "desc": "a collection of student works about accessibility&wayfinding on our campus",
    },
    {
      "title" : "NYUAD Design Archive",
      "imgSrc" : "imgs/proj1.png",
      "bgcolor" : "white",
      "year" : "2021",
      "desc": "a website showcasing the best design work on NYUAD campus",
    },
    
    {
      "title" : "Howler Radio Website",
      "imgSrc" : "imgs/proj2.png",
      "bgcolor" : "white",
      "year" : "2021",
      "desc": "website design for our school's student-run radio station",
    
    },
    
    {
      "title" : "Cell",
      "imgSrc" : "imgs/proj3.jpg",
      "bgcolor" : "white",
      "year" : "2021",
      "desc": "a short abstract 3D animation about my quarantine experience",
    
    }
]

let contentDiv = document.getElementById('grid')

for(let i=0; i < projList.length; i++){
    let cellDiv = document.createElement("DIV");
    let title =  projList[i]["title"] 
    let desc = projList[i]["desc"]
    let imgSrc = projList[i]["imgSrc"]
    let year = projList[i]["year"]
    let bgColor = projList[i]['bgColor']
    
    let centerTitle = document.createElement("CENTER");
    let titleNode = document.createElement("H3");
    let titleText = document.createTextNode(title);
    titleNode.append(titleText);
    titleNode.style.fontSize = "5vh";
    centerTitle.append(titleNode);

    let centerDesc = document.createElement("CENTER");
    let descNode = document.createElement('P');
    let descText = document.createTextNode(desc);
    descNode.append(descText);
    descNode.style.fontSize = "4vh";
    centerDesc.append(descNode);

    let centerImg = document.createElement("CENTER");
    let imgNode = document.createElement('IMG');
    imgNode.src = imgSrc;
    imgNode.classList.add("grid-image")
    centerImg.append(imgNode);

    let centerYear = document.createElement("CENTER");
    let yearNode = document.createElement('p');
    let yearText = document.createTextNode(year);
    yearNode.append(yearText);
    centerYear.append(yearNode);

    cellDiv.append(centerTitle);
    cellDiv.append(centerDesc);
    cellDiv.append(centerImg);
    cellDiv.append(centerYear);
    cellDiv.classList.add("contentItem");
    cellDiv.style.backgroundColor = bgColor;
    contentDiv.append(cellDiv)
}

