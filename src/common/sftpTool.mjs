// SftpTool
import Client from 'ssh2-sftp-client'

/**
 * sftpTool tool
 */
export class SftpTool {
  /**
   * {host: ip, port: 22, username: name, password: pwd}
   * @param {Object} config
   */
  constructor(config) {
    this.config = config
  }

  /**
   * upload data
   * @param {object} data filePath | buffer | readable stream
   * @param {sring} remotePath
   */
  uploadData(data, remotePath) {
    return new Promise((resolve, reject) => {
      const sftp = new Client()
      sftp
        .connect(this.config)
        .then(() => sftp.put(data, remotePath))
        .then(() => {
          sftp.end()
          console.log(`upload ${remotePath} success`)
          resolve()
        })
        .catch((err) => {
          sftp.end()
          console.log(`upload ${remotePath} fail`)
          reject(err)
        })
    })
  }

  /**
   * upload local file
   * @param {string} localPath local file path
   * @param {string} remotePath
   */
  uploadFile(localPath, remotePath) {
    return new Promise((resolve, reject) => {
      const sftp = new Client()
      sftp
        .connect(this.config)
        .then(() => sftp.fastPut(localPath, remotePath))
        .then(() => {
          sftp.end()
          console.log(`upload ${remotePath} success`)
          resolve()
        })
        .catch((err) => {
          sftp.end()
          console.log(`upload ${remotePath} fail`)
          reject(err)
        })
    })
  }

  downloadFile(remotePath, localPath) {
    return new Promise((resolve, reject) => {
      const sftp = new Client()
      sftp
        .connect(this.config)
        .then(() => sftp.fastGet(remotePath, localPath))
        .then(() => {
          sftp.end()
          console.log(`download ${remotePath} success`)
          resolve()
        })
        .catch((err) => {
          sftp.end()
          console.log(`download ${remotePath} fail`)
          reject(err)
        })
    })
  }
}
