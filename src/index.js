const express = require('express');

const { ServerConfig } = require('./config');
const apiRoutes = require('./routes');
const mailSender = require('./config/email-config');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:  true}));

app.use('/api', apiRoutes);

app.listen(ServerConfig.PORT, async() => {
    console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);

    try {
        const response = await mailSender.sendMail({
            from: "omgudadhe162162@gmail.com",
            to: "cj132132@gmail.com",
            subject: "Node mailer check",
            text: "Yeah! it's working"
        })

        console.log(response);
    } catch (error) {
        console.log(error);
    }
});
