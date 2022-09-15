import { DataTypes, Model, Optional} from 'sequelize'
import { db } from '.'
import Customer from './customer'

interface TablesAttributes {
    tableNumber: number;
    capacity: number;
    occupied: boolean;
}

export interface TablesInterface extends Model <TablesAttributes>,
    TablesAttributes {
        updatedAt?: Date;
    }

const Tables = db.define<TablesInterface>(
    'Tables',
    {
        tableNumber: {
            allowNull: false,
            autoIncrement: false, 
            primaryKey: true,
            type: DataTypes.NUMBER,
            unique: true,
        },
        capacity: {
            allowNull: false, 
            type: DataTypes.NUMBER,
        },
        occupied: {
            defaultValue: false,
            type: DataTypes.BOOLEAN,
        }
    }
)

Customer.hasOne(Tables)
Tables.belongsTo(Customer)


export default Tables