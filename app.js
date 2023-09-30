let qrText = document.getElementById("qrText");
let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");

// console.log( "qrText: " + qrText);
// console.log( "imgBox: " + imgBox);
// console.log( "qrImage: " + qrImage);


// API "https://goqr.me/api/" 

function generateQR() {
    if (qrText.value.length > 0) {
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
        imgBox.classList.add("show-img");
    } else {
        qrText.classList.add('error');
        setTimeout(()=>{
            qrText.classList.remove('error');
        },1000);
    }
    
}

// console.log( "generateQR", generateQR);