$(document).ready(function(){
    $(".chat_on").click(function(){
        $(".Layout").toggle();
        $(".chat_on").hide(300);
    });
    
       $(".chat_close_icon").click(function(){
        $(".Layout").hide();
           $(".chat_on").show(300);
    });
    
});

let allQuestions = []

const submit = document.querySelector ('#send_button')
submit.addEventListener('click', async () => {

    let userInput = document.querySelector('#input_fileld').nodeValue

    let answers = await processAnswer(userInput)

    console.log(answers)

    let msgbox = document.querySelector("#Messages_list")

    msgbox.innerHTML += `
    <div class="q_a_container">
    <ul class="question'>${userInput}</ul>
    <ul class="answer">${answers}</ul>
    </div>`

})

async function processAnswer(question) {

    let answers = await fetch('../scripts/data.json')
    .then(resp => resp.json())
    .then(data => {

        let allWords = question.split(' ')

        console.log(allWords)

        let allQuestions = data.filter(d => {
            console.log(d.question.indexOf(question))
            reutrn d.question.indexOf(question) > -1
        })

        const answers = allQuestions[0] null ? allQuestions[0].answer.map(a => `<li>${a}</li>`).join("") :

        return `${answers}`
    })

    return answers
}