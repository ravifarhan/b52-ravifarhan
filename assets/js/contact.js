function submitData() {
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const phoneNumber = document.getElementById("phoneNumber").value
    const subject = document.getElementById("subject").value
    const message = document.getElementById("message").value

    if (name == ""){
        return alert("Nama tidak boleh kosong!")
    }else if(email == "") {
        return alert("Email tidak boleh kosong!")
    }else if(phoneNumber == "") {
        return alert("Phone Number tidak boleh kosong!")
    }else if(subject == "") {
        return alert("Subject tidak boleh kosong!")
    }else if(message == "") {
        return alert("Message tidak boleh kosong!")
    }

    const link = `mailto:${email}?subject=${subject}&body=Hi, My name is ${name},%0DMy Phone Number: ${phoneNumber},%0D${message}`
    window.location.href = link;

}
