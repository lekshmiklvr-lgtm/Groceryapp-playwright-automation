class Manageuser
{

    constructor(page)
    {
        this.page=page;

        this.home=page.getByRole('link',{name:'Home'});

        this.manage=page.locator(".small-box-footer");

        this.searchbtn=page.locator(".btn.btn-rounded.btn-primary");

        this.name=page.locator('#un');

        this.find=page.locator(".btn.btn-block-sm.btn-danger");

    }

            async gotomodule()
                {
                        await this.home.click();
        
                        await this.manage.nth(8).click();

                }

            async search(name)

                {
                        await this.gotomodule();

                        await this.searchbtn.click();

                        await this.name.fill(name);

                        await this.find.click();
                }

            async status(name)
                {

                        await this.search(name);

                        const row=this.page.locator("tr").filter({hasText:name}).first();

                        await row.locator('.badge.bg-success').click();

                }
}

module.exports=Manageuser;