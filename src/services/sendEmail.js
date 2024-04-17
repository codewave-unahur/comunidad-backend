const nodemailer = require('nodemailer');

export const sendEmail = async (email, subject, templeteName) => {
    let transporter

    if (process.env.NODE_ENV === 'production') {
        transporter = createSendGridTransporter();
    } else {
        transporter = createTestTransporter();
    }

    await transporter.sendMail({
        from: 'norepy@example.com',
        to: email,
        subject: subject,
        html: templeteName
    });

    console.log('Email sent');
}

const createSendGridTransporter = () => {
    return nodemailer.createTransport({
        service: 'SendGrid',
        auth: {
            user: process.env.SENDGRID_USERNAME,
            pass: process.env.SENDGRID_PASSWORD
        }
    });
}

const createTestTransporter = () => {
    return nodemailer.createTransport({
        host: 'smtp.mailtrap.io',
        port: 587,
        auth: {
            user: process.env.MAILTRAP_USER,
            pass: process.env.MAILTRAP_PASSWORD
        }
    });
}