(function() { 

    var elem = document.createElement("p"), 
    content= document.createTextNode("This is an informative page about Steve Jobs."), 
    wrappedP=document.getElementById("RDF"); 
    
    elem.appendChild(content); 
    
    wrappedP.parentNode.appendChild(elem); 
    
    
    }) ();