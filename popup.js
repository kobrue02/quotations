const symbols = document.querySelectorAll('.symbol');

symbols.forEach(symbol => {
    symbol.addEventListener('click', () => {
        const textToCopy = symbol.getAttribute('data-text');

        navigator.clipboard.writeText(textToCopy)

    });
});