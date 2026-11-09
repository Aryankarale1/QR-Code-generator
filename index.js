function generateQR() {

    if (qrinput.value.trim() === "") {

        qrinput.classList.remove("error");

        // Restart animation
        void qrinput.offsetWidth;

        qrinput.classList.add("error");

        return;
    }

    let text = encodeURIComponent(qrinput.value.trim());

    qrimg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text}`;

    imgBox.classList.add("show-img");
}

