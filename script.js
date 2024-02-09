const linkInput = document.getElementById("link-api");
const btnGetApi = document.getElementById("btn-get-api");
const output = document.getElementById("output");

btnGetApi.addEventListener("click", async () => {
    const url = linkInput.value;

    try {
        const response = await fetch(url);
        const data = await response.json();

        output.innerHTML = JSON.stringify(data, null, 2);
    } catch (error) {
        output.innerHTML = `<p style="color: red;">${error.message}</p>`;
    }
});
