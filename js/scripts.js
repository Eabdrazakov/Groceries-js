function generateList() {
    const selectedItems = document.querySelectorAll('input[type="checkbox"]:checked');
    const selectedItemsToarray = Array.from(selectedItems);

    const newArray = selectedItemsToarray.map(item => item.value.toUpperCase());
    newArray.sort();

    newArray.forEach((item) => {
        const ul = document.querySelector("ul");
        const li = document.createElement("li");
        ul.append(li);
        li.append(item);
    });
};

function formHandler() {
    const form = document.querySelector("form");
    const result = document.getElementById("result");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        generateList();
        result.removeAttribute("class");
        form.setAttribute("class", "hidden");
    });

    const reset = document.getElementById("resetBtn");
    reset.addEventListener("click", (e) => {
        e.preventDefault();
        form.removeAttribute("class");
        form.reset();
        result.setAttribute("class", "hidden");
    });
};

window.onload = () => {
    formHandler();
};

