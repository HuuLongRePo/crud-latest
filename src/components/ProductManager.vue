<template>
<div>
    <AppButton label="Create" @click="createProduct()"></AppButton>
    <DataTable :value="products" responsiveLayout="scroll">
        <DataColumn field="name" header="Name"></DataColumn>
        <DataColumn field="price" header="Price"></DataColumn>
        <DataColumn field="description" header="Description"></DataColumn>
        <DataColumn :exportable="false" style="min-width:8rem">
            <template #body="slotProps">
                <AppButton icon="pi pi-pencil" class="p-button-rounded p-button-success mr-2" @click="editProduct(slotProps.data)" />
                <AppButton icon="pi pi-trash" class="p-button-rounded p-button-warning" @click="confirmDeleteProduct(slotProps.data)" />
            </template>
        </DataColumn>
    </DataTable>
    <ProductDialog :modal="true" :header="changeheader" :visible="displaydialog" @update:visible="hideHandler">
        <form action="" :class="showForm">
            <div class="field">
                <label for="name">Name</label>
                <InputText id="name" required="true" v-model="product.name" autofocus />
            </div>
            <div class="field">
                <label for="price">Price</label>
                <InputText id="price" required="true" v-model="product.price" mode="currency" currency="VND" locale="vi-VN" autofocus />
            </div>
            <div class="field">
                <label for="description">Description</label>
                <AppTextarea id="description" v-model="product.description" required="true" rows="3" cols="25" />
            </div>
        </form>
        <template #footer>
            <AppButton label="No" icon="pi pi-times" class="p-button-text" @click="hideDialog()" />
            <AppButton label="Yes" icon="pi pi-check" autofocus @click="runFunction()" />
        </template>
    </ProductDialog>
    <ConfirmDialog>

    </ConfirmDialog>
</div>
</template>

<script>
export default {
    data() {
        return {
            products: [],
            product: {},
            changeheader: '',
            displaydialog: false,
            isEdit: false,
            showForm: false,
            displayDeleteDialog: false,
            linkFetch: `${process.env.URL_REST_API}/api/v1/products`,
            ProductUpdate: {}
        }
    },
    created() {
        // this.fetchProduct();
    },
    mounted() {
        this.fetchProduct();
    },
    methods: {
        hideHandler(value) {
            if (!value) {
                this.displaydialog = false;
            }
        },
        fetchProduct() {
            fetch(this.linkFetch).then(res => res.json()).then(data => this.products = data).catch(error => {
                console.error(error);
            });
            console.log(this.products);
        },
        createProduct() {
            this.product = {};
            this.isEdit = false;
            this.changeheader = "Create Product";
            this.displaydialog = true;

        },
        hideDialog() {
            this.displaydialog = false;
        },
        async createProductAPI() {
            await fetch(this.linkFetch, { //v1/products
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8',
                },
                body: JSON.stringify(this.product)
            }).catch(error => {
                console.error(error)
            });
            await this.hideDialog();
            await this.fetchProduct();
        },
        async updateProductAPI(data) {
            await fetch(`${this.linkFetch}/${data.id}`, { //v1/products
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8',
                },
                body: JSON.stringify(this.product)
            }).catch(error => {
                console.error(error)
            });
            await this.hideDialog();
            await this.fetchProduct();
        },
        async deleteProductAPI(data) {
            await fetch(`${this.linkFetch}/${data.id}`, { //v1/products
                method: 'DELETE'
            }).catch(error => {
                console.error(error)
            });
            await this.fetchProduct();
        },
        runFunction() {
            if (this.isEdit) {
                this.updateProductAPI(this.product)
            } else {
                this.createProductAPI();
            }

        },
        confirmDeleteProduct(data) {
            console.log(data.id);
            this.displayDeleteDialog = true;
            this.$confirm.require({
                message: 'Are you sure you want to proceed?',
                header: 'Confirm Delete Product',
                icon: 'pi pi-exclamation-triangle',
                accept: () => {
                    //callback to execute when user confirms the action
                    this.deleteProductAPI(data);
                },
                reject: () => {
                    //callback to execute when user rejects the action
                },
                onShow: () => {
                    //callback to execute when dialog is shown
                },
                onHide: () => {
                    //callback to execute when dialog is hidden
                }
            });
        },
        editProduct(data) {
            this.product = Object.assign({}, data);
            this.displaydialog = true;
            this.changeheader = "Edit Product";
            this.isEdit = true;
            // this.ProductUpdate = data;
        },

    },
}
</script>
