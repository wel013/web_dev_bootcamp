import inquirer from 'inquirer'
import fs from 'fs'
import qr from 'qr-image'


inquirer
    .prompt([
        //js object
        {
            name: 'input',
            message: 'please enter a url'
        },
    ])
    .then((answers) => {
        // console.log(answers)
        var ans = answers.input
        fs.writeFile('userinput.txt', ans, function (err) {
            if (err) throw err;
            console.log('Saved!');

        });
        var qr_svg = qr.image(ans, { type: 'png' });
        qr_svg.pipe(fs.createWriteStream('userqr.png'));
        qr_svg.on('end', function () {
            console.log('QR code image saved!');
        });

        qr_svg.on('error', function (err) {
            throw err;
        });

    })



