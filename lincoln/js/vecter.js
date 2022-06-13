const macos = document.getElementById('macos');
const windows = document.getElementById('windows');


macos.onclick = function() {
    // download the file from the server https://oslerleadership.com/Vecter_mac.zip
    window.open('https://oslerleadership.com/Vecter_mac.zip');
};
windows.onclick = function() {
    // download the file from the server https://oslerleadership.com/Vecter_win.zip
    window.open('https://oslerleadership.com/Vecter_win.zip');
};

// end of script