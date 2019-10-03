const {google} = require('googleapis');
const keys = require('./src/config/keys.json');
const user = require('./src/controllers').user;

const client = new google.auth.JWT(
    keys.client_email,
    null,
    keys.private_key,
    ['https://www.googleapis.com/auth/spreadsheets']
);

async function gsrun(cl, user) {
    const gsapi = google.sheets({version: 'v4', auth: cl});
        let vals = [];
        vals.push(user.name);
        vals.push(user.email);
        vals.push(user.mobile);
        vals.push(user.university);
        vals.push(user.faculty);
        vals.push(user.grad_year);
        vals.push(user.workshop);
        vals.push(user.why);
        vals.push(user.notes);
        console.log(vals);
        const opt = {
            spreadsheetId: '1MtmZmLyN9uXf2F87HgMe7ZU0cn3Zp_u6x4Gb7gW4KWE',
            range: 'Data!A2:I',
            valueInputOption: 'USER_ENTERED',
            resource: { values: [vals] }
        };
        await gsapi.spreadsheets.values.append(opt).then(res => {
            console.log(res)
        }).catch(err => console.log(err.errors));
}

exports.sendUser = (user) => {
    client.authorize((err, tokens) => {
        if(err) {
            console.log(err);
            return;
        }
        console.log('Connected to Google API!');
        gsrun(client, user);
    });
}