
var Mailer = function() {
    this.nodeMailer = require('nodemailer');
    
    this.transporter = this.nodeMailer.createTransport('smtps://paperSoccer.noreply%40gmail.com:12papersoccer@smtp.gmail.com');
    this.sender = "paperSoccer.noreply@gmail.com";
    
};

Mailer.prototype.sendRegistrationMail = function(nickname, email) {
    
    var mailOptions = {
        from: this.sender,
        to: email,
        subject: "Witaj w grze paperSoccer!",
        text: "Witaj " + nickname + "! Właśnie zarejestrowałeś się w grze paperSoccer. Powodzenia!"
    };
    
    this.transporter.sendMail(mailOptions, function(error, info) {
        if(!error) {
            return true;
        } else {
            return false;
        }
    });
};

Mailer.prototype.sendNewPassword = function(nickname, password, email, callback) {
    var mailOptions = {
        from: this.sender,
        to: email,
        subject: "paperSoccer - nowe hasło",
        text: "Witaj " + nickname + "! Twoje nowe hasło to " + password + ". W każdej chwili możesz je zmienić wchodząc w ustawienia konta."
    };
    console.log(mailOptions);
    this.transporter.sendMail(mailOptions, function(error, info) {
        console.log(error);
        if(!error) {
            callback(true);
        } else {
            callback(false);
        }
    });
};

Mailer.prototype.send = function() {
    this.transporter.sendMail(this.mailOptions, function(error, info) {
       if(error) {
           console.log(error);
       }
       console.log(info);
    });
};





module.exports = new Mailer();