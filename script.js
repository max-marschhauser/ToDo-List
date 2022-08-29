const form = document.getElementById("form");
const input = document.getElementById("input");
const list = document.getElementById("list");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const value = input.value;
    const element = document.createElement("div");
    element.textContent = value;

    element.addEventListener("click", () => {
        if (element.style.textDecoration === "line-through") {
            element.style.textDecoration = "none";
        } else {
            element.style.textDecoration = "line-through";
        }
    });

    list.append(element);
    input.value = "";
});
