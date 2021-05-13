module.exports = {
  dialect: 'sqlite',
  storage: './src/storage/database.sqlite',
  define: {
    timestamps: true,
    underscored: true,
  },
};