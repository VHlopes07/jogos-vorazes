function calculateScore() {
    let score = 0;

    if (document.quiz.questão1[0].checked) {
        score += parseInt(document.quiz.questão1[0].value);
    }
    if (document.quiz.questão2[1].checked) {
        score += parseInt(document.quiz.questão2[1].value);
    }
    if (document.quiz.questão3[1].checked) {
        score += parseInt(document.quiz.questão3[1].value);    
    }
    if (document.quiz.questão4[0].checked) {
        score += parseInt(document.quiz.questão4[0].value);
    }
    if (document.quiz.questão5[2].checked) {
        score += parseInt(document.quiz.questão5[2].value);
    }
    if (document.quiz.questão6[2].checked) {
        score += parseInt(document.quiz.questão6[2].value);
    }
    if (document.quiz.questão7[1].checked) {
        score += parseInt(document.quiz.questão7[1].value);    
    }
    if (document.quiz.questão8[3].checked) {
        score += parseInt(document.quiz.questão8[3].value);    
    }
    if (document.quiz.questão9[1].checked) {
        score += parseInt(document.quiz.questão9[1].value);    
    }
    if (document.quiz.questão10[0].checked) {
        score += parseInt(document.quiz.questão10[0].value);    
    }

    // Adicione mais perguntas aqui

    let texto =  score + "/100";
    let message;

    if (score <= 10) {
        message = "  What a pity! Your flame went out too soon. 😢🔥";
    } else if (score <= 20) {
        message = "  You may be poor, but perseverance is your ally. Keep fighting! 💪🏹";
    } else if (score <= 30) {
        message = "  A comfortable life in the District awaits, but beware of the twists of the Games. 🏡🔄";
    } else if (score <= 40) {
        message = "  You're building your fortune, but remember, the Hunger Games are unpredictable. 💰❓";
    } else if (score <= 50) {
        message = "  Congratulations, tribute! You survived the Hunger Games. 🎉🏆";
    } else if (score <= 60) {
        message = "  You may not be the wealthiest, but your cunning is your greatest weapon. 🦊🤔";
    } else if (score <= 70) {
        message = "  A comfortable life awaits you in the districts. 🌆😌";
    } else if (score <= 80) {
        message = "  You've achieved a prosperous financial life, just like a true Victor. 💼🌟";
    } else if (score <= 90) {
        message = "  Congratulations, Victor! You are an inspiration to the districts. 🏅🌍";
    } else {
        message = "  Congratulations, Mockingjay! Your courage and resilience have overcome all challenges. 🎊🔥";
    }
    

    document.getElementById("mensagem").textContent = message;
    document.getElementById("ponto").textContent = texto;
}