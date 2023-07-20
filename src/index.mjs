#!/usr/bin/env node
// import chalk from 'chalk'
//
// console.clear()
// const logo =
//   '██╗  ██╗██████╗ ██╗   ██╗               ██████╗██╗     ██╗\n' +
//   '██║  ██║██╔══██╗╚██╗ ██╔╝              ██╔════╝██║     ██║\n' +
//   '███████║██████╔╝ ╚████╔╝     █████╗    ██║     ██║     ██║\n' +
//   '██╔══██║██╔══██╗  ╚██╔╝      ╚════╝    ██║     ██║     ██║\n' +
//   '██║  ██║██████╔╝   ██║                 ╚██████╗███████╗██║\n' +
//   '╚═╝  ╚═╝╚═════╝    ╚═╝                  ╚═════╝╚══════╝╚═╝\n' +
//   '                                                          \n'
// console.log(chalk.yellowBright(logo))

import {SftpTool} from './common/sftpTool.mjs'
import fs from "fs";
// user:password ip:port
// cdpsftp:FGef#@56!000 10.81.40.10:22
function setConfig(argv) {
    const cfg = {
        host: argv[4].split(':')[0],
        port: argv[4].split(':')[1],
        username: argv[3].split(':')[0],
        password: argv[3].split(':')[1]
    }
    fs.writeFileSync('setting', JSON.stringify(cfg))
}

function getConfig() {
    if (fs.existsSync('setting')) {
        console.log('setting exists')
        const data = fs.readFileSync('setting', 'utf-8')
        return JSON.parse(data)
    } else {
        console.log(
            'Please set the config first like below:\nn-sftp set [user]:[password] [ip]:[port]'
        )
        return null
    }
}

if (process.argv[2] === 's' || process.argv[2] === 'set') {
    console.log('setting was saved')
    setConfig(process.argv)
}
if (process.argv[2] !== 's' && process.argv[2] !== 'set' && process.argv[3] && process.argv[4]) {
    const config = getConfig()
    const sftpTool = new SftpTool(config)
    const url = process.argv[3]
    const filename = process.argv[4] || url.match(/\/([^\\/?#]+)$/i)[1]
    switch (process.argv[2]) {
        case 'u':
        case 'up':
        case 'upload':
            sftpTool.uploadFile(url, filename)
            break
        case 'd':
        case 'down':
        case 'download':
            sftpTool.downloadFile(process.argv[3], filename)
            break
    }
}


