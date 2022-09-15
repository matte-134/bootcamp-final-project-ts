import { DataTypes, Model, Optional, UUIDV4} from 'sequelize'
import { db } from '.'

interface CustomerAttributes {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
}

interface CustomerCreationAttributes extends Optional<CustomerAttributes, 'id'> {}

interface CustomerInstance extends Model <CustomerAttributes, CustomerCreationAttributes>,
    CustomerAttributes {
        createdAt?: Date;
        updatedAt?: Date;
    }
// let id: number = Math.floor(Math.random() * 100000)
const Customer = db.define<CustomerInstance>(
    'Customer',
    {
        id: {
            allowNull: false,
            autoIncrement: false, 
            primaryKey: true,
            type: DataTypes.UUID,
            unique: true,
            defaultValue: UUIDV4
        },
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
        }
    }
)

export default Customer