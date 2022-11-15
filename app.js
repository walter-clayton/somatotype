function myform() {
    var somatotype = {
     bodyweight : Number(document.getElementById("bodyweight").value), 
     height : Number(document.getElementById("height").value), 
     tricep : Number(document.getElementById("tricep").value), 
     subscapular : Number(document.getElementById("subscapular").value), 
     supraspinal : Number(document.getElementById("supraspinal").value), 
     humerus : Number(document.getElementById("humerus").value), 
     femur : Number(document.getElementById("femur").value), 
     calf : Number(document.getElementById("calf").value), 
     bicep : Number(document.getElementById("bicep").value),
     }

    var skinfolds = somatotype.tricep + somatotype.subscapular + somatotype.supraspinal;
    console.log( "skinfolds : " + skinfolds);

    var xSomatotype = skinfolds * (170.18/somatotype.height)
    console.log( "x : " + xSomatotype);

    var hwr = somatotype.height / Math.cbrt(somatotype.bodyweight)
    console.log( "hwr : " + hwr);

    var endomorphy = -0.7182 + (0.1451*xSomatotype) - (0.00068*Math.pow(xSomatotype, 2)) + (0.0000014 *Math.pow(xSomatotype, 3));
    console.log( "endomorphy : " + endomorphy);

    var mesomorphy = (0.858 * somatotype.humerus + 0.601 * somatotype.femur + 0.188 * somatotype.bicep + 0.161 * somatotype.calf) - (0.131 * somatotype.height) + 4.5
    console.log( "mesomorphy : " + mesomorphy);


    if (hwr >= 40.75 ) {
        var ectomorphy = (0.732 * hwr) - 28.58;
        console.log( "ectomorphy : " + ectomorphy);
    }

    else if (hwr < 40.75 && hwr > 38.25) {
        var ectomorphy = (0.463 * hwr) - 17.63;
        console.log( "ectomorphy : " + ectomorphy);
    }

        else {
            var ectomorphy = 0.1
            console.log( "ectomorphy : " + ectomorphy);
        }
    // document.getElementById("results").innerHTML = " " + endomorphy.toFixed(0) + "-" + mesomorphy.toFixed(0) + "-" + ectomorphy.toFixed(0)
    console.log(somatotype);
    console.log(Object.values(somatotype));

    var canvas = document.getElementById("somatotypeCanvas");
    var ctx = canvas.getContext("2d");
    
    
    // 15% up from the bottom of the canvas. This is where the triangle starts
    // ctx.moveTo(0,357);
    // ctx.lineTo(400,357);
    // ctx.stroke();  

    // middle line of the canvas
    ctx.moveTo(247,116);
    ctx.lineTo(247,516);
    ctx.stroke();

    // reference for the top of the triangle
    ctx.beginPath();    
    ctx.arc(247, 116, 5, 0, 1/4 * Math.PI);
    ctx.strokeStyle = "black";
    ctx.stroke();

    // middle of the triangle , which is 1/3 of the height of the triangle = 115.33. 
    ctx.beginPath();    
    ctx.arc(247, 342, 5, 0, 2 * Math.PI);
    ctx.strokeStyle = "black";
    ctx.stroke();   


    // middle of the left side of the triangle
    // ctx.beginPath(); 
    // ctx.arc(100,185.4, 5, 0, 1/4 * Math.PI);
    // ctx.strokeStyle = "red";
    // ctx.stroke();        


    // circle from the left side
    // ctx.beginPath(); 
    // ctx.arc(0,357, 400, 0, 1/6 * Math.PI);
    // ctx.strokeStyle = "red";
    // ctx.stroke();    

    ctx.beginPath();    
    ctx.arc(47, 462, 400, 5/3 * Math.PI,0 );
    ctx.strokeStyle = "black";
    ctx.stroke();       

    // circle from the right side
    ctx.beginPath();    
    ctx.arc(447,462, 400, 1 * Math.PI, 4/3 * Math.PI);
    ctx.strokeStyle = "black";
    ctx.stroke();       


    // circle from top of the triangle
    ctx.beginPath();    
    ctx.arc(247,116, 400, 1/3 * Math.PI, 2/3 * Math.PI);
    ctx.strokeStyle = "black";
    ctx.stroke();   

    // path going from right triangle corner to middle left triangle side
    ctx.moveTo(447,462);
    ctx.lineTo(47,231);
    ctx.stroke();   

    // path going from left triangle corner to middle right triangle side
    ctx.moveTo(47,462);
    ctx.lineTo(447,231);
    ctx.stroke();


    // left side of triangle
    // ctx.moveTo(0,357);
    // ctx.lineTo(200,11);
    // ctx.stroke();    

    // right side of triangle
    // ctx.moveTo(400,357);
    // ctx.lineTo(200,11);
    // ctx.stroke();

    var equiTriangle = 45;
    var cos = Math.cos(equiTriangle);
    console.log("cos :" + cos)
    // the adjacent is the radius (which is the hypothenus, 357.67) from the top area of the triangle (100) + the bottom (n.a. must be relative to the radius) - the rest of the height canvas (500)
    var adjacent = 346;
    // the opposite is the margin (384.2) - the middle (234.85) of the canvas
    var opposite = 100;


    // half of the length of the triangle

    var hypothenus = adjacent/cos;
        console.log("hypothenus :" + hypothenus)

    var height = (Math.sqrt(3) * 0.5 * 400);
    console.log("height :" + height)

    var squareroot = Math.sqrt(3);
    console.log("squareroot :" + squareroot)


    var equiTriangleAngleHalf = 30;

    var cosSection = Math.cos(equiTriangleAngleHalf);
    console.log("cosSection :" + cosSection);
    var adjacentSection = 200;

    var hypothenusSection = adjacentSection/cosSection;
    console.log("hypothenusSection :" + hypothenusSection)

    var oppositeSection = Math.sqrt(Math.pow(adjacentSection, 2) + Math.pow(hypothenusSection, 2));
    console.log("oppositeSection :" + oppositeSection)


var adjacentbottom = Math.sqrt(Math.pow(400, 2) + Math.pow(200, 2));
    console.log("adjacentbottom" + adjacentbottom)


var oppositeCal = (1/Math.sqrt(3)) * 400;
    console.log("oppositeCal" + oppositeCal)


    // middle of the triangle , 115.33
    ctx.moveTo(0,357);
    ctx.lineTo(0,1312);
    ctx.stroke();

    // formula for plotting somatotype on graph
    var x = ectomorphy - endomorphy;
    var y = (2 * mesomorphy) - (endomorphy + ectomorphy);   
    console.log("x :" + x)
    console.log("y :" + y)


    // x axes has 23 reference points going up by 1
    // the middle of the canvas starts at 0
    // x = 23.5 based of the original 400

    var rel_x = 247 + (400/12 * x);
    console.log("rel_x : " + rel_x) 

    // y axes has 16 reference points going up by 2 
    // the middle of the triangle starts at 0 (242)
    // y = 26.25

    var rel_y = 342-(420/23 * y);
    console.log("rel_y : " + rel_y) 


        // reference for the somatotype
        ctx.beginPath();    
        ctx.arc(rel_x, rel_y, 1, 0, 2 * Math.PI);
        ctx.fillStyle = "blue";
        ctx.fill();
        ctx.strokeStyle = "blue";
        ctx.stroke();   


        ctx.font = "15px Georgia";
        ctx.fillText( " " + endomorphy.toFixed(0) + "-" + mesomorphy.toFixed(0) + "-" + ectomorphy.toFixed(0), rel_x, rel_y);
        ctx.fillStyle = "white";
}

