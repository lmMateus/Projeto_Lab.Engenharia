// const nodemailer = require('nodemailer');
import nodemailer from 'nodemailer'
export const sendEmail = (req, res) => {
  const destinatario = req.params.destinatario;
  const texto = req.params.texto;
  sendEmailF(destinatario, texto, (err,results)=>{
    if(err){
      res.send(err);
    }else{
      res.json(results);
      console.log("Email enviado")
    }
  });
}

function sendEmailF(destinatario, texto) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'napiercapital.auth@gmail.com',
      pass: '@Napier123'
    }
  });

  const mailOptions = {
    from: 'napiercapital.auth@gmail.com',
    to: destinatario,
    subject: 'Código de recuperação de senha!',
    text: texto
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Erro ao enviar e-mail:', error);
    } else {
      console.log('E-mail enviado:', info.response);
    }
  });
}

