const nodemailer = require("nodemailer");

exports.sendMail = (user) => {
    nodemailer.createTestAccount().then(account => {
        const body = `
            <p>You have a new contact request</p>
            <h3>Contact Details<h3>
            <ul> 
                <li>${user.name}</li>
                <li>${user.email}</li>
                <li>${user.mobile}</li>
            </ul>
            <h3>Message</h3>
            `;

        const transporter = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            secure: false,
            auth: {
                user: account.user,
                pass: account.pass
            }
        });

        let opts = {
            from: account.user,
            to: user.email,
            subject: "Hello ✔",
            text: "Hello world?",
            html: body
        };

        transporter.sendMail(opts, (err, info) => {
            if (err) return console.error(err);
            console.log("Message sent: ", info.envelope);
        });
    });
};
