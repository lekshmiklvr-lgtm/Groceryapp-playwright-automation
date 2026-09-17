class Dashboard
{
    constructor(page)
    {
        this.page=page;
        this.manage=page.locator(".small-box-footer");
        this.dash=page.getByText('Dashboard');
        //this.add=page.locator(".btn.btn-rounded.btn-danger");

    }

    async openmanageProduct()
    {
        
        await this.manage.nth(3).click();
       
    }
    async openmanagepage()
    {
        await this.manage.nth(0).click();
    }
    async openadminusers()
    {
        await this.manage.nth(1).click();
        
    }
    async opencategory()
    {
        await this.manage.nth(2).click();
    }
    async opendeliveryboy()
    {
        await this.manage.nth(7).click();
    }

    async openoffercode()
    {
        await this.manage.nth(4).click();
    }

}
module.exports=Dashboard;