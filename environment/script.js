//click functions for the hamburger menu and sidebar
document.querySelector(".hamburger-menu").
addEventListener("click",()=> {
    document.querySelector(".container").classList.toggle
    ("change");
});
        //gets variables from input, prints to console, and sends to wrapitup();
        function getVar()
        {
          var name = document.getElementById("name").value; 
          var peanut = document.getElementById("peanut-name").value; 
          var number = document.getElementById("initial").value; 

          console.log(name);
          console.log(peanut);
          console.log(number);
          console.log('"name"' + " is of type " + typeof name);
          console.log('"peanut"' + " is of type " + typeof peanut);
          console.log('"number"' + " is of type " + typeof number);

          wrapitup(number, name, peanut); 
        };

        //Creates a new div and new paragraph. Adds to it to the body and outputs the message. Sends it to createLinkl();
        function wrapitup(numValue, personsName, peanutName) 
        {
            var output = numValue; 
            var dynamicDiv = document.createElement("div");
            var newp = document.createElement("p"); 
            
            var newPMessage = personsName + ", my data is saying you want " + output + " " + peanutName + " peanut(s)" ; 
            var nodeToPaint = document.createTextNode(newPMessage);
            newp.appendChild(nodeToPaint);
            dynamicDiv.appendChild(newp);
            dynamicDiv.className = "data-output";
            
            var element = document.getElementById("bod");
            element.appendChild(dynamicDiv);
            
            createLink(numValue, peanutName);
        }
        
        //makes a hyperlink inside the new div
        function createLink(number, peanutName) 
        {
          var dynamicDiv2 = document.createElement("div");
          var a = document.createElement('a');
          var personsName = document.getElementById("name").value; 
          var message;
          
          if (peanutName.includes("Runner") || peanutName.includes("runner")) {
            var message = personsName + ", please visit this link which was created by our sophisticated AI";
            a.href = "runner.html";
          }
          
            else if (peanutName.includes("Virginia") || peanutName.includes("virginia")) {
                var message = personsName + ", please visit this link which was created by our sophisticated AI";
                a.href = "virginia.html";
            }
            
                else if (peanutName.includes("Spanish") || peanutName.includes("spanish")) {
                    var message = personsName + ", please visit this link which was created by our sophisticated AI";
                    a.href = "spanish.html";
                }
            
                    else if (peanutName.includes("Valencia") || peanutName.includes("valencia")) {
                        var message = personsName + ", please visit this link which was created by our sophisticated AI";
                        a.href = "valencia.html";
                    }
            
                        else {
                            var message ="Oops! Incorrect peanut name. Please try again.";
                        }
            
          var linkText = document.createTextNode(message);
          a.appendChild(linkText);
          dynamicDiv2.appendChild(a);
          dynamicDiv2.className = "created-error";
          a.className = "created-link";

          var element = document.getElementById("bod");
          element.appendChild(dynamicDiv2);
        }