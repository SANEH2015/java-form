var uid= document.getElementById('fname')
var email= document.getElementById('email')
var pword= document.getElementById('password')


function resurt(){
    var name= document.getElementById('fname').value;
    var email= document.getElementById('email').value;
    var phoneNumber= document.getElementById('phonenumber').value;
    var surname= document.getElementById('Sname').value;
    var address= document.getElementById('address').value;
    var age= document.getElementById('AGE').value;
    var StudentNumber= document.getElementById('StudentNumber').value;
    var DateOFBirth = document.getElementById("DateOFBirth").value
    var unversity = document.getElementById("unversity").value
    var YearOfComplition = document.getElementById("year").value
    
    let information={
        name:name,
        email:email,
        phoneNumber:phoneNumber,
        surname:surname,
        address:address,
        age:age,
        StudentNumber:StudentNumber,
        NameOfQualification:NameOfQualification,
        DateOFBirth:DateOFBirth,
        unversity:unversity,
        YearOfComplition:YearOfComplition


    }
    console.log(information)
    
    // localStorage.setItem("info",JSON.stringify(information))
    // const url = "https://formspree.io/f/mayrqqze"
    const url = "https://formspree.io/f/mdoqkynl"
    var newinfo = JSON.stringify(information)

    fetch(url,{
        method: 'POST',
        body: newinfo,//localStorage.getItem("info"),
        headers: {'Content-Type': 'application/json'}
    })
    

//storing the data locally//


//  var email=localStorage.setItem("email",email)
//  var pword= localStorage.setItem("phonenumber",phonenumber)

// //store data and use it//
// var uid=localStorage.getItem("uid",uid)
// var email=localStorage.getItem("email",email)
// var pword= localStorage.getItem("phonenumber",pword)

}

function choose(browser){
radiobut=browser
console.log(radiobut)
}



