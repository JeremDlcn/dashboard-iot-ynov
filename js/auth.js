function initUI() {
    // 1) Create a new firebaseui.auth instance stored to our local variable ui
    const ui = new firebaseui.auth.AuthUI(firebase.auth())

    // 2) These are our configurations.
    const uiConfig = {
        callbacks: {
            signInSuccessWithAuthResult(authResult, redirectUrl) {
                const info = {
                    email: authResult.user.email,
                    uid: authResult.user.uid,
                    name: authResult.user.displayName
                }
                //add info to local storage
                localStorage.setItem('infos', JSON.stringify(info));
                return true
            },
            uiShown() {
                document.getElementById("loader").style.display = "none"
            },
        },
        signInFlow: "popup",
        signInSuccessUrl: "app.html",
        signInOptions: [
            firebase.auth.EmailAuthProvider.PROVIDER_ID,
        ],
    }
    // 3) Call the 'start' method on our ui class
    // including our configuration options.
    ui.start("#firebaseui-auth-container", uiConfig)
}




function initializeApp() {
    const firebaseConfig = {
        apiKey: "AIzaSyAOuTkqKAwHxnN_O8-RUXMlQJIoEYOheS4",
        authDomain: "dashboard-iot-ynov.firebaseapp.com",
        projectId: "dashboard-iot-ynov",
        storageBucket: "dashboard-iot-ynov.appspot.com",
        messagingSenderId: "163862194819",
        appId: "1:163862194819:web:e92725d3b31501b70ac9b6"
    };
    firebase.initializeApp(firebaseConfig);
    console.log(firebase);

    initUI();
}