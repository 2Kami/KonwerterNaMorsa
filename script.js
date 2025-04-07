const alfabet = {
    "A": " •- ", "Ą": " •-•- ", "B": " -••• ", "C": " -•-• ", "Ć": " -•-•• ",
    "D": " -•• ", "E": " • ", "Ę": " ••-•• ", "F": " ••-• ", "G": " --• ",
    "H": " •••• ", "I": " •• ", "J": " •--- ", "K": " -•- ", "L": " •-•• ",
    "Ł": " -•-••- ", "M": " -- ", "N": " -• ", "Ń": " --•-- ", "O": " --- ",
    "Ó": " ---• ", "P": " •--• ", "Q": " --•- ", "R": " •-• ", "S": " ••• ",
    "Ś": " •••-••• ", "T": " - ", "U": " ••- ", "V": " •••- ", "W": " •-- ",
    "X": " -••- ", "Y": " -•-- ", "Z": " --•• ", "Ź": " --••- ", "Ż": " --••-• ",
    "1": " •---- ", "2": " ••--- ", "3": " •••-- ", "4": " ••••- ", "5": " ••••• ",
    "6": " -•••• ", "7": " --••• ", "8": " ---•• ", "9": " ----• ", "0": " ----- ",
    " ": "/", 
    ".": " •-•-•- ", ",": " --••-- ", "'": " •----• ", "\"": " •-••-• ", "_": " ••--•- ", 
    ":": " ---••• ", ";": " -•-•-• ", "?": " ••--•• ", "!": " -•-•-- ", "-": " -••••- ",
    "+": " •-•-• ", "/": " -••-• ", "(": " -•--• ", ")": " -•--•- ", "=": " -•••- ",
    "@": " •--•-• "
};

const input = document.getElementById("input");
const wynik = document.getElementById("wynik");
const reset = document.getElementById("reset");

const update = () => {
    const tekst = input.value.toUpperCase();
    let przetlumaczony = "";
    for (const litera of tekst) {
        if (litera in alfabet) {
        przetlumaczony += alfabet[litera] + " ";
        };
    };
    wynik.textContent = przetlumaczony;
};

input.addEventListener("input", update);
reset.addEventListener("click", () => { wynik.textContent = "" });

update();