const nodemailer= require("nodemailer")

const sendEmail = async options =>{
    const transport = nodemailer.createTransport({
        host: "smtp.office365.com",
        port: 587,
        auth: {
          user: "GalleryShop-@outlook.com",
          pass: "9f79e9cf666c8c"
        }
      });
    const mensaje={
        from: "GalleryShop store <GalleryShop-@outlook.com>",
        to: options.email,
        subject: options.subject,
        text: options.mensaje
    }

    await transport.sendMail(mensaje)
}

module.exports= sendEmail;