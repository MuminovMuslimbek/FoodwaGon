document.getElementById('find-food-button').addEventListener('click', () => {
    document.getElementById('loader').style.display = 'flex';

    let loadingTime = 0;
    const interval = setInterval(() => {
        loadingTime += 1;
        if (loadingTime >= 5) {
            clearInterval(interval);
            document.getElementById('loader').style.display = 'none';

            document.getElementById('modal').style.display = 'flex';
        }
    }, 1000);
});
document.getElementById('close-modal').addEventListener('click', () => {
    document.getElementById('modal').style.display = 'none';
});