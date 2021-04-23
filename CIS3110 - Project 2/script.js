//click functions for the hamburger menu and sidebar
document.querySelector(".hamburger-menu").
addEventListener("click",()=> {
    document.querySelector(".container").classList.toggle
    ("change");
});

    //functions for login.html
    
        //reads content of text boxes and declares "authenticated" if boxed are not empty. Sends to landing page
        function getInput()
        {
            var userEmail = document.getElementById("inputEmail").value;
            var userPass = document.getElementById("inputPassword").value;
            
            if (userEmail != "" && userPass != "") 
            {
                console.log("User Authenticated");
                checkCookie(userEmail);
                window.location = "index.html";
                console.log("Entering landing page");
                return false;
            }
            
        }
        
        //sets cookie based on email and adds expiration date
        function setCookie(cookieName, cookieValue, expDate)
        {
         console.log("Entering set cookie routine");
         var date = new Date();
         date.setTime(date.getTime() + (expDate*24*60*60*1000));
         var expiration = "expires=" + date.toGMTString();
         document.cookie = cookieName + "="+ cookieValue + "; " + expiration; 
         console.log("Cookie has been set");
        }
    
        //reads existing cookies
        function getCookie(cookieName, email) 
        {
            console.log("Checking existing cookies with the email: " + email + ". Please Wait...");
            
            var name = cookieName + "=";
            console.log(`document cookie list contains ${document.cookie}`);
            var ca = document.cookie.split(";"); //!
            console.log("displaing ca: " + ca);
            
            for (var i = 0; i < ca.length; i++)
            {
                var c = ca[i];
                console.log(`c at i: ${ca[i]}`);
                
                while(c.charAt(0)==' ') c = c.substring(1);
                
                if (c.indexOf(name) == 0)
                {
                    return c.substring(name.length, c.length);
                }
            }
        
            return "";    
        }
    
        //Checks if cookie exists with same email value. If not, uses uEmail value and sends to setCookie() with expiration period
        function checkCookie(uEmail)
        { 
            var email = uEmail;
            var user = getCookie("email", email); 
            
            if (user != "" && user.includes(email))
            {
                console.log("Cookie exists")
                alert("Welcome back, " + user);
            }
                else
                {
                    user = email;
                    
                    if (user != "" && user != null)
                    {
                        console.log("No cookie exists with that name. Creating " + email);
                        setCookie("email", user, 30); 
                    }
                }
        }
    
    
    //functions for peanutgallery.html
    
        //gets variables from input, prints to console, and sends to wrapitup()
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

        //Creates a new div and new paragraph. Adds to it to the body and outputs the message. Sends it to createLinkl()
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
        
    