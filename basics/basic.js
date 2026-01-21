document.addEventListener("click", function (event) {

    // RUN button handler
    if (event.target.classList.contains("run-btn")) {
        const runner = event.target.closest(".runner")
        const outputBox = runner.querySelector(".output")
        const result = runner.dataset.output

        outputBox.textContent = "Running...\n"

        setTimeout(() => {
            outputBox.textContent = result
        }, 600)
    }

    // COPY button handler
    if (event.target.classList.contains("copy-btn")) {
        const code = event.target
            .closest(".code-block")
            .querySelector("code")
            .innerText

        navigator.clipboard.writeText(code)
        event.target.textContent = "Copied!"

        setTimeout(() => {
            event.target.textContent = "Copy"
        }, 1000)
    }

})
