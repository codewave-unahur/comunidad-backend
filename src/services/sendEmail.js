const nodemailer = require('nodemailer')

const createTrans = () => {
    return nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
            user:"6183b92000ae38",
            pass:"574b49c88da1e0"
        }
    });
}

const sendMail = async (email) =>{
    const transporter = createTrans()
    const info = await transporter.sendMail({
        from: '<info@example.com>',
        to: email,
        subject: `Bienvenido ${email}`,
        html: '<b> Hello </b>',
    });
    console.log(`Message sent %s`, info.messageId)
}

exports.sendMail = (email) => sendMail(email)