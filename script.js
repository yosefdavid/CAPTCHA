


let allNumsCaptcha = "";

function SendForm() {

    let name = document.forms["Contact-Us"]["input-name"].value;

    let message = document.forms["Contact-Us"]["textarea-message"].value;

    let captcha = document.forms["Contact-Us"]["input-captcha"].value;

    let errorNameElement = document.getElementById('error-name');

    let = errorMessageElement = document.getElementById('error-message');

    let errorcaptchaElement = document.getElementById('error-captcha');


    if (name == "") {

        errorMessageElement.innerHTML = "";
        errorcaptchaElement.innerHTML = "";

        errorNameElement.innerHTML = "Missing name";

    }

    else {

        if (message == "") {

            errorNameElement.innerHTML = "";
            errorcaptchaElement.innerHTML = "";

            errorMessageElement.innerHTML = "Missing message";

        }

        else {

            if (captcha == "") {

                errorNameElement.innerHTML = "";
                errorMessageElement.innerHTML = "";

                errorcaptchaElement.innerHTML = "Missing digits";
            }

            else {

                errorNameElement.innerHTML = "";
                errorMessageElement.innerHTML = "";

                if (captcha != allNumsCaptcha) {

                    errorcaptchaElement.innerHTML = "Incorrect digits";

                }

                else {

                    window.location.href = "thanks.html";

                }

            }

        }

    }

}



function Captcha() {
    
    allNumsCaptcha = "";
    document.forms["Contact-Us"]["input-captcha"].value = "";
    document.getElementById('error-captcha').innerHTML = "";

    let imagesNum = ["images/nums.png", "images/numss.png", "images/numsss.png", "images/numssss.png.", "images/numsssss.png", "images/numssssss.png", "images/numsssssss.png", "images/numssssssss.png", "images/numsssssssss.png", "images/numssssssssss.png"];

    for (let i = 0; i < imagesNum.length; i++) {

        document.getElementById(`num-captcha${i}`).innerHTML = "";

        let newNum = Math.floor(Math.random() * imagesNum.length);

        let newNumFortransform = Math.floor(Math.random() * 20);

        if (newNumFortransform < 10) {
            newNumFortransform = Math.floor(Math.random() * -20);
        }

        let newImage = document.createElement('img');

        newImage.src = imagesNum[newNum];

        newImage.style.transform = `rotate(${newNumFortransform}deg)`;

        document.getElementById(`num-captcha${i}`).append(newImage);

        allNumsCaptcha += `${newNum}`;

    }

    console.log(allNumsCaptcha);
}

Captcha();