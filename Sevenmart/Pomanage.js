const Adminusers = require("./Adminusers");
const Category = require("./Category");
const Dashboard = require("./Dashboard");
const Login = require("./Login");
const Managedeliveryboy = require("./Managedeliveryboy");
const ManageOrder = require("./ManageOrder");
const ManagePage = require("./ManagePage");
const Manageproduct = require("./Manageproduct");
const Manageslider = require("./Manageslider");
const Manageuser = require("./Manageuser");
const Offercode = require("./Offercode");
const Verifyuser = require("./verifyuser");

class Pomanage
{
    constructor(page)
    {
        this.page=page;

        this.login=new Login(page);

        this.home=new Dashboard(page);

        this.manage=new Manageproduct(page);

        this.managepage=new ManagePage(page);

        this.catgry=new Category(page);

        this.users=new Adminusers(page);

        this.db=new Managedeliveryboy(page);

        this.offer=new Offercode(page);

        this.slider=new Manageslider(page);

        this.verify=new Verifyuser(page);

        this.manageuser=new Manageuser(page);

        this.manageorder=new ManageOrder(page);

    }


            getLogin()
                {
                        return this.login;
                
                }

            getManage()
                {
                        return this.manage;
                }
    
            getManagepages()
                {
                        return this.managepage;
                }

            getCategory()
                {
                        return this.catgry;
                }
    
            getusers()
                {
                         return this.users;
                }
    
            getdeliveryboy()
                {
                        return this.db;
                }

            getoffercode()
            {

                        return this.offer;
            }

            getslider()
            {
                        return this.slider;
            }


            getverify()
            {

                        return this.verify;
            }

             getmanageuser()
            {

                        return this.manageuser;
            }

            getorder()
            {
                        return this.manageorder;
            }

}
module.exports=Pomanage;