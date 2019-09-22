const politeConsole = {
    log: function(text, transform) {
        let politeText = "For your consideration: " + text;
        if (typeof(transform) === "function") {
            politeText = transform(politeText);
        }
        console.log(politeText);
        
    }
};

const extremePoliteConsole = {
    log: (text, transform) => {
    let politeText = "For your consideration, your highness: " + text;
    if (typeof(transform) === "function") {
    politeText = transform(politeText);
    }
    console.log(politeText);
    }
};

module.exports = {
    politeConsole: politeConsole,
    extremePoliteConsole: extremePoliteConsole
};
