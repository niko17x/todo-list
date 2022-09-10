

export const foo = () => {
    const body = document.querySelector('body');

    const h1 = document.createElement('h1');
    h1.innerText = "HELLO THERE!";

    body.appendChild(h1);
};

