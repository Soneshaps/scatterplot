// Given Points

var points = [
    {x: 10, y: 20 },
    {x: 40, y: 40 },
    {x: 60, y: 20 },
    {x: 80, y: 50 },
    {x: 100, y: 80 },
    {x: 120, y: 100 },
    {x: 140, y: 150 },
    {x: 160, y: 200 },
    {x: 180, y: 300 },
    {x: 200, y: 300 },
    {x: 300, y: 330 },
    {x: 350, y: 380 },
    {x: 400, y: 400 },
    {x: 450, y: 450 },
    {x: 480, y: 300 },
];

//Creating div  

var canvas = document.createElement('div');


// Adding Class

canvas.id = 'main-div';

//Adding Canvas to the document's body 
document.body.appendChild(canvas);


//creating circle function
function circleFunction(){
    canvas.innerHTML='';
    points.map(function(item,index){
        circle = document.createElement('div');
        
        //position of each circle
        circle.style.top = item.x+'px';
        circle.style.left = item.y+'px';
        
        //adding classname and id 
        circle.classList.add("circle-all");
        circle.id = 'item-'+index;
        
        //adding each circle to canvas 
        canvas.appendChild(circle);
    })
}

// calling circle function
circleFunction();


canvas.addEventListener('click', removeCircle);

//removing circle
function removeCircle(e){
    var number = parseInt(e.target.id.replace('item-', ''))
    console.log(number)
    points.splice(number, 1);
    console.log(points)
    circleFunction();

}
