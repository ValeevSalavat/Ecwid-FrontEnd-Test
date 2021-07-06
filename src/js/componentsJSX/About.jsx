import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub'
import TelegramIcon from '@material-ui/icons/Telegram';
import EmailIcon from '@material-ui/icons/Email';
export default class About extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="about">
                <div className="about__social-site">
                    <a href="https://github.com/ValeevSalavat" target="_blank"><GitHubIcon fontSize="large"></GitHubIcon></a>
                    <a href="tg://resolve?domain=@SalavatValeev" target="_blank"><TelegramIcon fontSize="large"></TelegramIcon></a>
                    <a href="mailto:salik95@mail.ru" target="_blank"><EmailIcon fontSize="large"></EmailIcon></a>
                </div>
                Salavat Valeev
            </div>
        );
    }
}