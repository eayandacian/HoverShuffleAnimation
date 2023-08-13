const links = document.querySelectorAll('.shuffle-link');

links.forEach((link) => {
    const originalText = link.textContent;
    const letters = link.textContent.split('');

    let intervalId;

    link.addEventListener('mouseenter', () => {
        let counter = 0;
        const shuffleCount = 2;
        const shuffleInterval = 70;

        intervalId = setInterval(() => {
            const shuffledText = letters
            .map((char,index) => {
                if(char.match(/[a-zA-Z0-9]/)) {
                    const randomCharacter = getRandomCharacter();
                    const cyclesToRevert = index - Math.floor(counter / shuffleCount);
                    if (counter >= cyclesToRevert * shuffleCount) {
                        return originalText[index];
                }
                return randomCharacter;
            }
            return char;
            })
            .join('');

            link.textContent = shuffledText;

            counter++;
            if(counter >= (shuffleCount+1) * letters.length) {
                clearInterval(intervalId);
                link.textContent = originalText;
            }
        }, shuffleInterval);
    });
    link.addEventListener('mouseleave', () => {
        clearInterval(intervalId);
        link.textContent = originalText;
    });
});


function getRandomCharacter() {
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const randomIndex = Math.floor(Math.random() * characters.length);
    return characters[randomIndex];
}

