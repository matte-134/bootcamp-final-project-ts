import { DataTypes, Model, Optional, UUIDV4} from 'sequelize'
import { db } from '.'

interface CustomerAttributes {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    partyNumber: number;
    waiting: boolean;
    createdAt: Date;
    updatedAt: Date
}

interface CustomerCreationAttributes extends Optional<CustomerAttributes, 'id'> {}

interface CustomerInstance extends Model <CustomerAttributes, CustomerCreationAttributes>,
    CustomerAttributes {
        createdAt: Date;
        updatedAt: Date;
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
            type: DataTypes.INTEGER,
        },
        waiting: {
            allowNull: false,
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
        createdAt: {
            get(this: CustomerInstance): string {
                var date = new Date(this.getDataValue('createdAt'))
                return date.toLocaleTimeString()
            },
            type: DataTypes.DATE,
        },
        updatedAt: {
            get(this: CustomerInstance): string {
                var date = new Date(this.getDataValue('updatedAt'))
                return date.toLocaleTimeString()
            },
            type: DataTypes.DATE,
        }
    }
)

export default Customer