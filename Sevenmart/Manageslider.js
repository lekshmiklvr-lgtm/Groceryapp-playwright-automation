class Manageslider
{
    constructor(page)
    {
        this.page=page;

        this.manage=page.locator(".small-box-footer");

        this.addnew=page.locator(".btn.btn-rounded.btn-danger");

        this.photo=page.locator('#main_img');

        this.link=page.locator('#link');

        this.save=page.getByRole('button',{name:'Save'});
    }

            async newslider(path,link)
                    {
                            await this.manage.nth(6).click();

                            await this.addnew.click();

                            await this.photo.setInputFiles(path);

                            await this.link.fill(link);

                            await this.save.click();
                    }


}

module.exports=Manageslider;