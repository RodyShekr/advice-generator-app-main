let adviceId = document.getElementById(`advice-id`),
    adviceText = document.getElementById(`advice-text`),
    url = `https://api.adviceslip.com/advice`,
    btn = document.getElementById(`button`); 

const getApi =  async () => {
    const response = await fetch(url)
    const data = await response.json();
    adviceId.innerText = data.slip.id
    adviceText.innerText = data.slip.advice
}

btn.addEventListener(`click`, getApi)