import { DatabaseError, DataTypes, Model, Optional} from 'sequelize'
import { db } from '.'

interface EmployeeAttributes {
    firstName: string;
    lastName: string;
    email: string;
    userID: string;
    password: string;
}

// interface EmployeeCreationAttributes extends Optional<EmployeeAttributes, 'id'> {}

interface EmployeeInstance extends Model <EmployeeAttributes>,
    EmployeeAttributes {
        createdAt?: Date;
        updatedAt?: Date;
    }

const Employee = db.define<EmployeeInstance>(
    'Employee',
    {
        firstName: {
            allowNull: false, 
            type: DataTypes.TEXT,
        },
        lastName: {
            allowNull: false, 
            type: DataTypes.TEXT,
        },
        email: {
            allowNull: false, 
            type: DataTypes.TEXT,
        },
        userID: {
            allowNull: false,
            type: DataTypes.TEXT,
        },
        password: {
            allowNull: false, 
            type: DataTypes.TEXT,
        }
    }
)

export default Employee