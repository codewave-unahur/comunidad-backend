const nodemailer = require('nodemailer')
const fs = require('fs');
const handlebars = require('handlebars');
const path = require('path');

const templatePath = path.join(__dirname, '../util/template/welcomeEmpresa.handlebars')
const templateSource = fs.readFileSync(templatePath, 'utf8')
const template = handlebars.compile(templateSource);
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

const sendMail = async (email, datos) =>{
    const transporter = createTrans()
    const htmlContent = template(datos)
    const info = await transporter.sendMail({
        from: '<info@example.com>',
        to: email,
        subject: `Mail de bienvenida`,
        html: htmlContent,
    });
    console.log(`Message sent %s`, info.messageId)
}

exports.sendMail = (email, datos) => sendMail(email, datos)