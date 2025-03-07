
function sayhello(name) {
    const fancyname = splitname(name)
        .map(name => capitalizename(name))
        .join(" ");
    console.log(`Hello ${fancyname}!`);
}

function myname() {
    return "cooper black";
}

function capitalizename(name) {
    return name.toUpperCase();
}

function splitname(name) {
    return name.split(" ");
}

function main() {
    const name = myname();
    sayhello(name);
}

main();
