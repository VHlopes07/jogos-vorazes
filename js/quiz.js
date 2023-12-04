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
        message = "  Que pena! Sua chama se apagou cedo demais. 😢🔥";
    } else if (score <= 20) {
        message = "  Você pode ser pobre, mas a perseverança é sua aliada. Continue lutando! 💪🏹";
    } else if (score <= 30) {
        message = "  Uma vida confortável no Distrito, mas cuidado com as reviravoltas dos Jogos. 🏡🔄";
    } else if (score <= 40) {
        message = "  Você está construindo sua fortuna, mas lembre-se, os Jogos Vorazes são imprevisíveis. 💰❓";
    } else if (score <= 50) {
        message = "  Parabéns, tributo! Você sobreviveu aos Jogos Vorazes. 🎉🏆";
    } else if (score <= 60) {
        message = "  Você pode não ser o mais rico, mas sua astúcia é sua maior arma. 🦊🤔";
    } else if (score <= 70) {
        message = "  Uma vida confortável espera por você nos distritos. 🌆😌";
    } else if (score <= 80) {
        message = "  Você conquistou uma vida financeira próspera, como um verdadeiro Vitorioso. 💼🌟";
    } else if (score <= 90) {
        message = "  Parabéns, Vitorioso! Você é uma inspiração para os distritos. 🏅🌍";
    } else {
        message = "  Parabéns, Mockingjay! Sua coragem e resistência superaram todos os desafios. 🎊🔥";
    }

    document.getElementById("mensagem").textContent = message;
    document.getElementById("ponto").textContent = texto;
}