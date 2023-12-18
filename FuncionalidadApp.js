var provider = new firebase.auth.GoogleAuthProvider();
$('#logueo').click(function() {
    firebase.auth()
        .signinWithPopup(provider)
        .then(function(result) {
            console.log(result.user);
            almacenaDatos(result.user);
            $('#logueo').hide();
            $('#principal').append("<img src='" + result.user.photoURL + " />")

        })
})