function Greet() {
    var name = document.querySelector('#username').value;
    document.querySelector('#greet').innerHTML = "Welcome" + " " + name;
}