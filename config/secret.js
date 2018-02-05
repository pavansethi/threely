module.exports = {

  database: process.env.DATABASE || 'mongodb://root:tiger216@ds157987.mlab.com:57987/fiverrdatabase',
  port: process.env.PORT || 3000,
  secret: process.env.SECRET || 'fiverrclone',

}
