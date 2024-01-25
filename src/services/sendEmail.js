const nodemailer = require('nodemailer')
const fs = require('fs');
const handlebars = require('handlebars');
const path = require('path');

const templateDir = path.join(__dirname, '../util/template/');
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
const loadTemplate = (templateName) =>{
    const templatePath = path.join(templateDir, `${templateName}.handlebars`)
    const templateSource = fs.readFileSync(templatePath, 'utf8');
    return handlebars.compile(templateSource)
}
const sendMail = async (email, datos, templateName) =>{
    const transporter = createTrans();
    const loadTemple = loadTemplate(templateName)
    const htmlContent = loadTemple(datos)
    const info = await transporter.sendMail({
        from: '<info@example.com>',
        to: email,
        subject: `Mail de bienvenida`,
        html: htmlContent,
    });
    console.log(`Message sent %s`, info.messageId)
}

exports.sendMail = (email, datos, templateName) => sendMail(email, datos, templateName)