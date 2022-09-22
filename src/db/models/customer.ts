import { DataTypes, Model, Optional, UUIDV4} from 'sequelize'
import { db } from '.'

interface CustomerAttributes {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    partyNumber: number;
    waiting: boolean
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
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER,
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
        },
        partyNumber: {
            allowNull: false,
            type: DataTypes.INTEGER
        },
        waiting: {
            allowNull: false,
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }
    }
)

export default Customer