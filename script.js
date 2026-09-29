// compliment generate
async function fetchCompliments() {
    const response = await fetch("./data/compliments.json");
    const data = await response.json();
    console.log(data);
    return data.compliments;
};
//display compliment
function displayRandomCompliment(compliments) {
    const complimentElement = document.getElementById("compliment");
    const randomIndex = Math.floor(Math.random() * compliments.length);
    complimentElement.textContent = compliments[randomIndex];
};
//call functions
(async () => {
    // load compliments 
    const compliments = await fetchCompliments();
    // load button
    console.log(compliments);
    const button = document.getElementById("generate-btn");
    button.addEventListener("click", () => displayRandomCompliment(compliments));
})();