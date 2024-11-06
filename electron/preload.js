const dependencies = ['chrome', 'node', 'electron'];

window.addEventListener('DOMContentLoaded', () => {
    const replaceText = (selector, text) => {
        const element = document.querySelector(selector);
        if(element){
            element.innerHTML = text;
        }
    };

    console.log();

    dependencies.forEach(dep => {
        replaceText(`#${dep}-version`, process.versions[dep]);
    });
});