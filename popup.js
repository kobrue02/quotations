const symbols = document.querySelectorAll('.symbol');

symbols.forEach(symbol => {
    symbol.addEventListener('click', () => {
        const textToCopy = symbol.getAttribute('data-text');
        const activeElement = document.activeElement;

        if (activeElement && (activeElement.tagName === 'TEXTAREA')) {
            // If the active element is an input field or a textarea, insert the symbol at the cursor position
            const start = activeElement.selectionStart;
            const end = activeElement.selectionEnd;
            const currentValue = activeElement.value;

            const newValue = currentValue.substring(0, start) + textToInsert + currentValue.substring(end);
            activeElement.value = newValue;
            activeElement.setSelectionRange(start + textToInsert.length, start + textToInsert.length);

        }

        else {
            navigator.clipboard.writeText(textToCopy)
        }

        

    });
});