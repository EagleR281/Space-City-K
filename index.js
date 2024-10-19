const express = require('express');
const axios = require('axios');
const app = express();

const clientId = '1297022825735000124';
const clientSecret = 'il5YXW155Ok7c-7ybrjP5vpz96GUT0Jz';
const redirectUri = 'https://discord.com/oauth2/authorize?client_id=1297022825735000124&response_type=code&redirect_uri=http%3A%2F%2F127.0.0.1%3A5501%2Fapply.html%3Ferror%3Daccess_denied%26error_description%3DThe%2Bresource%2Bowner%2Bor%2Bauthorization%2Bserver%2Bdenied%2Bthe%2Brequest&scope=identify';

app.get('/callback', async (req, res) => {
    const code = req.query.code;
    if (!code) {
        return res.status(400).send('No code provided');
    }

    try {
        // تبادل الرمز مع الوصول إلى التوكن
        const tokenResponse = await axios.post(
            'https://discord.com/api/oauth2/token',
            new URLSearchParams({
                client_id: clientId,
                client_secret: clientSecret,
                grant_type: 'authorization_code',
                code: code,
                redirect_uri: redirectUri,
            }),
            {
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            }
        );

        const accessToken = tokenResponse.data.access_token;

        // الحصول على معلومات المستخدم
        const userResponse = await axios.get('https://discord.com/api/users/@me', {
            headers: { Authorization: `Bearer ${accessToken}` },
        });

        const user = userResponse.data;
        res.send(`مرحبًا ${user.username}, لقد تم الربط بنجاح!`);
    } catch (error) {
        console.error(error);
        res.status(500).send('حدث خطأ أثناء الربط');
    }
});

app.listen(3000, () => console.log('الخادم يعمل على المنفذ 3000'));
