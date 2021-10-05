module.exports = (sequelize, DataTypes) => {
	const Registered = sequelize.define('Registered', {
		firstname: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		lastname: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		phone: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		handicap: {
			type: DataTypes.INTEGER,
			allowNull: true,
		},
	})

	return Registered
}
