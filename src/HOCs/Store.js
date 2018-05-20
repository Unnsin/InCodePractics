import Data from '../clients.json';
const IsIncludes = -1;
var Store = {
    _handlers: [],
    _flag: '',
    Data,
    onChange: function(handler) {
        this._handlers.push(handler);
    },
    set: function(value) {
        this._flag = value;
        this._handlers.forEach(handler => handler());
    },
    GetData: function() {
        return this.Data;
    },
    GetUser: function(id){
        return this.Data.find((el)=>{
            return el.address.zipCode === id; 
        });
    },
    CreateUser:function(User){  
        this.Data = [...this.Data,User];
    },
    DeleteUser:function(User){
        this.Data = this.Data.filter((item)=>{
            return item.address.zipCode !== User;
        });
        return this.Data;
    },
    UpdateUser:function(User){
        this.Data = this.Data.map((item)=>{
            if(item.address.zipCode === User.address.zipCode){
                item = User;
            }
            return item;
        });
        return this.Data;
    },
    Search:function(string){
        return this.Data.filter((item)=>{
            return item.general.firstName.toLowerCase().indexOf(string.toLowerCase())>IsIncludes;
        }); 
    }
};

export default Store;