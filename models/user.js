module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    email: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING
    },
    firstName: {
      allowNull: false,
      type: DataTypes.STRING,
      field: 'first_name'
    },
    lastName: {
      allowNull: false,
      type: DataTypes.STRING,
      field: 'last_name'
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING
    },
    profilPicture: {
      allowNull: true,
      type: DataTypes.TEXT,
      field: 'profil_picture'
    },
  }, {
    timestamps: true,
    freezeTableName: true
  })

  user.associate = function(models) {
    user.hasMany(models.post, {foreignKey: 'writerId'})
    user.belongsToMany(models.post, {
      through: models.userLikes,
      as: 'likes'
    })
  }

  return user
}
