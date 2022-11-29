<template>
    <div>
        {{ products }}
        <DataTable :value="products" responsiveLayout="scroll">
            <DataColumn field="id" header="Code"></DataColumn>
            <DataColumn field="name" header="Name"></DataColumn>
            <DataColumn field="year" header="Category"></DataColumn>
            <DataColumn field="color" header="Quantity"></DataColumn>
        </DataTable>
    </div>
</template>

<script>
// import { $fetch } from 'ohmyfetch'
// export default {
//     setup() {},
//     data() {
//         return {
//             products : []
//         }
//     },
//     mounted() {
//         this.loadProducts()
//     },
//     methods: {
//         async loadProducts() {
//             const res = await $fetch('https://reqres.in/api/user')
//             if(res && res.data) {
//                 this.products = res.data
//             }
//         }
//     }
// }  
export default{
    data() {
    return {
        products:[]
    }
},
mounted() {
    this.fetchProduct();
},
methods: {
     fetchProduct(){
        return  fetch('https://reqres.in/api/user').then(res=>res.json()).then(data=>this.products=data.data);
    }
},
}

</script>