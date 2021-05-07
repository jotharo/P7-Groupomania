module.exports = (sequelize, DataTypes) => {
    const userLikes = sequelize.define('userLikes', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        userId: {
            allowNull: false,
            type: DataTypes.INTEGER,
            field: 'user_id'
        },
        postId: {
            allowNull: false,
            type: DataTypes.INTEGER,
            field: 'post_id'
        }
    }, {
        tableName: "user_likes",
        timestamps: true,
        freezeTableName: true
    })

    userLikes.associate = function (models) {
        userLikes.belongsTo(models.user, { foreignKey: 'userId' })
        userLikes.belongsTo(models.post, { foreignKey: 'postId' })
    }


    return userLikes
}
