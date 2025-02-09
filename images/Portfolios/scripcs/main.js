// clear form before unload

window.onbeforeunload = () => {
    for (const form of document.getElementsByTagNam("form")) {
        form.reset ();
    }
}