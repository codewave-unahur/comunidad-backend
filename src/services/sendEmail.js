const nodemailer = require('nodemailer');

export const sendMail = async (email, userData, templateName) => {
    let transporter;

    // Verificar el entorno
    if(process.env.NODE_ENV === 'production'){
        transporter = createSendGridTransporter();
    } else {
        transporter = createTestTransporter();
    }

    // Contenido HTML del correo electrónico (ejemplo)
    const htmlContent = `<p>Bienvenido ${userData.name} a la plataforma.</p>`;

    // Envío del correo electrónico
    await transporter.sendMail({
        from: 'noreply@example.com', // Dirección de correo electrónico del remitente
        to: email,
        subject: 'Bienvenido a la plataforma',
        html: htmlContent,
    });

    console.log('Correo electrónico enviado exitosamente');
};

const createTestTransporter = nodemailer.createTransport({
    host: 'smtp.mailtrap.io',
    port: 2525,
    auth: {
        user: process.env.MAILTRAP_USER,
        pass: process.env.MAILTRAP_PASSWORD
    }
})

const createSendGridTransporter = nodemailer.createTransport({
    service: 'SendGrid',
    auth: {
        user: process.env.SENDGRID_USER,
        pass: process.env.SENDGRID_PASSWORD
    }
})