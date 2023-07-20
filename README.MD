# n-sftp

[![npm][npm-image]][npm-url]
[![MIT License][mit-license-image]][mit-license-url]

[npm-url]: https://www.npmjs.com/package/n-sftp
[npm-image]: https://img.shields.io/npm/v/n-sftp.svg?label=npm%20version
[mit-license-url]: LICENSE
[mit-license-image]: https://camo.githubusercontent.com/d59450139b6d354f15a2252a47b457bb2cc43828/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f6c2f7365727665726c6573732e737667




## About

node version sftp cli tool, can upload or download file from the sftp server.

## Installation

`npm install -g n-sftp`

## Usage

### setting
```bash
n-sftp user:password ip:port
```

### upload file
```bash
n-sftp u localFilename remoteFilename
```

### download file
```bash
n-sftp d remoteFilename localFilename
```

